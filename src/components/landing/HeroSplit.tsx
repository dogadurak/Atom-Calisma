"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Calculator, FlaskConical, Globe, History, Heart, Compass, Target, ArrowRight, PlayCircle, Shield, Sparkles, Activity, Info } from "lucide-react";

type Course = {
  id: string;
  title: string;
  icon: any;
  grades: string;
  color: string;
};

const courses: Course[] = [
  { id: "mat", title: "Matematik", icon: Calculator, grades: "1-8. Sınıflar (Tüm Seviyeler)", color: "from-blue-500 to-cyan-500" },
  { id: "tur", title: "Türkçe", icon: BookOpen, grades: "3, 4, 5, 6, 7 ve 8. Sınıflar", color: "from-red-500 to-orange-500" },
  { id: "fen", title: "Fen Bilimleri", icon: FlaskConical, grades: "3, 4, 5, 6, 7 ve 8. Sınıflar", color: "from-green-500 to-emerald-500" },
  { id: "ing", title: "İngilizce", icon: Globe, grades: "1-8. Sınıflar (Tüm Seviyeler)", color: "from-purple-500 to-pink-500" },
  { id: "ink", title: "İnkılap Tarihi", icon: History, grades: "Sadece LGS (8. Sınıf)", color: "from-amber-500 to-yellow-500" },
  { id: "din", title: "Din Kültürü", icon: Heart, grades: "4, 5, 6, 7 ve 8. Sınıflar", color: "from-teal-500 to-cyan-500" },
  { id: "hay", title: "Hayat Bilgisi", icon: Compass, grades: "1, 2 ve 3. Sınıflar", color: "from-rose-500 to-pink-500" },
  { id: "sos", title: "Sosyal Bilgiler", icon: Globe, grades: "4, 5, 6 ve 7. Sınıflar", color: "from-indigo-500 to-blue-500" },
];

const values = [
  {
    icon: <Heart className="text-rose-400" size={20} />,
    title: "Ücretsiz Eğitim",
    description: "Eğitimde fırsat eşitliği için tamamen ücretsiz.",
  },
  {
    icon: <Shield className="text-blue-400" size={20} />,
    title: "Bireysel Takip",
    description: "Özel program ve birebir danışmanlık hizmeti.",
  },
  {
    icon: <Sparkles className="text-amber-400" size={20} />,
    title: "Modern Yaklaşım",
    description: "Yapay zeka ve oyunlaştırılmış öğrenme.",
  },
];

export default function HeroSplit() {
  const [activeCourse, setActiveCourse] = useState<string | null>(null);

  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-32 relative overflow-hidden" id="hero">
      {/* Background decorations */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid xl:grid-cols-2 gap-12 xl:gap-16 items-start">
          
          {/* LEFT SIDE: Courses Grid */}
          <div className="order-2 xl:order-1 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Verilen <span className="text-cyan-500">Dersler</span>
                </h3>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider bg-slate-100 dark:bg-white/5 px-3 py-1 rounded-full">
                  Tıklayarak seviyeleri gör
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {courses.map((course, index) => {
                  const Icon = course.icon;
                  const isActive = activeCourse === course.id;

                  return (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setActiveCourse(isActive ? null : course.id)}
                      className={`cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden ${
                        isActive 
                          ? "border-cyan-500 shadow-lg shadow-cyan-500/20 bg-white dark:bg-gray-800/80" 
                          : "border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/40 hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800/60"
                      }`}
                    >
                      <div className="p-4 md:p-5">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${course.color} text-white shadow-md shrink-0`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <h4 className="font-bold text-lg text-slate-900 dark:text-white leading-tight">
                            {course.title}
                          </h4>
                        </div>

                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-700/50">
                                <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20 p-2.5 rounded-lg text-center">
                                  {course.grades}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Birebir Koçluk Mini Banner */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-[1px] shadow-lg shadow-blue-900/10"
              >
                <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-[15px] p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6 text-blue-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Birebir Öğrenci Koçluğu</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-tight mt-1">Özel çalışma programı ve hedefe yönelik mentorluk desteği.</p>
                  </div>
                </div>
              </motion.div>
              {/* İletişim E-postası */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="mt-6 flex flex-col items-center justify-center p-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-2xl border border-blue-100 dark:border-gray-800 shadow-sm"
              >
                <span className="text-sm text-slate-500 dark:text-slate-400 mb-1 font-medium uppercase tracking-wider">İletişim ve Bilgi İçin</span>
                <a href="mailto:atomcalisma.ik@hotmail.com" className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-80 transition-opacity">
                  atomcalisma.ik@hotmail.com
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Hero Text & Values */}
          <div className="order-1 xl:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="inline-flex items-center p-[1px] rounded-full bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 mb-6">
                <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-slate-50/90 dark:bg-[#020617]/90 backdrop-blur-sm text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold uppercase tracking-widest">
                  <Activity size={14} className="animate-pulse" /> Neden Biz?
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white leading-[1.2]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 filter drop-shadow-sm">
                  Geleceği İnşa Eden
                </span> <br />
                Bir Genç Girişimcilik Projesi
              </h1>
              
              <div className="mb-8 flex flex-col sm:flex-row items-center gap-4">
                <a href="/register" className="w-full sm:w-auto inline-flex group relative px-8 py-4 bg-cyan-500 text-white dark:bg-white dark:text-black rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] items-center justify-center gap-3 overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 dark:bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10">Hemen Kayıt Ol</span> 
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                </a>

                <a href="/register" className="w-full sm:w-auto inline-flex group relative px-8 py-4 bg-white/80 dark:bg-white/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:bg-white dark:hover:bg-white/20 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] items-center justify-center gap-3 backdrop-blur-md">
                  <Info size={20} className="relative z-10" />
                  <span className="relative z-10">Detaylı Bilgi İçin Tıklayınız</span> 
                </a>
              </div>
              
              <p className="text-lg text-slate-600 dark:text-white/70 leading-relaxed font-light mb-8 max-w-xl">
                Amacımız sadece ders anlatmak değil; öğrencilere kişiselleştirilmiş eğitim programları ile
                başarıya giden en kısa yolu sunmak. Bu platform, tamamen ücretsiz bir sosyal girişimdir.
              </p>

              {/* Values List */}
              <div className="flex flex-col gap-4 mb-10 max-w-xl">
                {values.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 bg-white/50 dark:bg-white/5 border border-slate-100 dark:border-white/10 p-4 rounded-2xl hover:bg-white dark:hover:bg-white/10 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-black/20 flex items-center justify-center shrink-0 shadow-sm border border-slate-100 dark:border-white/5">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-0.5">{item.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href="#ozellikler" className="group w-full sm:w-auto px-8 py-4 bg-white/50 dark:bg-white/5 backdrop-blur-md text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:bg-white dark:hover:bg-white/10 shadow-sm flex items-center justify-center gap-3">
                  <PlayCircle size={20} className="text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" /> 
                  Sistemi İncele
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
