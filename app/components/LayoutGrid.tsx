"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform, 
  useMotionValueEvent,
  type MotionValue
} from "framer-motion";

type LayoutGridProps = {
    cards: Card[];
    progress?: MotionValue<number>;
    sectionHeight?: string | number;
    className?: string;
    columns?: 1 | 2 | 3 | 4;
};

type Card = {
    id: string | number;
    thumbnail: string;
    content: React.ReactNode;
};

type GridCardProps = {
    card: Card;
    index: number;
    total: number;
    progress: MotionValue<number>;
};

export default function LayoutGrid({ cards, progress: progressProp, sectionHeight } : LayoutGridProps) {
    const ref = useRef<HTMLElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })

    const progress = progressProp ?? scrollYProgress;

    const total = cards.length + 2;

    return (
        <section
            className="relative w-full justify-center items-center"
            style={{
                height: sectionHeight
            }}
            ref={ref}
        >
            <div className="
                sticky top-0 h-[100vh] min-h-[100vh] box-border
                px-[5%] py-[clamp(24px,6vh,64px)]
                grid grid-cols-1 sm:grid-cols-2
                grid-rows-none
                auto-rows-auto
                gap-[clamp(1.5rem,6vw,3rem)]
                max-w-[1400px] mx-auto
                justify-items-center items-start
                z-10 isolate
            ">
                {cards.map((card, i) => {
                    return (
                        <GridCard
                            key={card.id}
                            card={card}
                            index={i}
                            progress={progress}
                            total = {total}
                        />
                    )
                })}
            </div>
        </section>
    )
}  

function GridCard({ card, index, total, progress } : GridCardProps) {
    const slice = 1 / total;
    const start = index * slice;
    const end = start + slice;

    const y = useTransform(
        progress,
        [start, end],
        [1200, -1500]
    );

    return (
        <motion.div
          style={{
            y,
            willChange: "transform",
          }}
          className="
            relative flex flex-col gap-4
            w-[clamp(260px,34vw,460px)]
            p-4 md:p-5 min-w-0
            h-auto 
            bg-white rounded-2xl border border-[rgb(222,222,222)]
            shadow-[0_1px_2px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.5)]
            "   
        >
          <div className="relative rounded-xl overflow-hidden shrink-0">
            <img
              src={card.thumbnail}
              alt=""
              className="w-full aspect-[16/10] object-cover block"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-12"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,.15), transparent 70%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute left-0 bottom-0 w-px h-16"
              style={{
                background:
                  "linear-gradient(to top, var(--border, rgb(222,222,222)), transparent)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute right-0 bottom-0 w-px h-16"
              style={{
                background:
                  "linear-gradient(to top, var(--border, rgb(222,222,222)), transparent)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
              style={{ background: "var(--border, rgb(222,222,222))" }}
            />
          </div>
    
          <div className="mt-6 w-full break-words">{card.content}</div>
        </motion.div>
      );
}