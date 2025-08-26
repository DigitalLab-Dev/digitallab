import React from "react";


const ServiceCard = ({ icon: Icon, heading, para, link }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl p-6 flex flex-col items-start gap-4 hover:scale-105 transition-all duration-300 cursor-pointer">
      {/* Icon */}
      <div className="text-3xl ">
        <Icon className="text-[#51d6aa]"/>
      </div>

      {/* Heading */}
      <h3 className="text-xl tracking-wider font-semibold text-white">{heading}</h3>

      {/* Paragraph */}
      <p className="text-sm text-gray-300">{para}</p>

      {/* Link */}
      <a 
        href={link} 
        className="text-sm font-medium text-[#EEFFC8]  transition-colors"
      >
        Learn More →
      </a>
    </div>
  );
};

export default ServiceCard;