"use client";

import { useState, useEffect } from "react";
import { BookOpen, PlayCircle, Clock, CalendarDays, CheckCircle2, Circle } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

const GRADES = [
  { id: 8, label: "8. Sınıf (LGS)" },
];

const SUBJECTS = [
  { id: "matematik", name: "Matematik", color: "text-brand-blue", bg: "bg-brand-blue/10", border: "border-brand-blue/20" },
  { id: "fen", name: "Fen Bilimleri", color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20" },
  { id: "turkce", name: "Türkçe", color: "text-rose-500", bg: "bg-rose-500/10", border: "border-rose-500/20" },
];

const TOPICS: Record<string, string[]> = {
  "matematik": ["Çarpanlar ve Katlar", "Üslü İfadeler", "Kareköklü İfadeler", "Veri Analizi", "Basit Olayların Olma Olasılığı"],
  "fen": ["Mevsimler ve İklim", "DNA ve Genetik Kod", "Basınç", "Madde ve Endüstri"],
  "turkce": ["Sözcükte Anlam", "Cümlede Anlam", "Paragrafta Anlam", "Fiilimsiler", "Cümlenin Öğeleri"]
};

export default function LessonsPage() {
  const [selectedGrade, setSelectedGrade] = useState(8);
  const [selectedSubject, setSelectedSubject] = useState("matematik");
  const [progress, setProgress] = useState<Record<string, string>>({}); // { topic_name: status }

  useEffect(() => {
    const fetchProgress = async () => {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('subject_progress')
        .select('*')
        .eq('student_id', user.id)
        .eq('course_name', selectedSubject);

      if (data && !error) {
        const progMap: Record<string, string> = {};
        data.forEach(item => {
          progMap[item.topic_name] = item.status;
        });
        setProgress(progMap);
      }
    };
    fetchProgress();
  }, [selectedSubject]);

  const toggleStatus = async (topic: string) => {
    const currentStatus = progress[topic] || 'not_started';
    const newStatus = currentStatus === 'completed' ? 'not_started' : 'completed';
    
    // Optimistic update
    setProgress(prev => ({ ...prev, [topic]: newStatus }));

    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    await supabase.from('subject_progress').upsert({
      student_id: user.id,
      course_name: selectedSubject,
      topic_name: topic,
      status: newStatus
    }, { onConflict: 'student_id, course_name, topic_name' });
  };

  const topics = TOPICS[selectedSubject] || [];
  const completedCount = topics.filter(t => progress[t] === 'completed').length;
  const progressPercent = topics.length > 0 ? Math.round((completedCount / topics.length) * 100) : 0;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold mb-2">Konu Takibi & Modüller</h1>
          <p className="text-foreground/60">Sınıfını seç ve ilerlemeni kaydet.</p>
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
                <PlayCircle className="text-primary" /> {SUBJECTS.find(s => s.id === selectedSubject)?.name} Konuları
              </h2>
              <span className="text-sm font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                %{progressPercent} Tamamlandı
              </span>
            </div>

            <div className="space-y-4">
              {topics.map((topic, idx) => (
                <div key={idx} className="group relative flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-2xl border border-foreground/5 bg-background hover:border-primary/30 transition-all gap-4">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => toggleStatus(topic)}
                      className="shrink-0 transition-colors"
                    >
                      {progress[topic] === 'completed' ? (
                        <CheckCircle2 className="text-green-500 w-8 h-8" />
                      ) : (
                        <Circle className="text-foreground/20 hover:text-primary w-8 h-8" />
                      )}
                    </button>
                    <div>
                      <h3 className={`font-bold transition-colors ${progress[topic] === 'completed' ? 'text-foreground/50 line-through' : 'text-foreground group-hover:text-primary'}`}>
                        {topic}
                      </h3>
                      <p className="text-sm text-foreground/50 mt-1 line-clamp-1">
                        Müfredata uygun LGS konu anlatımı ve soru çözümleri.
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

        {/* Right Column: Weekly Schedule (Mock) */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-3xl p-6 border border-foreground/5 shadow-sm sticky top-6">
            <div className="flex items-center gap-2 mb-6">
              <CalendarDays className="text-brand-orange w-6 h-6" />
              <h2 className="text-xl font-bold">Nasıl Çalışmalıyım?</h2>
            </div>
            <p className="text-sm text-foreground/70 mb-4">
              Seçtiğin dersteki konuları sırasıyla takip et. Önce konu anlatımını izle, ardından en az 2 test çözerek pekiştir.
            </p>
            <div className="p-4 bg-brand-orange/10 rounded-xl border border-brand-orange/20">
              <h4 className="font-bold text-brand-orange mb-2">Koç Tavsiyesi 💡</h4>
              <p className="text-xs text-foreground/80 leading-relaxed">
                "Konuyu bitirdiğini hissetmeden yeni konuya geçme. Yanlış yaptığın soruların çözümünü mutlaka öğren."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
