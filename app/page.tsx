'use client';

import Home from './components/Home';
import { useState, useRef, useEffect } from 'react';
import { useScroll } from 'framer-motion';
import BarEffect from './components/effects/BarEffect';
import About from './components/About';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

export default function App() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: isMobile ? undefined : homeRef,
    offset: ['end 105%', 'end start'],
  });

  useEffect(() => {
    let prev = window.innerWidth < 1000;
    const onResize = () => {
      const m = window.innerWidth < 1000;
      if (prev && !m) {
        scrollYProgress.set(0);
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
      prev = m;
      setIsMobile(m);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return !isMobile ? (
    <div className="flex-col items-center content-center h-auto">
      <div id="home" />
      <Home ref={homeRef} progress={scrollYProgress} />
      <BarEffect progress={scrollYProgress} />
      <About />
      <Projects />
      <ContactMe />
    </div>
  ) : (
    <div className="bg-black flex justify-center items-center h-screen">
      <h1 className="text-white [font-family:Inter] text-3xl text-center px-3">
        Sorry, this website is not yet optimized for mobile! Please use a desktop browser to view
        this website.
      </h1>
    </div>
  );
}
