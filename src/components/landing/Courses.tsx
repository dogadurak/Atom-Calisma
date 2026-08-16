"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Calculator, FlaskConical, Globe, History, Heart, Compass, Target, GraduationCap } from "lucide-react";

type Course = {
  id: string;
  title: string;
  icon: any;
  grades: string;
  color: string;
};

const courses: Course[] = [
  {
    id: "matematik",
    title: "Matematik",
    icon: Calculator,
    grades: "1, 2, 3, 4, 5, 6, 7 ve 8. Sınıflar (Tüm Seviyeler)",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "turkce",
    title: "Türkçe",
    icon: BookOpen,
    grades: "3, 4, 5, 6, 7 ve 8. Sınıflar",
    color: "from-red-500 to-orange-500",
  },
  {
    id: "fen",
    title: "Fen Bilimleri",
    icon: FlaskConical,
    grades: "3, 4, 5, 6, 7 ve 8. Sınıflar",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "ingilizce",
    title: "İngilizce",
    icon: Globe,
    grades: "1, 2, 3, 4, 5, 6, 7 ve 8. Sınıflar (Tüm Seviyeler)",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "inkilap",
    title: "İnkılap Tarihi",
    icon: History,
    grades: "Sadece LGS Öğrencileri (8. Sınıf)",
    color: "from-amber-500 to-yellow-500",
  },
  {
    id: "din",
    title: "Din Kültürü",
    icon: Heart,
    grades: "4, 5, 6, 7 ve 8. Sınıflar",
    color: "from-teal-500 to-cyan-500",
  },
  {
    id: "hayat",
    title: "Hayat Bilgisi",
    icon: Compass,
    grades: "1, 2 ve 3. Sınıflar",
    color: "from-rose-500 to-pink-500",
  },
  {
    id: "sosyal",
    title: "Sosyal Bilgiler",
    icon: Globe,
    grades: "4, 5, 6 ve 7. Sınıflar",
    color: "from-indigo-500 to-blue-500",
  },
];

export default function Courses() {
  const [activeCourse, setActiveCourse] = useState<string | null>(null);

  return (
    <section id="dersler" className="py-24 bg-white dark:bg-[#030712] relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Derslerimiz & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Sınıf Seviyeleri</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Her öğrencinin seviyesine uygun akademik eğitim ve hedeflerine ulaşmasını sağlayacak birebir koçluk hizmeti.
          </p>
        </div>

        {/* Birebir Koçluk Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-1 shadow-2xl shadow-blue-900/20"
        >
          <div className="bg-white dark:bg-gray-900 rounded-[22px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 h-full">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-semibold mb-4">
                <Target className="w-5 h-5" />
                <span>Kişiye Özel Gelişim</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Birebir Öğrenci Koçluğu
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Sadece ders anlatmakla kalmıyoruz; öğrencilerin çalışma programlarını düzenliyor, motivasyonlarını yüksek tutuyor ve hedeflerine ulaşmaları için birebir mentorluk yapıyoruz.
              </p>
            </div>
            <div className="hidden md:flex w-32 h-32 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 items-center justify-center flex-shrink-0">
              <GraduationCap className="w-16 h-16 text-blue-600 dark:text-cyan-400" />
            </div>
          </div>
        </motion.div>

        <p className="text-center text-sm font-medium text-slate-500 dark:text-slate-400 mb-8 uppercase tracking-widest">
          Sınıf seviyesini görmek için derslere tıklayın
        </p>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => {
            const Icon = course.icon;
            const isActive = activeCourse === course.id;

            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveCourse(isActive ? null : course.id)}
                className={`cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isActive 
                    ? "border-blue-500 shadow-xl shadow-blue-500/10 dark:shadow-blue-900/20 bg-white dark:bg-gray-800" 
                    : "border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800/80"
                }`}
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${course.color} text-white shadow-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white">
                      {course.title}
                    </h3>
                  </div>

                  <AnimatePresence>
                    {isActive ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-2 mt-2 border-t border-gray-100 dark:border-gray-700/50">
                          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                            {course.grades}
                          </p>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-2">
                        <span>Seviyeleri gör</span>
                        <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                          →
                        </motion.span>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
