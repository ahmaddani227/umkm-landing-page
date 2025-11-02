import { data } from "../lib/data";
import { useNavigate } from "react-router-dom";

import { motion } from "motion/react";
import type { Variants } from "motion/react";

const SMEListSection = () => {
  const navigate = useNavigate();
  const handleClick = (slug: string) => {
    navigate(`/umkm/${slug}`);
  };

  const cardVariants: Variants = {
    hidden: (i: number) => ({
      opacity: 0,
      x: i % 2 === 0 ? -50 : 50,
      y: i % 3 === 0 ? 30 : 0,
      scale: 0.98,
    }),
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <section
      className="container text-center py-15 space-y-7 sm:space-y-10"
      id="list"
    >
      <div className="text-sm sm:text-lg text-primary flex flex-center mx-auto gap-2.5">
        <div className="animate-shake-slow">✨</div>Dampak Nyata
      </div>
      <h2 className="text-[24px] sm:text-[64px] font-recoleta sm:leading-[70px] max-w-[900px] mx-auto">
        Kisah Keunggulan Lokal
      </h2>
      <p className="text-[12px] sm:text-sm sm:max-w-[400px] max-w-[300px] mx-auto opacity-70">
        Bersama UMKM pilihan, kami membuktikan bahwa produk lokal dengan
        storytelling yang tepat mampu menembus batas pasar digital.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-10 text-left">
        {data.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-2 cursor-pointer group"
            onClick={() => handleClick(item.slug)}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={item.image}
                alt={item.nama}
                className="object-cover group-hover:scale-105 transition-all duration-500 w-full aspect-square"
              />
            </div>
            <div className="font-recoleta text-[24px] mt-5">{item.nama}</div>
            <p className="line-clamp-1 text-base opacity-60">
              {item.deskripsi_singkat}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SMEListSection;
