import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header id="header" className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'scrolled' : 'py-4'}`}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center">
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
            <a href="tel:18008130" className="btn btn-primary py-2 px-6 rounded-full text-sm font-semibold">
              1800 8130
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
          >
            <Menu className="text-slate-900" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-white z-[100] transition-transform duration-500 lg:hidden flex flex-col justify-center items-center space-y-8 text-xl font-medium ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>Trang chủ</NavLink>
        <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>Về DigiWater</NavLink>
        <NavLink to="/services" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>Dịch vụ xét nghiệm</NavLink>
        <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>Liên hệ</NavLink>

        <a href="tel:18008130" className="btn btn-primary py-3 px-10 rounded-full">
          Hotline: 1800 8130
        </a>

        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-3xl"
        >
          <X />
        </button>
      </div>
    </>
  );
}
