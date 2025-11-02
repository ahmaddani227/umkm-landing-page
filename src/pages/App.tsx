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
  return (
    <>
      <Toaster />
      <Header />
      <HeroSection />
      <AboutSection />
      <SMEListSection />
      <FaqSection />
      <FloatingNav />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
