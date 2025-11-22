
"use client"
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
  const videoContainerRef = useRef(null);
  const playerRef = useRef(null);
  const [player, setPlayer] = useState(null);
  const [isApiReady, setIsApiReady] = useState(false);
  const isInView = useInView(videoContainerRef, { amount: 0.5 });

  // Replace with your YouTube video ID
  const YOUTUBE_VIDEO_ID = 'ljfgLSSbS5s';

  useEffect(() => {
    const el = videoContainerRef.current;

    // Create a GSAP context for better cleanup
    const ctx = gsap.context(() => {
      // GSAP Scale Animation with improved settings
      gsap.fromTo(
        el,
        { 
          scale: 0.5, 
          opacity: 0.5,
          transformOrigin: 'center center'
        },
        {
          scale: 1,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        }
      );
    }, el);

    return () => {
      ctx.revert(); // Clean up GSAP animations
    };
  }, []);

  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      
      // Set up callback
      window.onYouTubeIframeAPIReady = () => {
        setIsApiReady(true);
      };
    } else if (window.YT && window.YT.Player) {
      setIsApiReady(true);
    }
  }, []);

  useEffect(() => {
    if (!isApiReady || !playerRef.current) return;

    // Initialize YouTube player only when API is ready
    const ytPlayer = new window.YT.Player(playerRef.current, {
      videoId: YOUTUBE_VIDEO_ID,
      playerVars: {
        autoplay: 0,
        controls: 0, // Remove all controls
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        fs: 0, // Disable fullscreen button
        iv_load_policy: 3, // Hide annotations
        cc_load_policy: 0, // Hide closed captions
        disablekb: 1, // Disable keyboard controls
        playsinline: 1,
        mute: 1,
        loop: 1,
        playlist: YOUTUBE_VIDEO_ID, // Required for loop to work
      },
      events: {
        onReady: (event) => {
          setPlayer(event.target);
        },
      },
    });

    return () => {
      if (ytPlayer && typeof ytPlayer.destroy === 'function') {
        ytPlayer.destroy();
      }
    };
  }, [isApiReady]);

  useEffect(() => {
    if (!player) return;

    // Auto play/pause based on isInView
    if (isInView) {
      // Restart from beginning when entering viewport
      player.seekTo(0, true);
      player.playVideo();
    } else {
      // Pause video when leaving viewport
      player.pauseVideo();
    }
  }, [player, isInView]);

  return (
    <section 
      className="z-[9999] py-16 md:block hidden"
      aria-labelledby="video-section-heading"
    >
      <div className="w-full z-[9999] h-[80vh] md:h-screen mx-auto">
        <div
          ref={videoContainerRef}
          className="relative h-full z-[9999] w-full overflow-hidden shadow-2xl"
          style={{ willChange: 'transform, opacity' }}
        >
          {/* FIX 1: YouTube Player with cover scaling to eliminate black bars */}
          <div
            ref={playerRef}
            className="absolute top-1/2 left-1/2 pointer-events-none"
            style={{
              width: '100vw',
              height: '56.25vw', // 16:9 aspect ratio
              minHeight: '100vh',
              minWidth: '177.77vh', // 16:9 aspect ratio
              transform: 'translate(-50%, -50%)',
            }}
            title="About Digital Lab - Company Story Video"
          />

          {/* Overlay to prevent interaction */}
          <div className="absolute inset-0 pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;