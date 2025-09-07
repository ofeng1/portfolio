'use client';

import React from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

type HeroImage = {
  src: string;
  width: number;
  height: number;
  alt?: string;
  id?: string | number;
};

type HorizontalEffectProps = {
  children: React.ReactNode;
  delay?: number; // 0..1
  sectionHeight: string | number;
  images: HeroImage[];
};

export default function HorizontalEffect({
  children,
  delay = 0,
  sectionHeight,
  images,
}: HorizontalEffectProps) {
  const ref = React.useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });

  const x = useTransform(scrollYProgress, [delay, 1], ['100vw', '-300vw']);
  const carouselX = useTransform(scrollYProgress, [delay, 1 - 0.08], ['100vw', '-300vw']);

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#FF4F00] z-[100]"
      style={{ height: sectionHeight }}
    >
      <div className="sticky top-0 h-[100vh] w-[100vw]">
        <div className="relative inset-0 grid h-full w-full place-items-center overflow-hidden">
          {/* Text layer */}
          <motion.div
            className="absolute inset-0 z-[90] flex w-[100vw] items-center justify-start will-change-transform"
            style={{ x }}
          >
            {children}
          </motion.div>

          {/* Carousel layer */}
          <motion.div
            className="absolute inset-0 z-[95] flex w-[100vw] items-center justify-start pointer-events-none will-change-transform"
            style={{ x: carouselX }}
          >
            {images.map((image, index) => (
              <ImageReveal
                key={image.id ?? index}
                image={image}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ImageReveal({
  scrollYProgress,
  index,
  image,
}: {
  scrollYProgress: MotionValue<number>;
  index: number;
  image: HeroImage;
}) {
  const level = index % 2 === 0 ? 1 : -1;

  const step = 1 / 14;
  const start = Math.max(0, 0.2 + index * step);
  const end = start + step * 0.5;

  const imgX = useTransform(scrollYProgress, [start, end], ['-110%', '0%']);

  return (
    <div
      className="absolute pointer-events-none z-[95] -translate-y-1/2"
      style={{
        top: `calc(50% + ${level * 250}px)`,
        left: `calc(${index * 22}vw + 80vw)`,
        width: image.width,
        height: image.height,
        overflow: 'hidden',
      }}
    >
      <motion.img
        src={image.src}
        alt={image.alt ?? ''}
        className="block h-full w-full object-cover will-change-transform"
        style={{ x: imgX }}
      />
    </div>
  );
}
