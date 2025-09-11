import { Contact } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import ContactForm from './components/ContactForm';
import ImageSection from './components/ImageSection';
import FAQ from './components/FAQ';

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-15 px-10">
      <section className="min-h-screen flex flex-col items-center justify-center  ">
        <h1 className="flex flex-col items-center text-7xl text-center font-bold space-y-6">
          {/* First line */}
          <span className="flex items-center space-x-4">
            <span>Lets Build</span>
            <Image
              src="/images/contact1.avif"
              alt="Digital Lab Logo"
              width={80}
              height={80}
              className="rounded-full"
            />
            <span>Something</span>
          </span>

          {/* Second line */}
          <span className="flex items-center space-x-4">
            <span>Together</span>
            <Image
              src="/images/contact2.avif"
              alt="Contact Icon"
              width={80}
              height={80}
              className="rounded-full"
            />
            <span>Contact</span>
          </span>
        </h1>
        <h2 className="w-full md:w-3/5 text-center mt-12 text-2xl font-light text-neutral-500 mx-auto">
          Have a project, idea, or challenge? We’d love to hear it. Let’s
          collaborate and bring something meaningful to life.
        </h2>
      </section>
      <section className="relative w-full mt-10 bg-black text-white rounded-xl shadow-lg overflow-hidden">
        {/* Glowing Orange Div */}
        <div className="absolute top-[20%] left-[30%] w-128 animate-pulse h-128 bg-orange-400 rounded-full blur-3xl opacity-60"></div>

        <header className="flex items-center justify-center py-10 relative z-10">
          <h3 className="text-5xl font-bold capitalize text-left w-full">
            Get in Touch
          </h3>
        </header>

        <div className="flex flex-col md:flex-row items-center justify-between  gap-10 w-full pb-10 relative z-10">
          <div className='w-full md:w-1/2 flex justify-center'>

          <ContactForm />
          </div>
          <div className="w-full md:w-1/2  flex justify-end">
            <ImageSection />
          </div>
        </div>
      </section>
      <section className='w-full'>
        <header className='w-full  flex flex-col items-center justify-center my-10'>
           <h3>FAQ's</h3>
           <h4 className='text-6xl font-bold text-white'>Your Questions, Answered</h4>
           <h5 className='text-xl mt-2 text-neutral-500'>Helping you understand our process and offerings at Digital Lab</h5>
        </header>
         <FAQ/>
      </section>
    </main>
  );
};

export default page;
