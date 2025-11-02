import { data } from "../lib/data";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="sm:pt-[120px] container space-y-7 sm:space-y-10 pt-[100px] pb-10">
      <p className="text-center text-primary flex justify-center gap-2.5">
        <div className="animate-shake-slow">👋</div>
        <span className="text-sm sm:text-lg">Hi, Kita dari kelompok ...</span>
      </p>

      <h1 className="text-center text-[32px] sm:text-[80px] font-recoleta mx-auto sm:leading-[90px] leading-10">
        Menggali Potensi Lokal, Membawa UMKM ke Layar Global.
      </h1>

      <p className="text-center sm:max-w-[400px] mx-auto text-[12px] max-w-[80%] sm:text-sm opacity-70">
        Kami menjembatani antara kreasi lokal dan pasar digital, menciptakan
        branding yang kuat, dan membangun ekosistem bisnis yang berkelanjutan.
      </p>

      <div className="mx-auto flex gap-4 sm:max-w-[400px] max-w-[300px]">
        <Button className="flex-1">Strategi Kami</Button>
        <Button className="flex-1" variant={"secondary"}>
          List UMKM
        </Button>
      </div>

      <div className="relative w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={data[currentImageIndex].image}
            alt={data[currentImageIndex].nama}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

        <div className="absolute bottom-6 left-6">
          <motion.h3
            key={currentImageIndex}
            className="text-white text-xl sm:text-2xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {data[currentImageIndex].nama}
          </motion.h3>
        </div>

        <div className="absolute bottom-4 right-6 flex gap-2">
          {data.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
