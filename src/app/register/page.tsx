import { Metadata } from "next";
import Link from "next/link";
import { Atom, ArrowLeft } from "lucide-react";
import RegisterWizard from "@/components/auth/RegisterWizard";

export const metadata: Metadata = {
  title: "Öğrenci Kaydı | Atom Çalışma",
  description: "Atom Çalışma platformuna kayıt olun. Ücretsiz eğitim fırsatını kaçırmayın!",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

      <div className="w-full max-w-4xl relative z-10 flex flex-col items-center">
        <div className="w-full flex justify-between items-center mb-8">
           <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Ana Sayfaya Dön</span>
          </Link>
          
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:opacity-80 transition-opacity">
            <Atom className="w-8 h-8" />
            <span className="text-2xl font-bold tracking-tight">Atom<span className="text-cyan-500">Çalışma</span></span>
          </Link>
        </div>

        <RegisterWizard />
      </div>
    </div>
  );
}
