import { Trophy, Flame, Zap, Award } from "lucide-react";

export default function Gamification() {
  return (
    <div className="bg-white/80 dark:bg-[#0b1121]/80 backdrop-blur-xl rounded-[2rem] p-8 border border-black/5 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all">
      <div className="flex items-center justify-between mb-8 border-b border-slate-200 dark:border-white/5 pb-6">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight">Öğrenci Profili</h2>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">Rozetler ve İstatistikler</p>
        </div>
        <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
          <Trophy className="text-amber-500 w-7 h-7 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="group bg-white dark:bg-[#030712] rounded-2xl p-4 border border-slate-200 dark:border-white/5 flex flex-col gap-3 transition-all duration-300 hover:border-rose-500/30 hover:shadow-[0_0_20px_rgba(244,63,94,0.05)]">
          <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center border border-rose-500/20 group-hover:bg-rose-500/20 transition-colors">
            <Flame className="text-rose-500 w-5 h-5 drop-shadow-[0_0_5px_rgba(244,63,94,0.5)]" />
          </div>
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider mb-0.5">Seri</p>
            <p className="font-extrabold text-2xl tracking-tight">14 Gün</p>
          </div>
        </div>
        <div className="group bg-white dark:bg-[#030712] rounded-2xl p-4 border border-slate-200 dark:border-white/5 flex flex-col gap-3 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.05)]">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
            <Zap className="text-cyan-500 w-5 h-5 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]" />
          </div>
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider mb-0.5">Soru</p>
            <p className="font-extrabold text-2xl tracking-tight">1.450</p>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div>
        <h3 className="text-xs font-bold mb-4 text-slate-500 dark:text-slate-400 uppercase tracking-widest">Son Kazanılan Rozetler</h3>
        <div className="flex gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-14 h-14 rounded-2xl bg-white dark:bg-[#030712] border border-slate-200 dark:border-white/5 flex items-center justify-center shadow-sm relative group cursor-pointer hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300">
              <Award className={`w-7 h-7 ${i === 1 ? "text-amber-500 drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]" : i === 2 ? "text-slate-400 drop-shadow-[0_0_5px_rgba(148,163,184,0.5)]" : "text-purple-500 drop-shadow-[0_0_5px_rgba(168,85,247,0.5)]"}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
