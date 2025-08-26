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
    <section className="w-full mt-20 flex flex-col items-center justify-center px-10 mb-10">
      <h2 className="text-right text-[6vw] w-full">
        What We Are <span className="italican text-[#BED3CC]">Offering</span>
      </h2>
      <div className="flex flex-col justify-start items-start w-full  text-left">
        <h3 className="text-4xl ">
          What we can do effectively <br /> and best of all
        </h3>
        <Link
          href="/services"
          className="mt-3 flex gap-2 items-center justify-center text-[#EEFFC8] hover:underline transition-all duration-500"
        >
          VIEW ALL SERVICES <MdArrowOutward />
        </Link>
      </div>
          <div className="w-full flex flex-wrap justify-center gap-6 p-8">
      {services.map((service, idx) => (
        <ServiceCard key={idx} {...service} />
      ))}
    </div>
    </section>
  );
};

export default Services;
