import { motion } from 'motion/react';
import { MapPin, Mail, Phone, ChevronRight } from 'lucide-react';
import Reveal from '../components/Reveal';

export default function Contact() {
  return (
    <>
      {/* Hero Contact */}
      <section className="relative pt-40 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://cdn.thegioidiengiai.com/thegioidiengiaicdn/logo-digiwater/nghien-cuu-giai-phap-doc-quyen-bao-duong-may-loc-nuoc-dien-giai-digi-water.jpg" 
            alt="Contact Background" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Reveal direction="up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Liên hệ DigiWater</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto text-center">
              DigiWater luôn sẵn sàng hỗ trợ khách hàng trong việc phân tích và đánh giá chất lượng nguồn nước.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Info */}
            <div className="lg:w-1/3">
              <Reveal direction="left">
                <h2 className="text-3xl font-bold mb-8">Thông tin liên hệ</h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 mr-4 shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 mb-1">Địa chỉ</h5>
                      <p className="text-slate-500 text-sm">509 Lê Quang Định, Phường Hạnh Thông, Thành phố Hồ Chí Minh</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 mr-4 shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 mb-1">Email</h5>
                      <p className="text-slate-500 text-sm">contact@digiwater.vn</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 mr-4 shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 mb-1">Hotline</h5>
                      <a href="tel:18008130" className="text-sky-600 font-bold text-xl">1800 8130</a>
                      <p className="text-slate-400 text-xs mt-1">(Miễn phí cước gọi)</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 p-8 bg-slate-900 rounded-3xl text-white border border-transparent hover:border-sky-500/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.2)] transition-all duration-300">
                  <h4 className="font-bold mb-4">Cam kết của chúng tôi</h4>
                  <p className="text-sm text-slate-400 leading-relaxed text-justify">
                    DigiWater hướng đến phương pháp tư vấn minh bạch, khoa học và phù hợp với từng nguồn nước thực tế, giúp khách hàng hiểu đúng chất lượng nước đang sử dụng trước khi lựa chọn giải pháp.
                  </p>
                </div>
              </Reveal>
            </div>
            
            {/* Contact Button */}
            <div className="lg:w-2/3 flex items-center justify-center">
              <Reveal direction="right" delay={0.2} className="w-full">
                <a href="tel:18008130" className="w-full bg-white p-12 md:p-20 rounded-3xl border border-slate-100 hover:border-sky-400 hover:shadow-[0_0_50px_rgba(14,165,233,0.2)] transition-all duration-500 flex flex-col items-center justify-center text-center group">
                  <div className="w-20 h-20 bg-sky-50 rounded-full flex items-center justify-center text-sky-600 mb-8 group-hover:scale-110 transition-transform duration-500">
                    <Phone className="w-10 h-10 animate-pulse" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Liên hệ ngay để được tư vấn xét nghiệm nguồn nước miễn phí</h3>
                  <div className="text-4xl md:text-6xl font-black text-sky-600 mb-4 tracking-tighter">1800 8130</div>
                  <p className="text-slate-400 font-medium">(Miễn phí cước gọi)</p>
                  <div className="mt-10 bg-sky-600 hover:bg-sky-700 text-white py-4 px-10 rounded-xl font-bold text-lg shadow-xl shadow-sky-200 group-hover:shadow-2xl transition-all inline-flex items-center gap-2">
                    Gọi ngay cho chuyên gia
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal direction="up" className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Vị trí Viện nghiên cứu, kiểm định và phân tích nguồn nước DigiWater
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Khách hàng có thể đến trực tiếp DigiWater để được tư vấn, tiếp nhận mẫu nước 
              và hỗ trợ kiểm nghiệm nguồn nước bởi đội ngũ chuyên gia.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.2} className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3097.373258903929!2d106.68643877377546!3d10.817658158434385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f50!3m3!1m2!1s0x31752900025deb0d%3A0x34718f6bbec76f31!2zVGjhur8gR2nhu5tpIEzhu41jIFThu5VuZw!5e1!3m2!1svi!2s!4v1773201798880!5m2!1svi!2s"
              className="w-full h-[420px] lg:h-[520px]"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen={true}
            ></iframe>

            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>

            <div className="absolute left-6 bottom-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg px-5 py-4 border border-white/50">
              <p className="font-bold text-slate-900 text-sm">
                DigiWater Water Research Lab
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Thế Giới Lọc Tổng
              </p>
              <a 
                href="https://maps.app.goo.gl/2PP8ikZB4wBRrv6L9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sky-600 text-xs font-semibold mt-2 hover:text-sky-700 transition"
              >
                Xem trên Google Maps
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
