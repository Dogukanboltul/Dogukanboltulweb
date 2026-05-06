import { 
  Users, 
  Building2, 
  CheckCircle2, 
  ArrowUpRight, 
  Globe, 
  Calculator, 
  Activity, 
  ChevronRight,
  TrendingUp,
  Briefcase
} from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-blue-600 selection:text-white">
      
      {/* Üst Navigasyon */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto py-4 px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xs">DB</div>
            <div className="text-xl font-black tracking-tighter uppercase">
              DOGUKAN<span className="text-blue-600">BOLTUL</span>
            </div>
          </div>
          <a href="#iletisim" className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-slate-200">
            PROJE BAŞLAT
          </a>
        </div>
      </nav>

      {/* Hero: Stratejik Ayrım */}
      <section className="pt-40 pb-20 px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-black tracking-[0.2em] uppercase bg-white border border-slate-200 text-slate-500 rounded-md">
            <Activity size={12} className="text-blue-600 animate-pulse" /> E-Ticaret & Finansal Mimari
          </div>
          <h1 className="text-6xl md:text-[90px] font-black leading-[0.85] tracking-tighter mb-8 italic">
            STRATEJİK <br />
            <span className="text-blue-600 not-italic">HİZMETLER.</span>
          </h1>
          <p className="text-2xl text-slate-500 font-medium leading-snug max-w-2xl">
            Bireysel girişimlerden kurumsal yapılara; e-ticaret, e-ihracat ve finans operasyonlarınızı tek bir merkezden yönetin.
          </p>
        </div>
      </section>

      {/* HİZMET GRUPLARI */}
      <section className="px-8 pb-32 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
        
        {/* ŞAHISLAR VE GİRİŞİMCİLER (B2C / Solo-Entrepreneur) */}
        <div className="group relative bg-white p-10 md:p-14 rounded-[3rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
          <div className="absolute top-10 right-10 opacity-10 group-hover:scale-110 transition-transform duration-500">
            <Users size={80} strokeWidth={1} />
          </div>
          
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
              <TrendingUp size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-black tracking-tight uppercase leading-none">Bireysel</h2>
              <p className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em] mt-2">Girişimci & Şahıs</p>
            </div>
          </div>

          <div className="space-y-8">
            {[
              { t: "E-Ticaret Quick Start", d: "Pazaryeri mağaza açılışları, marka kaydı ve satışa hazırlık süreci." },
              { t: "Mikro Finans & Muhasebe", d: "Şahıs işletmeleri için gelir-gider takibi ve vergi planlama rehberliği." },
              { t: "Lojistik & Stok Yönetimi", d: "Evden veya küçük depodan yönetilebilir operasyonel kurgular." },
              { t: "Dijital Satış Eğitimi", d: "Doğru ürün bulma ve pazaryeri algoritmalarına hakimiyet." }
            ].map((item, i) => (
              <div key={i} className="flex gap-5 group/item">
                <div className="mt-1.5"><CheckCircle2 className="text-blue-600" size={18} /></div>
                <div>
                  <h4 className="font-bold text-slate-900 group-hover/item:text-blue-600 transition-colors">{item.t}</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed mt-1">{item.d}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-12 w-full py-5 bg-slate-50 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-all">
            Detaylı Bilgi Al <ChevronRight size={16} />
          </button>
        </div>

        {/* ŞİRKETLER (Enterprise / D2C / B2B) */}
        <div className="group relative bg-slate-900 p-10 md:p-14 rounded-[3rem] text-white shadow-2xl hover:-translate-y-2 transition-all duration-500">
          <div className="absolute top-10 right-10 opacity-10 group-hover:scale-110 transition-transform duration-500">
            <Building2 size={80} strokeWidth={1} />
          </div>

          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-500">
              <Briefcase size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-black tracking-tight uppercase leading-none text-white">Kurumsal</h2>
              <p className="text-blue-400 font-bold text-[10px] uppercase tracking-[0.2em] mt-2 text-blue-400">Şirket & Marka</p>
            </div>
          </div>

          <div className="space-y-8 text-white">
            {[
              { t: "E-İhracat Departman Kurulumu", d: "Şirket içi operasyon biriminin inşası ve sürdürülebilir yönetim modeli." },
              { t: "ERP & Muhasebe Entegrasyonu", d: "Tüm pazaryeri verilerinin kurumsal muhasebe sistemine tam entegrasyonu." },
              { t: "Finansal Denetim & Raporlama", d: "Karlılık analizi, operasyonel gider optimizasyonu ve anlık dashboardlar." },
              { t: "Global Lojistik Operasyonu", d: "Gümrükleme, yurt dışı depo (FBA/FBM) ve kargo anlaşma yönetimi." }
            ].map((item, i) => (
              <div key={i} className="flex gap-5 group/item">
                <div className="mt-1.5"><CheckCircle2 className="text-blue-400" size={18} /></div>
                <div>
                  <h4 className="font-bold text-white group-hover/item:text-blue-400 transition-colors">{item.t}</h4>
                  <p className="text-sm text-slate-400 font-medium leading-relaxed mt-1">{item.d}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-12 w-full py-5 bg-slate-800 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-blue-500 transition-all">
            Kurumsal Teklif Al <ArrowUpRight size={16} />
          </button>
        </div>

      </section>

      {/* Alt Bilgi / CTA */}
      <footer id="iletisim" className="bg-white py-24 px-8 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-8 tracking-tighter uppercase">Hazırsan <span className="text-blue-600">Başlayalım.</span></h2>
          <p className="text-slate-500 font-medium mb-12 text-lg">
            İster yeni bir girişim, ister yerleşik bir marka olun; operasyonunuzu teknoloji ve finansın gücüyle büyütüyoruz.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:iletisim@dogukanboltul.com" className="bg-blue-600 text-white px-10 py-5 rounded-[2rem] font-black text-lg hover:scale-105 transition-all shadow-xl shadow-blue-100">
              Görüşme Talebi Gönder
            </a>
          </div>
          <div className="mt-16 text-[10px] font-bold text-slate-300 uppercase tracking-[0.5em]">
            Istanbul © 2026 Dogukan Boltul
          </div>
        </div>
      </footer>
    </main>
  );
}