"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Info, MonitorPlay, CalendarDays, LineChart, Video, Users, Clock, Settings, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function RegisterWizard() {
  const [step, setStep] = useState<1 | 2>(1);

  return (
    <div className="w-full">
      {step === 1 ? (
        <motion.div
          key="info-step"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl shadow-blue-900/5 dark:shadow-black/50 border border-gray-100 dark:border-gray-800 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <Info className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Önemli Bilgilendirme</h2>
            <p className="text-blue-100">Kayıt aşamasına geçmeden önce lütfen sistem işleyişini okuyunuz.</p>
          </div>

          <div className="p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-1">
                  <MonitorPlay className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Online Eğitim Sistemi</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Derslerimiz tamamen interaktif "online ders" mantığında, kesintisiz bir altyapı ile ilerlemektedir.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center shrink-0 mt-1">
                  <CalendarDays className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Haftada 4 Gün Program</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Haftada 3 gün konu ve ders anlatımı, 1 gün ise sınav ve konu değerlendirmesi şeklinde planlanmaktadır.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0 mt-1">
                  <LineChart className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Veli Bilgilendirme</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Çocuğun bireysel gelişimi, analitik raporları ve deneme sınavı sonuçları düzenli olarak veliyle paylaşılacaktır.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0 mt-1">
                  <Video className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Ders Tekrarları</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">İşlenen tüm dersler kayıt altına alınmaktadır. Öğrenci sistem üzerinden dilediği zaman geçmiş dersleri tekrar izleyebilir.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0 mt-1">
                  <Users className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Şeffaf İletişim</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Açık ve şeffaf iletişimimiz sayesinde, eğitim süreci her an etkileşimli ve takip edilebilir hale gelmektedir.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Esnek Saatler</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Ders ve etüt saatleri, öğrencimizin okul ve diğer müsaitlik durumlarına göre değişkenlik gösterebilir.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start md:col-span-2">
                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center shrink-0 mt-1">
                  <Settings className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Kişiselleştirilmiş Planlama</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Planlanan dersler ve müfredat ağırlığı, öğrencinin o anki ihtiyacına, eksik konularına ve akademik seviyesine göre dinamik olarak değiştirilebilir.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-2xl p-6 mb-10 flex items-center gap-4">
              <CheckCircle2 className="w-8 h-8 text-blue-600 dark:text-blue-400 shrink-0" />
              <p className="text-sm md:text-base text-blue-800 dark:text-blue-300 font-medium">
                Daha detaylı bilgilendirme, kayıt oluşturulduktan sonra öğrencinin seviyesi test edilip ihtiyaçları belirlendiğinde özel olarak verilecektir.
              </p>
            </div>

            <div className="flex justify-center">
              <button 
                onClick={() => setStep(2)}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-500/30 flex items-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10">Okudum, Kayıt Formuna İlerle</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="form-step"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full flex flex-col"
        >
          <div className="flex justify-between items-center mb-6 px-2">
            <button 
              onClick={() => setStep(1)}
              className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Geri Dön
            </button>
            <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20 px-3 py-1 rounded-full">
              Kayıt Aşaması
            </span>
          </div>

          <div className="w-full bg-white dark:bg-gray-900 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-black/50 border border-gray-100 dark:border-gray-800 overflow-hidden h-[800px] md:h-[1000px]">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSfKDwJSXMt7BM2O90ugMw2N9wyVoxIGWiyFTdvxxoitgUqX0g/viewform?embedded=true" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              className="w-full h-full bg-transparent"
            >
              Yükleniyor…
            </iframe>
          </div>
        </motion.div>
      )}
    </div>
  );
}
