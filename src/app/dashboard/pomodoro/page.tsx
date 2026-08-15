"use client";

import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Music, Settings, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function PomodoroPage() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [completedPomodoros, setCompletedPomodoros] = useState(3);

  // Timer logic mock
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(25 * 60);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const progressPercentage = ((25 * 60 - timeLeft) / (25 * 60)) * 100;

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 mt-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-3 text-slate-900 dark:text-white">Odaklanma Odası ⏱️</h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-light">Dış dünyadan soyutlan, sadece hedefine odaklan.</p>
        </div>
        <div className="bg-white/80 dark:bg-[#0b1121]/80 backdrop-blur-xl p-4 rounded-2xl border border-black/5 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] flex items-center gap-5">
          <div className="text-right">
            <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest mb-1">Bugün</p>
            <p className="text-2xl font-extrabold text-cyan-600 dark:text-cyan-400">{completedPomodoros} Seans</p>
          </div>
          <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            <CheckCircle2 size={28} className="text-cyan-500 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Timer */}
        <div className="lg:col-span-2 bg-white/80 dark:bg-[#0b1121]/80 backdrop-blur-2xl border border-black/5 dark:border-white/5 rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] flex flex-col items-center justify-center min-h-[450px] relative overflow-hidden group">
          {/* Subtle background glow */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[120px] transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`} />

          <div className="relative z-10 flex flex-col items-center">
            {/* Circular Progress */}
            <div className="relative w-72 h-72 rounded-full border-[12px] border-slate-100 dark:border-[#030712] flex items-center justify-center mb-10 shadow-inner">
              <svg className="absolute top-0 left-0 w-full h-full -rotate-90">
                <circle
                  cx="144"
                  cy="144"
                  r="132"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="12"
                  className="text-cyan-500 transition-all duration-1000 drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]"
                  strokeDasharray={829} // 2 * pi * 132
                  strokeDashoffset={829 - (829 * progressPercentage) / 100}
                />
              </svg>
              <span className="text-7xl font-black tracking-tighter tabular-nums text-slate-900 dark:text-white drop-shadow-md">
                {formatTime(timeLeft)}
              </span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-8">
              <button onClick={resetTimer} className="p-4 rounded-2xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 transition-colors shadow-sm">
                <RotateCcw size={28} />
              </button>
              
              <button 
                onClick={toggleTimer} 
                className={`p-6 rounded-3xl text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 ${isActive ? 'bg-amber-500 shadow-amber-500/40 hover:shadow-amber-500/60' : 'bg-cyan-500 shadow-cyan-500/40 hover:shadow-cyan-500/60'}`}
              >
                {isActive ? <Pause size={36} /> : <Play size={36} className="ml-2" />}
              </button>

              <button className="p-4 rounded-2xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 transition-colors shadow-sm">
                <Settings size={28} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Lofi Player & Tasks */}
        <div className="lg:col-span-1 space-y-8">
          {/* Lofi Player Mock */}
          <div className="bg-white/80 dark:bg-[#0b1121]/80 backdrop-blur-xl border border-black/5 dark:border-white/5 rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-purple-500/10 text-purple-500 dark:text-purple-400 rounded-xl flex items-center justify-center border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                <Music size={24} />
              </div>
              <div>
                <h3 className="font-extrabold text-lg tracking-tight">Odak Müzikleri</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Lofi Study Beats</p>
              </div>
            </div>
            
            <div className="w-full h-28 bg-slate-100 dark:bg-[#030712] rounded-2xl flex flex-col justify-center px-5 relative overflow-hidden group border border-slate-200 dark:border-white/5">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="relative z-10 flex justify-between items-center mb-2">
                <div>
                  <p className="text-base font-bold text-slate-900 dark:text-white">Chill Lofi Study</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Şu an çalıyor...</p>
                </div>
                <button className="w-10 h-10 bg-white dark:bg-[#0b1121] rounded-full flex items-center justify-center shadow-md text-purple-500 hover:scale-110 transition-transform">
                  <Pause size={18} />
                </button>
              </div>
              {/* Fake Audio Waveform */}
              <div className="relative z-10 flex gap-[3px] items-end h-5 mt-2">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="flex-1 bg-purple-500/50 dark:bg-purple-400/50 rounded-t-sm animate-pulse" style={{ height: `${20 + Math.random() * 80}%`, animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
            </div>
          </div>

          {/* Current Tasks */}
          <div className="bg-white/80 dark:bg-[#0b1121]/80 backdrop-blur-xl border border-black/5 dark:border-white/5 rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]">
            <h3 className="font-extrabold text-lg mb-5 tracking-tight">Bu Seanstaki Hedefler</h3>
            <div className="space-y-4">
              <label className="group flex items-start gap-4 p-4 rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#030712] cursor-pointer hover:border-cyan-500/30 hover:shadow-sm transition-all">
                <input type="checkbox" className="mt-1 rounded-sm text-cyan-500 focus:ring-cyan-500 w-4 h-4 bg-white dark:bg-[#0b1121] border-slate-300 dark:border-slate-700" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Matematik: Çarpanlar ve Katlar testini bitir (20 Soru)</span>
              </label>
              <label className="group flex items-start gap-4 p-4 rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#030712] cursor-pointer hover:border-cyan-500/30 hover:shadow-sm transition-all">
                <input type="checkbox" className="mt-1 rounded-sm text-cyan-500 focus:ring-cyan-500 w-4 h-4 bg-white dark:bg-[#0b1121] border-slate-300 dark:border-slate-700" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">İnkılap: Trablusgarp Savaşı özet çıkar</span>
              </label>
            </div>
            <button className="w-full mt-6 py-3.5 text-sm font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 rounded-xl hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300">
              + Yeni Hedef Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
