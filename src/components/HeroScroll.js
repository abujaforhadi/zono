'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const HeroScroll = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const cardOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const cardY = useTransform(scrollYProgress, [0, 0.4], ['30px', '0px']); 

  return (
    <section ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ scale: imageScale }}
        >
          <Image
            src="/sun.avif"
            alt="Woman enjoying the sun"
            fill
            className="object-cover"
          />
        </motion.div>

        
        <div className="relative h-full flex items-end px-20 pb-20">
          <motion.div
            className="max-w-md rounded-2xl bg-white/80 p-8 shadow-lg backdrop-blur-sm"
            style={{
              opacity: cardOpacity,
              y: cardY,
            }}
          >
            <div className="mb-3 inline-block rounded-full bg-gray-200 px-3 py-1 text-xs font-medium bg-gray-300 text-gray-800">
              Personal Growth
            </div>
            <h2 className="text-4xl font-bold text-gray-800">
              Feel more human every day
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroScroll;