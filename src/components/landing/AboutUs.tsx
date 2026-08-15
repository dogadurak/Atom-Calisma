"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Target, Lightbulb, Activity, ArrowRight, PlayCircle } from "lucide-react";

export default function AboutUs() {
  const team = [
    {
      name: "Beren Heycan",
      role: "Eğitim Koordinatörü & Kurucu Ortak",
      university: "Hacettepe Üniversitesi",
      department: "Matematik Öğretmenliği Mezunu",
      icon: <GraduationCap className="text-purple-400" size={24} />,
    },
    {
      name: "Doğa Durak",
      role: "Sistem Mimarı & Kurucu Ortak",
      university: "İzmir Katip Çelebi Üniversitesi",
      department: "Harita Mühendisliği Öğrencisi",
      icon: <MapPin className="text-blue-400" size={24} />,
    },
  ];

  return (
    <section className="pt-20 pb-32 relative overflow-hidden" id="hakkimizda">
      {/* Premium Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Founders */}
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
                    Eğitim Girişimcileri
                  </span>
                </h3>
                
                <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6" />
                
                <p className="text-lg text-slate-700 dark:text-white/80 leading-relaxed font-medium">
                  Bizler, sizin geçtiğiniz yollardan yeni geçmiş ve eğitimde fırsat eşitliğine inanan gençleriz. 
                  Ticari hiçbir kaygı gütmeden, başarıya giden yolu sizin için teknolojiyle harmanladık.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 relative z-10">
                {team.map((member, index) => (
                  <div
                    key={index}
                    className="group relative p-[1px] rounded-[2rem] bg-gradient-to-b from-slate-200 to-transparent dark:from-white/20 dark:to-transparent overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-colors duration-500" />
                    
                    <div className="h-full bg-white/90 dark:bg-[#020617]/90 backdrop-blur-xl rounded-[2rem] p-8 relative overflow-hidden transition-transform duration-500 group-hover:scale-[0.98]">
                      {/* Glowing background blob on hover */}
                      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                      
                      {/* Huge Watermark Icon */}
                      <div className="absolute -bottom-10 -right-10 opacity-5 dark:opacity-10 transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700 pointer-events-none text-slate-900 dark:text-white">
                        <member.icon.type size={120} />
                      </div>
                      
                      <div className="relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-shadow">
                          <member.icon.type className="text-blue-600 dark:text-blue-400" size={28} />
                        </div>
                        
                        <h3 className="text-2xl font-extrabold mb-1 text-slate-900 dark:text-white tracking-tight">{member.name}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-mono text-xs font-semibold tracking-widest uppercase mb-6">{member.role}</p>
                        
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 text-slate-700 dark:text-white/80">
                            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-50 dark:group-hover:bg-blue-500/10 transition-colors">
                              <GraduationCap size={16} className="text-slate-500 dark:text-white/50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                            </div>
                            <span className="font-medium text-sm leading-tight">{member.university}</span>
                          </div>
                          <div className="flex items-center gap-3 text-slate-700 dark:text-white/80">
                            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:bg-purple-50 dark:group-hover:bg-purple-500/10 transition-colors">
                              <Lightbulb size={16} className="text-slate-500 dark:text-white/50 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
                            </div>
                            <span className="font-medium text-sm leading-tight">{member.department}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  <Activity size={14} className="animate-pulse" /> Neural Founders
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl xl:text-7xl font-extrabold mb-8 tracking-tighter text-slate-900 dark:text-white leading-[1.1]">
                Geleceği İnşa Eden Genç Bir <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-blue-300 dark:to-purple-400 filter drop-shadow-sm">
                  Girişimcilik Projesi
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-slate-600 dark:text-white/70 leading-relaxed font-light mb-12">
                Amacımız sadece ders anlatmak değil; öğrencilere henüz yolun başındayken daha <strong className="font-semibold text-slate-900 dark:text-white">geniş bakış açıları kazandırmak</strong>, başarıya giden gerçek yolda onlara rehberlik etmek. Bu platform, ticari bir kaygı gütmeden <strong className="font-semibold text-blue-600 dark:text-blue-400">tamamen ücretsiz</strong> bir sosyal girişim olarak tasarlanmıştır.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button className="group relative w-full sm:w-auto px-8 py-4 bg-blue-600 text-white dark:bg-white dark:text-black rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center justify-center gap-3 overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 dark:bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10">Sisteme Başla</span> 
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group w-full sm:w-auto px-8 py-4 bg-white/50 dark:bg-white/5 backdrop-blur-md text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:bg-white dark:hover:bg-white/10 shadow-sm flex items-center justify-center gap-3">
                  <PlayCircle size={20} className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" /> 
                  Nasıl Çalışır?
                </button>
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
