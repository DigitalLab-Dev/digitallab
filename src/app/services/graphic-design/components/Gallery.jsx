
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion,  } from 'framer-motion';
import {  memo, useMemo } from 'react';
import { MdArrowOutward } from 'react-icons/md';

import ImageComponent from './ImageComponent';

// Move static data outside component
const DESIGNS = [
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761661577/7_jtv240.png',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761661574/9_otapks.png',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761661582/19_haenzm.png',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761661573/3_emg5he.png',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761661573/4_llcfxo.png',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761661583/23_altrk5.png',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761661580/12_feaqr2.jpg',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761661581/17_i6rvfh.png',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761661582/21_mlroty.png',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761661583/20_d6va3o.png',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761661581/22_pogldb.png',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761662200/cover_copy_lsufv9.png',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761661579/10_z5kcjn.jpg',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761661578/6_gpg7jo.png',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761661584/5_k65yaj.png',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761661578/11_idme10.jpg',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761661575/16_rpcvr6.png',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761661571/1_udlzph.png',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761661577/18_nkfu2d.jpg',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761661572/15_jvdffd.png',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761661572/14_m8o6vq.png',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761662202/day_1_aggk2b.png',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761661571/13_wlq6c4.png',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761661570/2_zfws2m.png',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761662202/FEATURE_1_ovnmx5.png',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761662202/17_copy_amp7h2.png',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761662199/1_sdb8ji.png',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761662203/hiring_Post_ebi6pd.png',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761662203/day_2_dc5m4k.png',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761662203/day_1_mine_y2sqcn.png',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761662304/Innotech_1_oevcab.jpg',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761662311/Innotech_vfvoyx.jpg',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761662200/20_batfaq.jpg',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761662200/clothing_brand_1_unwdtf.png',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761662200/clothing_brand_wvequm.png',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761662312/Resturant_3_p9vbpl.png',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761662323/Resturant_gxvv4l.png',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761662333/Shopify_azzzo0.jpg',
  'https://res.cloudinary.com/dt9wziort/image/upload/v1761662338/SSBB_xlcv3f.png',
];

const Gallery = () => {
  // Memoize the layout calculation
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
                <ImageComponent 
                  imageUrl={imageUrl} 
                  isFullWidth={false}
                  alt={`Design showcase ${currentIndex + index + 1}`}
                />
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
              alt={`Featured design showcase ${currentIndex + 1}`}
            />
          </div>
        );
        currentIndex += 1;
      }

      isTwoImageRow = !isTwoImageRow;
    }

    return rows;
  }, []);

  return (
    <section className="my-10 bg-black">
      <header className="text-center my-10">
        <motion.h2 
          className="text-5xl sm:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          OUR <span className="text-orange-500">WORK</span>
        </motion.h2>
        <motion.p
          className="text-gray-400 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Explore a curated selection of graphic design projects showcasing
          creativity and innovation.
        </motion.p>
      </header>
      
      <div className="w-full max-w-7xl mx-auto px-4">{renderImages}</div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-3 my-10"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link
            href="https://drive.google.com/drive/folders/17MIfvNhB38xVYRVtuXq4uxkDxirunKYF"
            target="_blank"
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
          >
            <span>See All Designs</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
            >
              <MdArrowOutward className="w-5 h-5" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default memo(Gallery);