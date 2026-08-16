import Link from "next/link";
import { Atom } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50 border-b border-black/5 dark:border-white/5 bg-white/40 dark:bg-[#030712]/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2 group cursor-pointer">
            <Atom className="w-8 h-8 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
            <span className="font-extrabold text-2xl tracking-tighter text-slate-900 dark:text-white">Atom<span className="text-cyan-500">Çalışma</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600 dark:text-slate-300">
            <Link href="#hakkimizda" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Biz Kimiz?</Link>
            <Link href="#ozellikler" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Modüller</Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
              <ThemeToggle />
            </div>

            <Link href="/register" className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] dark:shadow-[0_0_25px_rgba(6,182,212,0.6)] border border-white/20">
              Kayıt Ol
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
