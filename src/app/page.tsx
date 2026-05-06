"use client";
import React, { useState } from 'react';
import { 
  Activity, ArrowUpRight, Users, Building2, CheckCircle2,
  Star, Trophy, ShieldCheck, Zap, ExternalLink, Globe, Send, Sparkles
} from 'lucide-react';

// Hizmet modelleri harici bileşenlerden temiz bir şekilde import ediliyor
import { IndividualServices, CorporateServices } from './components/Services';

export default function Home() {
  // Form State Yönetimi
  const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form aksiyonu buraya bağlanabilir (Supabase, API vb.)
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900 selection:bg-blue-600 selection:text-white font-sans overflow-x-hidden">
      
      {/* 1. NAVİGASYON */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto py-4 px-6 md:px-8 flex justify-between items-center h-20">
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-sm group-hover:rotate-6 transition-transform">DB</div>
            <div className="text-lg md:text-xl font-black tracking-tighter uppercase">
              DOGUKAN<span className="text-blue-600">BOLTUL</span>
            </div>
          </a>
          <div className="hidden md:flex gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            <a href="#hizmetler" className="hover:text-blue-600 transition-colors">Hizmetler</a>
            <a href="#basvuru" className="hover:text-blue-600 transition-colors">Sistem Analiz Formu</a>
            <a href="#iletisim" className="hover:text-blue-600 transition-colors">İletişim</a>
          </div>
          <a href="#basvuru" className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-slate-200">
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

      {/* 3. SOSYAL KANIT (YENİLENEN DOLU VE NARİN YAPI) */}
      <section className="py-20 md:py-32 px-6 md:px-8 max-w-7xl mx-auto border-t border-slate-100">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Sol Metin Bilgisi */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-[0.3em]">
              <Trophy size={16} strokeWidth={2.5} /> Üst Düzey Sektör Tecrübesi
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] uppercase italic text-slate-900">
              BİLGİYİ <br />
              <span className="text-blue-600 not-italic">OPERASYONA</span> <br />
              DÖNÜŞTÜRÜN.
            </h2>
            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-md">
              E-ticaret ve finans mimarisi üzerine kurguladığım <span className="text-slate-900 font-bold">50 saatten fazla</span> teknik içerikle, binlerce girişimcinin dijitalleşme sürecine yön verdim.
            </p>
            <div className="flex items-center gap-3 bg-white border border-slate-200/60 w-fit px-5 py-3 rounded-2xl shadow-sm">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill={i === 4 ? "#CBD5E1" : "#EAB308"} className={i === 4 ? "text-slate-200" : "text-yellow-500"} />
                ))}
              </div>
              <span className="text-xs font-black text-slate-400 uppercase tracking-tighter">4.8/5 Eğitmen Puanı</span>
            </div>
          </div>

          {/* Sağ Metrik Kartları */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "MEZUN ÖĞRENCİ", val: "5500+", icon: <Users size={24} />, desc: "Global ağda aktif girişimci" },
              { label: "EĞİTİM SÜRESİ", val: "50+ SAAT", icon: <Activity size={24} />, desc: "Teknik derinlik ve saha pratiği" },
              { label: "STRATEJİK ODAK", val: "%100", icon: <Zap size={24} />, desc: "Sonuç odaklı otomasyonlar" },
              { label: "KURS ETİKETİ", val: "ÜST DÜZEY", icon: <ShieldCheck size={24} />, desc: "Sektör standartlarında içerik" }
            ].map((stat, i) => (
              <div key={i} className="group bg-white p-8 rounded-[2.5rem] border border-slate-200/60 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    {stat.icon}
                  </div>
                  <ArrowUpRight size={20} className="text-slate-200 group-hover:text-blue-600 transition-colors" />
                </div>
                <div className="space-y-1">
                  <div className="text-4xl font-black text-slate-900 tracking-tighter italic uppercase">{stat.val}</div>
                  <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{stat.label}</div>
                  <p className="text-slate-400 text-[11px] font-medium pt-2">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. HİZMETLER */}
      <section id="hizmetler" className="py-20 md:py-32 px-6 md:px-8 max-w-7xl mx-auto border-t border-slate-100">
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

      {/* 5. INTERAKTIF BAŞVURU FORMU (DB'DEN AYRILMA / SİSTEM ALAN FORMU) */}
      <section id="basvuru" className="py-20 md:py-32 px-6 md:px-8 max-w-7xl mx-auto border-t border-slate-100">
        <div className="bg-white border border-slate-200/80 rounded-[3rem] md:rounded-[4rem] p-8 md:p-20 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid lg:grid-cols-12 gap-12 relative z-10">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 text-[9px] md:text-[10px] font-black tracking-[0.15em] uppercase bg-blue-50 text-blue-600 rounded-md">
                <Sparkles size={12} /> Ön Analiz & Entegrasyon
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.95]">
                SİSTEMİNİZİ <br />
                <span className="text-blue-600">ANALİZ EDELİM.</span>
              </h2>
              <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
                Mevcut operasyonel tıkanıklıklarınızı, pazar yeri entegrasyon sorunlarınızı veya e-ihracat planlarınızı paylaşın. Sizin için en doğru sistem mimarisini kurgulayalım.
              </p>
            </div>

            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Adınız Soyadınız</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Doğukan Böltül" 
                      className="w-full bg-slate-50 border border-slate-200/60 rounded-xl px-5 py-4 text-sm font-medium focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Şirket / Marka Adı</label>
                    <input 
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="PoloChef (Opsiyonel)" 
                      className="w-full bg-slate-50 border border-slate-200/60 rounded-xl px-5 py-4 text-sm font-medium focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">E-Posta Adresiniz</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="iletisim@dogukanboltul.com" 
                    className="w-full bg-slate-50 border border-slate-200/60 rounded-xl px-5 py-4 text-sm font-medium focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Mevcut Durum & Operasyonel Tıkanıklıklar</label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Lojistik, stok yönetimi veya pazar yeri algoritmalarında yaşadığınız ana problemleri kısaca özetleyin..." 
                    className="w-full bg-slate-50 border border-slate-200/60 rounded-xl px-5 py-4 text-sm font-medium focus:outline-none focus:border-blue-600 focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-slate-900 text-white py-5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-100"
                >
                  {isSubmitted ? 'Talebiniz Alındı ✓' : <>Veriyi Gönder <Send size={14} /></>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 6. İLETİŞİM */}
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