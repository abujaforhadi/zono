'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollZoom = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const centerImageScale = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const outerImageOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const positiveTranslate = useTransform(scrollYProgress, [0, 0.4], [0, 200]);
  const negativeTranslate = useTransform(scrollYProgress, [0, 0.4], [0, -200]);
  const textOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.5, 0.8], ['30px', '0px']);

  const allImages = [
    { id: 10, position: 'top-left' ,img: "/image1.avif"},     { id: 11, position: 'top-center' ,img: "/image2.avif"},    { id: 12, position: 'top-right' ,img: "/image3.avif"},
    { id: 13, position: 'middle-left' ,img: "/image4.avif"},  { id: 14, position: 'center' ,img: "/image5.avif"},        { id: 15, position: 'middle-right' ,img: "/1.avif"},
    { id: 16, position: 'bottom-left' ,img: "/2.avif"},  { id: 17, position: 'bottom-center' ,img: "/3.avif"}, { id: 18, position: 'bottom-right' ,img: "/5.avif"},
  ];

  const getTranslateValues = (position) => {
    let x = 0;
    let y = 0;
    
    if (position.includes('left')) x = negativeTranslate;
    if (position.includes('right')) x = positiveTranslate;
    if (position.includes('top')) y = negativeTranslate;
    if (position.includes('bottom')) y = positiveTranslate;
    
    return { x, y };
  };

  return (
    <motion.div ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4 p-4">
          {allImages.map((image) => {
            const imageClass = "h-full w-full object-cover rounded-3xl";

            if (image.position === 'center') {
              return (
                <motion.img
                  key={image.id}
                  src={image.img}
                  alt="Central zoom image"
                  className={`col-start-2 row-start-2 ${imageClass}`}
                  style={{ scale: centerImageScale }}
                />
              );
            } else {
              const { x, y } = getTranslateValues(image.position);
              return (
                <motion.img
                  key={image.id}
                  src={`https://picsum.photos/id/${image.id}/400/400`}
                  alt={`Grid image ${image.id}`}
                  className={imageClass}
                  style={{
                    opacity: outerImageOpacity,
                    x: x,
                    y: y,
                  }}
                />
              );
            }
          })}
        </div>

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-white"
          style={{ opacity: textOpacity, y: textY }}
        >
          <p className="mb-4 rounded-full bg-black/50 px-4 py-2 text-neutral-200 backdrop-blur-sm">
            Personal Growth
          </p>
          <h2 className="text-center text-4xl font-bold shadow-2xl md:text-6xl">
            AI that understands
            <br />
            your emotions
          </h2>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ScrollZoom;