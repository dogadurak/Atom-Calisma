import Link from "next/link";
import { LayoutDashboard, BookOpen, Timer, Target, Users, Settings, LogOut, Atom } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Özet", href: "/dashboard" },
    { icon: <BookOpen size={20} />, label: "Derslerim", href: "/dashboard/lessons" },
    { icon: <Timer size={20} />, label: "Pomodoro Odası", href: "/dashboard/pomodoro" },
    { icon: <Target size={20} />, label: "Deneme Sınavları", href: "/dashboard/exam" },
    { icon: <Users size={20} />, label: "Koçumla Görüş", href: "/dashboard/coaching" },
  ];

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-[#030712] overflow-hidden transition-colors duration-500">
      {/* Sidebar */}
      <aside className="w-64 bg-white/70 dark:bg-[#0b1121]/70 backdrop-blur-2xl border-r border-black/5 dark:border-white/5 hidden md:flex flex-col z-20">
        <div className="h-20 flex items-center px-6 border-b border-black/5 dark:border-white/5">
          <Link href="/" className="flex items-center gap-2 group">
            <Atom className="w-8 h-8 text-cyan-500 group-hover:rotate-90 transition-transform duration-500" />
            <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">Atom<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Çalışma</span></span>
          </Link>
        </div>
        
        <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 px-2">Menü</div>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300 ${index === 0 ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold shadow-[inset_4px_0_0_0_rgba(6,182,212,1)]" : "text-slate-500 dark:text-slate-400 font-medium hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"}`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </div>

        <div className="p-4 border-t border-black/5 dark:border-white/5 space-y-1">
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-3 rounded-xl w-full text-left font-medium text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white transition-all">
            <Settings size={20} />
            Ayarlar
          </Link>
          <button className="flex items-center gap-3 px-3 py-3 rounded-xl w-full text-left font-medium text-rose-500 hover:bg-rose-500/10 transition-all group">
            <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
            Çıkış Yap
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative z-10">
        {/* Mobile Header (Hidden on Desktop) */}
        <header className="h-16 border-b border-black/5 dark:border-white/5 flex items-center justify-between px-4 md:hidden bg-white/70 dark:bg-[#0b1121]/70 backdrop-blur-md">
          <Link href="/" className="flex items-center gap-2">
            <Atom className="w-6 h-6 text-cyan-500" />
            <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white">Atom<span className="text-cyan-500">Çalışma</span></span>
          </Link>
          <button className="p-2 bg-slate-100 dark:bg-white/5 rounded-lg text-slate-900 dark:text-white">
            <LayoutDashboard size={20} />
          </button>
        </header>
        
        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-6xl mx-auto pb-10">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
