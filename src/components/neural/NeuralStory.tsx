"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import NeuralBrain from "./NeuralBrain";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function NeuralStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate activity level based on scroll progress (0 to 100)
  const activityLevel = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [10, 30, 50, 70, 90, 100]);

  // We only need the activity level, not the opacities anymore.

  // Brain Position - Keep it centered
  const brainX = "0%";
  const brainScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-white transition-colors duration-500">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Background Ambient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 via-slate-50 to-slate-50 dark:from-blue-900/20 dark:via-[#020617] dark:to-[#020617] pointer-events-none transition-colors duration-500" />
        
        {/* The Brain (Sticky & Transforming) */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center w-full h-full pointer-events-none"
          style={{ x: brainX, scale: brainScale }}
        >
          <div className="w-full max-w-4xl opacity-80 md:opacity-100">
            <NeuralBrain activityLevel={activityLevel.get()} />
          </div>
        </motion.div>

        {/* Sadece Beyin Simülasyonu - Yazılar kaldırıldı */}

      </div>
    </section>
  );
}
