import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Check, Quote, ArrowDown } from 'lucide-react';
import Reveal from '../components/Reveal';
import Particles from '../components/Particles';

const regions = [
  {
    id: 'north',
    name: 'Miền Bắc',
    top: '18%',
    left: '45%',
    details: [
      'Nước có độ cứng cao, hàm lượng Canxi và Magie lớn.',
      'Dễ gây đóng cặn trong thiết bị vệ sinh và gia dụng.',
      'Khoáng chất cao ở một số khu vực địa chất đá vôi.'
    ]
  },
  {
    id: 'central',
    name: 'Miền Trung',
    top: '48%',
    left: '59%',
    details: [
      'Nước nhiễm mặn ở vùng ven biển, nước lợ.',
      'Nguồn nước khoáng cao, biến động theo mùa rõ rệt.',
      'Một số khu vực có hàm lượng kim loại nặng đặc thù.'
    ]
  },
  {
    id: 'south',
    name: 'Miền Nam',
    top: '82%',
    left: '45%',
    details: [
      'Nước nhiễm phèn, hàm lượng Sắt (Fe) và Mangan (Mn) cao.',
      'Nước giếng tầng nông dễ có tạp chất hữu cơ.',
      'Độ pH thường thấp (tính acid).'
    ]
  }
];

const testimonials = [
  {
    text: "“Nguồn nước tại Việt Nam có sự khác biệt rõ rệt giữa từng vùng địa lý. Việc phân tích chính xác các chỉ số hóa lý và vi sinh là bước nền tảng để xây dựng giải pháp xử lý nước phù hợp và bền vững.”",
    author: "Anh Lê Tiến Quang",
    role: "Phó viện trưởng Viện nghiên cứu DigiWater",
    image: "https://cdn.thegioidiengiai.com/thegioidiengiaicdn/logo-digiwater/vien-pho-le-tien-quang.png"
  },
  {
    text: "“Chúng tôi tin rằng mỗi giải pháp xử lý nước hiệu quả đều phải bắt đầu từ sự thấu hiểu nguồn nước. Đó cũng là lý do DigiWater được xây dựng như một nền tảng nghiên cứu và phân tích dữ liệu nguồn nước tại Việt Nam.”",
    author: "Anh Lê Thành Nhân",
    role: "Tổng giám đốc Thế Giới Điện Giải",
    image: "https://tuyendung.thegioidiengiai.com/wp-content/uploads/2024/10/anh-Nhan.jpg"
  },
  {
    text: "“Nghiên cứu nguồn nước là nền tảng quan trọng để đảm bảo các thiết bị xử lý nước vận hành hiệu quả, ổn định và bền vững trong suốt vòng đời sử dụng.”",
    author: "Anh Lê Đức Phú",
    role: "Chủ tịch HĐQT Thế Giới Điện Giải",
    image: "https://tuyendung.thegioidiengiai.com/wp-content/uploads/2024/09/anh-Phu.jpg"
  },
  {
    text: "“Mỗi mẫu nước đều mang những đặc điểm riêng biệt. Khi được phân tích và chẩn đoán chính xác, chúng ta có thể lựa chọn giải pháp xử lý tối ưu cho từng công trình.”",
    author: "Anh Trần Minh Nhân Chính",
    role: "Giám đốc Vận hành Thế Giới Lọc Tổng",
    image: "https://cdn.thegioidiengiai.com/thegioidiengiaicdn/logo-digiwater/anh-chinh.jpg"
  }
];

export default function Home() {
  const [activeRegion, setActiveRegion] = useState(regions[0].id);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const regionInterval = setInterval(() => {
      setActiveRegion(prev => {
        const idx = regions.findIndex(r => r.id === prev);
        return regions[(idx + 1) % regions.length].id;
      });
    }, 4000);

    const testimonialInterval = setInterval(() => {
      setTestimonialIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(regionInterval);
      clearInterval(testimonialInterval);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-10 lg:pb-0 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-slate-900">
          <div className="absolute inset-0 opacity-40">
            <Particles />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
          <div className="water-overlay"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center lg:gap-16">
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
              <Reveal direction="up">
                <div className="flex flex-col items-center lg:items-start mb-12">
                  <div className="hero-logo-wrapper">
                    <div className="hero-logo-glow"></div>
                    <img 
                      src="https://cdn.thegioidiengiai.com/thegioidiengiaicdn/logo-digiwater/digiwater-logo-01.png" 
                      alt="DigiWater Logo" 
                      className="hero-logo-img" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 text-justify">
                  DigiWater là viện nghiên cứu, kiểm định, xét nghiệm và phân tích nguồn nước chuyên sâu, trực thuộc hệ sinh thái Thế Giới Điện Giải – Thế Giới Lọc Tổng, với hơn 17 năm kinh nghiệm mang đến các giải pháp nước sạch toàn diện tại Việt Nam.
                </p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
                  <Link to="/services" className="btn btn-primary py-4 px-8 rounded-xl font-bold text-center">Xem dịch vụ xét nghiệm</Link>
                  <Link to="/contact" className="btn btn-outline py-4 px-8 rounded-xl font-bold text-center">Liên hệ tư vấn</Link>
                </div>
                <div className="flex justify-center lg:justify-start text-white animate-bounce">
                  <ArrowDown className="w-6 h-6" />
                </div>
              </Reveal>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center relative -mt-6 lg:mt-0">
              <Reveal direction="up" delay={0.2}>
                <div className="hero-image-container">
                  <img 
                    src="https://cdn.thegioidiengiai.com/thegioidiengiaicdn/logo-digiwater/hero-digiwater.png" 
                    alt="DigiWater Hero" 
                    className="hero-image-3d" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="pt-20 pb-10 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Reveal direction="up">
              <div className="relative p-8 md:p-10 rounded-2xl border border-sky-200 bg-sky-50/30 text-justify hover:shadow-[0_0_30px_rgba(14,165,233,0.2)] hover:border-sky-400 transition-all duration-500 hover:-translate-y-1 cursor-default group">
                <div className="absolute -top-4 left-6 bg-white px-2 text-sky-400 group-hover:text-sky-500 transition-colors duration-300">
                  <Quote className="w-8 h-8 fill-current" />
                </div>
                <p className="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed">
                  Không phải công nghệ xử lý nước nào cũng phù hợp với mọi nguồn nước, đặc biệt trong điều kiện địa lý và cấu trúc khoáng chất phức tạp như ở Việt Nam.
                </p>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mt-4 text-justify">
                DigiWater tập trung khảo sát và phân tích đặc điểm hóa lý – vi sinh của nguồn nước tại từng khu vực địa phương, từ đó xây dựng các giải pháp xử lý nước khoa học.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vietnam Map Section */}
      <section className="pt-10 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <Reveal direction="up" className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bản đồ đặc tính nguồn nước Việt Nam</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Mỗi vùng miền có đặc điểm địa chất khác nhau, dẫn đến cấu trúc nguồn nước riêng biệt.</p>
          </Reveal>
          
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
            <div className="lg:w-5/12 flex justify-center">
              <Reveal direction="left">
                <div className="vn-map-container relative w-full max-w-md mx-auto">
                  <img 
                    src="https://cdn.thegioidiengiai.com/thegioidiengiaicdn/logo-digiwater/ban-do-vn.png" 
                    alt="Bản đồ Việt Nam" 
                    className="w-full h-auto drop-shadow-2xl" 
                    referrerPolicy="no-referrer"
                  />
                  
                  {regions.map(region => (
                    <div 
                      key={region.id}
                      className={`map-marker ${region.id} ${activeRegion === region.id ? 'active' : ''}`}
                      style={{ top: region.top, left: region.left }}
                      onClick={() => setActiveRegion(region.id)}
                    >
                      <div className="map-marker-dot"></div>
                      <div className="map-marker-pulse"></div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            <div className="lg:w-7/12 space-y-6">
              <Reveal direction="right" delay={0.2}>
                {regions.map(region => (
                  <div 
                    key={region.id}
                    id={`info-${region.id}`}
                    className={`region-info p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${activeRegion === region.id ? 'active border-sky-400 shadow-[0_0_20px_rgba(14,165,233,0.15)] bg-sky-50' : 'border-slate-100 hover:border-sky-400'}`}
                    onClick={() => setActiveRegion(region.id)}
                  >
                    <h3 className="text-xl font-bold mb-3 text-sky-700 flex items-center">
                      <span className={`w-3 h-3 rounded-full mr-3 ${activeRegion === region.id ? 'bg-sky-500' : 'bg-slate-300'}`}></span>
                      {region.name}
                    </h3>
                    <ul className="space-y-2 text-slate-600 text-justify">
                      {region.details.map((detail, i) => (
                        <li key={i} className="flex items-start"><span className="mr-2">•</span> {detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Reveal direction="left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Ngân hàng dữ liệu nguồn nước trên 34 tỉnh thành</h2>
                <div className="space-y-4 text-slate-600 text-justify">
                  <p>DigiWater tự hào là một phần trong hệ sinh thái Thế Giới Điện Giải – Thế Giới Lọc Tổng với hơn 17 năm kinh nghiệm xử lý nước chuyên sâu.</p>
                  <p>Chúng tôi hiểu rằng nguồn nước tại Việt Nam vô cùng đa dạng, từ nước giếng khoan nhiễm phèn, nước máy đô thị đến nước lợ vùng ven biển. Vì vậy, không thể dùng một giải pháp duy nhất cho mọi khu vực.</p>
                  <p>Từ đội ngũ chuyên gia có kinh nghiệm thực chiến và am hiểu đặc thù nguồn nước từng vùng địa lý, đến ngân hàng dữ liệu nước trải dài trên 34 tỉnh thành, DigiWater ra đời với sứ mệnh chuẩn hóa quy trình xử lý nước dựa trên dữ liệu phân tích thực tế, đảm bảo tính khoa học và hiệu quả bền vững cho từng công trình từ lớn nhất đến nhỏ nhất.</p>
                </div>
                <div className="mt-8">
                  <Link to="/about" className="text-sky-600 font-semibold flex items-center hover:underline">
                    Tìm hiểu thêm về chúng tôi
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
            <div className="lg:w-1/2">
              <Reveal direction="right" delay={0.2}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://cdn.thegioidiengiai.com/thegioidiengiaicdn/logo-digiwater/trung-tam-nghien-cuu-nuoc-thu-thap-phan-tich-cac-nguon-nuoc-o-nhiem-tai-viet-nam.jpg" 
                    alt="Trung tâm nghiên cứu nguồn nước DigiWater" 
                    className="w-full h-auto" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-sky-600/10 mix-blend-multiply"></div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Research Experts Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <Reveal direction="up" className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-slate-900 text-center">Đội ngũ chuyên gia hàng đầu</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-slate-600">
              <div className="space-y-6">
                <p className="text-justify font-bold text-slate-800">DigiWater quy tụ các chuyên gia giàu kinh nghiệm trong lĩnh vực khoa học môi trường nước:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                  <ul className="space-y-3">
                    <li className="flex items-start"><span className="text-sky-500 mr-3 font-bold">•</span><span>Xử lý nước</span></li>
                    <li className="flex items-start"><span className="text-sky-500 mr-3 font-bold">•</span><span>Phân tích hóa lý</span></li>
                    <li className="flex items-start"><span className="text-sky-500 mr-3 font-bold">•</span><span>Vi sinh nguồn nước</span></li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start"><span className="text-sky-500 mr-3 font-bold">•</span><span>Công nghệ lọc nước</span></li>
                    <li className="flex items-start"><span className="text-sky-500 mr-3 font-bold">•</span><span>Thiết bị y tế và môi trường</span></li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <p className="font-semibold text-slate-800">Các chuyên gia DigiWater tham gia vào các hoạt động:</p>
                <ul className="space-y-3">
                  <li className="flex items-start"><Check className="text-sky-500 mr-3 w-5 h-5 shrink-0" /><span>Nghiên cứu đặc điểm nguồn nước theo vùng địa lý</span></li>
                  <li className="flex items-start"><Check className="text-sky-500 mr-3 w-5 h-5 shrink-0" /><span>Phân tích và đánh giá mẫu nước</span></li>
                  <li className="flex items-start"><Check className="text-sky-500 mr-3 w-5 h-5 shrink-0" /><span>Xác định các chỉ tiêu và nguy cơ ô nhiễm</span></li>
                  <li className="flex items-start"><Check className="text-sky-500 mr-3 w-5 h-5 shrink-0" /><span>Chuẩn hóa giải pháp xử lý nước cho từng công trình</span></li>
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Expert Testimonials Slider */}
          <div className="mt-12">
            <Reveal direction="up">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-slate-900">Góc nhìn chuyên gia</h3>
              <div className="relative overflow-hidden py-6">
                <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${testimonialIndex * 100}%)` }}>
                  {testimonials.map((t, i) => (
                    <div key={i} className="min-w-full px-4">
                      <div className="glass-card p-8 h-full flex flex-col justify-between max-w-3xl mx-auto">
                        <div>
                          <div className="text-sky-400 mb-6">
                            <Quote className="w-10 h-10 fill-current" />
                          </div>
                          <p className="text-slate-700 italic mb-8 text-justify">{t.text}</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-sky-200">
                            <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h5 className="font-bold text-slate-900">{t.author}</h5>
                            <p className="text-xs text-sky-600 font-medium">{t.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center gap-2 mt-6">
                  {testimonials.map((_, i) => (
                    <button 
                      key={i}
                      onClick={() => setTestimonialIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${testimonialIndex === i ? 'bg-sky-500 w-6' : 'bg-slate-300'}`}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Scientific Standards Section */}
      <section className="py-10 relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <Particles color="14, 165, 233" count={60} />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <Reveal direction="left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Tiêu chuẩn khoa học</h2>
                <div className="space-y-6 text-slate-600 leading-relaxed">
                  <p>Mọi hoạt động phân tích và đánh giá nguồn nước tại DigiWater được thực hiện dựa trên các tiêu chuẩn khoa học và quy trình kiểm định nghiêm ngặt.</p>
                  <p>Các phương pháp phân tích được tham chiếu từ các bộ tiêu chuẩn quốc gia và quốc tế, đảm bảo độ chính xác và tính khách quan trong từng mẫu nước.</p>
                  
                  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-sky-100 shadow-sm">
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                      <span className="w-2 h-6 bg-sky-500 rounded-full mr-3"></span>
                      Những tiêu chuẩn được áp dụng bao gồm:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <li className="flex items-center text-sm"><Check className="w-4 h-4 text-sky-500 mr-2" />Tiêu chuẩn chất lượng nước sinh hoạt</li>
                      <li className="flex items-center text-sm"><Check className="w-4 h-4 text-sky-500 mr-2" />Tiêu chuẩn nước uống trực tiếp</li>
                      <li className="flex items-center text-sm"><Check className="w-4 h-4 text-sky-500 mr-2" />Tiêu chuẩn an toàn vi sinh</li>
                      <li className="flex items-center text-sm"><Check className="w-4 h-4 text-sky-500 mr-2" />Tiêu chuẩn phân tích hóa lý nguồn nước</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-slate-900">Quy trình phân tích và đánh giá nguồn nước được đối chiếu theo tiêu chuẩn:</h4>
                    <div className="space-y-3">
                      <div className="flex items-start p-3 rounded-xl bg-slate-100/50 border border-slate-200/50">
                        <div className="bg-sky-500 text-white text-[10px] font-bold px-2 py-1 rounded mr-3 mt-1 shrink-0 uppercase tracking-wider">QCVN</div>
                        <p className="text-sm"><strong>01-1:2024/BYT</strong> – Quy chuẩn kỹ thuật quốc gia về chất lượng nước sinh hoạt</p>
                      </div>
                      <div className="flex items-start p-3 rounded-xl bg-slate-100/50 border border-slate-200/50">
                        <div className="bg-sky-500 text-white text-[10px] font-bold px-2 py-1 rounded mr-3 mt-1 shrink-0 uppercase tracking-wider">QCVN</div>
                        <p className="text-sm"><strong>01-1: 2018/BYT</strong> – Quy chuẩn kỹ thuật quốc gia về chất lượng nước ăn uống</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Phân tích hóa lý nguồn nước', desc: 'Đánh giá các chỉ tiêu hóa học và khoáng chất trong mẫu nước.' },
                { title: 'Phân tích vi sinh', desc: 'Kiểm tra các chỉ số vi sinh nhằm xác định mức độ an toàn của nguồn nước.' },
                { title: 'Kiểm định chất lượng nước', desc: 'Đánh giá tổng thể chất lượng nước dựa trên các tiêu chuẩn khoa học.' },
                { title: 'Chuẩn hóa quy trình phân tích', desc: 'Áp dụng các phương pháp phân tích chuẩn hóa trong phòng thí nghiệm.' }
              ].map((item, i) => (
                <Reveal key={i} direction="up" delay={0.1 * i}>
                  <div className="scientific-card group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-[0_0_30px_rgba(14,165,233,0.2)] hover:border-sky-400 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-sky-50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 z-0"></div>
                    <div className="relative z-10">
                      <div className="icon-container mb-6 text-sky-500 relative">
                        <div className="absolute inset-0 bg-sky-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <Check className="w-12 h-12 relative z-10 icon-glow" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">{item.title}</h3>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <Reveal direction="up" className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quy trình xét nghiệm, phân tích và kiểm định nguồn nước</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Chuyên nghiệp - Chính xác - Minh bạch trong từng công đoạn.</p>
          </Reveal>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { step: '01', title: 'Đăng ký xét nghiệm', desc: 'Khách hàng đăng ký dịch vụ xét nghiệm nước với DigiWater qua hotline.' },
                { step: '02', title: 'Tiếp nhận mẫu nước', desc: 'Kỹ thuật viên DigiWater đến tận nơi lấy mẫu nước hoặc thông qua chuyển phát nhanh.' },
                { step: '03', title: 'Phân tích mẫu nước', desc: 'Phòng thí nghiệm DigiWater tiến hành phân tích các chỉ tiêu cần thiết bằng thiết bị chuyên dụng hiện đại.' },
                { step: '04', title: 'Trả kết quả', desc: 'Kết quả xét nghiệm được gửi qua ZNS, kèm theo tư vấn giải pháp xử lý nước tối ưu từ chuyên gia.' }
              ].map((item, i) => (
                <Reveal key={i} direction="up" delay={0.1 * i} className="process-step text-center">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-sky-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-xl font-bold text-sky-600">{item.step}</span>
                  </div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-500 text-center">{item.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-10 bg-slate-50">
        <div className="container mx-auto px-4">
          <Reveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hệ sinh thái giải pháp nước sạch toàn diện</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Sự kết hợp hoàn hảo giữa nghiên cứu khoa học và công nghệ xử lý hàng đầu.</p>
          </Reveal>
          
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-0">
            <Reveal direction="left" className="ecosystem-block ecosystem-tgdg p-8 bg-white rounded-3xl shadow-lg border border-slate-200 text-center w-full max-w-sm">
              <img src="https://thegioidiengiai.com/_next/image?url=https%3A%2F%2Fcdn.thegioidiengiai.com%2Fthegioidiengiaicdn%2Flogo-tgdg-2.webp&w=1920&q=75" alt="Thế Giới Điện Giải" className="h-12 mx-auto mb-6" referrerPolicy="no-referrer" />
              <p className="text-sm text-slate-500 mb-4 text-center">Giải pháp máy lọc nước điện giải ion kiềm</p>
              <div className="flex justify-center space-x-2">
                <span className="px-2 py-1 bg-sky-50 text-sky-600 text-[10px] font-bold rounded">DigiClean</span>
                <span className="px-2 py-1 bg-sky-50 text-sky-600 text-[10px] font-bold rounded">DigiProtect</span>
              </div>
            </Reveal>
            
            <div className="hidden lg:block w-16 h-0.5 bg-slate-300"></div>
            
            <Reveal direction="up" delay={0.2} className="ecosystem-block ecosystem-digiwater p-1 rounded-3xl shadow-lg z-10 text-center w-full max-w-sm">
              <div className="ecosystem-digiwater-inner p-7">
                <img src="https://cdn.thegioidiengiai.com/thegioidiengiaicdn/logo-digiwater/digiwater-logo-01.png" alt="DigiWater" className="h-16 mx-auto mb-6" referrerPolicy="no-referrer" />
                <p className="text-sm text-slate-500 text-center">Kiểm định, phân tích và chuẩn hóa giải pháp dựa trên dữ liệu thực tế</p>
              </div>
            </Reveal>
            
            <div className="hidden lg:block w-16 h-0.5 bg-slate-300"></div>
            
            <Reveal direction="right" delay={0.3} className="ecosystem-block ecosystem-tglt p-8 bg-white rounded-3xl shadow-lg border border-slate-200 text-center w-full max-w-sm">
              <img src="https://thegioiloctong.com/wp-content/uploads/2019/11/Logo-The-Gioi-Loc-Tong-chuan-scaled.png" alt="Thế Giới Lọc Tổng" className="h-12 mx-auto mb-6" referrerPolicy="no-referrer" />
              <p className="text-sm text-slate-500 mb-4 text-center">Giải pháp lọc tổng đầu nguồn nước sinh hoạt</p>
              <div className="flex justify-center space-x-2">
                <span className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold rounded">Digi Pipe Cleaning</span>
                <span className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold rounded">Digi Pipe Protect</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-18 relative overflow-hidden bg-cta-scientific text-white">
        <div className="absolute inset-0 z-0">
          <div className="water-ripple-bg"></div>
          <div className="particles-container">
            <div className="particle" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
            <div className="particle" style={{ top: '60%', left: '15%', animationDelay: '2s' }}></div>
            <div className="particle" style={{ top: '30%', left: '80%', animationDelay: '1s' }}></div>
            <div className="particle" style={{ top: '80%', left: '70%', animationDelay: '3s' }}></div>
            <div className="particle" style={{ top: '10%', left: '50%', animationDelay: '4s' }}></div>
          </div>
          <div className="lab-glow"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Reveal direction="up" className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-8 px-8 py-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight uppercase tracking-tight">
                Kiểm định chất lượng<br />nguồn nước gia đình bạn
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-sky-100/80 mb-10 text-justify md:text-center leading-relaxed">
              Liên hệ DigiWater để đội ngũ chuyên gia đến lấy mẫu tận nơi hoặc thông qua chuyển phát nhanh (chi phí vận chuyển do DigiWater chi trả). 
              <br />Mẫu nước sẽ được phân tích theo các chỉ tiêu hóa lý và vi sinh, giúp xác định chính xác thành phần, 
              tình trạng nguồn nước và đề xuất giải pháp xử lý phù hợp.
            </p>

            <div className="relative inline-block group mb-12">
              <a href="tel:18008130" className="cta-glow-button inline-flex items-center justify-center">
                Đăng ký xét nghiệm nguồn nước gia đình tại đây
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm md:text-base font-medium text-sky-200/70">
              <div className="flex items-center"><Check className="text-emerald-400 mr-2 w-5 h-5" /> Phân tích hóa lý</div>
              <div className="flex items-center"><Check className="text-emerald-400 mr-2 w-5 h-5" /> Kiểm tra vi sinh</div>
              <div className="flex items-center"><Check className="text-emerald-400 mr-2 w-5 h-5" /> Kết quả chi tiết</div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
