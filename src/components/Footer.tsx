import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-1">
            <img 
              src="https://cdn.thegioidiengiai.com/thegioidiengiaicdn/logo-digiwater/digiwater-logo-01.png" 
              alt="DigiWater Logo" 
              className="h-10 mb-6 brightness-0 invert" 
              referrerPolicy="no-referrer"
            />
            <p className="text-sm leading-relaxed text-justify">
              DigiWater – Viện nghiên cứu, kiểm định và phân tích nguồn nước chuyên sâu tại Việt Nam. Thuộc hệ sinh thái Thế Giới Điện Giải & Thế Giới Lọc Tổng.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Liên kết</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-sky-400 transition-colors">Trang chủ</Link></li>
              <li><Link to="/about" className="hover:text-sky-400 transition-colors">Về DigiWater</Link></li>
              <li><Link to="/services" className="hover:text-sky-400 transition-colors">Dịch vụ xét nghiệm</Link></li>
              <li><Link to="/contact" className="hover:text-sky-400 transition-colors">Liên hệ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Dịch vụ</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-sky-400 transition-colors">Xét nghiệm nước máy</Link></li>
              <li><Link to="/services" className="hover:text-sky-400 transition-colors">Phân tích nước giếng</Link></li>
              <li><Link to="/services" className="hover:text-sky-400 transition-colors">Kiểm định nước uống</Link></li>
              <li><Link to="/services" className="hover:text-sky-400 transition-colors">Tư vấn giải pháp lọc</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Liên hệ</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-sky-500 shrink-0" />
                <span>509 Lê Quang Định, Phường Hạnh Thông, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-sky-500 shrink-0" />
                <span>contact@digiwater.vn</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-sky-500 shrink-0" />
                <span className="text-white font-bold">1800 8130</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} DigiWater. All rights reserved. Powered by Thế Giới Điện Giải.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
