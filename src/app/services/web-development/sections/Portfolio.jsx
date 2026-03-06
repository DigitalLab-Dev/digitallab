import Website from '../components/Website';

const Portfolio = () => {
  const websites = [
    {
      image: '/portfolios/web-development/1.png',
      link: 'https://hci-webapp.vercel.app',
    },
    {
      image: '/portfolios/web-development/2.png',
      link: 'https://naqvix.com',
    },
    {
      image: '/portfolios/web-development/3.png',
      link: 'https://greenknight.io',
    },
    {
      image: '/portfolios/web-development/4.png',
      link: 'https://getfoodie.io',
    },
    {
      image: '/portfolios/web-development/5.png',
      link: 'https://chemistryonlinetuition.com',
    },
    {
      image: '/portfolios/web-development/6.png',
      link: 'https://scentsbyjawahar.pk',
    },
    {
      image: '/portfolios/web-development/7.png',
      link: 'https://gghscityppn.pk',
    },
    {
      image: '/portfolios/web-development/8.png',
      link: 'https://quicknetworkzone.com',
    },
  ];
  return (
    <section id='portfolio' className="py-10 relative scroll-mt-20">
      <div className="flex flex-col items-center justify-center px-4">
        <span className="px-3 py-2 rounded-full text-orange-500 font-medium tracking-wider">
          PORTFOLIO
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold md:w-[70%] lg:w-[50%] text-center w-full uppercase leading-tight">
          Some samples of our work
        </h3>
      </div>
      <div className='flex mt-20 flex-wrap justify-center gap-8'>
        {websites.map((website, index) => (
          <Website image={website.image} link={website.link} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

