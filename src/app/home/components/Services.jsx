'use client';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';
import {
  FaVideo,
  FaPaintBrush,
  FaSearch,
  FaUsers,
  FaBullhorn,
  FaRegCopy,
} from 'react-icons/fa';
import { MdAttachMoney } from 'react-icons/md';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      heading: 'Video Editing',
      para: 'Professional video editing with effects, transitions, and motion graphics.',
      link: '/services/video-editing',
      icon: FaVideo,
    },
    {
      heading: 'Graphic Designing',
      para: 'Creative graphics, branding, and visuals that stand out.',
      link: '/services/graphic-designing',
      icon: FaPaintBrush,
    },
    {
      heading: 'SEO Optimization',
      para: 'Rank higher on Google and boost website visibility.',
      link: '/services/seo',
      icon: FaSearch,
    },
    {
      heading: 'Affiliate Marketing',
      para: 'Grow revenue through targeted affiliate campaigns.',
      link: '/services/affiliate-marketing',
      icon: MdAttachMoney,
    },
    {
      heading: 'Social Media Marketing',
      para: 'Engage your audience with tailored social strategies.',
      link: '/services/social-media-marketing',
      icon: FaUsers,
    },
    {
      heading: 'Ads Management',
      para: 'Google, Facebook & Instagram Ads that convert.',
      link: '/services/ads',
      icon: FaBullhorn,
    },
    {
      heading: 'Copywriting',
      para: 'Powerful words that sell, engage, and inspire action.',
      link: '/services/copywriting',
      icon: FaRegCopy,
    },
  ];

  return (
    <section className="w-full mt-10 flex flex-col items-center justify-center px-10 mb-10">
      <div className='flex  w-full items-center flex-col lg:flex-row gap-5 justify-between'>
        <div className='flex  flex-col w-full  lg:w-1/2 lg:items-start  items-center justify-center lg:justify-start'>
          <h2 className='uppercase text-xl mb-3'>Our Services</h2>
          <h3 className='text-4xl sm:text-6xl font-bold lg:text-left text-center  uppercase'>What <span className='text-orange-500'>Services</span>  We're Offering</h3>
        </div>
        <div className=' w-[90%] lg:w-1/2 '>
           <p className='text-[18px] lg:text-left text-center'>
            we offer services that can help businesses improve their visibility and business reputation online, expand market reach, and increase turnover through effective digital strategies. Following are the services we provide
           </p>
        </div>
      </div>
      <div className='mt-10 w-full flex flex-col'>
          {
            services.map((service,index)=>(
              <ServiceCard service={service} key={index}/>
            ))
          }
      </div>
    </section>
  );
};

export default Services;
