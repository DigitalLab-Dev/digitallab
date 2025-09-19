"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImageComponent = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    if (!imgRef.current) return;

    // Animate scale in/out on scroll
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { scale: 1 }, // start normal
        {
          scale: 1.2, // zoom in
          ease: "power2.out",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 80%",   // when section enters viewport
            end: "bottom 20%",  // when section leaves viewport
            scrub: true,        // smooth animation on scroll
            toggleActions: "restart reverse restart reverse", // replay on enter/leave
          },
        }
      );
    }, imgRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full h-[70vh] overflow-hidden rounded-2xl">
      <div ref={imgRef} className="w-full h-full">
        <Image
          src="/images/web-development.avif"
          alt="Web Development"
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default ImageComponent;
