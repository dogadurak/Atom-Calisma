import { Target, Trophy, FileText, ChevronRight, BarChart3 } from "lucide-react";

const UPCOMING_EXAMS = [
  { id: 1, name: "Türkiye Geneli LGS Deneme Sınavı - 1", date: "15 Ekim 2026", time: "10:00", type: "Genel", status: "Kayıtlı" },
  { id: 2, name: "Matematik Özel Branş Denemesi", date: "18 Ekim 2026", time: "18:00", type: "Branş", status: "Kayıt Ol" },
];

const PAST_EXAMS = [
  { id: 1, name: "Hazırbulunuşluk Sınavı", date: "10 Eylül 2026", score: 412.5, net: 75.5, rank: "124/5000" },
  { id: 2, name: "Kazanım Değerlendirme - 1", date: "25 Eylül 2026", score: 435.0, net: 81.25, rank: "89/5000" },
];

export default function ExamPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold mb-2">Deneme Sınavları 📝</h1>
          <p className="text-foreground/60">Gelişimini takip et, eksiklerini gör, Türkiye geneli sıralamanı öğren.</p>
        </div>
        <button className="bg-brand-orange text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-brand-orange/90 transition-all shadow-lg shadow-brand-orange/20">
          <Target size={20} />
          Hemen Deneme Çöz
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Exams */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2 border-b border-foreground/5 pb-4">
            <Trophy className="text-primary" /> Yaklaşan Sınavlar
          </h2>
          <div className="space-y-4">
            {UPCOMING_EXAMS.map((exam) => (
              <div key={exam.id} className="bg-card border border-foreground/5 rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 font-bold">
                    {exam.date.split(' ')[0]}
                  </div>
                  <div>
                    <h3 className="font-bold">{exam.name}</h3>
                    <p className="text-sm text-foreground/60">{exam.date} • {exam.time} • {exam.type}</p>
                  </div>
                </div>
                <button className={`px-4 py-2 rounded-lg font-bold text-sm w-full sm:w-auto shrink-0 ${
                  exam.status === "Kayıtlı" 
                    ? "bg-green-500/10 text-green-500" 
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}>
                  {exam.status === "Kayıtlı" ? "Kayıtlısın" : "Kayıt Ol"}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Past Exams & Analysis */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2 border-b border-foreground/5 pb-4">
            <BarChart3 className="text-brand-orange" /> Sınav Sonuçlarım
          </h2>
          <div className="space-y-4">
            {PAST_EXAMS.map((exam) => (
              <div key={exam.id} className="bg-card border border-foreground/5 rounded-2xl p-5 shadow-sm group hover:border-primary/30 transition-colors cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold group-hover:text-primary transition-colors">{exam.name}</h3>
                    <p className="text-sm text-foreground/60">{exam.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-extrabold text-foreground">{exam.score} <span className="text-sm text-foreground/50 font-normal">Puan</span></p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-foreground/5">
                  <div>
                    <p className="text-xs text-foreground/60 uppercase font-bold tracking-wider mb-1">Toplam Net</p>
                    <p className="font-bold">{exam.net} <span className="text-foreground/50 font-normal text-sm">/ 90</span></p>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/60 uppercase font-bold tracking-wider mb-1">Sıralama</p>
                    <p className="font-bold text-brand-orange">{exam.rank}</p>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-foreground/5 flex justify-between items-center text-primary text-sm font-bold">
                  <span>Karnemi ve Analizimi İncele</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
