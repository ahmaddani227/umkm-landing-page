import AboutCards from "./AboutCards";

const AboutSection = () => {
  return (
    <section
      className="container text-center py-15 space-y-7 sm:space-y-10"
      id="about"
    >
      <div className="text-sm sm:text-lg text-primary flex flex-center mx-auto gap-2.5">
        <div className="animate-shake-slow">☀️</div> Bagaimana Kekuatan Lokal
        Bangkit?
      </div>
      <h2 className="text-[24px] sm:text-[64px] font-recoleta sm:leading-[70px] max-w-[900px] mx-auto">
        Sederhana. Kami Jelajahi, Kami Kembangkan, Bersama!
      </h2>
      <p className="text-[12px] sm:text-sm sm:max-w-[400px] max-w-[300px] mx-auto opacity-70">
        Kami mengawali dengan menggali cerita otentik Madura, lalu mengubahnya
        menjadi strategi digital yang terfokus, berdampak, dan terukur.{" "}
      </p>

      <AboutCards />
    </section>
  );
};

export default AboutSection;
