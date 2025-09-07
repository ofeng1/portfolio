import LayoutGrid from "./LayoutGrid";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const cards = [
    {
        id: 1,
        thumbnail: "/images/retinal.png",
        title: "Computer Vision for Diabetic Retinopathy",
        paragraph: "An automated pipeline uses transfer learning with a pretrained ResNet-50 to classify diabetic retinopathy from retinal fundus images.",
        github: "https://github.com/Shashin-Gupta/DSCollaborativeProject",
        document: "https://docs.google.com/presentation/d/1YSQD0Rb6j7T8PBjOzoOuOWqWq9zqxMcsqF4G7bL5010/edit?usp=sharing",
    },
    {
        id: 2,
        thumbnail: "/images/bloom.png",
        title: "Analysis of the Bloom Filter Data Structure",
        paragraph: "A concise explainer of how bloom filters encode set membership, why they permit false positives, and how hash count governs the accuracy–memory trade-off.",
        code: "https://github.com/Shashin-Gupta/DSCollaborativeProject",
        document: "https://docs.google.com/presentation/d/1YSQD0Rb6j7T8PBjOzoOuOWqWq9zqxMcsqF4G7bL5010/edit?usp=sharing",
    },
    {
        id: 3,
        thumbnail: "/images/tbd.png",
        title: "Forecasting on Federal Unemployment Rates",
        paragraph: "",
    },
    {
        id: 4,
        thumbnail: "/images/time.png",
        title: "Forecasting on Federal Unemployment Rates",
        paragraph: "A brief study of how time-series models trained on 2009–2019 data estimate an alternative U.S. unemployment path, quantifying the pandemic labor-market shock.",
        github: "https://github.com/ofeng1/UnemploymentTimeSeries",
        document: "https://github.com/ofeng1/UnemploymentTimeSeries/blob/main/Owen-Feng-174-final-project.pdf",
    },
];

function Projects() {

    const ref = useRef<HTMLElement | null>(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });
  
    const SECTION_HEIGHT = `1016vh`;

    const color = useTransform(scrollYProgress, [0.4,  0.6], ["#fff", "#000"]);
    const steps = cards.length;
    const slice = 0.6 / steps;
    const startOffset = 0.1;
    const maxHeightVh = 800;
    const gradientHeightRaw = useTransform(scrollYProgress, (v) => {
        let sum = 0;
        for (let i = 0; i < steps; i++) {
            const start = startOffset + i * slice;
            const end = start + slice;
            const n = (v - start) / (end - start);
            const t = n <= 0 ? 0 : n >= 1 ? 1 : n;
            sum += t;
        }
        const progressPerCards = sum / steps; // 0..1 across all cards
        return `${progressPerCards * maxHeightVh}vh`;
    });
    const gradientHeight = useSpring(gradientHeightRaw, { stiffness: 140, damping: 22, mass: 0.6 });

    return (
        <>
            <section
                className="relative z-30 bg-black w-full"
                style={{
                height: SECTION_HEIGHT,
                }}
                id="projects"
                ref={ref}
                data-offset="500"
            >
                <div className="flex items-center justify-center sticky top-0 w-full h-screen z-5">
                    <motion.h1
                        className="font-[Inter] text-[24vw] [font-weight:700] text-center leading-none"
                        style={{
                            color,
                        }}
                    >
                        Projects
                    </motion.h1>
                </div>
                <LayoutGrid cards={cards} progress={scrollYProgress} sectionHeight={"800vh"} />
                <motion.div
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 w-full pointer-events-none z-2"
                    style={{ height: gradientHeight }}
                >
                    <div className="w-full h-full bg-gradient-to-b from-[#FF4F00] to-transparent
                        supports-[background:linear-gradient(in_oklch,_transparent,_#FF4F00)]:bg-[linear-gradient(in_oklch,_transparent_0%,_#FF4F00_100%)]" />
                </motion.div>
        </section>
        </>
  );
}

export default Projects;