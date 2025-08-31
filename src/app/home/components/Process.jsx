"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const Process = ({ index, heading, desc, points, image, setCurrentImage }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4, once: false }); 

  useEffect(() => {
    if (isInView) {
      setCurrentImage(index); // update parent state
    }
  }, [isInView, index, setCurrentImage]);

  return (
    <div
      ref={ref}
      className="h-[70vh] border-b border-orange-500 flex flex-col items-center justify-center px-5"
    >
      {/* Top index */}
      <div className="flex items-start justify-start text-left w-full">
        <span className="text-xl text-orange-500 font-bold">[{index}]</span>
      </div>

      {/* Right icon */}
      <div className="flex items-end justify-end w-full">
        <Image
          src={image}
          width={80}
          height={80}
          alt={heading}
          className="animate-pulse"
        />
      </div>

      {/* Heading + Description */}
      <header className="flex items-start flex-col gap-5 justify-start text-left">
        <h5 className="text-2xl font-bold uppercase">{heading}</h5>
        <p>{desc}</p>
      </header>

      {/* Bullet points */}
      <div className="flex mt-5 w-full flex-col items-start justify-start text-left gap-2">
        <ul className="list-disc pl-5 space-y-2">
          {points.map((point, i) => (
            <li key={i} className="text-left">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Process;
