import Image from 'next/image';
import React from 'react';

const WhyUs = () => {
  return (
    <section className="w-full mt-10  flex flex-col items-center justify-center gap-5 px-5 mb-10">
      <header className="text-center w-full flex flex-col items-center justify-center gap-5">
        <h2 className="text-xl text-[#f0750f]">WHY US</h2>
        <h3 className="text-5xl md:w-2/3 lg:w-1/2 capitalize">
          How we deliver <span className="italican">better</span> work that
          lasts
        </h3>
      </header>
      <div className="flex flex-col md:flex-row items-center mt-5 justify-center gap-5 md:gap-2 min-h-screen">
        <div className="flex flex-col items-center justify-center gap-2 w-full md:w-[30%]  h-screen">
          <div className="h-[60%] border rounded-xl bg-black relative overflow-hidden w-full flex flex-col items-center justify-start gap-2 p-3 ">
            <div className='z-10'>
              <h4 className="text-2xl font-bold text-white">
                Fast turnarounds
              </h4>
              <p className="text-white">
                Timelines are respected here. Expect quick handoffs, clear
                communication, and momentum that doesn’t stall.
              </p>
            </div>
            <Image
              src="/images/fast-turnaround.jpg"
              width={300}
              height={200}
              className="absolute bottom-0 right-20 md:left-0 "
              alt="fast clock"
            />
          </div>
          <div className="h-[40%] relative overflow-hidden bg-black border rounded-xl w-full flex flex-col items-end justify-start gap-2 p-3">
            <div className='z-10'>
              <h4 className="text-2xl font-bold">
                Iteration until satisfaction
              </h4>
              <p>
                Refinement is part of the process. We stay in the loop until
                you’re genuinely happy with the outcome.
              </p>
            </div>
            <Image
              src="/images/iteration.jpg"
              width={200}
              height={200}
              className="absolute bottom-0 right-20 md:right-0 "
              alt="fast clock"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 w-full md:w-[70%] h-screen">
          <div className="h-[40%] relative border rounded-xl w-full flex overflow-hidden bg-black  items-start justify-start gap-2 p-3">
            <div className='z-10'>
              <h4 className="text-2xl font-bold">Conversion focused</h4>
              <p className="w-1/2">
                Good design looks great, but it also works. Every decision is
                made with performance and user goals in mind.
              </p>
            </div>
            <Image
              src="/images/growth.jpg"
              width={400}
              height={200}
              className="absolute top-0 h-full right-0 "
              alt="fast clock"
            />
          </div>
          <div className="h-[60%] border relative rounded-xl bg-black w-full flex overflow-hidden items-start justify-start gap-2 p-3">
            <div className='z-10'>
              <h4 className="text-2xl font-bold">Quality over quantity</h4>
              <p className="w-1/2">
                We take on fewer projects so each one gets the attention,
                detail, and care it deserves.
              </p>
            </div>
            <Image
              src="/images/quantity.jpg"
              width={900}
              height={400}
              className="absolute top-0 right-0 h-full"
              alt="fast clock"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
