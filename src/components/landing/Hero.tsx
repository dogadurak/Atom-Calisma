"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-brand-blue rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-brand-purple rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-72 h-72 bg-brand-orange rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 border border-primary/20">
            %100 Ücretsiz Eğitim Girişimi
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Sınavı Şansa Değil, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
              Sisteme Bırak
            </span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-6">
            Derslerden çok daha fazlası. Geleceğine yön verecek bakış açıları, yapay zeka destekli koçluk ve tamamen ücretsiz bir gelişim platformu.
          </p>
          <p className="text-sm md:text-base text-foreground/50 max-w-2xl mx-auto mb-10">
            <span className="font-bold text-foreground/70">Beren Heycan</span> (Hacettepe Üniversitesi) ve <span className="font-bold text-foreground/70">Doğa Durak</span> (İzmir Katip Çelebi Üniversitesi) tarafından hayata geçirilen, kâr amacı gütmeyen eğitim teknolojileri girişimi.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary/90 transition-transform transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-primary/30">
              Hemen Ücretsiz Dene <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-card text-card-foreground border border-foreground/10 rounded-full font-bold text-lg hover:bg-foreground/5 transition-transform transform hover:scale-105 flex items-center justify-center gap-2">
              <PlayCircle size={20} /> Sistemi İncele
            </button>
          </div>
        </motion.div>

        {/* Dashboard Mockup Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="rounded-2xl border border-foreground/10 bg-card p-2 shadow-2xl overflow-hidden">
            <div className="aspect-video bg-background rounded-xl border border-foreground/5 relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5"></div>
              <p className="text-foreground/40 font-mono text-sm">Platform Arayüzü Önizlemesi</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
