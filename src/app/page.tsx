"use client";
import React from 'react';
import { 
  Activity, ArrowUpRight, Users, Building2, CheckCircle2,
  Star, Trophy, ShieldCheck, Zap, ExternalLink, Globe
} from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900 selection:bg-blue-600 selection:text-white font-sans overflow-x-hidden">
      
      {/* 1. NAVİGASYON */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto py-4 px-6 md:px-8 flex justify-between items-center h-20">
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-sm group-hover:rotate-6 transition-transform">DB</div>
            <div className="text-lg md:text-xl font-black tracking-tighter uppercase">
              DOGUKAN<span className="text-blue-600">BOLTUL</span>
            </div>
          </a>
          <div className="hidden md:flex gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            <a href="#hizmetler" className="hover:text-blue-600 transition-colors">Hizmetler</a>
            <a href="#iletisim" className="hover:text-blue-600 transition-colors">İletişim</a>
          </div>
          <a href="#iletisim" className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-slate-200">
            BAŞLA
          </a>
        </div>
      </nav>

      {/* 2. HERO */}
      <section className="pt-40 md:pt-56 pb-12 md:pb-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[9px] md:text-[10px] font-black tracking-[0.15em] uppercase bg-white border border-slate-200 text-slate-500 rounded-md">
            <Activity size={12} className="text-blue-600" /> Operasyon & Sistem Mimarı
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[110px] font-black leading-[1.1] md:leading-[0.85] tracking-tighter mb-10 md:mb-14 uppercase">
            STRATEJİ <br className="hidden md:block" />
            <span className="text-blue-600 italic">SİSTEMLEŞİR.</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-500 leading-snug font-medium tracking-tight max-w-2xl border-l-2 border-blue-600/20 pl-6">
            Kaotik e-ticaret süreçlerini, denetlenebilir ve ölçeklenebilir dijital sistemlere dönüştürüyoruz. Satış rakamlarına değil, operasyonel karlılığa odaklanın.
          </p>
        </div>
      </section>

      {/* 3. SOSYAL KANIT */}
      <section className="py-12 md:py-16 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 border border-slate-200 relative overflow-hidden shadow-sm transition-all hover:shadow-xl hover:shadow-blue-500/5">
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="flex items-center gap-2 text-blue-600 mb-6 font-black text-[10px] uppercase tracking-widest">
                <Trophy size={16} /> Üst Düzey Sektör Tecrübesi
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-none uppercase italic">
                BİLGİYİ <span className="text-blue-600 not-italic">OPERASYONA DÖNÜŞTÜRÜN.</span>
              </h2>
              <p className="text-slate-600 text-base md:text-xl font-medium mb-10 leading-relaxed">
                E-ticaret ve finans mimarisi üzerine kurguladığım <b>50 saatten fazla</b> teknik içerikle, <b>5500'den fazla</b> girişimcinin dijitalleşme sürecine yön verdim.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                  <Star className="text-yellow-500" size={14} fill="currentColor" />
                  <span className="text-[11px] font-black text-slate-700 uppercase tracking-tighter">4.8/5 Eğitmen Puanı</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "MEZUN ÖĞRENCİ", val: "5500+", icon: <Users size={20} /> },
                { label: "EĞİTİM SÜRESİ", val: "50+ SAAT", icon: <Activity size={20} /> },
                { label: "STRATEJİK ODAK", val: "%100", icon: <Zap size={20} /> },
                { label: "KURS ETİKETİ", val: "ÜST DÜZEY", icon: <ShieldCheck size={20} /> }
              ].map((stat, i) => (
                <div key={i} className="bg-slate-50/50 p-6 md:p-10 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-500 group">
                  <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div className="text-2xl md:text-4xl font-black text-slate-900 mb-1 tracking-tighter">{stat.val}</div>
                  <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. HİZMETLER */}
      <section id="hizmetler" className="py-20 md:py-32 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
           <div>
             <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none mb-4 italic">Danışmanlık <br/><span className="text-blue-600 not-italic">Modelleri</span></h2>
             <p className="text-slate-500 font-medium text-sm md:text-base">Girişimciden kurumsal yapıya; operasyonunuzu inşa ediyoruz.</p>
           </div>
           <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.3em] flex items-center gap-2">
             <Globe size={14} className="text-blue-600" /> Global Standartlar
           </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <IndividualServices />
          <CorporateServices />
        </div>
      </section>

      {/* 5. İLETİŞİM */}
      <section id="iletisim" className="py-12 md:py-24 px-6 md:px-8 pb-32">
        <div className="max-w-7xl mx-auto bg-blue-600 rounded-[3rem] md:rounded-[4.5rem] p-12 md:p-28 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
          <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight tracking-tighter relative z-10 uppercase italic">
            OPERASYONUNUZU <br className="hidden md:block"/> SİSTEME BAĞLAYIN.
          </h2>
          <a href="mailto:iletisim@dogukanboltul.com" className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-white text-blue-600 px-10 md:px-16 py-6 md:py-8 rounded-[2rem] md:rounded-[2.5rem] font-black text-xl md:text-3xl hover:bg-slate-900 hover:text-white transition-all shadow-2xl relative z-10 active:scale-95">
            Görüşme Başlat <ArrowUpRight size={32} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-slate-100 px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.4em]">
            Istanbul © 2026 DOGUKAN BOLTUL — SYSTEM ARCHITECT.
          </div>
          <div className="flex gap-6">
             <a href="https://linkedin.com/in/dogukanboltul" target="_blank" className="text-slate-300 hover:text-blue-600 transition-colors"><ExternalLink size={18} /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}

const IndividualServices = () => (
  <div className="bg-white p-10 md:p-14 rounded-[3rem] md:rounded-[4rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 transition-all group flex flex-col h-full">
    <div className="mb-10">
      <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
        <Users size={28} />
      </div>
      <h3 className="text-3xl font-black tracking-tighter uppercase mb-2">Bireysel</h3>
      <p className="text-blue-600 font-bold text-[10px] uppercase tracking-widest italic">Girişimci Paketi</p>
    </div>
    <ul className="space-y-6 flex-1">
      {[
        { t: "E-Ticaret Quick Start", d: "Pazaryeri mağaza açılışları ve operasyonel satış kurgusu." },
        { t: "Finansal Takip Sistemi", d: "Bireysel karlılık tabloları ve vergi nakit akış yönetimi." },
        { t: "Lojistik & Stok Çözümleri", d: "Küçük depodan yönetilebilir hızlı kargo kurgusu." },
        { t: "Dijital Strateji", d: "Doğru ürün bulma ve pazaryeri algoritmalarına hakimiyet." }
      ].map((item, i) => (
        <li key={i} className="flex gap-4">
          <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={18} />
          <div>
            <h4 className="font-bold text-slate-900 text-base">{item.t}</h4>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.d}</p>
          </div>
        </li>
      ))}
    </ul>
    <button className="mt-12 w-full py-5 bg-slate-50 rounded-2xl text-center text-[11px] font-black uppercase tracking-[0.2em] text-slate-900 hover:bg-blue-600 hover:text-white transition-all">Sistemi İncele</button>
  </div>
);

const CorporateServices = () => (
  <div className="bg-slate-900 p-10 md:p-14 rounded-[3rem] md:rounded-[4rem] text-white shadow-2xl transition-all group border border-slate-800 flex flex-col h-full">
    <div className="mb-10">
      <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-400 group-hover:text-white transition-all">
        <Building2 size={28} />
      </div>
      <h3 className="text-3xl font-black tracking-tighter uppercase mb-2">Kurumsal</h3>
      <p className="text-blue-400 font-bold text-[10px] uppercase tracking-widest italic">Departman Kurulumu</p>
    </div>
    <ul className="space-y-6 flex-1">
      {[
        { t: "E-İhracat Departman Kurulumu", d: "Şirket içi e-ihracat biriminin sıfırdan inşası ve eğitim." },
        { t: "ERP & API Entegrasyonu", d: "Pazaryeri ve muhasebe sistemlerinin tam otomasyonu." },
        { t: "Operasyonel Denetim", d: "Gerçek zamanlı karlılık ve performans dashboardları." },
        { t: "Global Lojistik Yönetimi", d: "Gümrükleme ve yurt dışı depo maliyet optimizasyonu." }
      ].map((item, i) => (
        <li key={i} className="flex gap-4">
          <CheckCircle2 className="text-blue-400 shrink-0 mt-1" size={18} />
          <div>
            <h4 className="font-bold text-white text-base">{item.t}</h4>
            <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.d}</p>
          </div>
        </li>
      ))}
    </ul>
    <button className="mt-12 w-full py-5 bg-slate-800 rounded-2xl text-center text-[11px] font-black uppercase tracking-[0.2em] text-white hover:bg-blue-400 hover:text-slate-900 transition-all">Görüşme Başlat</button>
  </div>
);