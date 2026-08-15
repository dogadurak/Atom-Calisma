"use client";

import { motion } from "framer-motion";
import { Brain, Timer, BookOpen, Users, Target, Activity } from "lucide-react";

const features = [
  {
    icon: <Brain className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />,
    title: "AI DESTEKLİ KOÇLUK",
    description: "Öğrencinin anlama hızına ve eksiklerine göre dinamik adapte olan kişiselleştirilmiş neural programlar.",
  },
  {
    icon: <Users className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />,
    title: "BİREYSEL DANIŞMANLIK",
    description: "İnsan faktörü: Uzman eğitmenlerden LGS ve ilkokul öğrencilerine özel birebir rehberlik.",
  },
  {
    icon: <Timer className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 transition-colors" />,
    title: "FOCUS: POMODORO",
    description: "Lofi frekanslar ve nöral odaklanma sayaçları ile maksimum konsantrasyon ortamı.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />,
    title: "AKILLI SORU AĞI",
    description: "Zayıf bağlantıları güçlendirmek üzere tasarlanmış, hedefe yönelik iteratif test sistemi.",
  },
  {
    icon: <Target className="w-6 h-6 text-rose-400 group-hover:text-rose-300 transition-colors" />,
    title: "İVME ANALİZİ",
    description: "Başlangıç → Gelişim → İvme → Hedef. Günlük ve haftalık bazda sinirsel gelişim raporları.",
  },
  {
    icon: <Activity className="w-6 h-6 text-amber-400 group-hover:text-amber-300 transition-colors" />,
    title: "SİSTEMATİK GELİŞİM",
    description: "Rozetler ve serilerle ders çalışmayı bir zorunluluktan çıkarıp ödüllendirici bir algoritmaya dönüştürür.",
  },
];

export default function Features() {
  return (
    <section className="py-32 bg-white dark:bg-[#030712] text-slate-900 dark:text-white relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 text-slate-900 dark:text-white">
              Sistemin <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Modülleri</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
              Öğrenmeyi bir mekanik ezber sürecinden çıkarıp, kalıcı bir zihin mimarisine dönüştüren teknolojik altyapı.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl bg-gradient-to-b from-slate-200 to-transparent dark:from-white/10 dark:to-transparent p-[1px] hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-500"
            >
              {/* Inner content */}
              <div className="h-full bg-slate-50 dark:bg-[#0b1121] p-8 rounded-2xl relative overflow-hidden transition-all duration-500 group-hover:bg-white dark:group-hover:bg-[#0f172a]">
                {/* Hover glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 dark:bg-cyan-500/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-8 shadow-sm dark:shadow-none group-hover:scale-110 group-hover:border-cyan-500/30 transition-all duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-sm font-bold tracking-widest text-slate-900 dark:text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
