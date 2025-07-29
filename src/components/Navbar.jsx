import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { _round } from 'gsap/gsap-core';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navRef = useRef(null);
  const linkRefs = useRef({});

  const handleMouseMove = (e) => {
    if (navRef.current) {
      const rect = navRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };


 

  return (
    <header
  className="nav-main bg-white w-full  font-primary !z-50"
  ref={navRef}
  onMouseMove={handleMouseMove}
>
      <div className="nav-inner  container mx-auto !px-6 !py-5 flex justify-between items-center">
        {/* Logo - Left */}
        <Link
          to="/"
          className="nav-logo text-xl font-bold font-accent !ml-2 !md:ml-6 relative z-10"
          onClick={closeMenu}
        >
          allstar
        </Link>

        {/* Desktop Navigation - Center */}
        <nav className=" !hidden md:!flex gap-10 z-50 !mx-4 font-primary">
          {['work', 'about', 'contact'].map((item) => (
            <div
              key={item}
              className="relative overflow-hidden"
              ref={(el) => (linkRefs.current[item] = el)}
            >
              <Link
                to={`/${item}`}
                className="nav-links hover:text-gray-600 transition-colors capitalize !px-2 !py-1 relative z-10 block font-secondary"
                onClick={closeMenu}
                onMouseEnter={() => setHoveredLink(item)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {/* Regular text */}
                <span className={`relative z-10 ${hoveredLink === item ? 'opacity-0' : 'opacity-100'}`}>
                  {item}
                </span>

                {/* Blurred text that follows cursor */}
                {hoveredLink === item && (
                  <motion.span
                    className="absolute inset-0 blur-xl opacity-100 font-secondary"
                    initial={{
                      opacity: 0,
                      x: mousePosition.x - (linkRefs.current[item]?.getBoundingClientRect().left || 0) - 20,
                      y: mousePosition.y - (linkRefs.current[item]?.getBoundingClientRect().top || 0) - 10
                    }}
                    animate={{
                      x: mousePosition.x - (linkRefs.current[item]?.getBoundingClientRect().left || 0) - 20,
                      y: mousePosition.y - (linkRefs.current[item]?.getBoundingClientRect().top || 0) - 10,
                      opacity: 1
                    }}
                    transition={{
                      type: 'spring',
                      damping: 20,
                      stiffness: 300,
                      mass: 0.5
                    }}
                    style={{
                      filter: 'blur(1px)',
                      willChange: 'transform',
                    }}
                  >
                    {item}
                  </motion.span>
                )}
              </Link>
            </div>
          ))}
        </nav>

        {/* Instagram Link - Right (Desktop only) */}
        <div className="nav-insta !hidden md:!block z-50 !mr-2 !md:mr-6 relative overflow-hidden ">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors !px-3 !py-1 relative z-10 block font-special"
            onMouseEnter={() => setHoveredLink('instagram')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {/* Regular text */}
            <span className={ `  relative z-10 ${hoveredLink === 'instagram' ? 'opacity-0' : 'opacity-100'}`}>
              Instagram
            </span>

            {/* Blurred text that follows cursor */}
            {hoveredLink === 'instagram' && (
              <motion.span
                className="absolute inset-0 blur-xl opacity-100 font-special"
                initial={{
                  opacity: 0,
                  x: mousePosition.x - 20,
                  y: mousePosition.y - 10
                }}
                animate={{
                  x: mousePosition.x - 20,
                  y: mousePosition.y - 10,
                  opacity: 1
                }}
                transition={{
                  type: 'spring',
                  damping: 20,
                  stiffness: 300,
                  mass: 0.5
                }}
                style={{
                  filter: 'blur(8px)',
                  willChange: 'transform',
                }}
              >
                Instagram
              </motion.span>
            )}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="!block md:!hidden focus:outline-none z-50 !mr-2"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col space-y-1.5">
            <span className={`block h-0.5 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 bg-black transition-all ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center !p-8 font-primary"
            onClick={closeMenu}
          >
            <motion.nav
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="flex flex-col items-center justify-center gap-8 !p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {['work', 'about', 'contact'].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  className="text-3xl font-medium hover:text-gray-600 transition-colors !mb-3 font-secondary"
                >
                  <Link
                    to={`/${item}`}
                    onClick={closeMenu}
                    className="block w-full h-full capitalize !px-4 !py-2"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl font-medium hover:text-gray-600 transition-colors !mt-4 !px-4 !py-2 font-special"
                whileHover={{ scale: 1.05 }}
                onClick={closeMenu}
              >
                Instagram
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
