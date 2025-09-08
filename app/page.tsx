'use client';

import Home from './components/Home';
import { useState, useRef, useEffect } from 'react';
import { useScroll } from 'framer-motion';
import BarEffect from './components/effects/BarEffect';
import About from './components/About';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

export default function App() {
  const homeRef = useRef<HTMLElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: homeRef,
    offset: ['end 105%', 'end start'],
  });

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return isMobile ? (
    <div className="flex-col items-center content-center h-auto">
      <div id="home" />
      <Home ref={homeRef} progress={scrollYProgress} />
      <BarEffect progress={scrollYProgress} />
      <About />
      <Projects />
      <ContactMe />
    </div>
  ) : (
    <div className="bg-black">
      <h1 className="text-white [font-family:Inter]">
        Sorry, this website is not yet optimized for mobile devices! Please use a desktop browser to
        view this website.
      </h1>
    </div>
  );
}
