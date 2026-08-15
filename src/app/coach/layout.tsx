"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Users, BarChart3, MessageSquare, Settings, LogOut, Search } from "lucide-react";
import { useState } from "react";

export default function CoachLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { icon: <Users size={20} />, label: "Öğrencilerim", href: "/coach" },
    { icon: <BarChart3 size={20} />, label: "Deneme Analizleri", href: "/coach/analytics" },
    { icon: <MessageSquare size={20} />, label: "Mesajlar", href: "/coach/messages" },
    { icon: <Settings size={20} />, label: "Ayarlar", href: "/coach/settings" },
  ];

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      {/* Sidebar (Desktop) */}
      <aside className="hidden md:flex flex-col w-64 border-r border-foreground/5 bg-card z-10">
        <div className="p-6">
          <Link href="/coach" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-brand-orange to-brand-purple rounded-lg flex items-center justify-center font-black text-white italic transform -rotate-3">
              AÇ
            </div>
            <span className="font-extrabold text-xl tracking-tight">Koç Paneli</span>
          </Link>
        </div>

        <div className="px-4 py-6">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" size={16} />
            <input 
              type="text" 
              placeholder="Öğrenci Ara..." 
              className="w-full bg-background border border-foreground/5 rounded-lg py-2 pl-9 pr-4 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive 
                    ? "bg-primary text-primary-foreground font-bold shadow-md shadow-primary/20" 
                    : "text-foreground/70 hover:bg-foreground/5 hover:text-foreground"
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-foreground/5">
          <button className="flex items-center gap-3 px-4 py-3 w-full text-left rounded-xl text-red-500 hover:bg-red-500/10 transition-colors font-medium">
            <LogOut size={20} />
            Çıkış Yap
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-full overflow-y-auto bg-background/50">
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
