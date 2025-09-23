import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function Visible({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [textHeight, setTextHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const height = containerRef.current.offsetHeight;
      setTextHeight(height);
    }
  }, []);

  return (
    <motion.span
      ref={containerRef}
      className="inline-block relative overflow-hidden p-0 m-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="bg-white absolute left-0 z-20"
        style={{
          top: `${textHeight * 0.02}px`,
          height: `${textHeight * 0.96}px`,
          width: '100%',
        }}
        variants={{
          hidden: { x: '-100%' },
          visible: {
            x: '100%',
            transition: {
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2,
            },
          },
        }}
      />
      <motion.span
        className="relative z-10 inline-block"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 13,
            transition: {
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.6,
            },
          },
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}
