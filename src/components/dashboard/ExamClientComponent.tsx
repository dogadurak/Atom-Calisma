"use client";

import { Target, Trophy, FileText, ChevronRight, BarChart3 } from "lucide-react";
import AddExamResultModal from "@/components/dashboard/AddExamResultModal";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

type ExamResult = {
  id: string;
  exam_name: string;
  score: number;
  net_count: number;
  created_at: string;
};

type Props = {
  initialResults: ExamResult[];
};

export default function ExamClientComponent({ initialResults }: Props) {
  const [results, setResults] = useState<ExamResult[]>(initialResults);

  const fetchResults = async () => {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data, error } = await supabase
      .from("exam_results")
      .select("*")
      .eq("student_id", user.id)
      .order("created_at", { ascending: false });

    if (!error && data) {
      setResults(data);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold mb-2">Deneme Sınavları 📝</h1>
          <p className="text-foreground/60">Gelişimini takip et, eksiklerini gör, hedefine ulaş.</p>
        </div>
        <AddExamResultModal onSuccess={fetchResults} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Past Exams & Analysis */}
        <div className="space-y-6 lg:col-span-2">
          <h2 className="text-xl font-bold flex items-center gap-2 border-b border-foreground/5 pb-4">
            <BarChart3 className="text-brand-orange" /> Sınav Sonuçlarım
          </h2>
          
          {results.length === 0 ? (
            <div className="bg-card border border-foreground/5 rounded-2xl p-8 text-center text-foreground/50">
              Henüz bir deneme sonucu girmediniz. Sağ üstten "Sonuç Ekle" butonuna tıklayarak ilk denemenizi kaydedin!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {results.map((exam) => (
                <div key={exam.id} className="bg-card border border-foreground/5 rounded-2xl p-5 shadow-sm group hover:border-primary/30 transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold group-hover:text-primary transition-colors">{exam.exam_name}</h3>
                      <p className="text-sm text-foreground/60">
                        {new Date(exam.created_at).toLocaleDateString('tr-TR')}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-extrabold text-foreground">{exam.score} <span className="text-sm text-foreground/50 font-normal">Puan</span></p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-foreground/5">
                    <div>
                      <p className="text-xs text-foreground/60 uppercase font-bold tracking-wider mb-1">Toplam Net</p>
                      <p className="font-bold text-lg text-primary">{exam.net_count}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
