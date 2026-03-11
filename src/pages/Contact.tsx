import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  ChevronRight,
  Send,
  CheckCircle2
} from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      
      // Reset form (if it was a real form)
      (e.target as HTMLFormElement).reset();

      // Hide toast after 4 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    }, 1500);
  };

  return (
    <>
      {/* Hero Contact */}
      <section className="relative pt-40 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://cdn.thegioidiengiai.com/thegioidiengiaicdn/logo-digiwater/nghien-cuu-giai-phap-doc-quyen-bao-duong-may-loc-nuoc-dien-giai-digi-water.jpg" alt="Contact Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center reveal">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Liên hệ DigiWater</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto text-center">
            DigiWater luôn sẵn sàng hỗ trợ khách hàng trong việc phân tích và đánh giá chất lượng nguồn nước.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Info */}
            <div className="lg:w-1/3 reveal">
              <h2 className="text-3xl font-bold mb-8">Thông tin liên hệ</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 mr-4 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1">Địa chỉ</h5>
                    <p className="text-slate-500 text-sm">509 Lê Quang Định, Phường Hạnh Thông, Thành phố Hồ Chí Minh</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 mr-4 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1">Email</h5>
                    <p className="text-slate-500 text-sm">contact@digiwater.vn</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 mr-4 shrink-0">
                    <Phone size={24} />
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
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-2/3 reveal delay-200">
              <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Gửi tin nhắn cho chúng tôi</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Họ và tên</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Nguyễn Văn A"
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Số điện thoại</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="090x xxx xxx"
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email (không bắt buộc)</label>
                    <input 
                      type="email" 
                      placeholder="example@gmail.com"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Nội dung cần tư vấn</label>
                    <textarea 
                      rows={4} 
                      required 
                      placeholder="Tôi muốn xét nghiệm nguồn nước tại khu vực..."
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-sky-600 hover:bg-sky-700 disabled:bg-slate-400 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-sky-200 hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Gửi thông tin tư vấn
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-8 py-4 rounded-2xl shadow-2xl z-[100] animate-bounce-in flex items-center gap-3">
          <CheckCircle2 className="text-emerald-400" size={24} />
          <p className="font-medium">Cảm ơn bạn đã liên hệ! DigiWater sẽ phản hồi sớm nhất có thể.</p>
        </div>
      )}

      {/* Map Embed */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Vị trí Viện nghiên cứu, kiểm định và phân tích nguồn nước DigiWater
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Khách hàng có thể đến trực tiếp DigiWater để được tư vấn, tiếp nhận mẫu nước 
              và hỗ trợ kiểm nghiệm nguồn nước bởi đội ngũ chuyên gia.
            </p>
          </div>

          {/* Map Container */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            {/* Map */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3097.373258903929!2d106.68643877377546!3d10.817658158434385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f50!3m3!1m2!1s0x31752900025deb0d%3A0x34718f6bbec76f31!2zVGjhur8gR2nhu5tpIEzhu41jIFThu5VuZw!5e1!3m2!1svi!2s!4v1773201798880!5m2!1svi!2s"
              className="w-full h-[420px] lg:h-[520px]"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen={true}
            ></iframe>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>

            {/* Floating Info Card */}
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
                <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
