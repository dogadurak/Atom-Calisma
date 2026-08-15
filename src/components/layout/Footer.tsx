import { Atom } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-[#030712] border-t border-slate-200 dark:border-white/5 py-16 relative z-10 text-slate-900 dark:text-white transition-colors duration-500 overflow-hidden">
      {/* Top Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 group cursor-pointer">
            <Atom className="w-6 h-6 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white/90">Atom<span className="text-cyan-500">Çalışma</span></span>
          </div>
          <p className="text-slate-500 dark:text-slate-500 text-sm font-light">
            © {new Date().getFullYear()} AtomÇalışma Eğitim Platformu. Tüm Hakları Saklıdır.
          </p>
          <div className="flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
            <a href="#" className="hover:text-cyan-500 transition-colors">Kullanım Koşulları</a>
            <a href="#" className="hover:text-cyan-500 transition-colors">Gizlilik Politikası</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
