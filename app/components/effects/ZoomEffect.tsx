'use client';

import React from 'react';
import { motion, useTransform, useScroll, useSpring } from 'framer-motion';
import AboutFilled from '../../../public/images/fill_text.svg';
import AboutOutline from '../../../public/images/no_fill_text.svg';
import Table from '../Table';

type ZoomEffectProps = {
  text: string;
  children?: React.ReactNode;
  targetRef: React.RefObject<HTMLElement | null>;
};

export default function ZoomEffect({ text, children, targetRef }: ZoomEffectProps) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const textFade = useTransform(scrollYProgress, [0, 0.01], [1, 0]);

  const fillFade = useTransform(scrollYProgress, [0.01, 0.03, 0.09, 0.5], [0, 1, 1, 0]);
  const aboutFade = useTransform(scrollYProgress, [0.01, 0.03], [0, 1]);

  const imgFade = useTransform(scrollYProgress, [0.09, 0.1, 0.95, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.08, 0.85], [3, 3, 750]);
  const panY = useTransform(scrollYProgress, [0.08, 0.85], [0, -2000]);
  const panX = useTransform(scrollYProgress, [0.08, 0.85], [0, 300]);
  const imgY = useTransform(scrollYProgress, [0.13, 1], [50, -50]);
  const divY = useTransform(
    scrollYProgress,
    [0.63, 0.73, 0.83, 1],
    ['100vh', '0vh', '0vh', '-100vh'],
  );
  const blackOut = useTransform(scrollYProgress, [0.6, 1], ['rgba(0,0,0,0)', 'rgba(0,0,0,1)']);

  return (
    <section ref={targetRef} style={{ height: '1000vh' }} className="relative">
      <motion.div
        className="sticky top-0 z-10 w-screen h-screen overflow-hidden m-0 flex flex-col items-center justify-center pointer-events-none"
        style={{ backgroundColor: blackOut, willChange: 'background-color' }}
      >
        <motion.p
          className="text-black font-extrabold [font-family:Inter] text-[clamp(2.5rem,6vw,3rem)]"
          style={{ opacity: textFade }}
        >
          {text}
        </motion.p>

        <motion.div
          className="absolute left-0 w-full h-full flex items-center justify-center origin-center -top-[20px] z-[100]"
          style={{ scale, opacity: fillFade, y: panY, x: panX }}
        >
          <AboutFilled />
        </motion.div>

        <motion.div
          className="absolute left-0 w-full h-full flex items-center justify-center origin-center -top-[20px] z-[100]"
          style={{ opacity: aboutFade, scale, y: panY, x: panX }}
        >
          <AboutOutline />
        </motion.div>

        <motion.div
          className="absolute inset-0 m-auto w-full h-auto aspect-[200/115] origin-center z-[96]"
          style={{ scale: 1.15, opacity: imgFade, y: imgY }}
        >
          {children}
        </motion.div>
      </motion.div>
      <div id="about" data-offset="4500" />
      <motion.div
        className="fixed top-0 left-0 z-100"
        style={{ y: divY, width: '100%', height: '100vh' }}
      >
        <motion.div
          className="relative z-50 h-screen pointer-events-auto"
          style={{ willChange: 'opacity' }}
        >
          <Table />
        </motion.div>
      </motion.div>
    </section>
  );
}
