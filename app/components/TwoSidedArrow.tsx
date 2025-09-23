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
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="flex items-center justify-center w-full relative">
        <motion.div
          className="flex items-center justify-center w-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          style={{ transformOrigin: 'center' }}
        >
          <motion.div
            className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[16px] border-r-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, scale: 1.1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          />
          <div
            className="h-px bg-white"
            style={{
              transform: 'translateY(0)',
              width: leftText || rightText ? '40px' : '80px',
            }}
          />
          {centerText && (
            <motion.div
              className="px-4 text-white text-sm font-medium whitespace-nowrap"
              style={{
                fontFamily: 'Aeonik Pro Regular',
                fontSize: 'clamp(0.6rem, 1.2vw, 1rem)',
                fontWeight: 400,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {centerText}
            </motion.div>
          )}
          <div
            className="h-px bg-white"
            style={{
              transform: 'translateY(0)',
              width: leftText || rightText ? '40px' : '80px',
            }}
          />
          <motion.div
            className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[16px] border-l-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, scale: 1.1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          />
        </motion.div>

        <motion.div
          className="absolute text-white text-sm font-medium"
          style={{
            fontFamily: 'Aeonik Pro Regular',
            fontSize: 'clamp(0.6rem, 1.2vw, 1rem)',
            left: centerText
              ? 'calc(50% - 18% - 8px - min(18vw, 360px))'
              : 'calc(50% - 23% - 8px - min(15vw, 300px))',
            transform: 'translateX(-100%)',
          }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          {leftText}
        </motion.div>

        <motion.div
          className="absolute text-white text-sm font-medium"
          style={{
            fontFamily: 'Aeonik Pro Regular',
            fontSize: 'clamp(0.6rem, 1.2vw, 1rem)',
            fontWeight: 400,
            right: centerText
              ? 'calc(50% - 18% - 8px - min(18vw, 360px))'
              : 'calc(50% - 23% - 8px - min(15vw, 300px))',
            transform: 'translateX(100%)',
          }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          {rightText}
        </motion.div>
      </div>
    </motion.div>
  );
}
