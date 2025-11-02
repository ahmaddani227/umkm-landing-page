import { Home, Globe, Sparkles, Store } from "lucide-react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";

const cards = [
  {
    icon: <Home size={24} strokeWidth={1.8} />,
    title: "Temukan Potensi",
    gradient: "from-[#b9ec1f]/10 to-[#b9ec1f]/5",
    description:
      "Kurasi mendalam UMKM unik Madura. Menemukan produk dan kisah otentik yang siap diangkat ke permukaan digital.",
  },
  {
    icon: <Globe size={24} strokeWidth={1.8} />,
    title: "Akselerasi Digital",
    gradient: "from-sky-400/10 to-blue-500/5",
    description:
      "Merancang landing page powerful. Mengembangkan aset digital UMKM agar mampu bersaing di pasar online nasional.",
  },
  {
    icon: <Sparkles size={24} strokeWidth={1.8} />,
    title: "Validasi Narasi",
    gradient: "from-purple-400/10 to-pink-500/5",
    description:
      "Memastikan narasi dan fungsionalitas website optimal. Kami uji dan sempurnakan berdasarkan feedback pengguna awal.",
  },
  {
    icon: <Store size={24} strokeWidth={1.8} />,
    title: "Dampak Komunitas",
    gradient: "from-emerald-400/10 to-lime-500/5",
    description:
      "Membawa produk lokal Madura ke jangkauan nasional, menciptakan pertumbuhan ekonomi yang berkelanjutan bagi wirausaha lokal.",
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const AboutCards = () => {
  return (
    <motion.div
      className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-left"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          variants={cardVariant}
          whileHover={{
            scale: 1.02,
            y: -4,
            boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
          }}
          transition={{
            duration: 0.6,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="relative rounded-2xl p-8 border border-[--border] bg-[--card] backdrop-blur-sm overflow-hidden group"
        >
          <div
            className={`absolute inset-0 bg-linear-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
          />

          <div className="flex flex-col gap-4 relative z-10">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[--accent] text-[--primary] bg-opacity-10 border border-[--border] group-hover:bg-opacity-20 transition-all duration-500">
              {card.icon}
            </div>
            <span className="font-recoleta text-lg text-[--primary]">
              {card.title}
            </span>
            <p className="text-[13px] leading-relaxed text-[--muted-foreground]">
              {card.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AboutCards;
