import { motion } from "motion/react";
import AboutCards from "./AboutCards";
import type { Variants } from "motion/react";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
  },
};

const AboutSection = () => {
  return (
    <motion.section
      className="container text-center py-15 space-y-7 sm:space-y-10"
      id="about"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="text-sm sm:text-lg text-primary flex flex-center mx-auto gap-2.5"
        variants={item}
      >
        <div className="animate-shake-slow">☀️</div> Bagaimana Kekuatan Lokal
        Bangkit?
      </motion.div>

      <motion.h2
        className="text-[24px] sm:text-[64px] font-recoleta sm:leading-[70px] max-w-[900px] mx-auto"
        variants={item}
      >
        Sederhana. Kami Jelajahi, Kami Kembangkan, Bersama!
      </motion.h2>

      <motion.p
        className="text-[12px] sm:text-sm sm:max-w-[400px] max-w-[300px] mx-auto opacity-70"
        variants={item}
      >
        Kami mengawali dengan menggali cerita otentik Madura, lalu mengubahnya
        menjadi strategi digital yang terfokus, berdampak, dan terukur.
      </motion.p>

      <AboutCards />
    </motion.section>
  );
};

export default AboutSection;
