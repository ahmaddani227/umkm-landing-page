import { useState } from "react";
import { motion } from "motion/react";

import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SMEListSection from "../components/SMEListSection";
import Preloader from "../components/animations/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {isLoading && <Preloader onFinish={() => setIsLoading(false)} />}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <Header />
        <HeroSection />
        <AboutSection />
        <SMEListSection />
        <FaqSection />
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
