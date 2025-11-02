import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

const faq: FaqItem[] = [
  {
    question: "Apa dasar utama pemilihan UMKM yang didigitalisasi?",
    answer:
      "Kami menggunakan tiga kriteria: Originalitas Produk Lokal, Potensi Skalabilitas Pasar, dan Komitmen Pelaku UMKM terhadap adopsi digital.",
  },
  {
    question:
      "Bagaimana Anda menjamin narasi (copywriting) relevan dengan Madura?",
    answer:
      "Copywriting kami didasarkan pada riset mendalam dengan tim budaya lokal. Kami memastikan setiap narasi menonjolkan nilai otentik Budaya dan Kearifan Lokal Madura untuk membangun koneksi emosional.",
  },
  {
    question:
      "Apa technology stack yang digunakan untuk membangun landing page?",
    answer:
      "Kami menggunakan React Js untuk performa tinggi, Tailwind CSS untuk desain responsive mobile-first, dan optimalisasi gambar agresif untuk menjamin loading speed di bawah 2 detik.",
  },
  {
    question: "Bagaimana Anda mengukur kesuksesan digitalisasi ini?",
    answer:
      "Indikator utama kami adalah Peningkatan Traffic Organik ke landing page, Rata-rata Waktu di Halaman (Dwell Time), dan Peningkatan Leads/Inquiry yang diterima oleh UMKM.",
  },
  {
    question:
      "Bagaimana Proyek ini dapat berkelanjutan setelah kompetisi berakhir?",
    answer:
      "Kami menyediakan modul pelatihan basic maintenance kepada UMKM terpilih dan membangun struktur code yang modular, sehingga mereka dapat mengelola konten dasar secara mandiri.",
  },
];

const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const targetElement = document.getElementById("contact");

  if (targetElement) {
    const offset = 100;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

const FaqSection = () => {
  return (
    <section className="container flex-center py-10 sm:py-0" id="faq">
      <div className="h-fit flex flex-col sm:flex-row justify-between sm:space-x-10">
        <div className="flex-1 space-y-4 sm:space-y-7 mb-10 sm:mb-0">
          <div className="text-sm sm:text-lg text-primary flex gap-2.5 items-center">
            <div className="animate-shake-slow">❓</div>Detail Proyek
          </div>
          <h2 className="text-[24px] sm:text-[40px] font-recoleta sm:leading-[50px] max-w-[900px]">
            Pertanyaan Yang Sering Diajukan
          </h2>
          <p className="text-[12px] sm:text-sm opacity-70">
            Ingin tahu lebih dalam?{" "}
            {/* Mengganti Link dengan <a> dan onClick untuk smooth scroll */}
            <a
              href="#contact"
              onClick={scrollToContact}
              className="text-primary font-bold hover:underline"
            >
              Hubungi Kami
            </a>
          </p>
        </div>

        <div className="flex-1">
          <Accordion type="single" collapsible className="w-full h-fit!">
            {faq.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border/50"
              >
                <AccordionTrigger className="text-left text-base sm:text-lg hover:no-underline py-4 text font-recoleta">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[12px] sm:text-base text-muted-foreground pb-4 pt-0">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
