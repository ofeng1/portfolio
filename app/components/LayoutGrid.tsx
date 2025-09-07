'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
  type MotionValue,
} from 'framer-motion';
import { Github, Code, Document } from './LinkIcons';

type LayoutGridProps = {
  cards: Card[];
  progress?: MotionValue<number>;
  sectionHeight?: string | number;
  className?: string;
  columns?: 1 | 2 | 3 | 4;
};

type Card = {
  id: number;
  thumbnail: string;
  title?: React.ReactNode;
  paragraph?: React.ReactNode;
  content?: React.ReactNode;
  github?: string;
  code?: string;
  document?: string;
};

type GridCardProps = {
  card: Card;
  index: number;
  total: number;
  progress: MotionValue<number>;
  hoveredCard?: number | null;
  setHoveredCard: (id: number | null) => void;
};

export default function LayoutGrid({
  cards,
  progress: progressProp,
  sectionHeight,
}: LayoutGridProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const ref = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (v > 0.0001) {
      setHoveredCard(null);
    }
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (v > 0.0001) {
      setHoveredCard(null);
    }
  });

  const progress = progressProp ?? scrollYProgress;
  const fastProgress = useTransform(progress, (v) => Math.min(1, v * 1.6));

  const total = cards.length;

  useEffect(() => {
    console.log('LayoutGrid hoveredCard state:', hoveredCard);
  }, [hoveredCard]);

  return (
    <section
      className="relative w-full justify-center items-center z-12"
      style={{
        height: sectionHeight,
      }}
      ref={ref}
    >
      <div className="sticky top-0 h-[6%] min-h-[100vh] flex w-[100%] gap-[1.5rem] mx-auto pl-[5%] pr-[5%] justify-center items-center isolate contain-paint">
        <div
          className="absolute left-0 top-0 w-full h-screen z-[10] pointer-events-none"
          style={{
            backgroundColor: 'black',
            opacity: hoveredCard !== null ? 0.5 : 0,
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            willChange: 'opacity',
            transition: 'opacity 250ms cubic-bezier(0.22,1,0.36,1)',
          }}
        />
        {cards.map((card, i) => {
          return (
            <GridCard
              key={card.id}
              card={card}
              index={i}
              progress={progress}
              total={total}
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
            />
          );
        })}
      </div>
    </section>
  );
}

function calculateCardPosition(index: number, total: number, overlap: number = 0.0) {
  const slice = 1 / total;
  const start = index * slice;
  const end = start + slice;

  return {
    start: start - index * overlap,
    end: end - index * overlap,
  };
}

function GridCard({ card, index, total, progress, hoveredCard, setHoveredCard }: GridCardProps) {
  function handleHover(id: number) {
    setHoveredCard(id);
    console.log('hovered');
    console.log(id);
  }

  function handleLeave() {
    setHoveredCard(null);
    console.log('left');
  }

  const { start, end } = calculateCardPosition(index, total, 0.15);
  const y = useTransform(progress, [start, end], ['200%', '0%']);

  const ySpring = useSpring(y, {
    stiffness: 260,
    damping: 28,
    mass: 0.8,
  });

  return (
    <motion.div
      style={{
        y: ySpring,
        willChange: 'transform, opacity',
        zIndex: hoveredCard === card.id ? 20 : 5,
        backgroundImage: `url(${card.thumbnail})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d',
        contain: 'paint',
      }}
      className="
            relative bg-white w-[25%] h-[75%] transform-gpu object-cover p-[1rem]
            "
      whileHover={{
        scale: 1.02,
        cursor: 'pointer',
      }}
      onHoverStart={() => handleHover(card.id)}
      onHoverEnd={handleLeave}
    >
      <motion.div
        initial="hidden"
        animate={hoveredCard === card.id ? 'visible' : 'hidden'}
        className="h-full flex flex-col justify-between"
      >
        <motion.h3
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: 'spring', stiffness: 500, damping: 30 },
            },
          }}
          className="text-white text-xl md:text-2xl font-[Aeonik Pro Regular] [font-weight:500] font-semibold drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
        >
          {card.title}
        </motion.h3>

        <div className="mt-4 flex flex-col gap-3">
          {card.paragraph && (
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: 'spring', stiffness: 500, damping: 30, delay: 0.05 },
                },
              }}
              className="text-[rgb(222,222,222)] text-xs md:text-sm font-geist-mono [font-weight:500] leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
            >
              {card.paragraph}
            </motion.p>
          )}

          {(card.github || card.code || card.document) && (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: 'spring', stiffness: 500, damping: 30, delay: 0.1 },
                },
              }}
              className="flex items-center gap-[0.5rem]"
            >
              {card.github && <Github link={card.github} size={21} />}
              {card.code && <Code link={card.code} size={26} />}
              {card.document && <Document link={card.document} size={26} />}
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
