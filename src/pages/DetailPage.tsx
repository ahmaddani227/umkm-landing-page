import { useParams, Link } from "react-router-dom";
import { data } from "../lib/data";
import { Badge } from "../components/ui/badge";
import {
  ChevronsLeft,
  Briefcase,
  Lightbulb,
  Target,
  Tag,
  MapPin,
  Clock,
  Calendar,
  DollarSign,
  Users,
  Trophy,
  Phone,
  MapPinIcon,
  Star,
} from "lucide-react";
import { useEffect } from "react";
import { motion } from "framer-motion";

interface UmkmData {
  id: number;
  nama: string;
  sektor: string;
  image: string;
  deskripsi_singkat: string;
  tantangan_utama: string;
  solusi_digital: string;
  tag: string[];
  slug: string;
  tahunBerdiri?: number;
  lokasi?: string;
  jamOperasional?: string;
  metodePembayaran?: string[];
  produkUnggulan?: string[];
  targetPasar?: string;
  kisaranHarga?: string;
  pencapaian?: string[];
  kontak?: {
    whatsapp?: string;
    instagram?: string;
  };
  rencanaPengembangan?: string[];
}

const DetailPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const umkmData: UmkmData | undefined = data.find(
    (item) => item.slug === slug
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const slideInVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  if (!umkmData) {
    return (
      <div className="container min-h-screen flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-5xl font-recoleta mb-4 text-primary">404</h1>
          <p className="text-xl text-foreground/70 mb-8">
            Data UMKM dengan slug "{slug}" tidak ditemukan.
          </p>
          <Link
            to="/list"
            className="text-primary font-semibold hover:underline flex items-center justify-center gap-2"
          >
            <ChevronsLeft className="w-5 h-5" /> Kembali ke Daftar UMKM
          </Link>
        </div>
      </div>
    );
  }

  const formatText = (text: string) => {
    return text.replace(/\*(.*?)\*/g, "<em class='italic'>$1</em>");
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="container pt-20 pb-16 sm:pt-32 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2 mb-12 text-sm sm:text-base font-medium"
          >
            <ChevronsLeft className="w-4 h-4" /> Kembali ke Beranda
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <Badge
              variant="secondary"
              className="text-sm font-medium bg-primary/10 text-primary"
            >
              <MapPin className="w-3 h-3 mr-1" />
              Madura
            </Badge>
            <Badge variant="outline" className="text-sm font-medium">
              <Briefcase className="w-3 h-3 mr-1" />
              {umkmData.sektor}
            </Badge>
            {umkmData.tahunBerdiri && (
              <Badge variant="outline" className="text-sm font-medium">
                <Calendar className="w-3 h-3 mr-1" />
                {umkmData.tahunBerdiri}
              </Badge>
            )}
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl font-recoleta mb-6 leading-tight"
          >
            {umkmData.nama}
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-base sm:text-xl text-foreground/80 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: formatText(umkmData.deskripsi_singkat),
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-xl mb-16"
        >
          <img
            src={umkmData.image}
            alt={umkmData.nama}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/1200x675/e5e7eb/6b7280?text=Gambar+Tidak+Tersedia";
            }}
          />
        </motion.div>

        {(umkmData.lokasi ||
          umkmData.jamOperasional ||
          umkmData.targetPasar) && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {umkmData.lokasi && (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card p-6 rounded-xl border border-border shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <MapPinIcon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-lg">Lokasi</h3>
                  </div>
                  <p className="text-foreground/80">{umkmData.lokasi}</p>
                </motion.div>
              )}

              {umkmData.jamOperasional && (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card p-6 rounded-xl border border-border shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-lg">Jam Operasional</h3>
                  </div>
                  <p className="text-foreground/80">
                    {umkmData.jamOperasional}
                  </p>
                </motion.div>
              )}

              {umkmData.targetPasar && (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card p-6 rounded-xl border border-border shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-lg">Target Pasar</h3>
                  </div>
                  <p className="text-foreground/80">{umkmData.targetPasar}</p>
                </motion.div>
              )}

              {umkmData.kisaranHarga && (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card p-6 rounded-xl border border-border shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-lg">Kisaran Harga</h3>
                  </div>
                  <p className="text-foreground/80">{umkmData.kisaranHarga}</p>
                </motion.div>
              )}

              {umkmData.kontak && (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card p-6 rounded-xl border border-border shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 className="font-semibold text-lg">Kontak</h3>
                  </div>
                  <div className="space-y-2">
                    {umkmData.kontak.whatsapp && (
                      <p className="text-foreground/80">
                        📱 {umkmData.kontak.whatsapp}
                      </p>
                    )}
                    {umkmData.kontak.instagram && (
                      <p className="text-foreground/80">
                        📸 {umkmData.kontak.instagram}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}

              {umkmData.metodePembayaran && (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card p-6 rounded-xl border border-border shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-indigo-600" />
                    </div>
                    <h3 className="font-semibold text-lg">Pembayaran</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {umkmData.metodePembayaran.map((method, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {method}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.section>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto space-y-16"
        >
          {umkmData.produkUnggulan && (
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-recoleta font-semibold">
                  Produk Unggulan
                </h2>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {umkmData.produkUnggulan.map((produk, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-3 p-4 bg-background rounded-lg border"
                    >
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold text-sm">
                          {index + 1}
                        </span>
                      </div>
                      <span className="text-foreground/90">{produk}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          <motion.section variants={slideInVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-recoleta font-semibold">
                Tantangan Utama
              </h2>
            </div>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-card p-8 rounded-2xl border border-border shadow-sm"
            >
              <div
                className="text-lg text-foreground/90 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: formatText(umkmData.tantangan_utama),
                }}
              />
            </motion.div>
          </motion.section>

          <motion.section variants={slideInVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-recoleta font-semibold">
                Solusi Digital
              </h2>
            </div>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-card p-8 rounded-2xl border border-border shadow-sm"
            >
              <div
                className="text-lg text-foreground/90 leading-relaxed prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{
                  __html: umkmData.solusi_digital
                    .replace(
                      /\*\*(.*?)\*\*/g,
                      "<strong class='text-primary font-semibold'>$1</strong>"
                    )
                    .replace(/\*(.*?)\*/g, "<em class='italic'>$1</em>"),
                }}
              />
            </motion.div>
          </motion.section>

          {umkmData.pencapaian && (
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-recoleta font-semibold">
                  Pencapaian
                </h2>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
                <div className="space-y-4">
                  {umkmData.pencapaian.map((pencapaian, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 shrink-0`">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-foreground/90">{pencapaian}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {umkmData.rencanaPengembangan && (
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-recoleta font-semibold">
                  Rencana Pengembangan
                </h2>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {umkmData.rencanaPengembangan.map((rencana, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 bg-background rounded-lg border border-blue-200/30"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-semibold text-sm">
                            {index + 1}
                          </span>
                        </div>
                        <span className="text-foreground/90">{rencana}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          <motion.section variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Tag className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-recoleta font-semibold">
                Kategori & Tag
              </h2>
            </div>
            <motion.div className="flex flex-wrap gap-3">
              {umkmData.tag.map((t, index) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Badge
                    variant="secondary"
                    className="text-base font-medium px-4 py-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {t.replace(/\*/g, "")}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default DetailPage;
