

'use client';
import Link from 'next/link';
import ImageComponent from './ImageComponent';
import { motion } from 'framer-motion';
import { MdArrowOutward } from 'react-icons/md';
import { memo, useMemo } from 'react';

// Move static data outside component to prevent recreation on every render
const DESIGNS = [
  '/portfolios/graphic-design/1.png',
  '/portfolios/graphic-design/2.png',
  '/portfolios/graphic-design/3.png',
  '/portfolios/graphic-design/4.png',
  '/portfolios/graphic-design/5.png',
  '/portfolios/graphic-design/6.png',
  '/portfolios/graphic-design/7.png',
  '/portfolios/graphic-design/8.png',
  '/portfolios/graphic-design/9.png',
  '/portfolios/graphic-design/10.jpg',
  '/portfolios/graphic-design/11.jpg',
  '/portfolios/graphic-design/12.jpg',
  '/portfolios/graphic-design/13.png',
  '/portfolios/graphic-design/14.png',
  '/portfolios/graphic-design/15.png',
  '/portfolios/graphic-design/16.png',
  '/portfolios/graphic-design/17.png',
  '/portfolios/graphic-design/18.jpg',
  '/portfolios/graphic-design/19.png',
  '/portfolios/graphic-design/20.png',
  '/portfolios/graphic-design/21.png',
  '/portfolios/graphic-design/22.png',
  '/portfolios/graphic-design/23.png',
];

const Gallery = () => {
  // Memoize the layout calculation - only compute once since data is static
  const renderImages = useMemo(() => {
    const rows = [];
    let currentIndex = 0;
    let isTwoImageRow = true;

    while (currentIndex < DESIGNS.length) {
      if (isTwoImageRow) {
        const imagesInRow = DESIGNS.slice(currentIndex, currentIndex + 2);
        rows.push(
          <div
            key={`row-${currentIndex}`}
            className="flex flex-col sm:flex-row gap-4 mb-4 w-full"
          >
            {imagesInRow.map((imageUrl, index) => (
              <div key={currentIndex + index} className="flex-1">
                <ImageComponent imageUrl={imageUrl} isFullWidth={false} />
              </div>
            ))}
          </div>
        );
        currentIndex += 2;
      } else {
        rows.push(
          <div key={`row-${currentIndex}`} className="w-full mb-4">
            <ImageComponent
              imageUrl={DESIGNS[currentIndex]}
              isFullWidth={true}
            />
          </div>
        );
        currentIndex += 1;
      }

      isTwoImageRow = !isTwoImageRow;
    }

    return rows;
  }, []); // Empty deps - DESIGNS is static

  return (
    <section className="my-10">
      <header className="text-center my-10">
        <h2 className="text-6xl font-semibold">OUR WORK</h2>
        <p>
          Explore a curated selection of graphic design projects showcasing
          creativity and innovation.
        </p>
      </header>
      <div className="w-full max-w-7xl mx-auto px-4">{renderImages}</div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-3 my-10 text-2xl uppercase text-orange-400 cursor-pointer"
      >
        <motion.div
          whileHover={{ scale: 1.1, color: '#f97316' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link
            href="https://drive.google.com/drive/folders/17MIfvNhB38xVYRVtuXq4uxkDxirunKYF"
            target="_blank"
          >
            See All Designs
          </Link>
        </motion.div>

        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
        >
          <MdArrowOutward className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default memo(Gallery);