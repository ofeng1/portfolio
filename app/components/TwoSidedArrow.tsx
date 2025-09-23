import { motion } from 'framer-motion';

export default function TwoSidedArrow({
  leftText,
  rightText,
  centerText,
}: {
  leftText?: string;
  rightText?: string;
  centerText?: string;
}) {
  return (
    <motion.div
      className="flex items-center justify-center w-full"
      initial="rest"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex items-center justify-center w-full relative">
        <motion.div
          className="flex items-center justify-center w-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: 'center' }}
        >
          <motion.div
            className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[12px] border-r-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, scale: 1.1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3 }}
          />
          <div
            className="h-0.5 bg-white"
            style={{
              transform: 'translateY(0)',
              width: centerText ? '10%' : '25%',
            }}
          />
          {centerText && (
            <motion.div
              className="px-4 text-white text-sm font-medium whitespace-nowrap"
              style={{
                fontFamily: 'Aeonik Pro Regular',
                fontSize: 'clamp(1rem, 2vw, 1.875rem)',
                fontWeight: 400,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {centerText}
            </motion.div>
          )}
          <div
            className="h-0.5 bg-white"
            style={{
              transform: 'translateY(0)',
              width: centerText ? '10%' : '10%',
            }}
          />
          <motion.div
            className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[12px] border-l-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, scale: 1.1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="absolute text-white text-sm font-medium"
          style={{
            fontFamily: 'Aeonik Pro Regular',
            fontSize: 'clamp(0.75rem, 1.5vw, 1.25rem)',
            left: centerText
              ? 'calc(50% - 18% - 8px - min(18vw, 360px))'
              : 'calc(50% - 23% - 8px - min(15vw, 300px))',
            transform: 'translateX(-100%)',
          }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          {leftText}
        </motion.div>

        <motion.div
          className="absolute text-white text-sm font-medium"
          style={{
            fontFamily: 'Aeonik Pro Regular',
            fontSize: 'clamp(0.75rem, 1.5vw, 1.25rem)',
            fontWeight: 400,
            right: centerText
              ? 'calc(50% - 18% - 8px - min(18vw, 360px))'
              : 'calc(50% - 23% - 8px - min(15vw, 300px))',
            transform: 'translateX(100%)',
          }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          {rightText}
        </motion.div>
      </div>
    </motion.div>
  );
}
