import { CheckCircle2, PlayCircle, Star } from "lucide-react";

export default function DailySummary() {
  const tasks = [
    { title: "Matematik Çarpanlar ve Katlar Testi", type: "Test", status: "completed" },
    { title: "Fen Bilimleri DNA ve Genetik Kod Konu Anlatımı", type: "Video", status: "pending" },
    { title: "Türkçe Paragrafta Anlam Yeni Nesil Sorular", type: "Test", status: "pending" },
  ];

  return (
    <div className="bg-white/80 dark:bg-[#0b1121]/80 backdrop-blur-xl rounded-[2rem] p-8 border border-black/5 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all">
      <h2 className="text-2xl font-extrabold tracking-tight mb-8">Bugünün Görevleri</h2>
      
      <div className="space-y-4">
        {tasks.map((task, idx) => (
          <div key={idx} className={`group flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 hover:shadow-md ${task.status === "completed" ? "bg-emerald-500/5 border-emerald-500/20" : "bg-white dark:bg-[#030712] border-black/5 dark:border-white/5 hover:border-cyan-500/30"}`}>
            <div className="flex items-center gap-5">
              {task.status === "completed" ? (
                <CheckCircle2 className="text-emerald-500 w-7 h-7 shrink-0 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              ) : (
                <div className="w-7 h-7 rounded-full border-2 border-slate-200 dark:border-slate-700 shrink-0 group-hover:border-cyan-500 transition-colors" />
              )}
              
              <div>
                <p className={`font-bold ${task.status === "completed" ? "text-slate-400 dark:text-slate-500 line-through" : "text-slate-800 dark:text-white"}`}>
                  {task.title}
                </p>
                <div className="flex items-center gap-3 mt-1.5">
                  <span className={`text-[10px] uppercase tracking-widest font-extrabold px-2.5 py-1 rounded-md ${task.type === "Video" ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400" : "bg-purple-500/10 text-purple-600 dark:text-purple-400"}`}>
                    {task.type}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                    <Star size={12} className="text-amber-500 fill-amber-500 drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]" /> +50 XP
                  </span>
                </div>
              </div>
            </div>
            
            {task.status === "pending" && (
              <button className="hidden sm:flex items-center justify-center p-2.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 group-hover:scale-110">
                <PlayCircle size={22} />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
