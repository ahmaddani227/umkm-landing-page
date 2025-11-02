const Footer = () => {
  return (
    <footer className="relative py-16 sm:py-24 bg-black rounded-t-[40px] overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-white/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-4">
            Madura<span className="text-primary">Kita</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Menciptakan pengalaman luar biasa melalui desain dan inovasi
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Proyek
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Desain Web
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pengembangan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Penjenamaan (Branding)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Konsultasi
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Terhubung</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Dribbble
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Kontak</h3>
            <ul className="space-y-2 text-gray-400">
              <li>halo@madura.com</li>
              <li>+62 812 3456 7890</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">
            © 2025 Madura. Semua hak dilindungi.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Privasi
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Ketentuan
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-600 to-transparent"></div>
    </footer>
  );
};

export default Footer;
