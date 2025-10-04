// 'use client';

// import Image from 'next/image';
// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const VideoSection = () => {
//   const imgRef = useRef(null);

//   useEffect(() => {
//     const el = imgRef.current;

//     gsap.fromTo(
//       el,
//       { scale: 0.5 },
//       {
//         scale: 1,
//         ease: 'power2.out',
//         scrollTrigger: {
//           trigger: el,
//           start: 'top 80%',   // when section enters viewport
//           end: 'bottom 20%',  // when leaving
//           scrub: true,        // smooth scroll animation
//           toggleActions: 'play reverse play reverse', 
//         },
//       }
//     );

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <section className="py-20 px-10">
//       <div className="w-full mx-auto">
//         <Image
//           ref={imgRef}
//           src="/images/about.webp"
//           width={300}
//           height={300}
//           alt="about"
//           className="w-full h-[600px] rounded-2xl"
//         />
//       </div>
//     </section>
//   );
// };

// export default VideoSection;'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
  const videoContainerRef = useRef(null);
  const playerRef = useRef(null);
  const [player, setPlayer] = useState(null);
  const isInView = useInView(videoContainerRef, { amount: 0.5 });

  // Replace with your YouTube video ID
  const YOUTUBE_VIDEO_ID = '1ULGC0HtKwo';

  useEffect(() => {
    const el = videoContainerRef.current;

    // GSAP Scale Animation
    gsap.fromTo(
      el,
      { scale: 0.5, opacity: 0.5 },
      {
        scale: 1,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 100%',
          end: 'bottom 60%',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // Initialize YouTube player
    window.onYouTubeIframeAPIReady = () => {
      const ytPlayer = new window.YT.Player(playerRef.current, {
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          autoplay: 0,
          controls: 1,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          fs: 1,
          mute: 1, // Muted to allow autoplay
        },
        events: {
          onReady: (event) => {
            setPlayer(event.target);
          },
        },
      });
    };

    return () => {
      if (player && typeof player.destroy === 'function') {
        player.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (!player) return;

    // Auto play/pause based on isInView
    if (isInView) {
      // Restart from beginning when entering viewport
      player.seekTo(0, true);
      player.playVideo();
    } else {
      // Stop video when leaving viewport
      player.pauseVideo();
    }
  }, [player, isInView]);

  return (
    <section 
      className="z-50"
      aria-labelledby="video-section-heading"
    >
      <div className="w-full  z-50 h-[80vh] md:h-screen mx-auto">
        <div
          ref={videoContainerRef}
          className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl bg-black"
          
        >
          {/* YouTube Player */}
          <div
            ref={playerRef}
            className="absolute inset-0 w-full h-full"
            title="About Digital Lab - Company Story Video"
          />

          {/* Decorative Border */}
          <div className="absolute inset-0 border-4 border-orange-500/20 rounded-2xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;