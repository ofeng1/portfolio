"use client";

import TableElement from "./TableElement";
import {useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import resume_img from "../images_and_whatnot/resume_img.png";
import ucsb_img from "../images_and_whatnot/ucsb_img.png";
import vannevar_img from "../images_and_whatnot/vannevar_img.png";
import sonnet_img from "../images_and_whatnot/sonnet_ai_img.png";
import Carousel from "./Carousel";

const rows = [
    {
        title: 'HELLO', 
        description: 'NICE TO MEET YOU!',
        id: 0,
        children: (
            <div className="flex flex-col items-center gap-[1rem] max-w-[500px] text-left">
                <video className="w-[460px]" autoPlay loop muted playsInline preload="metadata">
                    <source src="/about_me.mp4" type="video/mp4" />
                </video>
                <p className="text-white font-[Inter] text-[100%] font-light">I&apos;m <b>Owen Feng</b>, an engineer passionate about the fields of <b>finance</b>, <b>software</b>, and <b>AI</b>. I enjoy working on all kinds of projects in these areas, whether it’s building predictive models, creating scalable systems, or designing simple apps people enjoy using. I’ve worked in startups, led data science projects, and spent plenty of time hands-on with code, always aiming to make complex ideas easy to understand and use.</p>
            </div>
        )
    },
    {
        title: 'EDUCATION', 
        description: 'MY SCHOOL + RELEVANT STATS',
        id: 1,
        children: (
            <div className="flex flex-col gap-[1rem] w-[80%] mx-auto text-left">
                <img 
                    src={ucsb_img.src}
                    alt="UCSB Logo"
                    className="self-center w-[180px] bg-white rounded-full"
                />
                <p className="text-white font-[Inter] text-[100%] font-light"><b>🏫 Name:</b> University of California, Santa Barbara</p>
                <p className="text-white font-[Inter] text-[100%] font-light"><b>✏️ Major:</b> Statistics and Data Science</p>
                <p className="text-white font-[Inter] text-[100%] font-light"><b>👨‍🎓 GPA:</b> 3.80 / 4.00</p>
                <p className="text-white font-[Inter] text-[100%] font-light"><b>📚 Courses:</b> Linear Algebra, Differential Equations, 
                Vector Calculus, Data Science Principles, 
                Intermediate Python, Rigorous Proofs (Higher Math), 
                Adv. Linear Algebra, Probability and Statistics, SAS Base Programming, 
                Data Structures, Design of Experiments, Regression Analysis, Time Series, 
                Stochastic Processes, Bayes Data Analysis, Stats Machine Leaning, Advanced Statistical Models, Risk Theory Analysis</p>
            </div>
        )
    },
    {
        title: 'LANGUAGES', 
        description: 'SOME SKILLS I OFFER', 
        id: 2,
        children: (
            <Carousel/>
        )
    },
    {
        title: 'EXPERIENCES', 
        description: 'MY PAST ROLES',
        id: 3,
        children: (
            <motion.div
                initial = "hidden"
                animate = "visible"
                exit = "hidden"
                variants = {{
                    hidden:  { opacity: 0, y: 50 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { staggerChildren: 0.15, delayChildren: 0.05 }
                    }
                }}
                className="flex w-full gap-[10%] items-center justify-center"
            >
                <motion.a 
                    href="https://www.sonnetai.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variants={{
                        hidden:  { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    className="flex flex-col gap-[1rem] items-center justify-center"
                >
                    <motion.div
                        variants={{
                            hidden:  { scale: 0, opacity: 0 },
                            visible: {
                            scale: 1,
                            opacity: 1,
                            transition: { type: "spring", stiffness: 500, damping: 30}
                            }
                        }}
                        className="flex w-[28vh] h-[28vh]
                        bg-[linear-gradient(to_bottom,rgba(0,0,0,1)_75%,rgba(0,0,0,0.3)_100%)]
                        text-white border border-gray-400 rounded-[20px] p-4
                        items-center justify-center
                        transition-[width,height] duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                        whileHover={{
                            scale: 1.06,
                            background: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(143, 143, 143, 0.3) 100%)',
                        }}
                    >
                        <img 
                            src={sonnet_img.src} 
                            alt="Sonnet AI"
                            style={{
                                width: 120,
                            }}
                        />
                    </motion.div>
                
                    <div className="flex flex-col gap-[0.5rem] w-full max-w-[300px] text-center">
                        <p className="text-white font-[Inter] text-[140%] font-medium"><b>Sonnet AI</b></p>
                        <p className="text-white font-[Inter] text-[100%] font-light"> SWE Intern (San Francisco)</p>
                        <p className="text-white font-[Inter] text-[100%] font-light"><b>Dec 2023 - Jul 2024</b></p>
                    </div> 
                </motion.a>
                <motion.a 
                    href="https://www.vannevarlabs.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variants={{
                        hidden:  { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    className="flex flex-col gap-[1rem] items-center justify-center"
                >
                    <motion.div
                        variants={{
                            hidden:  { scale: 0, opacity: 0 },
                            visible: {
                            scale: 1,
                            opacity: 1,
                            transition: { type: "spring", stiffness: 500, damping: 30}
                            }
                        }}
                        className="flex w-[27vh] h-[27vh]
                        bg-[linear-gradient(to_bottom,rgba(0,0,0,1)_75%,rgba(0,0,0,0.3)_100%)]
                        text-white border border-gray-400 rounded-[20px] p-4
                        items-center justify-center
                        transition-[width,height] duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                        whileHover={{
                            scale: 1.06,
                            background: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(143, 143, 143, 0.3) 100%)',
                        }}
                    >
                        <img 
                            src={vannevar_img.src} 
                            alt="Vannevar Labs"
                            className="w-[120px]"
                        />
                    </motion.div>
                
                    <div className="flex flex-col gap-[0.5rem] w-full max-w-[300px] text-center">
                        <p className="text-white font-[Inter] text-[140%] font-medium"><b>Vannevar Labs</b></p>
                        <p className="text-white font-[Inter] text-[100%] font-light"> Data Engineer (Remote)</p>
                        <p className="text-white font-[Inter] text-[100%] font-light"><b>Oct 2024 - May 2025</b></p>
                    </div> 
                </motion.a>
            </motion.div>
        )

    },
    {
        title: 'RESUME', 
        description: 'GRAB A COPY ON YOUR WAY OUT!',
        alt_description: 'CLICK HERE TO DOWNLOAD',
        id: 4,
        link: '/assets/OwenFeng_resume-3.pdf',
        children: (
            <div className="flex flex-col gap-[1rem] items-center justify-center width-full">
                <img 
                    src={resume_img.src} 
                    alt="Resume thumbnail"
                    className="w-[400px] h-auto"
                />
            </div>
        ),
    }
];

export default function Table () {
    const [active, setActive] = useState(0);
    const current = rows.find(r => r.id === active) ?? null;


    const elementList = rows.map(
        element => <TableElement key={element.id} title={element.title} description={element.description}/>
    );

    return (
        <div
            className="absolute left-1/2 -translate-x-1/2 bottom-[15%] z-[200] 
            flex w-[100%] max-w-[93%] h-[75%] gap-[10%] items-center
            bg-[rgba(108,108,108,0.3)] backdrop-blur-[10px] backdrop-saturate-[1.8]
            border-2 border-[rgba(207,207,207,0.2)] rounded-xl p-[2%]"
        >
            <ul className="list-none m-0 flex flex-col gap-0 w-[50%]">
                {rows.map((row, idx) => (
                    <li
                        onMouseEnter = {() => setActive(row.id)}
                        className={`table__row${idx === rows.length-1 ? " table__row--last" : ""}`  +
                        (active === row.id ? " table__row--active" : "")}
                        key={row.id}
                    >
                        {row.link ? (
                            <a href={row.link} target="_blank" rel="noopener noreferrer">
                                <h3 className="table__title">{row.title}</h3>
                                <div className="table__swap">
                                <p className="table__desc">{row.description}</p>
                                {row.alt_description && (
                                    <p className="table__desc table__alt">{row.alt_description}</p>
                                )}
                                </div>
                            </a>
                        ) : (
                            <>
                                <h3 className="table__title">{row.title}</h3>
                                <div className="table__swap">
                                <p className="table__desc">{row.description}</p>
                                {row.alt_description && (
                                    <p className="table__desc table__alt">{row.alt_description}</p>
                                )}
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
            <div className="h-full w-[40%] flex flex-col items-center justify-center">
                <AnimatePresence mode="wait">
                    {current && (
                        <motion.div
                            key={current.id} 
                            initial = "start"
                            animate = "middle"
                            exit = "end"
                            variants = {{
                                start: {opacity: 0, y: 50},
                                middle: {opacity: 1, y: 0},
                                end: {opacity: 0, y: -50}
                            }}
                            transition={{duration: 0.1}}
                        >
                            {current.children}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}