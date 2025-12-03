import CircularText from "@/components/ReactBit-Components/CircularText";
import Image from "next/image";
import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const ImageSection = () => {
  return (
    <div className="relative inline-block group">
      {/* Main Image */}
      <Image
        src="/images/contact3.png"
        alt="Contact Illustration"
        width={450}
        height={450}
        className="rounded-lg shadow-lg transition-transform duration-500 ease-in-out group-hover:scale-105 w-full h-auto max-w-[450px]"
      />

      {/* Social Media Icons - Top Right */}
      <div className="absolute top-4 right-4 flex space-x-4 bg-white/50 backdrop-blur-md px-3 py-2 rounded-lg shadow-md">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 hover:text-orange-600 text-xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 hover:text-orange-600 text-xl"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 hover:text-orange-600 text-xl"
        >
          <FaLinkedinIn />
        </a>
      </div>

      {/* Second Circular Text (Bottom-Left of Image) */}
      <div className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 hidden sm:block">
        <CircularText
          text="DIGITALLAB • CONTACT US • "
          onHover="speedUp"
          spinDuration={25}
          className="custom-class"
        />
      </div>
    </div>
  );
};

export default ImageSection;
