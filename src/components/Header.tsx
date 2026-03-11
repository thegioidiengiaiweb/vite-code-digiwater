import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header 
        id="header" 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' : 'py-5'}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
            <img 
              src="https://cdn.thegioidiengiai.com/thegioidiengiaicdn/logo-digiwater/digiwater-logo-01.png"
              alt="DigiWater Logo"
              className="h-10 md:h-12 object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8 items-center">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Trang chủ</NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Về DigiWater</NavLink>
            <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Dịch vụ xét nghiệm</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Liên hệ</NavLink>
            <a href="tel:18008130" className="btn btn-primary py-2 px-6 rounded-full text-sm font-semibold flex items-center gap-2">
              <Phone size={16} />
              1800 8130
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none text-slate-900"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 left-0 w-full h-screen bg-white z-[100] transition-transform duration-500 lg:hidden flex flex-col justify-center items-center space-y-8 text-xl font-medium ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <NavLink to="/" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>Trang chủ</NavLink>
        <NavLink to="/about" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>Về DigiWater</NavLink>
        <NavLink to="/services" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>Dịch vụ xét nghiệm</NavLink>
        <NavLink to="/contact" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>Liên hệ</NavLink>

        <a href="tel:18008130" className="btn btn-primary py-3 px-10 rounded-full flex items-center gap-2">
          <Phone size={20} />
          Hotline: 1800 8130
        </a>

        <button 
          onClick={closeMobileMenu}
          className="absolute top-6 right-6 text-3xl"
        >
          <X size={32} />
        </button>
      </div>
    </>
  );
};

export default Header;
