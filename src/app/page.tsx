import { ShieldCheck, Zap, BarChart3, ArrowRight, Settings, Database } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-600">
      {/* Navigasyon */}
      <nav className="border-b border-slate-50 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto py-5 px-8 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter text-blue-600">
            DOGUKAN<span className="text-slate-400 font-light">BOLTUL</span>
          </div>
          <div className="hidden md:flex gap-8 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
            <a href="#hizmetler" className="hover:text-blue-600 transition-colors">Hizmetler</a>
            <a href="#iletisim" className="bg-slate-900 text-white px-6 py-2.5 rounded-xl hover:bg-blue-600 transition-all">İletişim</a>
          </div>
        </div>
      </nav>

      {/* Hero: Operasyonel Mükemmellik */}
      <section className="px-8 py-20 lg:py-32 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.2em] uppercase bg-slate-100 text-slate-600 rounded-lg">
            E-Ticaret Operasyon & Yazılım Stratejisti
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.95] mb-8 tracking-tighter text-slate-900">
            Satış Bir Sonuçtur, <br />
            <span className="text-blue-600 underline decoration-blue-100 underline-offset-8">Sistem Bir Sanat.</span>
          </h1>
          <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-2xl font-medium">
            Pazar yeri algoritmalarından lojistik yönetimine, risk skorlamasından uçtan uca departman kurulumuna; e-ticaretin görünmeyen mutfağında operasyonel mükemmellik.
          </p>
        </div>

        {/* Uzmanlık Modülleri */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="group p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 transition-all">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-blue-600">
              <Settings size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Operasyonel Mimari</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Sadece ürün listelemek değil; depo, lojistik ve iade süreçlerini bir saat gibi işleyen sisteme dönüştürüyoruz.
            </p>
          </div>

          <div className="group p-10 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl shadow-slate-200">
            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 text-blue-400">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Ticari Risk Yönetimi</h3>
            <p className="text-sm text-slate-400 leading-relaxed font-medium">
              1.6M TL üzerindeki borç takip ve risk yönetim tecrübesiyle, ticari çek ve senet süreçlerinde finansal güvenlik.
            </p>
          </div>

          <div className="group p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 transition-all">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-blue-600">
              <Database size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Full-Stack Çözümler</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              E-ticaret ihtiyaçlarına özel; Node.js, React ve Supabase altyapısıyla ölçeklenebilir yazılım mimarileri.
            </p>
          </div>
        </div>
      </section>

      {/* İletişim / CTA */}
      <section className="py-20 px-8 border-t border-slate-100 text-center">
        <h2 className="text-3xl font-black mb-8">Sisteminizi birlikte inşa edelim.</h2>
        <a href="mailto:iletisim@dogukanboltul.com" className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-blue-100">
          Görüşme Başlat <ArrowRight size={20} />
        </a>
      </section>
    </main>
  );
}