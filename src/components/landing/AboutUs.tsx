"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target, Lightbulb, Activity, ArrowRight, PlayCircle, Heart, Shield, Sparkles } from "lucide-react";

export default function AboutUs() {
  const values = [
    {
      icon: <Heart className="text-rose-400" size={24} />,
      title: "Ücretsiz Eğitim",
      description: "Eğitimde fırsat eşitliğine inanıyoruz. Platformumuz tamamen ücretsizdir ve her zaman öyle kalacaktır.",
    },
    {
      icon: <Shield className="text-blue-400" size={24} />,
      title: "Bireysel Takip",
      description: "Her öğrenciye özel program ve birebir danışmanlık ile hedefe giden en kısa yol.",
    },
    {
      icon: <Sparkles className="text-amber-400" size={24} />,
      title: "Modern Yaklaşım",
      description: "Yapay zeka destekli analiz ve oyunlaştırılmış öğrenme deneyimi ile motivasyonu zirveye taşıyoruz.",
    },
  ];

  return (
    <section className="pt-20 pb-32 relative overflow-hidden" id="hakkimizda">
      {/* Premium Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Values */}
          <div className="relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-10 relative">
                {/* Subtle glow behind the title */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl -z-10 rounded-full opacity-50" />
                
                <h3 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-blue-300 dark:to-purple-400">
                    Neden AtomÇalışma?
                  </span>
                </h3>
                
                <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6" />
                
                <p className="text-lg text-slate-700 dark:text-white/80 leading-relaxed font-medium">
                  Eğitimde fırsat eşitliğine inanan genç bir ekip olarak, başarıya giden yolu sizin için 
                  teknolojiyle harmanladık. Ticari hiçbir kaygı gütmeden, tamamen ücretsiz bir platform inşa ettik.
                </p>
              </div>

              <div className="grid gap-6 relative z-10">
                {values.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-slate-200 to-transparent dark:from-white/20 dark:to-transparent overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-colors duration-500" />
                    
                    <div className="h-full bg-white/90 dark:bg-[#020617]/90 backdrop-blur-xl rounded-2xl p-6 relative overflow-hidden transition-transform duration-500 group-hover:scale-[0.98] flex items-start gap-5">
                      {/* Glowing background blob on hover */}
                      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                      
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-md transition-shadow relative z-10">
                        {item.icon}
                      </div>
                      
                      <div className="relative z-10">
                        <h3 className="text-lg font-extrabold mb-1 text-slate-900 dark:text-white tracking-tight">{item.title}</h3>
                        <p className="text-slate-600 dark:text-white/70 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Hero Text */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="inline-flex items-center p-[1px] rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 mb-8">
                <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-slate-50/90 dark:bg-[#020617]/90 backdrop-blur-sm text-blue-600 dark:text-blue-400 font-mono text-xs font-bold uppercase tracking-[0.2em]">
                  <Activity size={14} className="animate-pulse" /> Yeni Nesil Eğitim
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl xl:text-7xl font-extrabold mb-8 tracking-tighter text-slate-900 dark:text-white leading-[1.1]">
                Geleceğini İnşa Et, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-blue-300 dark:to-purple-400 filter drop-shadow-sm">
                  Hedefine Ulaş
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-slate-600 dark:text-white/70 leading-relaxed font-light mb-12">
                Amacımız sadece ders anlatmak değil; öğrencilere <strong className="font-semibold text-slate-900 dark:text-white">kişiselleştirilmiş eğitim programları</strong> ile
                başarıya giden en kısa yolu sunmak. Bu platform, <strong className="font-semibold text-blue-600 dark:text-blue-400">tamamen ücretsiz</strong> bir sosyal girişim olarak tasarlanmıştır.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <a href="/register" className="group relative w-full sm:w-auto px-8 py-4 bg-blue-600 text-white dark:bg-white dark:text-black rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center justify-center gap-3 overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 dark:bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10">Hemen Kayıt Ol</span> 
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a href="#ozellikler" className="group w-full sm:w-auto px-8 py-4 bg-white/50 dark:bg-white/5 backdrop-blur-md text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:bg-white dark:hover:bg-white/10 shadow-sm flex items-center justify-center gap-3">
                  <PlayCircle size={20} className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" /> 
                  Nasıl Çalışır?
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 p-[1px] rounded-[2.5rem] bg-gradient-to-b from-blue-200 to-transparent dark:from-blue-500/20 dark:to-transparent max-w-5xl mx-auto"
        >
          <div className="bg-blue-50/80 dark:bg-[#020617]/80 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
            
            <div className="w-20 h-20 mx-auto bg-blue-100 dark:bg-blue-500/20 rounded-full flex items-center justify-center mb-8 relative z-10">
              <Target className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 dark:border-blue-400/30 animate-ping" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6 relative z-10 text-slate-900 dark:text-white tracking-tight">Ücretsiz, Ulaşılabilir, Profesyonel</h3>
            <p className="text-lg md:text-xl text-slate-600 dark:text-white/70 max-w-3xl mx-auto font-light leading-relaxed relative z-10">
              Eğitimde fırsat eşitliğine inanıyoruz. Hazırladığımız bu altyapı, yapay zeka analizlerinden nöral çalışma odalarına kadar her özelliğiyle tüm öğrenciler için <strong className="font-semibold text-blue-600 dark:text-blue-400">%100 ücretsizdir</strong> ve her zaman öyle kalacaktır.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
