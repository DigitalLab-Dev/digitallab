import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

const Hero = () => {
  return (
    <section className="w-full ">
      <header className="flex flex-col items-center justify-center text-center gap-5">
        <div
          className={
            'inline-flex items-center justify-center rounded-full px-5 py-1 ' +
            'bg-white/10 border border-white/20 shadow-lg shadow-black/30 ' +
            'backdrop-blur-md supports-[backdrop-filter]:backdrop-blur-md ' +
            'ring-1 ring-white/10 ' 
          }
        >
          <p className="text-sm sm:text-base tracking-wide text-[#EBE9E4]">
            Pixel-perfect. Performance-driven
          </p>
        </div>
        <h1 className="text-[10vw] leading-33 capitalize text-[#EBE9E4]">
          We turn{' '}
          <span className="italican lowercase text-[#BED3CC]  rounded-2xl">
            visions
          </span>{' '}
          <br /> into digital realities
        </h1>
        <p className="text-[18px] w-1/2 text-[#BED3CC]">
          We believe in combining innovative design, sustainable practices, and
          exceptional craftsmanship to bring your vision to life.
        </p>
      </header>
      <button className="w-50 transition-all duration-500 mt-5 rounded-full font-semibold  py-3 hover:gap-3 hover:bg-[#e8b2b2] cursor-pointer mx-auto bg-[#EFC8C8]  text-[#2B2539] flex items-center justify-center">
        <span>VIEW PROTFOLIOS</span>
        <MdArrowOutward size={30} />
      </button>
    </section>
  );
};

export default Hero;
