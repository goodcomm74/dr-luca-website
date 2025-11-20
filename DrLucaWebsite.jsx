import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Award, ShieldCheck, Microscope, ArrowRight } from 'lucide-react';

/**
 * [공통 컴포넌트] 섹션 타이틀
 * 반복되는 섹션 제목 스타일을 통일합니다.
 */
const SectionTitle = ({ title, subtitle, align = 'center' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h3 className="text-blue-600 font-bold uppercase tracking-wider mb-2 text-sm">{subtitle}</h3>
    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">{title}</h2>
    <div className={`h-1 w-20 bg-blue-600 mt-4 ${align === 'center' ? 'mx-auto' : ''}`}></div>
  </div>
);

/**
 * [헤더 컴포넌트]
 * 네비게이션 및 로고 영역
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '회사소개', href: '#about' },
    { name: '멜로시라(신소재)', href: '#melosira' },
    { name: '제품소개', href: '#products' },
    { name: '고객지원', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-extrabold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center text-white font-serif">D</div>
          <span className={isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}>Dr.LUCA</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-medium hover:text-blue-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 md:hidden flex flex-col">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="px-6 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

/**
 * [히어로 섹션]
 * 메인 비주얼 및 핵심 메시지 전달
 */
const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/40 z-10"></div>
      
      {/* Placeholder for Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1920" 
        alt="Bio Science Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />

      <div className="container mx-auto px-6 relative z-20 text-center md:text-left pt-20">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-600/30 border border-blue-400 text-blue-300 text-sm font-semibold mb-6 backdrop-blur-sm">
            승인된 신소재, 멜로시라
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            건강을 위한 새로운 기준,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">닥터루카 솔루션</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
            닥터루카는 자연에서 찾은 강력한 신소재 '멜로시라'를 바탕으로<br className="hidden md:block"/> 
            고농도, 고순도의 건강 보조 솔루션을 제안합니다.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a href="#melosira" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/50">
              신소재 멜로시라 알아보기 <ArrowRight size={18} />
            </a>
            <a href="#contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-lg font-bold transition-all flex items-center justify-center">
              유통 및 대리점 문의
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * [회사 소개 섹션]
 * About Us
 */
const About = () => {
  const features = [
    { icon: <ShieldCheck size={32} />, title: "검증된 안전성", desc: "식약처 및 전문 기관을 통해 인증받은 안전한 원료만을 사용합니다." },
    { icon: <Microscope size={32} />, title: "신소재 기술력", desc: "특허받은 추출 공법과 고농도 배합 기술을 보유하고 있습니다." },
    { icon: <Award size={32} />, title: "전문 제조 공정", desc: "(주)메가바이오 등 전문 제조원과의 협력을 통해 최고의 품질을 유지합니다." },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
              alt="Research Lab" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="w-full md:w-1/2">
            <SectionTitle title="자연과 과학의 만남" subtitle="ABOUT DR.LUCA" align="left" />
            <p className="text-slate-600 leading-relaxed mb-6">
              닥터루카는 경기도 화성을 거점으로 하는 건강보조식품 전문 기업입니다. 
              단순한 판매를 넘어, 고객의 삶의 질을 높이는 것을 목표로 합니다.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              방문 판매와 전문몰, 약국 등 다양한 채널을 통해 고객 여러분께 다가가고 있으며, 
              특히 혁신적인 신소재 '멜로시라'를 활용한 제품군으로 업계의 주목을 받고 있습니다.
            </p>
            
            <div className="grid gap-6">
              {features.map((f, idx) => (
                <div key={idx} className="flex gap-4 items-start p-4 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors">
                  <div className="text-blue-600 mt-1">{f.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{f.title}</h4>
                    <p className="text-slate-500 text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * [멜로시라 섹션] - 핵심
 * 원료 설명 및 차별점
 */
const MelosiraInfo = () => {
  return (
    <section id="melosira" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionTitle title="핵심 신소재, 멜로시라" subtitle="CORE INGREDIENT" />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500 hover:-translate-y-2 transition-transform">
            <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
              <span className="font-bold text-xl">01</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">승인된 신소재</h3>
            <p className="text-slate-600">
              철저한 연구와 임상을 통해 그 효능이 입증된 차세대 바이오 소재입니다. 
              기존 원료와는 차별화된 메커니즘을 제공합니다.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500 hover:-translate-y-2 transition-transform">
            <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
              <span className="font-bold text-xl">02</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">고농도 추출 기술</h3>
            <p className="text-slate-600">
              멜로시라의 유효 성분을 손실 없이 추출하여, 소량 섭취로도 극대화된 
              효율을 낼 수 있도록 고농도로 설계되었습니다.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500 hover:-translate-y-2 transition-transform">
            <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
              <span className="font-bold text-xl">03</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">풍부한 데이터</h3>
            <p className="text-slate-600">
              다양한 섭취 사례와 전후 데이터를 보유하고 있으며, 지속적인 연구를 통해 
              제품의 신뢰도를 높이고 있습니다.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-blue-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">멜로시라에 대해 더 궁금하신가요?</h3>
            <p className="text-blue-200 mb-6 md:mb-0">
              자세한 성분 분석표와 임상 데이터 요약본을 확인하실 수 있습니다.
            </p>
          </div>
          <button className="relative z-10 px-8 py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition-colors">
            원료 상세 정보 보기
          </button>
          
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full opacity-50 -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-700 rounded-full opacity-30 -ml-10 -mb-10"></div>
        </div>
      </div>
    </section>
  );
};

/**
 * [제품 소개 섹션]
 * 대표 제품 라인업
 */
const Products = () => {
  const products = [
    {
      name: "닥터루카 멜로시라 골드",
      tag: "BEST SELLER",
      desc: "멜로시라 추출물 99.9% 함유, 활력 넘치는 하루를 위한 프리미엄 앰플",
      price: "상담문의",
      img: "https://placehold.co/400x400/1e3a8a/ffffff?text=Melosira+Gold"
    },
    {
      name: "닥터루카 데일리 정",
      tag: "NEW",
      desc: "간편하게 섭취하는 타블렛 형태, 온 가족 건강 지킴이",
      price: "상담문의",
      img: "https://placehold.co/400x400/1e3a8a/ffffff?text=Daily+Tablet"
    },
    {
      name: "닥터루카 조인트 케어",
      tag: "PREMIUM",
      desc: "관절 건강을 위한 복합 기능성 포뮬러",
      price: "상담문의",
      img: "https://placehold.co/400x400/1e3a8a/ffffff?text=Joint+Care"
    }
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="프리미엄 제품 라인업" subtitle="OUR PRODUCTS" />
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6 bg-slate-100 aspect-square">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {item.tag}
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    자세히 보기
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {item.name}
              </h3>
              <p className="text-slate-500 text-sm mb-3 line-clamp-2">{item.desc}</p>
              <div className="flex items-center gap-2 text-slate-900 font-semibold">
                <span className="text-blue-600">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-medium transition-colors border-b border-transparent hover:border-blue-600 pb-1">
            전체 제품 보러가기 <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

/**
 * [문의 및 푸터]
 * Contact Form & Footer
 */
const ContactAndFooter = () => {
  return (
    <div id="contact" className="bg-slate-50">
      {/* Inquiry Section */}
      <section className="py-20 border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">파트너가 되어주세요</h2>
              <p className="text-slate-600 mb-8">
                닥터루카는 약국, 대리점, 방문판매 파트너를 상시 모집하고 있습니다.<br />
                성공적인 비즈니스를 위한 든든한 지원을 약속드립니다.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-blue-600">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">고객센터 및 가맹문의</p>
                    <p className="text-lg font-bold text-slate-900">031-XXX-XXXX</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-blue-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">이메일</p>
                    <p className="text-lg font-bold text-slate-900">support@drluca.kr</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-blue-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">본사 위치</p>
                    <p className="text-lg font-bold text-slate-900">경기도 화성시 XX로 123번길</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 bg-white p-8 rounded-2xl shadow-lg">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <h3 className="text-xl font-bold mb-4 text-slate-800">빠른 상담 신청</h3>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="이름" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                  <input type="text" placeholder="연락처" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                </div>
                <input type="text" placeholder="업체명 (선택)" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                <textarea placeholder="문의 내용을 간략히 적어주세요" rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"></textarea>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors">
                  무료 상담 신청하기
                </button>
                <p className="text-xs text-slate-400 text-center mt-2">
                  개인정보는 상담 목적으로만 사용됩니다.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-sm">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8 border-b border-slate-800 pb-8">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl text-white font-bold mb-4 flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-600 rounded-full"></div> Dr.LUCA
              </h2>
              <p className="mb-4 max-w-sm">
                자연의 힘을 과학으로 증명합니다. <br/>
                닥터루카는 당신의 건강한 내일을 응원합니다.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">바로가기</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-white transition-colors">회사소개</a></li>
                <li><a href="#melosira" className="hover:text-white transition-colors">멜로시라 정보</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">제품보기</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></li>
                <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="space-y-1">
              <p>상호명: 주식회사 닥터루카 | 대표: 홍길동</p>
              <p>사업자등록번호: 123-45-67890 | 통신판매업신고: 제 2025-경기화성-0000호</p>
              <p>주소: 경기도 화성시 XX로 123번길 (XX동)</p>
              <p className="mt-4 text-slate-500">Copyright © 2025 Dr.Luca. All rights reserved.</p>
            </div>
            <div className="flex gap-4">
               {/* Social Icons Placeholder */}
               <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors cursor-pointer"></div>
               <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors cursor-pointer"></div>
               <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors cursor-pointer"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

/**
 * [메인 앱 컴포넌트]
 * 모든 섹션 조합
 */
const App = () => {
  return (
    <div className="font-sans text-slate-800 antialiased scroll-smooth">
      <Header />
      <main>
        <Hero />
        <About />
        <MelosiraInfo />
        <Products />
        <ContactAndFooter />
      </main>
    </div>
  );
};

export default App;