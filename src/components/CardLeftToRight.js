'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const images = [
  '/image1.avif',
  '/image2.avif',
  '/image3.avif',
  '/image4.avif',
  '/image5.avif',
];

const AnimatedCard = ({
  scrollYProgress,
  src,
  index,
  totalImages,
  initialOffset,
  cardWidth,
  gap,
}) => {
  const animationRange = [0, 0.55];
  const initialX = initialOffset + index * (cardWidth + gap);
  const finalX = -600;

  const x = useTransform(scrollYProgress, animationRange, [initialX, finalX]);
  const scale = useTransform(scrollYProgress, animationRange, [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 0.55], [0, index * 2]);
  const y = useTransform(scrollYProgress, [0.45, 0.6], [0, index * 20]);

  return (
    <motion.div
      className="absolute top-0 left-1/2 w-96 h-96"
      style={{
        x,
        scale,
        rotate,
        y,
        zIndex: totalImages - index,
      }}
      transition={{ type: 'spring', stiffness: 80, damping: 18 }}
    >
      <Image
        src={src}
        alt={`image ${index + 1}`}
        fill
        className="rounded-2xl object-cover shadow-2xl"
      />
    </motion.div>
  );
};

const CardLeftToRight = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const cardWidth = 384;
  const gap = 20;

  const totalFlexWidth = images.length * cardWidth + (images.length - 1) * gap;
  const initialOffset = -totalFlexWidth / 2 + cardWidth / 2;

  const textOpacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);
  const textX = useTransform(scrollYProgress, [0.55, 0.85], ['30%', '0%']);
  const textY = useTransform(scrollYProgress, [0.55, 0.85], ['-45%', '-50%']);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-gray-100 px-5">
      <div className="sticky top-0 h-screen grid md:flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-6xl h-96">
          <motion.div
            className="absolute right-0 top-1/2 w-1/2 pl-8"
            style={{
              opacity: textOpacity,
              x: textX,
              y: textY,
            }}
            transition={{ type: 'spring', stiffness: 60, damping: 20 }}
          >
            <h2 className="text-5xl font-extrabold text-black/80 leading-tight">
              Your mental <br /> wellness journey <br /> starts now
            </h2>
          </motion.div>

          {images.map((src, index) => (
            <AnimatedCard
              key={index}
              src={src}
              index={index}
              scrollYProgress={scrollYProgress}
              totalImages={images.length}
              initialOffset={initialOffset}
              cardWidth={cardWidth}
              gap={gap}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardLeftToRight;