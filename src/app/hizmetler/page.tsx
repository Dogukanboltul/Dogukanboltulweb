import React from 'react';
import { 
  Activity, ArrowUpRight, Users, Building2, CheckCircle2,
  PlayCircle, Star, Trophy, ShieldCheck, Zap, ExternalLink, Globe,
  BarChart3, LayoutDashboard, Cpu, Code2, Layers, Briefcase, Truck,
  Settings, PieChart
} from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white selection:bg-blue-600 selection:text-white font-sans overflow-x-hidden">
      
      {/* 1. NAV: MINIMAL & PRO */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto py-5 px-6 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center text-white font-black text-sm group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-500">DB</div>
            <div className="text-xl font-black tracking-tighter uppercase leading-none">
              DOGUKAN<span className="text-blue-500 font-medium">BOLTUL</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="#iletisim" className="bg-white text-black px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.1em] hover:bg-blue-500 hover:text-white transition-all active:scale-95">
              START PROJECT
            </a>
          </div>
        </div>
      </nav>

      {/* 2. HERO: ARCHITECT VIBE */}
      <section className="relative pt-44 md:pt-60 pb-20 px-6 md:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 text-[10px] font-bold tracking-[0.3em] uppercase bg-white/5 border border-white/10 text-blue-400 rounded-full">
            <Cpu size={14} className="animate-pulse" /> Architecture of Commerce
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[130px] font-black leading-[0.85] tracking-[-0.06em] mb-12 uppercase italic">
            SYSTEM <br />
            <span className="text-blue-500 not-italic uppercase">ARCHITECT.</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-400 leading-tight font-medium tracking-tight max-w-3xl">
            Kaotik e-ticaret süreçlerini, <span className="text-white">yazılım odaklı</span> otomasyon sistemlerine dönüştürüyoruz. Satış yapmak bir eylemdir; <span className="text-blue-500 italic">ölçeklemek ise bir sanattır.</span>
          </p>
        </div>
      </section>

      {/* 3. BENTO STATS */}
      <section className="px-6 md:px-8 py-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2.5rem] flex flex-col justify-between hover:bg-white/[0.07] transition-all group">
            <Trophy className="text-blue-500 mb-8" size={32} />
            <div>
              <div className="text-5xl font-black mb-2 tracking-tighter uppercase italic">5500+</div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest italic text-blue-500">Global Başarı Hikayesi</div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2.5rem] flex flex-col justify-between hover:bg-white/[0.07] transition-all">
            <Code2 className="text-blue-500 mb-8" size={32} />
            <div>
              <div className="text-4xl font-black mb-2 tracking-tighter uppercase italic">50+ SAAT</div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Teknik Müfredat</div>
            </div>
          </div>
          <div className="bg-blue-600 p-8 md:p-10 rounded-[2.5rem] flex flex-col justify-between shadow-[0_20px_50px_rgba(37,99,235,0.2)]">
            <Star className="text-white mb-8" size={32} fill="currentColor" />
            <div>
              <div className="text-4xl font-black mb-2 tracking-tighter uppercase italic">4.8 / 5</div>
              <div className="text-[10px] font-bold text-blue-100 uppercase tracking-widest uppercase">Eğitmen Puanı</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HİZMETLER: DEPARTMAN & KURUMSAL ODAKLI */}
      <section id="hizmetler" className="py-24 md:py-40 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* BİREYSEL KART */}
          <div className="relative group overflow-hidden rounded-[3.5rem] bg-[#0F1219] border border-white/5 p-10 md:p-16">
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 mb-10 group-hover:scale-110 transition-transform duration-500">
                <Zap size={32} />
              </div>
              <h3 className="text-5xl font-black uppercase italic mb-8 tracking-tighter leading-none text-white text-left">Girişimci <br/><span className="text-blue-500 not-italic uppercase">Sistemleri</span></h3>
              <ul className="space-y-8 mb-12">
                {[
                  { t: "Pazaryeri Algoritma Yönetimi", d: "Sıralama ve görünürlük optimizasyonu." },
                  { t: "Mikro Finans Takip Kurgusu", d: "Karlılık odaklı anlık nakit akışı." },
                  { t: "Lojistik Otomasyon Kanalları", d: "En hızlı ve ucuz kargo rotalaması." },
                  { t: "Teknik Mentorluk", d: "Operasyonel süreçlerin birebir yönetimi." }
                ].map((item, i) => (
                  <li key={i} className="flex flex-col gap-1">
                    <div className="flex items-center gap-4">
                      <div className="w-5 h-5 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20"><CheckCircle2 size={12} className="text-blue-500" /></div>
                      <span className="text-xl font-bold text-white tracking-tight leading-none">{item.t}</span>
                    </div>
                    <p className="pl-9 text-sm text-slate-500 font-medium italic">{item.d}</p>
                  </li>
                ))}
              </ul>
              <button className="w-full py-6 bg-white text-black font-black uppercase text-[11px] tracking-[0.2em] rounded-2xl hover:bg-blue-600 hover:text-white transition-all shadow-xl">SİSTEMİ İNCELE</button>
            </div>
          </div>

          {/* KURUMSAL KART: GÖRSELDEKİ BİREBİR YAPI */}
          <div className="relative group overflow-hidden rounded-[3.5rem] bg-[#0F1219] border border-white/5 p-10 md:p-16">
             <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:rotate-12 transition-transform duration-700 pointer-events-none">
                <Building2 size={300} />
             </div>
             <div className="relative z-10">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 mb-10">
                <Briefcase size={32} />
              </div>
              <h3 className="text-5xl font-black uppercase italic mb-2 tracking-tighter leading-none text-white text-left uppercase">Şirketler</h3>
              <p className="text-blue-500 font-bold uppercase tracking-[0.2em] text-[12px] mb-8">Kurumsal Çözümler</p>
              
              <ul className="space-y-8 mb-12">
                {[
                  { t: "E-İhracat Departman Kurulumu", d: "Şirket içi e-ihracat biriminin sıfırdan inşası ve ekip eğitimi." },
                  { t: "ERP & Muhasebe Entegrasyonu", d: "Pazaryeri verilerinin kurumsal muhasebe sistemine tam entegrasyonu." },
                  { t: "Finansal Denetim & Raporlama", d: "Üst yönetim için anlık karlılık analizleri ve verimlilik tabloları." },
                  { t: "Lojistik & Depo Optimizasyonu", d: "Büyük ölçekli depo yönetimi ve kargo maliyet analizleri." }
                ].map((item, i) => (
                  <li key={i} className="flex flex-col gap-1 group/item">
                    <div className="flex items-center gap-4">
                      <div className="w-5 h-5 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20"><CheckCircle2 size={12} className="text-blue-500" /></div>
                      <span className="text-xl font-bold text-white group-hover/item:text-blue-500 transition-colors tracking-tight leading-none uppercase">{item.t}</span>
                    </div>
                    <p className="pl-9 text-sm text-slate-500 font-medium leading-relaxed italic">{item.d}</p>
                  </li>
                ))}
              </ul>
              <button className="w-full py-6 bg-blue-600 text-white font-black uppercase text-[11px] tracking-[0.2em] rounded-2xl hover:bg-white hover:text-black transition-all shadow-2xl uppercase">Proje Başlat</button>
            </div>
          </div>
        </div>

        {/* TECH STACK */}
        <div className="mt-20 py-12 border-y border-white/5 bg-white/[0.02] rounded-3xl overflow-hidden">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 px-6">
            {["SUPABASE", "NODE.JS", "NEXT.JS", "REST API", "TAILWIND", "DOCKER"].map((tech) => (
              <span key={tech} className="font-black text-xl md:text-2xl tracking-tighter italic select-none uppercase">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section id="iletisim" className="py-20 md:py-40 px-6 md:px-8">
        <div className="max-w-5xl mx-auto text-center border-t border-white/10 pt-32">
          <h2 className="text-5xl md:text-[100px] font-black leading-[0.9] tracking-[-0.04em] mb-12 uppercase italic text-white">
            OPERASYONU <br/> <span className="text-blue-500 not-italic uppercase">KODLAYALIM.</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-12 px-10">
            <a href="mailto:iletisim@dogukanboltul.com" className="group bg-white text-black px-12 py-7 rounded-[2rem] font-black text-xl md:text-2xl hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-4 active:scale-95 shadow-2xl">
              GET IN TOUCH <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-6 md:px-8 border-t border-white/5 opacity-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.5em] text-center md:text-left">
          <div>Istanbul © 2026 Dogukan Boltul — Operations Architect & Software Engineer</div>
          <div className="flex gap-8 italic">
             <a href="https://linkedin.com/in/dogukanboltul" target="_blank" className="hover:text-blue-500 transition-colors uppercase">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}