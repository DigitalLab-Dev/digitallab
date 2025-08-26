import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';

const About = () => {
  return (
    <section className="w-full mt-10">
      <header className="text-[8vw] flex items-start justify-start w-full flex-col leading-30">
        <h2 className=" self-center">
          Your <span className="italican text-[#BED3CC]">Brand</span>
        </h2>
        <h3>
          <span className="italican text-[#BED3CC]">Our</span> Mission
        </h3>
      </header>
      <div className=" w-full flex gap-15 items-center justify-center mt-10 px-5 ">
        <Image
          src="/images/collaboration.webp"
          width={400}
          height={400}
          alt='a team collaboration'
          className='rounded-md'
        />
        <div className='w-1/2 '>
          <p className=" text-xl text-[#EEFFC8]">
            We're a team of digital strategists, designers, and developers
            dedicated to turning your vision into a powerful digital reality.
            From the first line of code to the final marketing campaign, we
            handle every aspect of your online presence. Our goal is to help
            your brand connect with its audience, grow its business, and stand
            out in a crowded market. We're passionate about partnering with you
            to achieve your goals.
          </p>
            <button className="flex bg-slate-300 mt-5 text-black font-semibold hover:bg-white cursor-pointer transition-all duration-500 items-center justify-center gap-2 p-2 rounded-full">
              ABOUT US
              <MdArrowOutward className='font-bold'/>
            </button>
        </div>
      </div>
    </section>
  );
};

export default About;
