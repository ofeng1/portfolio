'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HorizontalEffect from './effects/HorizontalEffect';

import ContactEmail from '../../public/images/contact_email.svg';
import ContactPhone from '../../public/images/contact_phone.svg';
import ContactLinkedin from '../../public/images/contact_linkedin.svg';
import Owen from '../../public/images/contact_owen.svg';

// Use direct public URLs to avoid TypeScript module resolution for non-standard extensions
// and reduce bundle size.

type Ring = {
  key: number;
  viewBox: string;
  px: number;
  duration: number;
  reverse: boolean;
  content: React.ReactNode;
};

type HeroImage = {
  src: string;
  width: number;
  height: number;
  alt?: string;
  id?: string | number;
};

function ContactMe() {
  const rings: Ring[] = [
    {
      key: 0,
      viewBox: '0 0 220 221',
      px: 220,
      duration: 36,
      reverse: false,
      content: <ContactEmail />,
    },
    {
      key: 1,
      viewBox: '0 0 168 168',
      px: 168,
      duration: 36,
      reverse: true,
      content: <ContactPhone />,
    },
    {
      key: 2,
      viewBox: '0 0 113 113',
      px: 113,
      duration: 36,
      reverse: false,
      content: <ContactLinkedin />,
    },
    {
      key: 3,
      viewBox: '0 0 62 62',
      px: 62,
      duration: 36,
      reverse: true,
      content: <Owen />,
    },
  ];

  const text = 'Contact Me';

  const heroImages: HeroImage[] = [
    { src: '/images/IMG_1756.jpg', width: 300, height: 200 },
    { src: '/images/IMG_6746.jpg', width: 150, height: 250 },
    { src: '/images/IMG_0992.jpg', width: 300, height: 200 },
    { src: '/images/IMG_9127.JPG', width: 200, height: 300 },
    { src: '/images/IMG_6943.JPG', width: 200, height: 200 },
    { src: '/images/IMG_7151.JPG', width: 200, height: 200 },
    { src: '/images/IMG_1466.HEIC', width: 200, height: 300 },
    { src: '/images/IMG_0795.HEIC', width: 200, height: 200 },
    { src: '/images/IMG_9526.JPG', width: 300, height: 200 },
  ];

  const handleClick = () => {
    window.open('mailto:owenfeng2005@gmail.com?subject=Hello%20Owen', '_blank');
  };

  return (
    <HorizontalEffect delay={0.2} sectionHeight="800vh" images={heroImages}>
      <div className="flex items-center justify-center gap-[125vh]">
        <div className="text-black font-semibold [font-family:Inter] leading-[1] text-center whitespace-pre text-[clamp(4rem,50vw,50rem)]">
          {Array.from(text).map((ch, i) => (
            <Letter key={i} ch={ch} />
          ))}
        </div>

        <div id="contact" className="relative flex flex-col items-center justify-center">
          <motion.button
            className="absolute grid place-items-center w-[140px] h-[140px] rounded-full border-0 cursor-pointer bg-black text-white"
            whileHover={{ scale: 1.1, color: 'black', backgroundColor: 'white' }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 600, damping: 30 }}
            onClick={handleClick}
          >
            <h1 className="text-[18px] font-normal [font-family:Inter]">Message Me!</h1>
          </motion.button>

          <Rings rings={rings} />
        </div>
      </div>
    </HorizontalEffect>
  );
}

export default ContactMe;

function Letter({ ch }: { ch: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { amount: 0.6, once: true });

  const MASK_EM = 1;

  return (
    <span
      ref={ref}
      className="inline-block align-bottom overflow-hidden"
      style={{ height: `${MASK_EM}em`, lineHeight: '1em' }}
    >
      <motion.span
        variants={{
          hidden: { y: `${MASK_EM}em`, opacity: 1 },
          visible: {
            y: '0em',
            opacity: 1,
            transition: { type: 'spring', delay: 0.1, stiffness: 700, damping: 42, mass: 0.7 },
          },
        }}
        initial="hidden"
        animate={inView ? 'visible' : undefined}
        className="inline-block will-change-transform [backface-visibility:hidden] [transform:translateZ(0)]"
      >
        {ch === ' ' ? '\u00A0' : ch}
      </motion.span>
    </span>
  );
}

function Rings({ rings }: { rings: Ring[] }) {
  const OUTER_BASE = 220;
  const SCALE = 2.5;

  return (
    <div
      className="
        relative grid place-items-center
        w-[min(70vmin,660px)] aspect-[220/221] pointer-events-none
      "
    >
      {rings.map((r) => (
        <motion.svg
          key={r.key}
          viewBox={r.viewBox}
          preserveAspectRatio="xMidYMid meet"
          initial={{ rotate: 0 }}
          animate={{ rotate: r.reverse ? -360 : 360 }}
          transition={{ duration: r.duration, ease: 'linear', repeat: Infinity }}
          className="col-start-1 row-start-1 h-auto [transform-box:fill-box] [transform-origin:50%_50%] will-change-transform"
          style={{
            width: `${(r.px / OUTER_BASE) * SCALE * 100}%`,
          }}
        >
          {r.content}
        </motion.svg>
      ))}
    </div>
  );
}
