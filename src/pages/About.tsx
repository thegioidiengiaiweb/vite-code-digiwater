import { motion } from 'motion/react';
import { Quote, Wrench, Shield, Layers, Users, Check, MapPin } from 'lucide-react';
import Reveal from '../components/Reveal';

export default function About() {
  return (
    <>
      {/* Hero About */}
      <section className="relative pt-40 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://cdn.thegioidiengiai.com/thegioidiengiaicdn/logo-digiwater/nghien-cuu-chuyen-sau-nguon-nuoc-tai-viet-nam.png" 
            alt="Research Background" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Reveal direction="up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">DigiWater</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto text-center">
              Viện nghiên cứu, kiểm định và phân tích nguồn nước dựa trên dữ liệu thực tế, khoa học kiểm chứng và hệ sinh thái giải pháp nước sạch hơn 17 năm kinh nghiệm.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why DigiWater */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-sky-50 rounded-full blur-[120px] opacity-60"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-slate-100 rounded-full blur-[100px] opacity-40"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-[0.05] grayscale pointer-events-none hidden lg:block">
            <img 
              src="https://cdn.thegioidiengiai.com/thegioidiengiaicdn/logo-digiwater/ban-do-vn.png" 
              alt="Vietnam Map Background" 
              className="w-full h-full object-contain" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0ea5e9 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Reveal direction="up" className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">Vì sao DigiWater ra đời?</h2>
            <div className="w-20 h-1.5 bg-sky-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Nguồn nước tại Việt Nam có đặc tính rất đa dạng, vì vậy cần những giải pháp xử lý dựa trên dữ liệu phân tích thực tế.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: '01',
                title: 'Nguồn nước có đặc tính khác nhau theo từng khu vực',
                desc: 'Nguồn nước tại Việt Nam rất đa dạng: từ nước giếng khoan ở nông thôn, nước nhiễm phèn vùng đồng bằng đến nước máy đô thị. Mỗi khu vực có cấu trúc khoáng chất và đặc tính hóa học khác nhau.',
                icon: <MapPin className="w-9 h-9" />
              },
              {
                step: '02',
                title: 'Không phải công nghệ xử lý nào cũng phù hợp',
                desc: 'Nhiều công nghệ xử lý nước được phát triển dựa trên điều kiện nguồn nước của các quốc gia có hệ thống cấp nước ổn định. Khi áp dụng trực tiếp vào Việt Nam, hiệu suất có thể bị ảnh hưởng nghiêm trọng.',
                icon: <Wrench className="w-9 h-9" />
              },
              {
                step: '03',
                title: 'Giải pháp xử lý phải dựa trên dữ liệu phân tích',
                desc: 'Khi áp dụng trực tiếp vào nguồn nước tại Việt Nam, hiệu suất xử lý có thể giảm và ảnh hưởng đến tuổi thọ thiết bị. Vì vậy cần phân tích nguồn nước thực tế trước khi thiết kế giải pháp.',
                icon: <Layers className="w-9 h-9" />
              }
            ].map((item, i) => (
              <Reveal key={i} direction="up" delay={0.1 * i} className="why-card group relative p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:border-sky-200 transition-all duration-500 hover:-translate-y-3 flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-sky-400/20 blur-2xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="w-20 h-20 bg-slate-900 rounded-3xl flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500 shadow-xl relative z-10">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-900 group-hover:text-sky-600 transition-colors">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-justify text-sm md:text-base">{item.desc}</p>
                <div className="absolute top-6 right-8 text-slate-100 font-black text-6xl group-hover:text-sky-50 transition-colors duration-500 select-none -z-10">{item.step}</div>
              </Reveal>
            ))}
          </div>

          <Reveal direction="up" className="mt-20 max-w-4xl mx-auto">
            <div className="p-8 md:p-12 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="w-20 h-20 shrink-0 bg-sky-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-sky-500/30">
                  <Quote className="w-8 h-8 fill-current" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-medium italic leading-relaxed mb-4">
                    "Cần có một trung tâm nghiên cứu độc lập, thu thập dữ liệu thực tế về nguồn nước tại Việt Nam và chuẩn hóa nguyên tắc xử lý nước phù hợp với từng khu vực."
                  </p>
                  <p className="text-sky-400 font-bold tracking-widest uppercase text-sm">— Viện nghiên cứu, kiểm định và phân tích nguồn nước DigiWater</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Scientific Philosophy */}
      <section className="py-10 bg-slate-50">
        <div className="container mx-auto px-4">
          <Reveal direction="up" className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Triết lý khoa học</h2>
            <p className="text-slate-500 mx-auto text-center">Ngay từ khi thành lập, DigiWater xác định định hướng phát triển dựa trên các nguyên tắc cốt lõi.</p>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Khoa học & Kiểm chứng', desc: 'Mọi kết luận đều dựa trên dữ liệu đo đạc thực tế từ phòng thí nghiệm.', icon: <Shield className="w-8 h-8" /> },
              { title: 'Minh bạch & Trách nhiệm', desc: 'Công khai các chỉ số và chịu trách nhiệm về tính chính xác của kết quả phân tích.', icon: <Check className="w-8 h-8" /> },
              { title: 'Chuẩn hóa & Ứng dụng', desc: 'Xây dựng tiêu chuẩn xử lý nước phù hợp với đặc thù từng địa phương.', icon: <Layers className="w-8 h-8" /> },
              { title: 'Phục vụ cộng đồng', desc: 'Nâng cao nhận thức về nước sạch và bảo vệ sức khỏe người dân Việt Nam.', icon: <Users className="w-8 h-8" /> }
            ].map((item, i) => (
              <Reveal key={i} direction="up" delay={0.1 * i} className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:border-sky-400 hover:shadow-[0_0_25px_rgba(14,165,233,0.2)] transition-all duration-300">
                <div className="text-sky-500 mb-4">{item.icon}</div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-slate-500 text-justify">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal direction="left" className="p-10 rounded-3xl bg-white border border-sky-200 shadow-[0_0_30px_rgba(14,165,233,0.15)] hover:border-sky-400 hover:shadow-[0_0_40px_rgba(14,165,233,0.3)] transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 flex items-center text-slate-800">
                <span className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold">01</span>
                Sứ mệnh
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed text-justify">
                Xây dựng hệ thống dữ liệu khoa học về nguồn nước tại Việt Nam, giúp nâng cao nhận thức cộng đồng và đảm bảo nước sau xử lý đạt tiêu chuẩn an toàn cho sức khỏe.
              </p>
            </Reveal>
            <Reveal direction="right" delay={0.2} className="p-10 rounded-3xl bg-white border border-sky-200 shadow-[0_0_30px_rgba(14,165,233,0.15)] hover:border-sky-400 hover:shadow-[0_0_40px_rgba(14,165,233,0.3)] transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 flex items-center text-slate-800">
                <span className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold">02</span>
                Tầm nhìn
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed text-justify">
                Trở thành trung tâm nghiên cứu và dữ liệu nguồn nước có nền tảng chuyên môn vững chắc, đóng vai trò tham chiếu trong lĩnh vực xử lý nước tại Việt Nam.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ecosystem Partner */}
      <section className="py-10 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Reveal direction="left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Hệ sinh thái giải pháp nước sạch</h2>
                <p className="text-slate-600 mb-6 text-justify">DigiWater không hoạt động độc lập, mà là một phần trong hệ sinh thái Thế Giới Điện Giải – Thế Giới Lọc Tổng.</p>
                <p className="text-slate-600 mb-8 text-justify">Sự kết nối này giúp DigiWater không chỉ dừng ở nghiên cứu và kiểm định, mà còn đồng hành trong toàn bộ vòng đời giải pháp nước: từ nghiên cứu nguồn nước, chuẩn hóa giải pháp đến triển khai hệ thống và bảo dưỡng định kỳ.</p>
                
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-white rounded-2xl shadow-sm border border-transparent hover:border-sky-400 hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mr-4 shrink-0 font-bold">1</div>
                    <div>
                      <img src="https://thegioidiengiai.com/_next/image?url=https%3A%2F%2Fcdn.thegioidiengiai.com%2Fthegioidiengiaicdn%2Flogo-tgdg-2.webp&w=1920&q=75" alt="Thế Giới Điện Giải" className="h-8 mb-2 object-contain" />
                      <p className="text-sm text-slate-500 text-justify">Giải pháp máy điện giải ion kiềm và quy trình DigiClean – DigiProtect.</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-white rounded-2xl shadow-sm border border-transparent hover:border-green-400 hover:shadow-[0_0_20px_rgba(74,222,128,0.15)] transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center mr-4 shrink-0 font-bold">2</div>
                    <div>
                      <img src="https://thegioiloctong.com/wp-content/uploads/2019/11/Logo-The-Gioi-Loc-Tong-chuan-scaled.png" alt="Thế Giới Lọc Tổng" className="h-8 mb-2 object-contain" />
                      <p className="text-sm text-slate-500 text-justify">Giải pháp lọc tổng đầu nguồn và quy trình Digi Pipe Cleaning – Digi Pipe Protect.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:w-1/2">
              <Reveal direction="right" delay={0.2}>
                <img src="https://cdn.thegioidiengiai.com/thegioidiengiaicdn/logo-digiwater/sof-2025-01127-hinh-2-02.png" alt="Ecosystem Diagram" className="rounded-3xl w-full h-auto" referrerPolicy="no-referrer" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
