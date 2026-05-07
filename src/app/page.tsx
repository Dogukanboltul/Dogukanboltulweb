"use client";
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { 
  CheckCircle2, Send, Fingerprint, X,
  BarChart3, MessageCircle, ArrowRight, ShoppingBag, Zap, Factory, Wallet
} from 'lucide-react';

// --- SUPABASE BAĞLANTISI ---
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ServiceItem Bileşeni
const ServiceItem = ({ t, d, isDark = false }: { t: string, d: string, isDark?: boolean }) => (
  <div className="flex gap-3 items-start group cursor-default">
    <CheckCircle2 className={isDark ? "text-blue-400" : "text-blue-600"} size={16} />
    <div className="space-y-1 text-left">
      <h4 className={`text-[13px] font-bold ${isDark ? "text-white" : "text-slate-900"} leading-tight tracking-tight`}>{t}</h4>
      <p className={`text-[11px] leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}>{d}</p>
    </div>
  </div>
);

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeen = sessionStorage.getItem('hasSeenPopup');
      if (!hasSeen) {
        setShowPopup(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    sessionStorage.setItem('hasSeenPopup', 'true');
  };

  // --- FORM SUBMIT (SUPABASE) ---
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      full_name: formData.get('full_name'),
      company: formData.get('company'),
      email: formData.get('email'),
      phone: formData.get('phone'), // Yeni alan eklendi
      bottleneck: formData.get('bottleneck'),
    };

    try {
      const { error } = await supabase
        .from('form_submissions')
        .insert([payload]);

      if (error) throw error;

      setIsSubmitted(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Hata:', error);
      alert('Gönderim sırasında bir hata oluştu. Lütfen bilgileri kontrol edin.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-slate-800 selection:bg-blue-600 selection:text-white font-sans antialiased overflow-x-hidden relative">
      
      {/* WHATSAPP SABİT BUTON */}
      <a 
        href="https://wa.me/905307953629" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[95] flex items-center justify-center bg-[#25D366] text-white w-16 h-16 rounded-full shadow-[0_10px_25_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        <MessageCircle size={32} fill="white" className="text-white" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-900 text-[10px] font-bold px-4 py-2 rounded-xl shadow-xl border border-slate-100 opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none uppercase tracking-widest hidden md:block">
          WhatsApp Destek Hattı
        </span>
      </a>

      {/* POP-UP VE NAVİGASYON (Aynı Kaldı) */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 max-w-lg w-full shadow-2xl relative">
            <button onClick={closePopup} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors">
              <X size={24} />
            </button>
            <div className="space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-blue-50 text-blue-600 rounded-full">
                <BarChart3 size={14} /> Ücretsiz Ön Analiz
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                  Tıkanıklıkları <span className="text-blue-600">Ücretsiz</span> Analiz Edelim.
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Operasyonunuzdaki darboğazları tespit edip size özel çözüm mimarisi sunmamız için formu doldurun.
                </p>
              </div>
              <div className="space-y-3">
                <a href="#analiz" onClick={closePopup} className="flex items-center justify-between w-full bg-slate-900 text-white px-6 py-4 rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all shadow-lg group">
                  Hemen Analiz Talebi Oluştur
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto h-14 px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-slate-900 rounded-sm flex items-center justify-center text-white font-bold text-[8px]">DB</div>
            <span className="text-[12px] font-bold tracking-tight uppercase text-slate-900">DOGUKAN<span className="text-blue-600">BOLTUL</span></span>
          </div>
          <a href="https://wa.me/905307953629" target="_blank" className="text-slate-900 hover:text-blue-600 flex items-center gap-1.5 transition-colors font-bold text-[10px] uppercase tracking-widest">
            <MessageCircle size={14} /> <span className="hidden sm:inline">İletişim</span>
          </a>
        </div>
      </nav>

      {/* HERO VE HİZMETLER SECTIONS (Aynı Kaldı) */}
      <section className="pt-28 md:pt-36 pb-12 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2 py-1 mb-6 text-[10px] font-bold tracking-[0.1em] uppercase bg-blue-50 text-blue-600 rounded">
            Herkes İçin Doğru #Eticaret
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6 text-slate-900">
            Ticari operasyonun <br className="hidden md:block" /> 
            <span className="text-blue-600">her katmanında</span> uzmanlık.
          </h1>
          <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-xl border-l-2 border-blue-600 pl-5">
            Bireysel girişimden global fabrika operasyonuna kadar tüm süreçleri, kârlılığı merkeze alan sistem mimarileriyle yönetiyoruz.
          </p>
        </div>
      </section>

      {/* HİZMETLER GRID (Aynı Kaldı) */}
      <section id="hizmetler" className="py-12 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Hizmet kutuları buraya gelecek (önceki kodun aynısı) */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 text-blue-600 text-[10px] font-bold uppercase tracking-widest px-1">
              <ShoppingBag size={14} /> Şahıs Girişimi İçin Çözümler
            </div>
            <div className="bg-slate-900 p-6 md:p-8 rounded-3xl text-white shadow-xl space-y-6 border border-slate-800 flex-1">
              <ServiceItem t="Düşük Sermaye & Yüksek Devir" d="Eldeki bütçeyle en hızlı nakit dönüşü sağlayacak ürün gruplarının tespiti." isDark />
              <ServiceItem t="Bireysel Reklam Yönetimi" d="Minimum bütçe ile pazar yeri reklamlarında maksimum görünürlük ve satış." isDark />
              <ServiceItem t="Evden Operasyon Kurgusu" d="Kargo ve paketleme süreçlerini ek maliyet yaratmadan yönetme sistemleri." isDark />
              <ServiceItem t="Pazaryeri Quick-Start" d="Mağaza açılışından ilk satışa kadar olan tüm teknik kurulum ve eğitimler." isDark />
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 text-blue-600 text-[10px] font-bold uppercase tracking-widest px-1">
              <Wallet size={14} /> Toptancılar İçin Çözümler
            </div>
            <div className="bg-slate-900 p-6 md:p-8 rounded-3xl text-white shadow-xl space-y-6 border border-slate-800 flex-1">
              <ServiceItem t="Hızlı Nakit Akış Mimari" d="Eldeki yüksek stoklu ürünleri dijital kanallarda hızla likiditeye çevirme stratejileri." isDark />
              <ServiceItem t="Trend & Veri Analizi" d="Pazarın talebine göre hangi ürünlerin stoklanması gerektiğini gösteren veri modelleri." isDark />
              <ServiceItem t="Toplu Liste & Entegrasyon" d="Binlerce SKU'nun pazar yerlerine hatasız ve otomatik aktarımı." isDark />
              <ServiceItem t="B2B'den B2C'ye Geçiş" d="Geleneksel toptancılıktan, doğrudan perakende satışa sancısız geçiş kurgusu." isDark />
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 text-blue-600 text-[10px] font-bold uppercase tracking-widest px-1">
              <Factory size={14} /> Üreticiler İçin Çözümler
            </div>
            <div className="bg-slate-900 p-6 md:p-8 rounded-3xl text-white shadow-xl space-y-6 border border-slate-800 flex-1">
              <ServiceItem t="Uçtan Uca Markalaşma" d="Üretim gücünü global bir markaya dönüştürecek kimlik ve içerik çalışmaları." isDark />
              <ServiceItem t="Aracıdan Kurtulma (D2C)" d="Doğrudan son tüketiciye satış yaparak kâr marjını maksimize eden satış modelleri." isDark />
              <ServiceItem t="Marka Koruma Kalkanı" d="Pazaryerlerinde fiyat kıran ve marka algısını bozan yetkisiz satıcıların engellenmesi." isDark />
              <ServiceItem t="Global E-İhracat Hattı" d="Üretimden çıkan malın global depolara (FBA vb.) doğrudan sevkiyat kurgusu." isDark />
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 text-blue-600 text-[10px] font-bold uppercase tracking-widest px-1">
              <Zap size={14} /> Kurumsal Mimari Çözümleri
            </div>
            <div className="bg-slate-900 p-6 md:p-8 rounded-3xl text-white shadow-xl space-y-6 border border-slate-800 flex-1">
              <ServiceItem t="Departman Kurulumu" d="Bağımsız, sürdürülebilir e-ticaret birimi inşası ve profesyonel ekip eğitimi." isDark />
              <ServiceItem t="ERP & API Otomasyonu" d="Tüm kanalların (muhasebe, stok, fatura) tek merkezden otomatik yönetimi." isDark />
              <ServiceItem t="Operasyonel Denetim" d="Ekip performansını, reklam ROI oranlarını ve maliyetlerini ölçen mekanizmalar." isDark />
              <ServiceItem t="Cross-Border E-Commerce" d="Çoklu ülke, çoklu para birimi ve global lojistik ağlarının yönetim mimarisi." isDark />
            </div>
          </div>
        </div>
      </section>

      {/* ANALİZ FORMU (TELEFON ALANI EKLENDİ) */}
      <section id="analiz" className="py-12 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-14 border border-slate-100 flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3 space-y-4 text-left">
            <div className="inline-flex items-center gap-1.5 text-blue-600 text-[10px] font-bold uppercase tracking-widest">
              <BarChart3 size={14} /> Stratejik Analiz
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight uppercase">Sistemi <br/> <span className="text-blue-600">Tasarlayalım.</span></h2>
            <p className="text-[12px] text-slate-500 leading-relaxed font-medium">Mevcut operasyonel tıkanıklıklarınızı paylaşın, teknik çözümle dönüş sağlayalım.</p>
          </div>

          <form onSubmit={handleFormSubmit} className="lg:w-2/3 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="full_name" type="text" placeholder="Ad Soyad" required className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-[12px] focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all outline-none" />
              <input name="company" type="text" placeholder="Şirket / Marka" className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-[12px] focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all outline-none" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="email" type="email" placeholder="E-Posta Adresi" required className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-[12px] focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all outline-none" />
              <input name="phone" type="tel" placeholder="Telefon Numarası (05xx...)" required className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-[12px] focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all outline-none" />
            </div>
            <textarea name="bottleneck" rows={4} placeholder="En büyük operasyonel darboğazınız nedir?" required className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-[12px] focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all resize-none outline-none"></textarea>
            
            <button 
              type="submit" 
              disabled={isLoading}
              className={`w-full py-5 rounded-2xl text-[11px] font-extrabold uppercase tracking-[0.2em] transition-all shadow-xl active:scale-[0.98] ${
                isSubmitted ? 'bg-green-500 text-white' : 'bg-slate-900 text-white hover:bg-blue-600'
              }`}
            >
              {isLoading ? 'Gönderiliyor...' : isSubmitted ? 'Veriler Gönderildi ✓' : 'Analiz Talebi Oluştur'}
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-4 md:px-6 max-w-6xl mx-auto text-center border-t border-slate-50">
        <a 
          href="https://wa.me/905307953629" 
          target="_blank"
          className="inline-flex items-center gap-3 bg-slate-900 text-white px-12 py-6 rounded-full font-bold text-sm hover:bg-blue-600 transition-all shadow-2xl active:scale-95 mb-12"
        >
          WhatsApp İle Danışmanlık Al <ArrowRight size={20} />
        </a>
        <p className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.5em]">
          © 2026 DOGUKAN BOLTUL — ISTANBUL
        </p>
      </footer>
    </main>
  );
}