'use client';

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from 'framer-motion';
import { useRef, useState } from 'react';
import SlideEffect from './effects/SlideEffect';

export default function Signature({ text, image }: { text: string; image?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const pathLengthMotion: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [0, 0.57]);
  const opacityMotion: MotionValue<number> = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div ref={ref} className="h-[500vh]">
      <div
        className="sticky top-0 h-screen flex items-center justify-center flex-col z-[10]"
        style={{
          backgroundImage: image ? `url(${image})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="
                    absolute inset-0
                    bg-gradient-to-b from-black/30 to-black/50
                    backdrop-blur-[4px]
                    pointer-events-none
                    -z-[10]
                "
        />
        <SlideEffect pathLength={pathLengthMotion} opacity={opacityMotion} />
        <h1 className="font-[Inter] [font-weight:700] text-4xl text-white text-[clamp(3rem,10vw,6rem)] mt-6">
          {text}
        </h1>
      </div>
    </div>
  );
}
