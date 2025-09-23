'use client';

import { useRef } from 'react';
import image11 from '../../public/images/IMG_1062_2.jpg';
import ZoomEffect from './effects/ZoomEffect';

export default function About() {
  const aboutRef = useRef<HTMLElement | null>(null);

  return (
    <section ref={aboutRef} className="h-[1000vh] z-20 bg-white w-full items-center flex flex-col">
      <ZoomEffect text="what's this guy all..." targetRef={aboutRef}>
        <div
          className="h-screen w-full"
          style={{
            background: `url(${image11.src}) center/cover`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </ZoomEffect>
    </section>
  );
}
