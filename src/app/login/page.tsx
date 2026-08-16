"use client";

import { useState } from "react";
import { Mail, Lock, ArrowRight, Loader2 } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const supabase = createClient();
      const { data, error: authError } = await supabase.auth.signInWithPassword({ 
        email, 
        password 
      });
      
      if (authError) throw authError;

      // Check role to redirect
      if (data.user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', data.user.id)
          .single();

        if (profile?.role === 'admin') {
          router.push("/admin");
        } else if (profile?.role === 'coach') {
          router.push("/coach");
        } else {
          router.push("/dashboard");
        }
      }

    } catch (err: any) {
      setError(err.message || "Giriş yapılamadı. Bilgilerinizi kontrol edin.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030712] flex items-center justify-center p-4 relative overflow-hidden transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md bg-white/70 dark:bg-[#0b1121]/70 backdrop-blur-2xl border border-black/5 dark:border-white/5 p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] relative z-10 transition-all">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center transform rotate-3 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            <span className="text-white text-3xl font-black italic -rotate-3 tracking-tighter">AÇ</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-2 text-slate-900 dark:text-white">
            Tekrar Hoş Geldin!
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Hedeflerine kaldığın yerden devam et.
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm font-medium p-4 rounded-xl mb-6 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-700 dark:text-slate-300 pl-1">E-posta</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Mail size={18} />
              </div>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white dark:bg-[#030712] border border-slate-200 dark:border-white/10 rounded-xl py-3.5 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 shadow-sm"
                placeholder="ornek@ogrenci.com"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center pl-1">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Şifre</label>
              <a href="#" className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline">Şifremi Unuttum</a>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Lock size={18} />
              </div>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white dark:bg-[#030712] border border-slate-200 dark:border-white/10 rounded-xl py-3.5 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 shadow-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-cyan-500 text-white py-3.5 rounded-xl font-bold mt-8 flex items-center justify-center gap-2 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                Giriş Yap
                <ArrowRight size={20} />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 text-center text-sm font-medium text-slate-500 dark:text-slate-400">
          Hesabın yok mu?
          <button 
            onClick={() => router.push('/register')}
            className="font-bold text-cyan-600 dark:text-cyan-400 hover:underline ml-1"
          >
            Hemen Kaydol
          </button>
        </div>
      </div>
    </div>
  );
}
