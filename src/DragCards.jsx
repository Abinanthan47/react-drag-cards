import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0);
  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");
    let maxZIndex = -Infinity;
    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );
      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });
    setZIndex(maxZIndex + 1);
  };
  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    />
  );
};

const DragCards = ({ 
  title = "TEXT", 
  titleColor = "text-neutral-800", 
  accentColor = "text-indigo-500",
  backgroundColor = "bg-neutral-950",
  cards = []
}) => {
  const containerRef = useRef(null);

  return (
    <section className={`relative grid min-h-screen w-full place-content-center overflow-hidden ${backgroundColor}`}>
      <h2 className={`relative z-0 text-[20vw] font-black ${titleColor} md:text-[200px]`}>
        {title}<span className={accentColor}>.</span>
      </h2>
      <div className="absolute inset-0 z-10" ref={containerRef}>
        {cards.map((card, index) => (
          <Card
            key={index}
            containerRef={containerRef}
            src={card.src}
            alt={card.alt}
            rotate={card.rotate}
            top={card.top}
            left={card.left}
            className={card.className}
          />
        ))}
      </div>
    </section>
  );
};

export default DragCards;