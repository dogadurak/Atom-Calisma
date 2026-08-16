import { ReactNode } from "react";
import Link from "next/link";
import { Users, FileText, LayoutDashboard, Settings, LogOut } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-950">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col hidden md:flex">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
          <Link href="/admin" className="text-xl font-bold text-gray-900 dark:text-white">
            Admin Paneli
          </Link>
          <ThemeToggle />
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors">
            <LayoutDashboard className="w-5 h-5" />
            <span className="font-medium">Genel Bakış</span>
          </Link>
          <Link href="/admin/applications" className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors">
            <FileText className="w-5 h-5" />
            <span className="font-medium">Gelen Başvurular</span>
          </Link>
          <Link href="/admin/students" className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors">
            <Users className="w-5 h-5" />
            <span className="font-medium">Kayıtlı Öğrenciler</span>
          </Link>
          <div className="pt-2 pb-1">
            <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Eğitmenler</p>
          </div>
          <Link href="/admin/doga" className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors">
            <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-600 flex items-center justify-center font-bold text-xs">D</div>
            <span className="font-medium">Doğa'nın Programı</span>
          </Link>
          <Link href="/admin/beren" className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors">
            <div className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-600 flex items-center justify-center font-bold text-xs">B</div>
            <span className="font-medium">Beren'in Programı</span>
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors">
            <Settings className="w-5 h-5" />
            <span className="font-medium">Ayarlar</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <form action="/auth/signout" method="post">
            <button type="submit" className="flex items-center gap-3 px-4 py-3 w-full text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-xl transition-colors">
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Çıkış Yap</span>
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 md:p-8">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
