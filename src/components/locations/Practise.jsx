import { useEffect, useRef } from "react";
import interact from "interactjs";

export default function DraggableCard({ children }) {
  const cardRef = useRef(null);
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (cardRef.current) {
      interact(cardRef.current).draggable({
        listeners: {
          move(event) {
            position.current.x += event.dx;
            position.current.y += event.dy;
            event.target.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;
          },
        },
      });
    }
  }, []);

  return (
    <>
      <div
        ref={cardRef}
        className="w-full flex flex-wrap items-center justify-center p-8 overflow-hidden rounded-[28px] transition-opacity duration-300 ease-out shadow-[ -8px_-10px_46px_#0000005f] backdrop-brightness-110 backdrop-blur-sm relative before:content-[''] before:absolute before:inset-0 before:z-0 before:overflow-hidden before:rounded-[28px] before:shadow-[inset_6px_6px_0px_-6px_rgba(255,255,255,0.7),inset_0_0_8px_1px_rgba(255,255,255,0.7)]"
        style={{
          filter: "url(#displacementFilter)",
        }}
      >
        {children}
      </div>

      {/* SVG Filter */}
      <svg style={{ display: "none" }}>
        <filter id="displacementFilter">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.01"
            numOctaves="2"
            result="turbulence"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="turbulence"
            scale="200"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    </>
  );
}