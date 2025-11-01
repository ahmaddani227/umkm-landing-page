import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface PreloaderProps {
  onFinish: () => void;
}

export default function Preloader({ onFinish }: PreloaderProps) {
  const [progress, setProgress] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState<boolean>(false);

  useEffect(() => {
    let start = 0;
    const end = 100;
    const duration = 2500;
    const stepTime = duration / end;

    const timer = setInterval(() => {
      start += 1;
      setProgress(start);

      if (start === end) {
        clearInterval(timer);
        setIsCompleted(true);
        setTimeout(() => {
          setIsAnimatingOut(true);
          setTimeout(() => onFinish(), 1000);
        }, 400);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!isAnimatingOut && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-0 bg-black"
            initial={{ y: "100%" }}
            animate={isAnimatingOut ? { y: 0 } : { y: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />

          <div className="absolute bottom-10 right-10">
            <motion.span
              className="md:text-9xl text-6xl font-semibold text-black font-recolate tracking-wider select-none"
              animate={
                isCompleted
                  ? {
                      y: "-120%",
                      opacity: 0,
                      scaleY: 1.4,
                    }
                  : {
                      y: 0,
                      opacity: 1,
                      scaleY: 1,
                      filter: "blur(0px)",
                    }
              }
              transition={
                isCompleted
                  ? {
                      duration: 0.9,
                      ease: [0.65, 0, 0.35, 1],
                    }
                  : {
                      repeat: Infinity,
                      duration: 1.2,
                      ease: "easeInOut",
                    }
              }
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              {progress}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
