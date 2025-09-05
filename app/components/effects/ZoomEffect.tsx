"use client";

import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import AboutFilled from "../../images_and_whatnot/fill_text.svg";
import AboutOutline from "../../images_and_whatnot/no_fill_text.svg";
import Table from "../Table";
import { table } from "console";

type ZoomEffectProps = {
    text: string;
    children?: React.ReactNode;
};

export default function ZoomEffect({text, children}: ZoomEffectProps) {
    
    const ref = useRef<HTMLElement | null>(null);
    const stateRef = useRef<HTMLDivElement | null>(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const scale = useTransform(scrollYProgress, [0.15, 0.77], [5, 1600]);
    const fillFade  = useTransform(scrollYProgress,   [0.03, 0.05, 0.2, 0.23],  [0, 1, 1, 0]);
    const textFade = useTransform(scrollYProgress, [0, 0.03], [1, 0]);
    const aboutFade = useTransform(scrollYProgress, [0.03, 0.04], [0, 1]);
    const imgY = useTransform(scrollYProgress, [0.13, 1], [100, -50]);
    const imgFade = useTransform(scrollYProgress, [0.2, 0.213, 0.85, 1], [0, 1, 1, 0]);
    const blackOut = useTransform(scrollYProgress, [0.6, 1], ["rgba(0,0,0,0)", "rgba(0,0,0,1)"]);
    const panY = useTransform(scrollYProgress, [0.15, 0.5], [0, -2000]);
    const tableY = useTransform(scrollYProgress, [0.5, 1], ["100vh", "-100vh"]);

    return (
        <section ref={ref} className="relative h-[1000vh]">
            <motion.div
                className="sticky top-0 z-10 w-screen h-screen overflow-hidden m-0 flex flex-col items-center justify-center pointer-events-none"
                style={{ backgroundColor: blackOut, willChange: "background-color" }}
            >
                <motion.p
                    className="text-black font-extrabold [font-family:Inter] pt-[5%] mb-[30vh] text-[clamp(2.5rem,6vw,3rem)]"
                    style={{ opacity: textFade }}
                >
                    {text}
                </motion.p>
    
                <motion.div
                    className="absolute left-0 w-full h-full flex items-center justify-center origin-center top-0 z-[100]"
                    style={{ scale, opacity: fillFade, y: panY }}
                >
                    <AboutFilled />
                </motion.div>
    
                <motion.div
                    className="absolute left-0 w-full h-full flex items-center justify-center origin-center top-0 z-[100]"
                    style={{ opacity: aboutFade, scale, y: panY}}
                >
                    <AboutOutline
                    />
                </motion.div>
    
                <motion.div
                    className="absolute inset-0 m-auto w-full h-auto aspect-[200/115] origin-center z-[96]"
                    style={{ scale: 1.15, opacity: imgFade, y: imgY }}
                >
                    {children}
                </motion.div>
            </motion.div>
            <div id="about" data-offset="4500"/>
            <motion.div
                className="relative z-50 h-screen pointer-events-auto"
                style={{ y: tableY }}
            >
                <Table/>
            </motion.div>`
        </section>
    );

}