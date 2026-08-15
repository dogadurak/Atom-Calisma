"use client";

import { useState } from "react";
import { BookOpen, PlayCircle, Clock, CalendarDays, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const GRADES = [
  { id: 5, label: "5. Sınıf" },
  { id: 6, label: "6. Sınıf" },
  { id: 7, label: "7. Sınıf" },
  { id: 8, label: "8. Sınıf (LGS)" },
];

const SUBJECTS = [
  { id: "mat", name: "Matematik", color: "text-brand-blue", bg: "bg-brand-blue/10", border: "border-brand-blue/20" },
  { id: "fen", name: "Fen Bilimleri", color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20" },
  { id: "turkce", name: "Türkçe", color: "text-rose-500", bg: "bg-rose-500/10", border: "border-rose-500/20" },
  { id: "sosyal", name: "İnkılap / Sosyal", color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20" },
  { id: "ing", name: "İngilizce", color: "text-brand-purple", bg: "bg-brand-purple/10", border: "border-brand-purple/20" },
];

const WEEKLY_SCHEDULE = [
  { day: "Pazartesi", lessons: ["Matematik (Çarpanlar)", "Türkçe (Paragraf)"] },
  { day: "Salı", lessons: ["Fen Bilimleri (DNA)", "İngilizce (Unit 1)"] },
  { day: "Çarşamba", lessons: ["Matematik (Üslü Sayılar)", "İnkılap Tarihi"] },
  { day: "Perşembe", lessons: ["Türkçe (Sözcükte Anlam)", "Fen Bilimleri (Basınç)"] },
  { day: "Cuma", lessons: ["Genel Deneme Sınavı"] },
];

export default function LessonsPage() {
  const [selectedGrade, setSelectedGrade] = useState(8);
  const [selectedSubject, setSelectedSubject] = useState("mat");

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold mb-2">Ders Programı & Modüller</h1>
          <p className="text-foreground/60">Sınıfını seç ve haftalık hedeflerini tamamla.</p>
        </div>

        {/* Grade Selector */}
        <div className="flex p-1 bg-card border border-foreground/5 rounded-xl">
          {GRADES.map((grade) => (
            <button
              key={grade.id}
              onClick={() => setSelectedGrade(grade.id)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                selectedGrade === grade.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              {grade.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Subjects and Video Modules */}
        <div className="lg:col-span-2 space-y-6">
          {/* Subject Tabs */}
          <div className="flex flex-wrap gap-3">
            {SUBJECTS.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setSelectedSubject(sub.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-all ${
                  selectedSubject === sub.id
                    ? `${sub.bg} ${sub.border} ${sub.color} shadow-sm font-bold`
                    : "bg-card border-foreground/5 text-foreground/60 hover:bg-foreground/5"
                }`}
              >
                <BookOpen size={18} />
                {sub.name}
              </button>
            ))}
          </div>

          {/* Module Content */}
          <div className="bg-card rounded-3xl p-6 border border-foreground/5 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <PlayCircle className="text-primary" /> Sıradaki Dersler
              </h2>
              <span className="text-sm font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                %45 Tamamlandı
              </span>
            </div>

            <div className="space-y-4">
              {[1, 2, 3].map((module, idx) => (
                <div key={idx} className="group relative flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-2xl border border-foreground/5 bg-background hover:border-primary/30 transition-all gap-4">
                  <div className="flex gap-4">
                    <div className="relative w-32 h-20 bg-foreground/5 rounded-lg overflow-hidden shrink-0 flex items-center justify-center">
                      <PlayCircle className="text-foreground/40 group-hover:text-primary transition-colors w-8 h-8" />
                      {idx === 0 && (
                         <div className="absolute bottom-1 right-1 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded font-mono">14:20</div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                        {idx === 0 ? "Çarpanlar ve Katlar - Yeni Nesil Soru Çözümü" : idx === 1 ? "Üslü İfadeler Kurallar" : "Kareköklü Sayılara Giriş"}
                      </h3>
                      <p className="text-sm text-foreground/50 mt-1 line-clamp-2">
                        LGS mantığında sorulan soruların kısa yolları ve dikkat edilmesi gereken püf noktalar.
                      </p>
                    </div>
                  </div>
                  
                  <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg font-bold hover:bg-primary hover:text-primary-foreground transition-colors shrink-0">
                    <PlayCircle size={18} /> İzle
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Weekly Schedule */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-3xl p-6 border border-foreground/5 shadow-sm sticky top-6">
            <div className="flex items-center gap-2 mb-6">
              <CalendarDays className="text-brand-orange w-6 h-6" />
              <h2 className="text-xl font-bold">Haftalık Program</h2>
            </div>

            <div className="relative border-l-2 border-foreground/10 ml-3 space-y-6">
              {WEEKLY_SCHEDULE.map((schedule, idx) => (
                <div key={idx} className="relative pl-6">
                  <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-card ${idx === 0 ? "bg-primary" : "bg-foreground/20"}`}></div>
                  <h3 className={`font-bold mb-2 ${idx === 0 ? "text-primary" : "text-foreground"}`}>
                    {schedule.day}
                    {idx === 0 && <span className="ml-2 text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full uppercase">Bugün</span>}
                  </h3>
                  <ul className="space-y-2">
                    {schedule.lessons.map((lesson, lIdx) => (
                      <li key={lIdx} className="flex items-center gap-2 text-sm text-foreground/70">
                        {idx === 0 ? (
                          <CheckCircle2 size={16} className={lIdx === 0 ? "text-green-500" : "text-foreground/20"} />
                        ) : (
                          <div className="w-4 h-4 rounded-full border-2 border-foreground/10" />
                        )}
                        <span className={idx === 0 && lIdx === 0 ? "line-through opacity-50" : ""}>{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
