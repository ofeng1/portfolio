import LayoutGrid from "./LayoutGrid";
import retinopathy from "../images_and_whatnot/Retinopathy.png";
import bloom from "../images_and_whatnot/bloom.png";
import time from "../images_and_whatnot/time_ser.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import github from "../images_and_whatnot/github_img.png";
import code from "../images_and_whatnot/code.webp";
import document from "../images_and_whatnot/document.png";

const SkeletonOne: React.FC = () => {
    return(
        <div>
            <p className="font-bold text-4xl text-black bg-transparent block mb-[1rem] md:mb-[1.5rem]">
                Computer Vision on Diabetic Retinopathy
            </p>
  
            <p className="font-normal text-base md:text-lg leading-relaxed text-black bg-transparent block mb-0">
                An automated pipeline uses transfer learning with a pretrained ResNet-50 to classify diabetic retinopathy from retinal fundus images.
            </p>
  
            <div className="flex items-center gap-[0.5rem] bottom-[1rem] mt-[1.75rem]">
                <Github link="https://github.com/Shashin-Gupta/DSCollaborativeProject" size={23}/>
                <Document link="https://docs.google.com/presentation/d/1YSQD0Rb6j7T8PBjOzoOuOWqWq9zqxMcsqF4G7bL5010/edit?usp=sharing" />
            </div>
      </div>
    );
};

const SkeletonTwo: React.FC = () => {
    return(
        <div>
            <p className="font-bold text-3xl text-black bg-transparent block mb-[1rem] md:mb-[1.5rem]">
                Deconstruction of Bloom Filter
            </p>
  
            <p className="font-normal text-base md:text-med leading-relaxed text-black bg-transparent block mb-0">
                A concise explainer of how Bloom filters encode set membership with a bit array and multiple hash functions, why they permit false positives but not false negatives, and how size and hash count govern the accuracy–memory trade-off.
            </p>
  
            <div className="flex items-center gap-[0.5rem] bottom-[1rem] mt-[1.75rem]">
                <Code link="https://github.com/Shashin-Gupta/DSCollaborativeProject" size={23}/>
                <Document link="https://docs.google.com/presentation/d/1YSQD0Rb6j7T8PBjOzoOuOWqWq9zqxMcsqF4G7bL5010/edit?usp=sharing" />
            </div>
      </div>
    );
};

const SkeletonThree: React.FC = () => {
    return(
        <div>
            <p className="font-bold text-3xl text-black bg-transparent mb-[1rem] md:mb-[1.5rem]">
                Forecasting on Federal Unemployment Rates
            </p>
            <p className="font-normal text-med text-black bg-transparent block mb-[2rem]">
            </p>
            {/* <div className="flex items-center gap-[0.5rem] w-full mt-[2rem]">
                <Code link={"https://colab.research.google.com/drive/1UoN4gan5UPYHT7LlRlHoAijAUVYwZmJ5?usp=sharing"}/>
                <Document link={"https://docs.google.com/document/d/1PYu12MBSPItAMHPNff1v9MVJf0XEWMAVD5FBVkq6vQY/edit?usp=sharing"}/>  
            </div> */}
        </div>
    );
};

const SkeletonFour: React.FC = () => {
    return(
        <div>
            <p className="font-bold text-3xl text-black bg-transparent m-0 block mb-[2rem]">
                Forecasting Federal Unemployment Rates
            </p>
            <p className="font-normal text-med text-black bg-transparent block mb-[2rem]">
                A brief study showing how time-series techniques trained on 2009–2019 data estimate a counterfactual U.S. unemployment path absent COVID-19, and how the deviation of actual post-2020 rates from that path quantifies the pandemic’s labor-market shock.
            </p>
            <div className="flex items-center gap-[0.5rem] w-full">
                <Github link={"https://github.com/ofeng1/UnemploymentTimeSeries"} size={23}/>
                <Document link={"https://github.com/ofeng1/UnemploymentTimeSeries/blob/main/Owen-Feng-174-final-project.pdf"}/>
            </div>
        </div>
    );
};

const Github = ({ link, size = 28 } : { link: string; size?: number }) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="inline-flex"
        style={{ width: size, height: size }}
    >
        <img
            src={github.src}
            alt="GitHub"
            className="w-full h-full object-cover block bg-transparent radius-[4px]"
        />
    </a>
);

const Code = ({ link, size = 28 } : { link: string; size?: number }) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Code"
        className="inline-flex"
        style={{ width: size, height: size }}
    >
        <img
            src={code.src}
            alt="Code"
            className="w-full h-full object-cover block bg-transparent radius-[4px]"
        />
    </a>
);

const Document = ({ link, size = 28 } : { link: string; size?: number }) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Document"
        className="inline-flex"
        style={{ width: size, height: size }}
    >
        <img
            src={document.src}
            alt="Document"
            className="w-full h-full object-cover block bg-transparent radius-[4px]"
        />
    </a>
);

const cards = [
    { id: 1, content: <SkeletonOne />, className: "md:col-span-2", thumbnail: retinopathy.src },
    { id: 2, content: <SkeletonTwo />, className: "col-span-1", thumbnail: bloom.src },
    { id: 3, content: <SkeletonThree />, className: "col-span-1", thumbnail: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { id: 4, content: <SkeletonFour />, className: "md:col-span-2", thumbnail: time.src },
];

function Projects() {

    const ref = useRef<HTMLElement | null>(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });
  
    const SECTION_HEIGHT = `1016vh`;

    const color = useTransform(scrollYProgress, [0, 0.8, 0.8, 0.9], ["#fff", "#fff", "#fff", "#000"]);

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
                <div className="flex justify-center content-center sticky top-0 w-full">
                    <motion.h1
                        className="text-[25vw]"
                        style={{
                            color,
                        }}
                    >
                        Projects
                    </motion.h1>
                </div>

                <LayoutGrid cards={cards} progress={scrollYProgress} sectionHeight={"800vh"} />
        
                <div
                    aria-hidden="true"
                    className="
                        w-full h-[146vh] opacity-100
                        bg-gradient-to-b from-black to-[#FF4F00]
                        supports-[background:linear-gradient(in_oklch,_#000,_#FF4F00)]:bg-[linear-gradient(in_oklch,_#000_0%,_#FF4F00_100%)]
                    "
                />
        </section>
        </>
  );
}

export default Projects;