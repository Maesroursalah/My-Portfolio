import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 600);
          }, 200);
          return 100;
        }
        // Random incremental steps for organic counter feel
        const diff = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + diff, 100);
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#150B0A] p-6 text-[#fff8f0] select-none font-sans"
        >
          {/* Centered Logo Animation */}
          <div className="my-auto flex flex-col items-center justify-center">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: [0.6, 1.05, 1], opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-3xl overflow-hidden border-2 border-[#572A26] bg-[#251110] shadow-2xl p-1.5 flex items-center justify-center group"
            >
              <img
                src={PERSONAL_INFO.logo}
                alt="Mesrour Salah Eddine Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D68379]/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

          {/* Minimal Progress Bar at Bottom */}
          <div className="w-full max-w-xs space-y-2 mb-8">
            <div className="h-1 w-full bg-[#251110] rounded-full overflow-hidden border border-[#572A26]">
              <motion.div
                className="h-full bg-gradient-to-r from-[#B85C52] via-[#C8746B] to-[#D68379]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
