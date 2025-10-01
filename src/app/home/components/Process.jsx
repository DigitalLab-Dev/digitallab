'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useInView, motion } from 'framer-motion';

const Process = ({
  index,
  heading,
  desc,
  points,
  image,
  setCurrentImage,
  totalSteps,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4, once: false });

  useEffect(() => {
    if (isInView) {
      setCurrentImage(index);
    }
  }, [isInView, index, setCurrentImage]);

  return (
    <article
      ref={ref}
      className="min-h-[50vh] md:h-[70vh] border-b border-orange-500 flex flex-col items-start justify-center py-8 md:py-0"
      role="listitem"
      itemScope
      itemType="https://schema.org/HowToStep"
      aria-label={`Step ${index}: ${heading}`}
    >
      <meta itemProp="position" content={String(index)} />

      {/* Top section - Index and Icon */}
      <div className="flex items-start justify-between w-full mb-4 md:mb-0">
        <span
          className="text-lg md:text-xl text-orange-500 font-bold"
          aria-label={`Step ${index} of ${totalSteps}`}
        >
          [{index}]
        </span>

        {/* Right icon - visible on mobile, hidden on larger screens */}
        <div className="flex md:hidden" aria-hidden="true">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src={image}
              width={60}
              height={60}
              alt=""
              className="animate-pulse"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>

      {/* Right icon - hidden on mobile, visible on md+ */}
      <div
        className="hidden md:flex items-end justify-end w-full"
        aria-hidden="true"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src={image}
            width={80}
            height={80}
            alt=""
            className="animate-pulse"
            loading="lazy"
          />
        </motion.div>
      </div>

      {/* Heading + Description */}
      <header className="flex items-start flex-col gap-3 md:gap-5 justify-start text-left w-full mt-4 md:mt-0">
        <h3 className="text-xl md:text-2xl font-bold uppercase" itemProp="name">
          {heading}
        </h3>
        <p className="text-sm md:text-base" itemProp="text">
          {desc}
        </p>
      </header>

      {/* Bullet points */}
      <div
        className="flex mt-4 md:mt-5 w-full flex-col items-start justify-start text-left gap-2"
        itemProp="itemListElement"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <ul className="list-disc pl-5 space-y-2">
          {points.map((point, i) => (
            <motion.li
              key={i}
              className="text-left text-sm md:text-base"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content={String(i + 1)} />
              <span itemProp="name">{point}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Process;
