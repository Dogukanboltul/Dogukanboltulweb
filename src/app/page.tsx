import { 
  ShieldCheck, ArrowUpRight, Settings, Database, Activity, 
  Globe, Calculator, Landmark, Truck, Users, Building2, CheckCircle2,
  BookOpen, Star, PlayCircle, ExternalLink
} from 'lucide-react';

// --- Şahıslar İçin Hizmet Bileşeni ---
const IndividualServices = () => (
  <div className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden">
    <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
      <Users size={120} />
    </div>
    <div className="flex items-center gap-4 mb-10">
      <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
        <Users size={28} />
      </div>
      <div>
        <h3 className="text-3xl font-black tracking-tight uppercase">Şahıslar</h3>
        <p className="text-blue-600 font-bold text-xs uppercase tracking-widest">Bireysel Girişimci Paketi</p>
      </div>
    </div>
    <ul className="space-y-6 relative z-10">
      {[
        { t: "E-Ticaret Başlangıç", d: "Şahıs şirketi kurulumundan pazaryeri mağaza açılışlarına kadar tam destek." },
        { t: "Bireysel Finans Yönetimi", d: "Gelir-gider takibi, vergi süreçleri ve nakit akış planlama." },
        { t: "Stoksuz Satış Modelleri", d: "Düşük sermaye ile sürdürülebilir operasyonel kurgular." },
        { t: "Ön Muhasebe Eğitimi", d: "Kendi finansınızı yönetmeniz için gerekli dijital araçların kurulumu." }
      ].map((item, i) => (
        <li key={i} className="flex gap-4">
          <CheckCircle2 className="text-blue-600 shrink-0" size={20} />
          <div>
            <h4 className="font-bold text-slate-900">{item.t}</h4>
            <p className="text-sm text-slate-500 font-medium">{item.d}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

// --- Şirketler İçin Hizmet Bileşeni ---
const CorporateServices = () => (
  <div className="bg-slate-900 p-10 md:p-14 rounded-[3.5rem] text-white shadow-2xl transition-all group relative overflow-hidden border border-slate-800">
    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
      <Building2 size={120} />
    </div>
    <div className="flex items-center gap-4 mb-10">
      <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-400 group-hover:text-white transition-all">
        <Building2 size={28} />
      </div>
      <div>
        <h3 className="text-3xl font-black tracking-tight uppercase text-white">Şirketler</h3>
        <p className="text-blue-400 font-bold text-xs uppercase tracking-widest">Kurumsal Çözümler</p>
      </div>
    </div>
    <ul className="space-y-6 relative z-10">
      {[
        { t: "E-İhracat Departman Kurulumu", d: "Şirket içi e-ihracat biriminin sıfırdan inşası ve ekip eğitimi." },
        { t: "ERP & Muhasebe Entegrasyonu", d: "Pazaryeri verilerinin kurumsal muhasebe sistemine tam entegrasyonu." },
        { t: "Finansal Denetim & Raporlama", d: "Üst yönetim için anlık karlılık analizleri ve operasyonel verimlilik tabloları." },
        { t: "Lojistik & Depo Optimizasyonu", d: "Büyük ölçekli depo yönetimi ve kargo maliyet analizleri." }
      ].map((item, i) => (
        <li key={i} className="flex gap-4">
          <CheckCircle2 className="text-blue-400 shrink-0" size={20} />
          <div>
            <h4 className="font-bold text-white">{item.t}</h4>
            <p className="text-sm text-slate-400 font-medium">{item.d}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900 selection:bg-blue-600 selection:text-white font-sans">
      
      {/* Navigasyon */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto py-4 px-8 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2 group transition-transform active:scale-95">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-sm group-hover:bg-slate-900 transition-colors">DB</div>
            <div className="text-xl font-black tracking-tighter uppercase">
              DOGUKAN<span className="text-blue-600 group-hover:text-slate-900 transition-colors">BOLTUL</span>
            </div>
          </a>
          <div className="hidden md:flex gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            <a href="#hizmetler" className="hover:text-blue-600 transition-colors">Hizmetler</a>
            <a href="#academy" className="hover:text-blue-600 transition-colors">Academy</a>
            <a href="#iletisim" className="hover:text-blue-600 transition-colors">İletişim</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-24 px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[10px] font-black tracking-[0.2em] uppercase bg-white border border-slate-200 text-slate-500 rounded-md shadow-sm">
            <Activity size={12} className="text-blue-600" /> Operasyon, Finans & E-Ticaret Mimarı
          </div>
          <h1 className="text-7xl md:text-[110px] font-black leading-[0.8] tracking-tighter mb-12 text-slate-900">
            STRATEJİ <br />
            <span className="text-blue-600">SİSTEMLEŞİR.</span>
          </h1>
          <p className="text-2xl text-slate-500 leading-snug font-medium tracking-tight max-w-2xl">
            Sadece satış yapmayı değil, ölçeklenebilir ve denetlenebilir bir şirket kültürü kurmayı öğretiyorum.
          </p>
        </div>
      </section>

      {/* HİZMETLER ALANI */}
      <section id="hizmetler" className="py-24 px-8 max-w-7xl mx-auto border-t border-slate-100">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
           <h2 className="text-5xl font-black tracking-tighter uppercase">Danışmanlık</h2>
           <div className="h-[2px] flex-1 bg-slate-100 mx-8 hidden md:block mb-4"></div>
           <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.3em]">Hizmet Modelleri</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <IndividualServices />
          <CorporateServices />
        </div>
      </section>

      {/* ACADEMY / UDEMY BÖLÜMÜ */}
      <section id="academy" className="py-24 px-8 max-w-7xl mx-auto">
        <div className="bg-blue-50 rounded-[4rem] p-12 md:p-20 relative overflow-hidden border border-blue-100 shadow-inner">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <BookOpen size={200} />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="flex items-center gap-2 text-blue-600 mb-6 font-black text-xs uppercase tracking-widest">
                <Star size={16} fill="currentColor" /> Udemy Eğitmeni
              </div>
              <h2 className="text-5xl font-black tracking-tighter mb-8 leading-none uppercase">
                Bilgi Paylaştıkça <br /> <span className="text-blue-600">Sistemleşir.</span>
              </h2>
              <p className="text-slate-600 text-lg font-medium mb-10 leading-relaxed">
                E-ticaret operasyonu, finansal raporlama ve muhasebe entegrasyonu üzerine hazırladığım eğitimlerle binlerce öğrenciye ulaşıyorum. Pratik, güncel ve uygulama odaklı teknikleri keşfedin.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.udemy.com/user/dogukan-boltul/" 
                  target="_blank"
                  className="bg-slate-900 text-white px-8 py-5 rounded-2xl font-black flex items-center gap-3 hover:bg-blue-600 transition-all shadow-xl shadow-slate-200"
                >
                  Udemy Profilini Gör <PlayCircle size={20} />
                </a>
                <div className="bg-white px-8 py-5 rounded-2xl border border-blue-200 text-blue-600 font-black text-sm flex items-center gap-2">
                  4.8+ <Star size={14} fill="currentColor" /> Ortalama Puan
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-blue-100">
                <h4 className="text-3xl font-black text-slate-900 mb-1 leading-none">1000+</h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Öğrenci</p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-blue-100">
                <h4 className="text-3xl font-black text-slate-900 mb-1 leading-none">10+</h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Eğitim Saati</p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-blue-100 col-span-2">
                <h4 className="text-lg font-bold text-slate-900 mb-2">Popüler Kurs</h4>
                <p className="text-sm text-slate-500 mb-4 font-medium italic leading-snug">"Sıfırdan İleri Seviye E-Ticaret ve Finans Operasyonu Yönetimi"</p>
                <div className="w-full bg-blue-50 h-2 rounded-full overflow-hidden">
                   <div className="w-3/4 h-full bg-blue-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim CTA */}
      <section id="iletisim" className="py-20 px-8 pb-40">
        <div className="max-w-7xl mx-auto bg-blue-600 rounded-[3rem] p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter relative z-10 text-white">İşinizi bir sistem <br/>olarak inşa edelim.</h2>
          <a href="mailto:iletisim@dogukanboltul.com" className="inline-flex items-center gap-3 bg-white text-blue-600 px-12 py-6 rounded-3xl font-black text-xl hover:bg-slate-900 hover:text-white transition-all shadow-xl relative z-10">
            Görüşme Başlat <ArrowUpRight size={28} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.5em]">
            Istanbul © 2026 Dogukan Boltul
          </div>
          <div className="flex gap-6">
             <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><ExternalLink size={18} /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}