const FOOTER_LINKS = {
  explore: [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Faq", href: "#" },
  ],
  hello: [
    { label: "Instagram", href: "#" },
    { label: "Tiktok", href: "#" },
  ],
  idea: [{ label: "Let's work together", href: "#" }],
};

interface FooterLinkGroupProps {
  classname?: string;
  title: string;
  links: { label: string; href: string }[];
}

const FooterLinkGroup: React.FC<FooterLinkGroupProps> = ({
  title,
  links,
  classname = "",
}) => {
  return (
    <div className={`flex flex-col ${classname}`}>
      <h2 className="text-gray-900 text-xl mb-2">{title}</h2>
      <div className="space-y-1.5 text-gray-500 flex flex-col">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="hover:underline hover:text-gray-800 transition-colors duration-200 ease-in-out"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="w-full px-18 py-20 bg-whisper font-recoleta rounded-t-[4rem]">
      <div className="flex justify-between flex-col md:flex-row gap-10">
        <div className="max-w-xs">
          <h1 className="text-black text-2xl mb-5">
            Menggali Potensi Lokal, Membawa UMKM ke Layar Global.
          </h1>
          <p className="text-gray-500">
            Kami menjembatani antara kreasi lokal dan pasar digital, menciptakan
            branding yang kuat, dan membangun ekosistem bisnis yang
            berkelanjutan.
          </p>
        </div>
        <FooterLinkGroup title="Explore" links={FOOTER_LINKS.explore} />
        <FooterLinkGroup title="Say hello!" links={FOOTER_LINKS.hello} />
        <FooterLinkGroup
          classname="mr-20"
          title="Got an idea?"
          links={FOOTER_LINKS.idea}
        />
      </div>
    </footer>
  );
}
