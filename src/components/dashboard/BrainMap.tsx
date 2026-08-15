"use client";

import { motion } from "framer-motion";
import { Brain, Activity, Zap, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function BrainMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-white/80 dark:bg-[#0b1121]/80 backdrop-blur-xl rounded-[2rem] p-4 sm:p-8 border border-black/5 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] relative overflow-hidden mb-8 group">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 dark:bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="flex items-center justify-between gap-4 mb-6 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 dark:from-cyan-500/20 dark:to-purple-500/20 flex items-center justify-center border border-cyan-500/20">
            <Brain className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-600 dark:text-cyan-400" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">Zihin Haritası</h2>
            <p className="text-xs sm:text-sm font-medium text-cyan-600 dark:text-cyan-400 tracking-wider uppercase">Neural_Network_v2</p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-full border border-emerald-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-widest">Sistem Aktif</span>
        </div>
      </div>

      {/* Neural Simulation Container */}
      <div className="relative w-full aspect-square sm:aspect-video rounded-3xl overflow-hidden border border-black/5 dark:border-white/10 shadow-inner group/image">
        
        {/* The Image (Switches based on theme via CSS classes) */}
        {mounted && (
          <>
            <div className="absolute inset-0 bg-[url('/assets/neural-light.jpg')] dark:bg-[url('/assets/neural-dark.png')] bg-cover bg-center transition-transform duration-1000 group-hover/image:scale-[1.02]" />
            
            {/* Soft inner shadow/vignette to blend the image into the card */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/40 dark:from-[#0b1121]/10 dark:to-[#0b1121]/60 pointer-events-none" />
          </>
        )}

        {!mounted && (
          <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800 animate-pulse" />
        )}

        {/* Floating HUD Elements Overlay (To make it feel interactive/live) */}
        <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between pointer-events-none">
          {/* Top HUD */}
          <div className="flex justify-between items-start">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-xl p-3 shadow-lg"
            >
              <div className="flex items-center gap-2 text-slate-800 dark:text-cyan-400 mb-1">
                <Activity size={14} className="animate-pulse" />
                <span className="text-[10px] font-bold tracking-widest uppercase">Senkronizasyon</span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">100%</div>
            </motion.div>
          </div>

          {/* Bottom HUD */}
          <div className="flex justify-between items-end">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-xl p-3 shadow-lg max-w-[150px]"
            >
              <div className="flex items-center gap-2 text-slate-800 dark:text-purple-400 mb-2">
                <Zap size={14} />
                <span className="text-[10px] font-bold tracking-widest uppercase">Bağlantılar</span>
              </div>
              <div className="flex gap-1 h-1">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <motion.div 
                    key={i} 
                    className="flex-1 bg-purple-500 rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-xl p-3 shadow-lg flex items-center gap-3"
            >
              <CheckCircle2 className="text-emerald-500 w-5 h-5 sm:w-6 sm:h-6" />
              <div>
                <div className="text-[10px] font-bold text-slate-600 dark:text-slate-400 tracking-widest uppercase">Durum</div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">OPTİMAL</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
