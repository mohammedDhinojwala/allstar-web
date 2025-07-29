import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useInView } from 'framer-motion';

// Component for letter-by-letter animation
const AnimatedLetters = ({ text, className }) => {
  return (
    <span className={className}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: i * 0.03,
            duration: 0.4,
            ease: [0.16, 0.77, 0.47, 0.97]
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};

function About() {
  const [expandedItem, setExpandedItem] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  
  // Refs for viewport detection
  const whoAmIRef = useRef(null);
  const whatIDoRef = useRef(null);
  const hoverImageRef = useRef(null);
  
  // Viewport visibility
  const isWhoAmIInView = useInView(whoAmIRef, { once: true, margin: "-100px" });
  const isWhatIDoInView = useInView(whatIDoRef, { once: true, margin: "-100px" });

  // Motion values for hover effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);
  const opacity = useTransform(mouseY, [-100, 0, 100], [0, 1, 0]);
  const scale = useTransform(mouseX, [-100, 0, 100], [0.9, 1, 0.9]);

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Building responsive, performant websites with modern frameworks like React and Next.js. Focus on clean code and user experience.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Web Design",
      description: "Creating visually stunning interfaces with attention to typography, color theory, and user interaction patterns.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "SEO Optimization",
      description: "Improving search visibility through technical optimizations, content strategy, and performance enhancements.",
      image: "https://images.unsplash.com/photo-1607748851687-ba9a10438621?w=500&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Brand Identity",
      description: "Developing cohesive brand systems including logos, color palettes, and visual language that communicate your values.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&auto=format&fit=crop"
    }
  ];

  const textLines = [
    "I'm just another Visual Designer who loves minimalism",
    "and white spaces. What makes my work special is my",
    "focus on empathy—understanding people, their needs,",
    "and how design can create real connections.",
    "I help brands find clarity and character through thoughtful",
    "design. My approach blends strategy with distinctive",
    "details, ensuring each project feels both intentional and",
    "timeless."
  ];

  const handleHoverMove = (e) => {
    if (!hoverImageRef.current) return;
    
    const rect = hoverImageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
    setIsHovering(true);
  };

  const handleHoverEnd = () => {
    setIsHovering(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const toggleItem = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <div className=" aboutMain !p-4">
      {/* WhoAmI section with hover effects */}
      <div 
        ref={whoAmIRef}
        className="whoAmI w-full h-screen flex flex-col justify-center items-center relative px-4 lg:px-20"
        onMouseMove={handleHoverMove}
        onMouseLeave={handleHoverEnd}
      >
        {/* Hover image with 3D rotation */}
        <AnimatePresence>
          {isHovering && (
            <motion.div
              ref={hoverImageRef}
              className="absolute pointer-events-none w-64 h-64 overflow-hidden z-0"
              style={{
                left: '50%',
                top: '50%',
                x: '-50%',
                y: '-50%',
                rotateX,
                rotateY,
                opacity,
                scale,
                transformPerspective: 1000,
                transformStyle: "preserve-3d"
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1,
                scale: 1,
                transition: { 
                  type: 'spring', 
                  stiffness: 300, 
                  damping: 20,
                  mass: 0.5
                }
              }}
              exit={{ 
                opacity: 0,
                transition: { duration: 0.3 }
              }}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&auto=format&fit=crop" 
                className="w-full h-full object-cover rounded-lg shadow-xl"
                alt="Hover reveal"
                style={{
                  transformStyle: "preserve-3d"
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Animated title */}
        <div className="whoAmIQue  text-center lg:text-left text-lg lg:text-2xl font-semibold lg:absolute lg:left-10 lg:top-1/2 lg:-translate-y-1/2 z-10">
          {isWhoAmIInView && <AnimatedLetters text="Who is Luzía" />}
        </div>

        {/* Animated text lines */}
        <div className="WhoAmITextBox max-w-xl z-10">
          {isWhoAmIInView && textLines.map((line, index) => (
            <p key={index} className='text-center lg:text-left text-sm lg:text-xl mb-4'>
              <AnimatedLetters text={line} />
            </p>
          ))}
        </div>
      </div>

      {/* What I Do section */}
      <div ref={whatIDoRef} className="whatIDo-mobile lg:!px-20">
        {isWhatIDoInView && (
          <>
            <h2 className="whatIDo-heading text-3xl font-bold mb-12 text-center">
              <AnimatedLetters text="What I Do" />
            </h2>
            
            <div className=" whatIDo-body !space-y-6 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <motion.div 
                  key={service.id}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    delay: index * 0.2,
                    duration: 0.6, 
                    ease: "easeOut"
                  }}
                >
                  <div className="whatIDo-body-indivisual  border-b border-gray-200 !pb-6">
                    {/* Animated border */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ 
                        delay: 0.3 + (index * 0.2),
                        duration: 0.8,
                        ease: "easeOut"
                      }}
                      style={{ originX: 0 }}
                      className=" border-t border-gray-200 absolute bottom-0 left-0 right-0"
                    />
                    
                    <div 
                      className="whatIDo-indiv-heading-main  cursor-pointer !py-2 !px-4 rounded-lg hover:bg-gray-50 transition-colors"
                      onClick={() => toggleItem(service.id)}
                    >
                      <h3 className="whatIDo-indiv-heading text-xl font-semibold">
                        <AnimatedLetters text={service.title} />
                      </h3>
                    </div>

                    <AnimatePresence>
                      {expandedItem === service.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="whatIDo-indiv-inner flex flex-col md:flex-row gap-8 !p-6">
                            <div className="md:w-1/2">
                              <p className="text-gray-700 leading-relaxed">
                                <AnimatedLetters text={service.description} />
                              </p>
                            </div>
                            <motion.div 
                              className="md:w-1/2"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.4 }}
                            >
                              <img 
                                src={service.image} 
                                alt={service.title}
                                className="w-full h-56 object-cover !rounded-lg !shadow-md"
                              />
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default About;