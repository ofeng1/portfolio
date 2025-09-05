"use client";;

import Home from "./components/Home";
import {useRef} from 'react';
import {useScroll} from 'framer-motion';
import BarEffect from './components/effects/BarEffect'
import About from "./components/About";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

export default function App() {
  const homeRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: homeRef,
    offset: ["end 105%", "end start"],
  });

  return (
    <div className="flex-col items-center content-center h-auto">
        <div id="home"/>
        <Home ref={homeRef} progress={scrollYProgress}/>
        <BarEffect progress={scrollYProgress}/>
        <About/>
        <Projects/>
        <ContactMe/>
    </div>
  );
}
