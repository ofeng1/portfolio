'use client';

import TableElement from './TableElement';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Carousel from './Carousel';

const rows = [
  {
    title: 'HELLO',
    description: 'NICE TO MEET YOU!',
    id: 0,
    children: (
      <div className="flex flex-col items-center gap-3 w-full max-w-[520px] px-2 sm:px-3 text-left">
        <video
          className="w-[55vw] max-w-[340px] min-w-[200px] aspect-video rounded-md"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/images/about_me.mp4" type="video/mp4" />
        </video>
        <p className="text-white font-[Inter] text-[95%] sm:text-[100%] font-light break-words">
          I&apos;m <b>Owen Feng</b>, an engineer passionate about the fields of <b>finance</b>,{' '}
          <b>software</b>, and <b>AI</b>. I enjoy working on all kinds of projects in these areas,
          whether it’s building predictive models, creating scalable systems, or designing simple
          apps people enjoy using. I’ve worked in startups, led data science projects, and spent
          plenty of time hands-on with code, always aiming to make complex ideas easy to understand
          and use.
        </p>
      </div>
    ),
  },
  {
    title: 'EDUCATION',
    description: 'MY SCHOOL + RELEVANT STATS',
    id: 1,
    children: (
      <div className="flex flex-col gap-4 w-full max-w-[500px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[500px] mx-auto text-left px-2 sm:px-4">
        <img
          src="/images/ucsb_img.png"
          alt="UCSB Logo"
          className="self-center w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] bg-white rounded-full"
        />
        <p className="text-white font-[Inter] text-[95%] sm:text-[100%] font-light">
          <b>🏫 Name:</b> University of California, Santa Barbara
        </p>
        <p className="text-white font-[Inter] text-[95%] sm:text-[100%] font-light">
          <b>✏️ Major:</b> Statistics and Data Science
        </p>
        <p className="text-white font-[Inter] text-[95%] sm:text-[100%] font-light">
          <b>👨‍🎓 GPA:</b> 3.80 / 4.00
        </p>
        <p className="text-white font-[Inter] text-[90%] sm:text-[100%] font-light break-words">
          <b>📚 Courses:</b> Linear Algebra, Differential Equations, Vector Calculus, Data Science
          Principles, Intermediate Python, Rigorous Proofs (Higher Math), Adv. Linear Algebra,
          Probability and Statistics, SAS Base Programming, Data Structures, Design of Experiments,
          Regression Analysis, Time Series, Stochastic Processes, Bayes Data Analysis, Stats Machine
          Leaning, Advanced Statistical Models, Risk Theory Analysis
        </p>
      </div>
    ),
  },
  {
    title: 'LANGUAGES',
    description: 'SOME SKILLS I OFFER',
    id: 2,
    children: (
      <div className="flex justify-center items-center w-full max-w-[500px] mx-auto px-2 sm:px-4">
        <div className="w-full max-w-[420px] sm:max-w-[480px] md:max-w-[500px] flex items-center justify-center origin-center scale-[0.7] sm:scale-[0.85] md:scale-100">
          <Carousel />
        </div>
      </div>
    ),
  },
  {
    title: 'EXPERIENCES',
    description: 'MY PAST ROLES',
    id: 3,
    children: (
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15, delayChildren: 0.05 },
          },
        }}
        className="flex flex-col md:flex-row w-full items-center justify-center gap-4 md:gap-4 lg:gap-6 xl:gap-8 px-2"
      >
        <motion.a
          href="https://www.sonnetai.com"
          target="_blank"
          rel="noopener noreferrer"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex flex-col gap-[1rem] items-center justify-center w-full max-w-[350px] sm:max-w-[300px]"
        >
          <motion.div
            variants={{
              hidden: { scale: 0, opacity: 0 },
              visible: {
                scale: 1,
                opacity: 1,
                transition: { type: 'spring', stiffness: 500, damping: 30 },
              },
            }}
            className="flex aspect-square w-[50vw] sm:w-[40vw] md:w-[16vw] lg:w-[14vw] xl:w-[12vw]
                        max-w-[220px] min-w-[110px]
                        bg-[linear-gradient(to_bottom,rgba(0,0,0,1)_75%,rgba(0,0,0,0.3)_100%)]
                        text-white border border-gray-400 rounded-[20px] p-3 md:p-4
                        items-center justify-center
                        transition-[width,height] duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            whileHover={{
              scale: 1.06,
              background:
                'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(143, 143, 143, 0.3) 100%)',
            }}
          >
            <img
              src="/images/sonnet_ai_img.png"
              alt="Sonnet AI"
              className="w-[60%] sm:w-[65%] md:w-[70%] max-w-[120px] h-auto object-contain"
              style={{ aspectRatio: '1 / 1' }}
            />
          </motion.div>

          <div className="flex flex-col gap-[0.5rem] w-full max-w-[300px] text-center">
            <p className="text-white font-[Inter] text-[120%] sm:text-[140%] font-medium">
              <b>Sonnet AI</b>
            </p>
            <p className="text-white font-[Inter] text-[95%] sm:text-[100%] font-light">
              SWE Intern
            </p>
            <p className="text-white font-[Inter] text-[95%] sm:text-[100%] font-light">
              <b>Dec 2023 - Jul 2024</b>
            </p>
          </div>
        </motion.a>
        <motion.a
          href="https://www.vannevarlabs.com"
          target="_blank"
          rel="noopener noreferrer"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex flex-col gap-[1rem] items-center justify-center w-full max-w-[350px] sm:max-w-[300px]"
        >
          <motion.div
            variants={{
              hidden: { scale: 0, opacity: 0 },
              visible: {
                scale: 1,
                opacity: 1,
                transition: { type: 'spring', stiffness: 500, damping: 30 },
              },
            }}
            className="flex aspect-square w-[50vw] sm:w-[40vw] md:w-[16vw] lg:w-[14vw] xl:w-[12vw]
                        max-w-[220px] min-w-[110px]
                        bg-[linear-gradient(to_bottom,rgba(0,0,0,1)_75%,rgba(0,0,0,0.3)_100%)]
                        text-white border border-gray-400 rounded-[20px] p-3 md:p-4
                        items-center justify-center
                        transition-[width,height] duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            whileHover={{
              scale: 1.06,
              background:
                'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(143, 143, 143, 0.3) 100%)',
            }}
          >
            <img
              src="/images/vannevar_img.png"
              alt="Vannevar Labs"
              className="w-[60%] sm:w-[65%] md:w-[70%] max-w-[120px] h-auto object-contain"
              style={{ aspectRatio: '1 / 1' }}
            />
          </motion.div>

          <div className="flex flex-col gap-[0.5rem] w-full max-w-[300px] text-center">
            <p className="text-white font-[Inter] text-[120%] sm:text-[140%] font-medium">
              <b>Vannevar Labs</b>
            </p>
            <p className="text-white font-[Inter] text-[95%] sm:text-[100%] font-light">
              Data Engineer
            </p>
            <p className="text-white font-[Inter] text-[95%] sm:text-[100%] font-light">
              <b>Oct 2024 - May 2025</b>
            </p>
          </div>
        </motion.a>
      </motion.div>
    ),
  },
  {
    title: 'RESUME',
    description: 'GRAB A COPY ON YOUR WAY OUT!',
    alt_description: 'CLICK HERE TO DOWNLOAD',
    id: 4,
    link: '/assets/OwenFeng_resume-3.pdf',
    children: (
      <div className="flex flex-col items-center justify-center w-full gap-2 sm:gap-3 md:gap-4 px-0">
        <img
          src="/images/resume_img.png"
          alt="Resume thumbnail"
          className="w-[55vw] sm:w-[50vw] md:w-[40vw] lg:w-[32vw] max-w-[400px] min-w-[180px] h-auto object-contain"
          style={{ aspectRatio: '4 / 3' }}
        />
      </div>
    ),
  },
];

export default function Table() {
  const [active, setActive] = useState(0);
  const current = rows.find((r) => r.id === active) ?? null;

  const elementList = rows.map((element) => (
    <TableElement key={element.id} title={element.title} description={element.description} />
  ));

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 bottom-[10%] md:bottom-[15%] z-[200] 
            flex flex-col md:flex-row w-[90vw] max-w-[99vw] h-auto md:h-[75%] gap-6 md:gap-[10%] items-stretch md:items-center
            bg-[rgba(108,108,108,0.3)] backdrop-blur-[10px] backdrop-saturate-[1.8]
            border-2 border-[rgba(207,207,207,0.2)] rounded-xl px-4 md:px-[5%] py-4 md:py-[2%]"
    >
      <ul className="list-none m-0 flex flex-col gap-0 w-full md:w-[55%] pl-0 md:pl-[5%] border-l-0">
        {rows.map((row, idx) => (
          <li
            tabIndex={0}
            onMouseEnter={() => setActive(row.id)}
            className={
              `table__row${idx === rows.length - 1 ? ' table__row--last' : ''}` +
              (active === row.id ? ' table__row--active' : '')
            }
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
      <div className="w-full md:w-[40%] h-auto md:h-full mt-6 md:mt-0 pr-0 md:pr-[5%] flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {current && (
            <motion.div
              key={current.id}
              initial="start"
              animate="middle"
              exit="end"
              variants={{
                start: { opacity: 0, y: 50 },
                middle: { opacity: 1, y: 0 },
                end: { opacity: 0, y: -50 },
              }}
              transition={{ duration: 0.1 }}
            >
              {current.children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
