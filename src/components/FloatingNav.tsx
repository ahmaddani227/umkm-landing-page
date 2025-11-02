"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "List", href: "#list" },
  { name: "FAQs", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const FloatingNav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.offsetHeight;
      const scrollBottom = documentHeight - (scrollY + windowHeight);

      // Tampilkan jika sudah scroll ke bawah (melebihi 100px)
      const shouldShow = scrollY > 100;

      // Sembunyikan jika 200px sebelum mencapai bawah
      const shouldHideNearBottom = scrollBottom <= 200;

      setShow(shouldShow && !shouldHideNearBottom);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 30 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center space-x-1 sm:space-x-2 p-2 sm:p-3 bg-gray-900/60 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
        <button
          onClick={scrollToTop}
          className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black"
        >
          <ArrowUp size={16} className="sm:w-5 sm:h-5" />
        </button>

        <div className="flex space-x-1 sm:space-x-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleAnchorClick(e, item.href)}
              className="relative flex items-center justify-center h-5 sm:h-6 overflow-hidden px-2 sm:px-4 py-1 sm:py-2 cursor-pointer group"
            >
              <div className="relative h-5 sm:h-6 overflow-hidden">
                <div className="flex flex-col transition-transform duration-300 ease-in-out group-hover:-translate-y-5 sm:group-hover:-translate-y-6">
                  <span className="leading-none h-5 sm:h-6 flex items-center text-xs sm:text-sm">
                    {item.name}
                  </span>
                  <span className="leading-none h-5 sm:h-6 flex items-center text-xs sm:text-sm">
                    {item.name}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingNav;
