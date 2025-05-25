import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [scrolled, setScrolled] = useState(false); // State untuk mendeteksi scroll

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) { // Jika di-scroll lebih dari 50px
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Kelas Tailwind CSS yang akan berubah
  const navbarClasses = `
    fixed top-0 z-50
    transition-all duration-300 ease-in-out
    bg-gray-800 p-4 shadow-md
    ${scrolled ? 'rounded-xl m-1 md:w-5xl' : 'rounded-none w-full'} // Perubahan di sini!
  `;

  // Kelas untuk kontainer di dalam navbar agar rounded-nya juga ikut (opsional, tergantung desain)
  const containerClasses = `
    container mx-auto flex justify-between items-center
    ${scrolled ? 'rounded-full' : 'rounded-lg'} // Agar konten internal juga mengikuti
  `;

  const logoClasses = `
    text-white text-2xl font-bold transition-all duration-300 ease-in-out mr-2
  `;

  const linkClasses = `
    text-gray-300 hover:text-white transition duration-300
  `;

  return (
    <nav className={navbarClasses}>
      <div className={containerClasses}>
        {/* Logo */}
        <a href="/" className={logoClasses}>
          WarisanCandi
        </a>

        {/* Tombol Hamburger (Hanya terlihat di layar kecil) */}
        <div className="md:hidden pt-2">
          <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Navigasi Links (Terlihat di layar besar, disembunyikan di layar kecil) */}
        <div className="hidden md:flex space-x-6">
          <a href="/home" className={linkClasses}>
            Beranda
          </a>
          <a href="/features" className={linkClasses}>
            Tentang Kami
          </a>
          <a href="/pricing" className={linkClasses}>
            Candi - Candi
          </a>
          <a href="/contact" className={linkClasses}>
            Kontak
          </a>
          <a href="https://drive.google.com/file/d/1T04HUkVDPBHFyFsYoOZIcaF8I4s0JEyG/view" role="button" class="text-amber-50 inline-block bg-teal-600 p-0.5 rounded-lg">
              Augmented Reality
          </a>
        </div>
      </div>

      {/* Mobile Menu (Animasi Slide Down/Up) */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
          bg-gray-700 mt-4 rounded-md shadow-lg text-center
        `}
      >
        <a href="/home" className="block px-4 py-2 text-gray-300 hover:bg-gray-600 hover:text-white transition duration-300 rounded-t-md">
          Beranda
        </a>
        <a href="/features" className="block px-4 py-2 text-gray-300 hover:bg-gray-600 hover:text-white transition duration-300">
          Tentang Kami
        </a>
        <a href="/pricing" className="block px-4 py-2 text-gray-300 hover:bg-gray-600 hover:text-white transition duration-300">
          Candi - Candi
        </a>
        <a href="/contact" className="block px-4 py-2 text-gray-300 hover:bg-gray-600 hover:text-white transition duration-300 rounded-b-md">
          Kontak
        </a>
        <a href="https://drive.google.com/file/d/1T04HUkVDPBHFyFsYoOZIcaF8I4s0JEyG/view" role="button" class="text-amber-50 inline-block bg-teal-600 rounded-lg md:hidden p-2 w-full">
         Augmented Reality
        </a>
      </div>
    </nav>
  );
};

export default Navbar;