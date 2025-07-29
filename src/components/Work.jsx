import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Work() {
  const navigate = useNavigate();
  const [hoveredProject, setHoveredProject] = useState(null);
  const [animationState, setAnimationState] = useState({
    x: 0, y: 0, rotation: 0, scale: 0, opacity: 0
  });
  const projectRefs = useRef([]);
  const hoverTimeout = useRef(null);
  const [projectsLoaded, setProjectsLoaded] = useState(false); // NEW: trigger projects animation after header

  const projects = [
    { id: 1, name: "Planet Glass", category: "Web Development, UI Design, Branding" },
    { id: 2, name: "Sam Realty", category: "UI Design, Animation" },
    { id: 3, name: "Ferry Lawn", category: "Backend API, SEO, Hosting" },
    { id: 4, name: "Luzia Branding", category: "E-commerce, Analytics" },
    { id: 5, name: "Nova Studio", category: "SEO Optimization, Marketing, Cloud" }
  ];

  const projectImages = {
    1: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&auto=format&fit=crop",
    2: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=600&auto=format&fit=crop",
    3: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&auto=format&fit=crop",
    4: "https://images.unsplash.com/photo-1600585155152-0f4444b84249?w=600&h=600&auto=format&fit=crop",
    5: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=600&auto=format&fit=crop"
  };

  const handleMouseEnter = (projectId) => {
    clearTimeout(hoverTimeout.current);
    setHoveredProject(projectId);
    setAnimationState(prev => ({
      ...prev,
      scale: 0.4,
      opacity: 0,
      x: -50,
      y: -50
    }));
  };

  const handleMouseMove = (e, projectId) => {
    if (hoveredProject !== projectId) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setAnimationState(prev => ({
      ...prev,
      x,
      y,
      rotation: (x - rect.width / 2) / 40,
      scale: 1,
      opacity: 1
    }));
  };

  const handleMouseLeave = () => {
    setAnimationState(prev => ({
      ...prev,
      scale: 0,
      opacity: 0
    }));
    hoverTimeout.current = setTimeout(() => setHoveredProject(null), 150);
  };

  const handleProjectClick = (projectId) => {
    navigate(`/planetglass`);
  };

  useEffect(() => {
    // Delay to start project animations after header finishes
    const timer = setTimeout(() => {
      setProjectsLoaded(true);
    }, 1600); // header animation duration (1.4s) + small buffer (0.2s)
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="workMain w-full min-h-screen overflow-y-auto">
      {/* Header with smoother onload animation */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
        className="ProjectIndex-main fixed top-0 backdrop-blur-md z-20 flex flex-col justify-end !gap-2 !p-4 md:!p-5 md:!px-10 bg-red/80 h-50 w-full"
      >
        <div className=" project-index  flex flex-row justify-between text-lg md:text-xl font-medium">
          <div className="indexLeft flex gap-8">
            <span>Index</span>
            <span>Project</span>
          </div>
          <div className="indexRight">Service</div>
        </div>
        <motion.hr
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeInOut" }}
          className="origin-left border-t border-gray-400"
        />
      </motion.div>

      {/* Projects list */}
      <div className="project-main  w-full flex flex-col gap-8 md:gap-12 !p-4 md:!p-10 !mt-30  md:!mt-30">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={projectsLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 1.8 + index * 0.2, // stagger fade in
              duration: 0.8,
              ease: "easeOut"
            }}
            className={`projects flex flex-row justify-between relative cursor-pointer !p-3 md:!p-6 rounded-lg transition-all duration-700 ease-out
              ${hoveredProject && hoveredProject !== project.id ? 'opacity-50' : 'opacity-100'}
            `}
            ref={el => projectRefs.current[index] = el}
            onClick={() => handleProjectClick(project.id)}
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={(e) => handleMouseMove(e, project.id)}
            whileHover={{ scale: 1.03, transition: { duration: 0.6, ease: "easeOut" } }}
          >
            <div className="project-index-name indexLeft flex gap-8 text-lg md:text-2xl">
              <span>{project.id.toString().padStart(2, '0')}</span>
              <span>{project.name}</span>
            </div>

            {/* Multiple categories styled as small pills */}
            <div className="project-service-parent indexRight flex flex-wrap justify-center items-center gap-2">
              {project.category.split(',').map((cat, idx) => (
                <motion.span
                  key={idx}
                  className="project-service  !px-4 !py-2 flex flex-wrap rounded-full text-xs md:text-sm bg-gray-100 text-gray-700 shadow-sm border border-gray-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={projectsLoaded ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    delay: 2 + index * 0.2 + idx * 0.05,
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                >
                  {cat.trim()}
                </motion.span>
              ))}
            </div>

            {hoveredProject === project.id && (
              <motion.div
                className="absolute pointer-events-none z-30 w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-xl shadow-xl"
                style={{
                  left: `${animationState.x}px`,
                  top: `${animationState.y}px`,
                  transform: `translate(-50%, -50%) rotate(${animationState.rotation}deg) scale(${animationState.scale})`,
                  opacity: animationState.opacity
                }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 30,
                  delay: 0.1
                }}
              >
                <img
                  src={projectImages[project.id]}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Work;
  