import React, { useEffect, useRef, useState } from 'react';
import { color, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Herocarousel from '../Herocarousel';

import img6 from '../../../src/assets/images/img6.jpg'
import Planetglass2 from '../../../src/assets/images/planetglass2.jpg'
import Planetglass3 from '../../../src/assets/images/planetglass3.jpg'
import Planetglass4 from '../../../src/assets/images/planetglass4.jpg'
import Planetglass5 from '../../../src/assets/images/planetglass5.jpg'
import Planetglass6 from '../../../src/assets/images/planetglass6.jpg'



// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function Planetglass() {
  const navigate = useNavigate();
  const [transitionComplete, setTransitionComplete] = useState(false);
  const [transitionOrigin, setTransitionOrigin] = useState({});
  const containerRef = useRef(null);
  const horizontalContainerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  const images = [
    { id: 1, image:img6, },
    { id: 2, image:Planetglass2, },
    { id: 3, image:Planetglass3,  },
    { id: 4, image:Planetglass4,  },
    { id: 5, image:Planetglass5,  },
    { id: 6, image:Planetglass6,}
  ];

  useEffect(() => {
    setIsMounted(true);
    
    const storedOrigin = localStorage.getItem('transitionOrigin');
    if (storedOrigin) {
      try {
        setTransitionOrigin(JSON.parse(storedOrigin));
      } catch (e) {
        console.error("Failed to parse transitionOrigin", e);
      }
    }

    const timer = setTimeout(() => setTransitionComplete(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isMounted || !horizontalContainerRef.current) return;

    // Initialize GSAP horizontal scroll with mobile responsiveness
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".horizontal-image-section");
      const isMobile = window.innerWidth < 768;
      
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: horizontalContainerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => `+=${isMobile ? horizontalContainerRef.current.offsetWidth * 0.8 : horizontalContainerRef.current.offsetWidth}`,
          onEnter: () => {
            if (isMobile) document.body.style.overflowY = 'hidden';
          },
          onLeaveBack: () => {
            document.body.style.overflowY = 'auto';
          }
        }
      });
    }, containerRef);

    return () => {
      ctx.revert();
      document.body.style.overflowY = 'auto';
    };
  }, [isMounted]);

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      {/* Transition animation and content layout */}
      <div className="planetglass-page h-screen w-full overflow-hidden bg-white-400">
        {/* Transition animation (unchanged) */}
        {!transitionComplete && transitionOrigin.x && (
          <motion.div
            className="fixed z-50 overflow-hidden rounded-md"
            initial={{
              x: transitionOrigin.x,
              y: transitionOrigin.y,
              width: transitionOrigin.width,
              height: transitionOrigin.height,
              scale: 0.3,
              opacity: 0
            }}
            animate={{
              x: '75vw',
              y: '50vh',
              width: '40vw',
              height: '40vw',
              scale: 1,
              opacity: 1
            }}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1],
              scale: { duration: 0.6 }
            }}
            style={{
              originX: 0,
              originY: 0,
              zIndex: 9999
            }}
            onAnimationComplete={() => {
              localStorage.removeItem('transitionOrigin');
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&auto=format&fit=crop" 
              alt="Planet Glass"
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}

        {/* Content layout with mobile responsiveness */}
        <div className="project-main   mx-auto h-full flex flex-col md:flex-row md:bg !p-2 md:!p-0 !mb-50">
          {/* Left side - Project details (mobile: bottom) */}
          <motion.div 
            className="project-discription-main  w-full md:w-1/2 bg-red !p-6 md:!p-12 flex flex-col justify-center order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="project-year  !text-[0.8rem] md:!text-[1rem] !mb-3">2025</p>
            <h1 className="project-heading  !text-[2rem] md:!text-[3rem] font-extralight !mb-5 md:!mb-3">PLANET GLASS</h1>
            <p className="project-discription w-full md:w-[50%] !text-[0.8rem] md:!text-[0.9rem] !mb-2">
              A contemporary glass art studio specializing in bespoke installations for luxury residential and commercial spaces. Our team of master artisans combines traditional techniques with cutting-edge technology to create stunning, one-of-a-kind glass pieces that transform spaces and inspire awe. From delicate glass sculptures to large-scale architectural installations, we bring visions to life with precision and artistry.
            </p>
            
            <div className="project-service-main  md:!mb-12">
              <div className="flex flex-wrap gap-4 w-full md:w-[50%] !p-2">
                <span className="services !px-2 !py-1 md:!px-2.5 md:!py-1 rounded-xl !text-[0.7rem] md:!text-[0.9rem] bg-emerald-400">Web dev</span>
                <span className="services  !px-2 !py-1 md:!px-2.5 md:!py-1 bg-purple-400 rounded-xl !text-[0.8rem] md:!text-[0.9rem]  ">Brand design</span>
                <span className="services  !px-2 !py-1 md:!px-2.5 md:!py-1 bg-gray-400 rounded-xl !text-[0.8rem] md:!text-[0.9rem]  ">web design</span>
                <span className="services !px-2 !py-1 md:!px-2.5 md:!py-1 bg-sky-400 rounded-xl !text-[0.8rem] md:!text-[0.9rem]  ">seo</span>
              </div>
            </div>

            {/* <button 
              onClick={() => navigate(-1)}
              className="back-btn  self-start !px-4 !py-2 md:!px-6 md:!py-3 border md:border border-black rounded-full hover:bg-black hover:text-white transition-colors !text-[0.8rem] md:!text-[0.9rem]"


            >
              ← Back to Work
            </button> */}
          </motion.div>

          {/* Right side - Project image (mobile: top) */}
          <motion.div 
            className="w-full  md:w-1/2 h-[60vh] md:h-full flex items-center justify-center !p-4  order-1 md:order-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="w-full  h-full md:h-full overflow-hidden rounded-xl md:rounded-lg shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop" 
                alt="Planet Glass"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Section - Mobile Friendly */}
      <div className="video h-screen w-full flex justify-center items-center  !p-4 ">
        <div className=" w-full h-3/4 md:w-4/5 md:h-4/5 bg-black rounded-xl overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className=" w-full h-full object-cover"
            style={{ objectPosition: 'center center' }}
          >
            <source src="/path-to-your-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Horizontal Scrolling Gallery - Mobile Optimized */}
      {/* Horizontal Scrolling Gallery - Mobile Optimized */}
<div 
  ref={horizontalContainerRef}
  className="horizontal-scroll-container"
  style={{
    height: '100vh',
    width: `${images.length * 100}vw`,
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    scrollSnapType: 'x mandatory',
    WebkitOverflowScrolling: 'touch'
  }}
>
  {images.map((image, index) => (
    <section 
      key={image.id}
      className="horizontal-image-section"
      style={{
        flex: '0 0 100vw',
        height: '100vh',
        scrollSnapAlign: 'start',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className="w-full h-full flex justify-center items-center rounded-xl overflow-hidden">
        <img 
          src={image.image} 
          alt={`Image ${index + 1}`} 
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </section>
  ))}
</div>


      {/* Hero Carousel */}
      <div className="w-full h-screen">
        <Herocarousel />
      </div>
    </div>
  );
}

export default Planetglass;