'use client';
import { FaPlus } from 'react-icons/fa';
import { VscPercentage } from 'react-icons/vsc';
import { motion } from 'framer-motion';
import CountUp from '@/components/ReactBit-Components/Countup';

const Stats = () => {
  const stats = [
    {
      stat: 256,
      label: 'Projects Delivered',
      para: 'You’re joining 250+ businesses who’ve launched successful projects with us, and we’re ready to build yours next.',
    },
    {
      stat: 90,
      label: 'Business Growth',
      para: 'Our strategies help clients like you achieve real growth and success, up to 70% more revenue in just a year.',
    },
    {
      stat: 100,
      label: 'Happy Clients',
      para: 'Over 100 brands trust us to bring ideas to life. You’ll love the results, growth and success just as much as they did.',
    },
  ];

  const handleMouseMove = (e) => {
    const card = e.currentTarget; // <-- use the card being hovered
    const glow = card.querySelector('.glow'); // <-- find glow inside this card

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (glow) {
      glow.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(251,191,36,0.2), transparent 40%)`;
    }

    // tilt effect
    const rotateX = (y / rect.height - 0.5) * 10;
    const rotateY = (x / rect.width - 0.5) * 10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    const glow = card.querySelector('.glow');

    if (glow) glow.style.background = 'transparent';
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <section className="sm:min-h-[50vh] py-10 flex flex-col items-center justify-center px-5">
      <motion.header
        initial={{ opacity: 0, y: 50, }}
        whileInView={{ opacity: 1, y: 0, }}
        transition={{ duration: 0.6,  ease: 'easeOut' }}
        viewport={{ once: false }}
        className="text-center md:w-2/3 w-full"
      >
        <h2 className="text-4xl sm:text-5xl">
          <span className="text-[#f0750f] ">Building</span> brands,
          <span className="text-[#f0750f] "> boosting</span> businesses,
          and <span className="text-[#f0750f] ">redefining</span>{' '}
          possibilities.
        </h2>
      </motion.header>

      <div className="mt-10 w-full flex items-center justify-center flex-wrap gap-10 md:gap-5">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className=" md:w-[50%] lg:w-[30%]  flex flex-col gap-2 relative"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
            viewport={{ once: false }}
          >
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="flex flex-col p-5 border border-dotted relative rounded-xl gap-2 bg-black/10 backdrop-blur-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <div className="glow absolute inset-0 pointer-events-none transition duration-300" />
              <h3 className="text-6xl font-semibold flex gap-2 items-center text-[#f0750f]">
                <CountUp
                  from={0}
                  to={stat.stat}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                {index === 1 ? (
                  <VscPercentage className="text-4xl mt-2" />
                ) : (
                  <FaPlus className="text-4xl mt-2" />
                )}
              </h3>
              <p className="text-2xl">{stat.label}</p>
            </motion.div>

            <motion.p
              className="text-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              viewport={{ once: false }}
            >
              {stat.para}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
