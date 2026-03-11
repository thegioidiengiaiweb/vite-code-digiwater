import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Phone, 
  ClipboardList, 
  FlaskConical, 
  FileText, 
  Clock,
  ArrowRight,
  Droplets,
  Zap,
  Shield,
  Microscope,
  Eye,
  Activity,
  Waves,
  Thermometer,
  Beaker,
  MessageSquare
} from 'lucide-react';

const Services: React.FC = () => {
  return (
    <>
      {/* Hero Services */}
      <section className="relative pt-40 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://cdn.thegioidiengiai.com/thegioidiengiaicdn/logo-digiwater/trung-tam-nghien-cuu-giai-phap-xu-ly-nuoc-toi-uu-digiwater.jpg" alt="Testing Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center reveal">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Dịch vụ xét nghiệm và phân tích nước</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto text-center">
            Phân tích chính xác tình trạng nguồn nước đầu vào để tư vấn giải pháp xử lý phù hợp, an toàn và bền vững cho từng gia đình và công trình.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center reveal">
            <h2 className="text-3xl font-bold mb-8">Tại sao cần xét nghiệm nước?</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10 text-justify">
              Xét nghiệm nước là bước quan trọng để xác định chính xác tình trạng nguồn nước trước khi áp dụng bất kỳ giải pháp xử lý nào. DigiWater cung cấp dịch vụ phân tích nước nhằm xác định các tạp chất ảnh hưởng đến sức khỏe, đánh giá chất lượng nước sinh hoạt và kiểm tra tính an toàn của nước uống.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Xác định tạp chất gây hại",
                "Đánh giá độ an toàn nước uống",
                "Bảo vệ thiết bị xử lý nước",
                "Tối ưu hóa chi phí đầu tư"
              ].map((item, index) => (
                <div key={index} className="p-4 bg-slate-50 rounded-2xl text-left flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-sky-500 mr-3" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Infographic Section */}
      <section className="py-10 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-50 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Quy trình xét nghiệm nước tại DigiWater</h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Quy trình khoa học, minh bạch và nhanh chóng giúp khách hàng thấu hiểu nguồn nước của mình chỉ trong vài bước đơn giản.
            </p>
          </div>

          <div className="max-w-6xl mx-auto relative">
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10">
              <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 w-full opacity-20"></div>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-4">
              {/* Step 1 */}
              <div className="flex-1 w-full lg:w-auto flex flex-col items-center lg:items-start reveal">
                <div className="mb-8">
                  <div className="relative w-24 h-24 rounded-3xl bg-white border-2 border-sky-100 shadow-sm flex items-center justify-center text-sky-600 group hover:border-sky-500 hover:shadow-lg hover:shadow-sky-100 transition-all duration-500">
                    <Phone size={40} />
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white text-sm font-bold flex items-center justify-center">01</div>
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Đăng ký xét nghiệm</h4>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                    Khách hàng đăng ký dịch vụ xét nghiệm nước với DigiWater qua hotline.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex-1 w-full lg:w-auto flex flex-col items-center lg:items-start reveal delay-100">
                <div className="mb-8 flex justify-center lg:justify-start w-full">
                  <div className="relative w-24 h-24 rounded-3xl bg-white border-2 border-sky-100 shadow-sm flex items-center justify-center text-sky-600 group hover:border-sky-500 hover:shadow-lg hover:shadow-sky-100 transition-all duration-500">
                    <ClipboardList size={40} />
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white text-sm font-bold flex items-center justify-center">02</div>
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Lấy mẫu nước</h4>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs lg:hidden">
                    Linh hoạt theo từng khu vực địa lý của khách hàng.
                  </p>
                </div>
              </div>

              {/* Step 2 Branching Cards */}
              <div className="flex-[2] w-full relative reveal delay-150 py-0 lg:py-8 active">
                <div className="hidden lg:block absolute inset-0 -z-10">
                  <svg className="absolute top-0 left-0 w-12 h-full text-sky-200" fill="none" preserveAspectRatio="none" viewBox="0 0 48 240">
                    <path d="M0 112 H24 V50 H48 M24 50 V174 H48" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  </svg>
                  <svg className="absolute top-0 right-0 w-12 h-full text-sky-200" fill="none" preserveAspectRatio="none" viewBox="0 0 48 240">
                    <path d="M48 112 H24 V50 H0 M24 50 V174 H0" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  </svg>
                </div>

                <div className="flex flex-col gap-6 lg:px-12">
                  <div className="p-5 bg-white rounded-2xl border-2 border-sky-100 hover:border-sky-400 shadow-sm hover:shadow-xl hover:shadow-sky-50 transition-all duration-500 group flex flex-col md:flex-row items-start md:items-center gap-5 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 mb-1 text-sm">Khu vực có showroom</h5>
                      <p className="text-xs text-slate-500 leading-relaxed text-justify">
                        Kỹ thuật viên DigiWater đến tận nhà lấy mẫu theo quy trình chuẩn và chuyển về phòng thí nghiệm.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border-2 border-sky-100 hover:border-sky-400 shadow-sm hover:shadow-xl hover:shadow-sky-50 transition-all duration-500 group flex flex-col md:flex-row items-start md:items-center gap-5 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      <Zap size={20} />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 mb-1 text-sm">Khu vực chưa có showroom</h5>
                      <p className="text-xs text-slate-500 leading-relaxed text-justify">
                        Khách hàng gửi mẫu qua chuyển phát nhanh. <strong>Chi phí vận chuyển do DigiWater chi trả.</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex-1 w-full lg:w-auto flex flex-col items-center lg:items-start reveal delay-200">
                <div className="mb-8">
                  <div className="relative w-24 h-24 rounded-3xl bg-white border-2 border-sky-100 shadow-sm flex items-center justify-center text-sky-600 group hover:border-sky-500 hover:shadow-lg hover:shadow-sky-100 transition-all duration-500">
                    <FlaskConical size={40} />
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white text-sm font-bold flex items-center justify-center">03</div>
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Phân tích mẫu nước</h4>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                    Phòng thí nghiệm DigiWater tiến hành phân tích các chỉ tiêu cần thiết bằng thiết bị chuyên dụng hiện đại.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex-1 w-full lg:w-auto flex flex-col items-center lg:items-start reveal delay-300">
                <div className="mb-8">
                  <div className="relative w-24 h-24 rounded-3xl bg-white border-2 border-sky-100 shadow-sm flex items-center justify-center text-sky-600 group hover:border-sky-500 hover:shadow-lg hover:shadow-sky-100 transition-all duration-500">
                    <FileText size={40} />
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white text-sm font-bold flex items-center justify-center">04</div>
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Trả kết quả & tư vấn</h4>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                    Kết quả xét nghiệm được gửi qua ZNS, kèm theo tư vấn giải pháp xử lý nước tối ưu từ chuyên gia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlight Badge */}
          <div className="mt-6 flex justify-center reveal">
            <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-2xl shadow-xl shadow-slate-200">
              <div className="flex items-center gap-2 text-sky-400 font-bold">
                <Clock size={24} />
                <span className="whitespace-nowrap">Kết quả trong 24 giờ</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-slate-700"></div>
              <p className="text-sm text-slate-300">Kết quả xét nghiệm được gửi trong vòng 24 giờ kể từ khi DigiWater tiếp nhận mẫu nước.</p>
            </div>
          </div>

          {/* Result Illustration Sub-section */}
          <div className="mt-12 max-w-5xl mx-auto reveal delay-100">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Khách hàng sẽ nhận được báo cáo xét nghiệm chi tiết</h3>
              <p className="text-slate-500 max-w-3xl mx-auto">
                Kết quả kiểm nghiệm chi tiết từ phòng thí nghiệm DigiWater sẽ được gửi qua 
                <span className="text-sky-600 font-bold ml-1">Zalo Notification Service (ZNS)</span> 
                kèm theo giải pháp đề xuất chính thức.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="group reveal delay-200">
                <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-lg group-hover:border-sky-400 group-hover:shadow-2xl group-hover:shadow-sky-100 transition-all duration-500 overflow-hidden">
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img src="https://cdn.thegioidiengiai.com/thegioidiengiaicdn/logo-digiwater/ketqua-zalo.png" alt="Zalo Notification" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex items-center gap-3 text-slate-900 font-bold">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                      <MessageSquare size={18} />
                    </div>
                    <span>Thông báo kết quả xét nghiệm qua Zalo</span>
                  </div>
                </div>
              </div>

              <div className="group reveal delay-300">
                <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-lg group-hover:border-sky-400 group-hover:shadow-2xl group-hover:shadow-sky-100 transition-all duration-500 overflow-hidden">
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img src="https://cdn.thegioidiengiai.com/thegioidiengiaicdn/logo-digiwater/ketqua-baocao.png" alt="Lab Report" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex items-center gap-3 text-slate-900 font-bold">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                      <FileText size={18} />
                    </div>
                    <span>Phiếu kết quả kiểm nghiệm từ phòng thí nghiệm DigiWater</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-center reveal delay-400">
              <div className="inline-flex items-center gap-3 bg-sky-50 text-sky-700 px-6 py-3 rounded-full border border-sky-100 font-medium text-sm">
                <Shield size={18} className="text-sky-600" />
                Báo cáo xét nghiệm được cung cấp minh bạch – chi tiết – theo Quy chuẩn kỹ thuật quốc gia
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Testing Parameters Section */}
      <section className="py-10 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Chỉ tiêu xét nghiệm nước theo khu vực</h2>
            <p className="text-slate-500 max-w-3xl mx-auto">DigiWater thực hiện kiểm tra các chỉ tiêu chuyên sâu tùy theo đặc thù nguồn nước và khu vực địa lý để đưa ra giải pháp xử lý tối ưu.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 reveal delay-200">
            {/* Card 1: North */}
            <div className="group bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-400 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
              <div className="mb-6 flex items-center justify-between">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-500">
                  <Droplets size={32} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-sky-500 transition-colors">Miền Bắc</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Nước máy đô thị</h3>
              <p className="text-sm text-slate-500 mb-8">Khu vực từ Nghệ An trở ra với đặc tính nước có độ cứng cao và khoáng chất lớn.</p>
              
              <div className="grid grid-cols-2 gap-3 mt-auto">
                {[
                  { icon: <Beaker size={18} />, label: "Sắt tổng" },
                  { icon: <Beaker size={18} />, label: "Sắt Fe(II)" },
                  { icon: <Droplets size={18} />, label: "Clo tự do" },
                  { icon: <Shield size={18} />, label: "Clo Dioxide" },
                  { icon: <Zap size={18} />, label: "Độ cứng" },
                  { icon: <Activity size={18} />, label: "Độ màu" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center group/item p-1.5 rounded-xl hover:bg-white transition-all duration-300">
                    <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-sky-600 shadow-sm mr-3 group-hover/item:text-cyan-500 group-hover/item:scale-110 transition-all">
                      {item.icon}
                    </div>
                    <span className="text-slate-700 text-xs font-medium group-hover/item:text-slate-900 group-hover/item:font-bold transition-all">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: Central & South */}
            <div className="group bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-400 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
              <div className="mb-6 flex items-center justify-between">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-500">
                  <Waves size={32} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-sky-500 transition-colors">Miền Trung & Nam</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Nước máy đô thị</h3>
              <p className="text-sm text-slate-500 mb-8">Khu vực từ Hà Tĩnh đến Cà Mau với nguy cơ nhiễm mặn, nhiễm phèn và biến động pH.</p>
              
              <div className="grid grid-cols-2 gap-3 mt-auto">
                {[
                  { icon: <Beaker size={18} />, label: "Sắt tổng" },
                  { icon: <Beaker size={18} />, label: "Sắt Fe(II)" },
                  { icon: <Beaker size={18} />, label: "Sắt Fe(III)" },
                  { icon: <Droplets size={18} />, label: "Clo tự do" },
                  { icon: <Shield size={18} />, label: "Clo Dioxide" },
                  { icon: <Activity size={18} />, label: "Độ màu" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center group/item p-1.5 rounded-xl hover:bg-white transition-all duration-300">
                    <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-sky-600 shadow-sm mr-3 group-hover/item:text-cyan-500 group-hover/item:scale-110 transition-all">
                      {item.icon}
                    </div>
                    <span className="text-slate-700 text-xs font-medium group-hover/item:text-slate-900 group-hover/item:font-bold transition-all">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3: Special Sources */}
            <div className="group bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-400 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
              <div className="mb-6 flex items-center justify-between">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-500">
                  <Thermometer size={32} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-sky-500 transition-colors">Đặc biệt</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Nước giếng & nguồn nước khác</h3>
              <p className="text-sm text-slate-500 mb-8">Các nguồn nước ngầm, nước sông hồ có cấu trúc phức tạp, cần kiểm tra đa chỉ tiêu.</p>
              
              <div className="grid grid-cols-3 gap-2 mt-auto">
                {[
                  { icon: <Beaker size={16} />, label: "Sắt tổng" },
                  { icon: <Droplets size={16} />, label: "Clo tự do" },
                  { icon: <Zap size={16} />, label: "Độ cứng" },
                  { icon: <Activity size={16} />, label: "Độ màu" },
                  { icon: <Eye size={16} />, label: "Độ đục" },
                  { icon: <Activity size={16} />, label: "Nitrat" },
                  { icon: <Beaker size={16} />, label: "Amoni" },
                  { icon: <Beaker size={16} />, label: "Sắt Fe(II)" },
                  { icon: <Shield size={16} />, label: "Clo Dioxide" },
                  { icon: <Activity size={16} />, label: "Bicarbonate" },
                  { icon: <Activity size={16} />, label: "pH" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center group/item p-1.5 rounded-xl hover:bg-white transition-all duration-300">
                    <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-sky-600 shadow-sm mr-2 group-hover/item:text-cyan-500 group-hover/item:scale-110 transition-all">
                      {item.icon}
                    </div>
                    <span className="text-slate-700 text-[10px] font-medium group-hover/item:text-slate-900 group-hover/item:font-bold transition-all">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="mt-12 max-w-3xl mx-auto p-6 bg-slate-50 rounded-2xl border-l-4 border-sky-500 shadow-sm reveal delay-300">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-sky-600 shadow-sm mr-4 shrink-0">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Lưu ý</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Danh sách chỉ tiêu có thể thay đổi tùy theo nguồn nước, khu vực địa lý và mục đích kiểm nghiệm. 
                  Đội ngũ DigiWater sẽ tư vấn các chỉ tiêu cần thiết và phù hợp cho từng trường hợp cụ thể.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-10 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl font-bold mb-4">Thiết bị phân tích chuyên dụng</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-center">DigiWater sử dụng các thiết bị phân tích chuyên dụng để đảm bảo kết quả chính xác theo Quy chuẩn kỹ thuật quốc gia.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-transparent hover:border-sky-400 hover:shadow-[0_0_25px_rgba(14,165,233,0.2)] transition-all duration-300 reveal">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 mb-6">
                <Activity size={24} />
              </div>
              <h4 className="font-bold mb-2">Máy đo pH & TDS</h4>
              <p className="text-sm text-slate-500 text-justify">Đo đạc nhanh và chính xác các chỉ số cơ bản của nguồn nước.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-transparent hover:border-sky-400 hover:shadow-[0_0_25px_rgba(14,165,233,0.2)] transition-all duration-300 reveal delay-100">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 mb-6">
                <Microscope size={24} />
              </div>
              <h4 className="font-bold mb-2">Phân tích kim loại nặng</h4>
              <p className="text-sm text-slate-500 text-justify">Thiết bị quang phổ hiện đại giúp phát hiện các kim loại độc hại ở nồng độ cực thấp.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-transparent hover:border-sky-400 hover:shadow-[0_0_25px_rgba(14,165,233,0.2)] transition-all duration-300 reveal delay-200">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 mb-6">
                <FlaskConical size={24} />
              </div>
              <h4 className="font-bold mb-2">Máy đo vi sinh</h4>
              <p className="text-sm text-slate-500 text-justify">Nuôi cấy và định danh các loại vi khuẩn gây hại có trong mẫu nước.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Services */}
      <section className="relative py-12 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-sky-400/20 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border border-slate-200 p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Bạn cần kiểm tra nguồn nước trước khi chọn giải pháp lọc?
            </h2>
            <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
              Hãy liên hệ DigiWater để được xét nghiệm nguồn nước miễn phí và nhận tư vấn chi tiết từ đội ngũ chuyên gia phân tích nước.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-lg px-10 py-4 rounded-xl shadow-lg shadow-sky-200 transition-all duration-300">
              Liên hệ tư vấn xét nghiệm
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
