import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import img1 from '../assets/images/img1.jpg'; // Make sure this path is correct
import img2 from '../assets/images/img2.jpg'; // Make sure this path is correct
import img3 from '../assets/images/img3.jpg'; // Make sure this path is correct
import img4 from '../assets/images/img4.jpg'; // Make sure this path is correct
import img5 from '../assets/images/img5.jpg'; // Make sure this path is correct
 // Make sure this path is correct
// Make sure this path is correct


function Herocarousel() {
  const [isHovered, setIsHovered] = useState(null);

  const projects = [
    { id: 1, size: " h-[320px] w-[320px] md:h-[240px] md:w-[240px]", image: img1, path: "/Planetglass" },
    { id: 2, size: " h-[280px] w-[280px] md:h-[300px] md:w-[300px]", image: img2, path: "/Planetglass" },
    { id: 3, size: "h-[90px] w-[90px] md:h-[160px] md:w-[160px]", image: img3, path: "/Planetglass" },
    { id: 4, size: "h-[120px] w-[120px] md:h-[260px] md:w-[260px]", image: img4, path: "/Planetglass" },
    { id: 5, size: "h-[180px] w-[180px] md:h-[220px] md:w-[220px]", image: img5, path: "/Planetglass" },

    // more
    { id: 6, size:"h-[90px] w-[90px] md:h-[160px] md:w-[160px]", image: img1, path: "/Planetglass"  },
    { id: 7, size: "h-[120px] w-[120px] md:h-[260px] md:w-[260px]", image: img2, path: "/Planetglass" },
    { id: 8, size:"h-[180px] w-[180px] md:h-[220px] md:w-[220px]", image: img3, path: "/Planetglass" },
    
  ];

  return (
    <div className="w-full h-[50vh] flex items-center justify-center  z-30">
      <Marquee
        speed={50}
        gradient={false}
        pauseOnHover
        pauseOnClick
        className="py-4"
      >
        {projects.map((project, index) => (
          <Link to={project.path} key={`${project.id}-${index}`}>
            <div
              className={`
                ${project.size}
                rounded-xl
                overflow-hidden
                transition-all duration-300
                shadow-xl hover:shadow-2xl
                hover:scale-110 hover:z-20
                relative mx-2
              `}
              onMouseEnter={() => setIsHovered(project.id)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <img
                src={project.image}
                alt={`Project ${project.id}`}
                className="w-full h-full object-cover"
              />
              {isHovered === project.id && (
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-xl z-10" />
              )}
            </div>
          </Link>
        ))}
      </Marquee>
    </div>
  );
}

export default Herocarousel;
