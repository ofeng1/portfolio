import { useState, useEffect } from 'react';
import { motion, useTransform, useMotionValueEvent, type MotionValue } from 'framer-motion';

type BarEffectProps = { progress: MotionValue<number> };

function useViewportHeight() {
  const [vh, setVh] = useState(0);
  useEffect(() => {
    const onR = () => setVh(window.innerHeight);
    onR();
    window.addEventListener('resize', onR);
    window.visualViewport?.addEventListener('resize', onR);
    window.visualViewport?.addEventListener('scroll', onR);
    return () => {
      window.removeEventListener('resize', onR);
      window.visualViewport?.removeEventListener('resize', onR);
      window.visualViewport?.removeEventListener('scroll', onR);
    };
  }, []);
  return vh;
}

function useBeam(progress: MotionValue<number>, delay: number, vh: number) {
  const travel = vh * 1.2;
  return useTransform(progress, [delay, 1], [travel, -travel], { clamp: false });
}

export default function BarEffect({ progress }: BarEffectProps) {
  const vh = useViewportHeight();

  const beams = [
    useBeam(progress, 0.16, vh),
    useBeam(progress, 0.08, vh),
    useBeam(progress, 0, vh),
    useBeam(progress, 0.08, vh),
    useBeam(progress, 0.16, vh),
  ];

  return (
    <motion.div className="fixed inset-0 flex pointer-events-none z-10">
      {beams.map((y, i) => (
        <motion.div
          key={i}
          className="w-[20%] h-[150vh] bg-white will-change-transform backface-hidden contain-paint"
          style={{
            y,
          }}
        />
      ))}
    </motion.div>
  );
}
