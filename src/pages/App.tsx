import { useState } from "react";
import { motion } from "motion/react";
import { Toaster } from "sonner";
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import FloatingNav from "../components/FloatingNav";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SMEListSection from "../components/SMEListSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden">
        {isLoading && <Preloader onFinish={() => setIsLoading(false)} />}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Toaster />
          <Header />
          <HeroSection />
          <AboutSection />
          <SMEListSection />
          <FaqSection />
          <FloatingNav />
          <ContactSection />
          <Footer />
        </motion.div>
      </div>
    </>
  );
}

export default App;
