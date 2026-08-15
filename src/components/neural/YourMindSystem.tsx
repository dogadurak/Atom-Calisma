"use client";

import { motion } from "framer-motion";

export default function YourMindSystem() {
  return (
    <section className="py-40 bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-500">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-cyan-500/5 dark:bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-purple-500/5 dark:bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2 
          className="text-xs md:text-sm font-mono tracking-[0.4em] text-cyan-500 mb-16 uppercase font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Your mind is a system.
        </motion.h2>

        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-2xl md:text-5xl font-extrabold tracking-tight text-slate-300 dark:text-white/20 mb-3">Every question creates a connection.</p>
            <p className="text-xl md:text-3xl font-medium tracking-tight text-slate-800 dark:text-white/90">Her soru bir bağlantı oluşturur.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-2xl md:text-5xl font-extrabold tracking-tight text-slate-300 dark:text-white/20 mb-3">Every repetition strengthens it.</p>
            <p className="text-xl md:text-3xl font-medium tracking-tight text-slate-800 dark:text-white/90">Her tekrar o bağlantıyı güçlendirir.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-2xl md:text-5xl font-extrabold tracking-tight text-slate-300 dark:text-white/20 mb-3">Every goal gives it direction.</p>
            <p className="text-xl md:text-3xl font-medium tracking-tight text-slate-800 dark:text-white/90">Her hedef zihne bir yön verir.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
