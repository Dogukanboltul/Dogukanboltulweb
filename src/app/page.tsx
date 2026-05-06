"use client";
import React, { useState } from 'react';
import { 
  ArrowRight, Building2, CheckCircle2, Trophy, Star, 
  Zap, Send, CheckCircle, Globe, Menu, X, 
  ChevronRight, ArrowUpRight
} from 'lucide-react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#FCFCFD] text-[#1A1A1A] selection:bg-blue-600 selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* --- BG --- */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] opacity-70 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-50/40 rounded-full blur-[100px] opacity-60"></div>
      </div>

      {/* --- NAV --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white font-bold text-xs group-hover:bg-blue-600 transition-colors duration-500 shadow-2xl shadow-blue-200">DB</div>
            <div className="text-lg font-black tracking-tighter uppercase leading-none italic">
              DOĞUKAN<span className="text-blue-600 not-italic">BOLTUL</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-10 text-[10px] font-black tracking-[0.2em] uppercase text-gray-400">
            <a href="#hizmetler" className="hover:text-black transition-colors">Hizmetler</a>
            <a href="#iletisim" className="bg-black text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all shadow-xl">TALEP OLUŞTUR</a>
          </div>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* --- HERO --- */}
      <section className="relative pt-44 pb-20 md:pt-64 md:pb-40 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 w-fit text-[10px] font-black tracking-[0.3em] uppercase bg-white border border-gray-100 text-blue-600 rounded-lg shadow-sm">
            <Globe size={14} /> Operations Architect & E-Commerce Expert
          </div>
          <h1 className="text-6xl md:text-[140px] font-black leading-[0.8] tracking-tighter text-slate-900 uppercase italic">
            STRATEJİ <br />
            <span className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.1)] [-webkit-text-stroke:1px_#E2E8F0] not-italic uppercase">SİSTEMLE BULUŞUR.</span>
          </h1>
          <div className="grid md:grid-cols-12 gap-8 items-center mt-12">
            <div className="md:col-span-7">
              <p className="text-xl md:text-3xl text-slate-400 font-medium leading-tight border-l-8 border-blue-600 pl-8">
                E-ticaretin kaotik süreçlerini, <span className="text-slate-900 font-bold underline decoration-blue-600 underline-offset-8">yazılım odaklı</span> otomasyonlara dönüştürüyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="hizmetler" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-[#0A0F1C] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden group shadow-2xl transition-all duration-500 hover:scale-[1.01]">
            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-110 transition-transform duration-700">
              <Building2 size={240} />
            </div>
            <div className="relative z-10">
              <h3 className="text-5xl font-black italic uppercase mb-12 leading-none text-blue-500">KURUMSAL <br /><span className="text-white not-italic">MİMARİ.</span></h3>
              <div className="grid md:grid-cols-2 gap-12">
                {[
                  { title: "E-İhracat Departmanı", desc: "Global operasyon birimi inşası." },
                  { title: "ERP & Muhasebe", desc: "Tam otomatik veri entegrasyonu." },
                  { title: "Finansal Denetim", desc: "Anlık karlılık ve verim raporu." },
                  { title: "Lojistik Mimarisi", desc: "Maliyet odaklı sevkiyat kurgusu." }
                ].map((s, i) => (
                  <div key={i} className="space-y-2 border-l border-white/10 pl-6 group/item hover:border-blue-500 transition-colors">
                    <h4 className="text-lg font-bold uppercase tracking-tight group-hover/item:text-blue-500">{s.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-blue-600 rounded-[3rem] p-10 text-white flex flex-col justify-between h-full shadow-xl shadow-blue-100 group">
              <Zap size={40} className="group-hover:scale-125 transition-transform" />
              <div>
                <h4 className="text-2xl font-black uppercase italic mb-2">Girişimci <br />Sistemleri</h4>
                <p className="text-blue-100 text-sm font-medium">Bireysel girişimciler için mikro-otomasyonlar.</p>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-[3rem] p-10 flex flex-col justify-between h-full shadow-sm">
              <div className="text-4xl font-black italic text-slate-900">5500+</div>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Global Başarı Hikayesi</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="iletisim" className="py-32 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-12">OPERASYONU <span className="text-blue-600">KODLAYALIM.</span></h2>
        {submitted ? (
          <div className="bg-blue-50 p-12 rounded-[3rem] border border-blue-100 italic font-black text-blue-600">TALEP İŞLENDİ. SİSTEME GİRİŞ YAPILDI.</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto bg-white p-12 rounded-[4rem] shadow-2xl border border-gray-50">
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-widest text-slate-300 ml-4">Ad Soyad</label>
                <input required className="w-full bg-gray-50 rounded-2xl px-6 py-4 text-xs font-bold outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-widest text-slate-300 ml-4">Email</label>
                <input required type="email" className="w-full bg-gray-50 rounded-2xl px-6 py-4 text-xs font-bold outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
              </div>
            </div>
            <button disabled={loading} className="w-full py-6 bg-black text-white rounded-2xl font-black text-[11px] tracking-[0.4em] uppercase hover:bg-blue-600 transition-all shadow-2xl flex items-center justify-center gap-4">
              {loading ? 'YÜKLENİYOR...' : 'ANALİZ TALEBİ GÖNDER'} <Send size={16} />
            </button>
          </form>
        )}
      </section>

      <footer className="py-10 border-t border-gray-50 text-center text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">
        © 2026 DOGUKAN BOLTUL — ISTANBUL
      </footer>
    </main>
  );
}