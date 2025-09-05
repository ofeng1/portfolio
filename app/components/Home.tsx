"use client";

import { forwardRef } from "react";
import { motion, type MotionValue } from "framer-motion";
import Signature from "./Signature";
import image4 from "../images_and_whatnot/IMG_1059.jpg";

type HomeProps = {
  progress: MotionValue<number>;
};

const Home = forwardRef<HTMLElement, HomeProps>(function Home(_props, ref) {
  return (
    <motion.section
      ref={ref}
      className="bg-black w-full h-[300vh]"
    >
      <Signature text="Welcome." image={image4.src} />
    </motion.section>
  );
});

export default Home;