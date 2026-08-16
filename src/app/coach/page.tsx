import { createClient } from "@/utils/supabase/server";
import { Phone, Mail, MoreVertical, ShieldAlert, CheckCircle2, Users, CheckCircle, Clock } from "lucide-react";
import { redirect } from "next/navigation";

export default async function CoachDashboardPage() {
  const supabase = await createClient();
  // TEMPORARY BYPASS
  // const { data: { user } } = await supabase.auth.getUser();
  // if (!user) {
  //   redirect("/login");
  // }

  // Check if user is actually a coach or admin
  // const { data: profile } = await supabase
  //   .from('profiles')
  //   .select('role')
  //   .eq('id', user.id)
  //   .single();

  // if (profile?.role === 'student') {
  //   redirect("/dashboard");
  // }

  // Get total students
  const { data: students, count: studentCount } = await supabase
    .from('profiles')
    .select('*', { count: 'exact' })
    .eq('role', 'student');

  // Get total completed pomodoros
  const { count: pomodoroCount } = await supabase
    .from('pomodoro_sessions')
    .select('*', { count: 'exact', head: true });

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold mb-2">Hoş Geldin, Eğitmen! 👋</h1>
          <p className="text-foreground/60 text-lg">
            Bugün {studentCount || 0} öğrencinin sana ihtiyacı var.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="bg-card px-6 py-3 rounded-2xl border border-foreground/5 shadow-sm text-center">
            <p className="text-xs text-foreground/60 uppercase font-bold tracking-wider mb-1">Toplam Öğrenci</p>
            <p className="text-2xl font-black text-primary">{studentCount || 0}</p>
          </div>
          <div className="bg-card px-6 py-3 rounded-2xl border border-foreground/5 shadow-sm text-center">
            <p className="text-xs text-foreground/60 uppercase font-bold tracking-wider mb-1">Toplam Pomodoro</p>
            <p className="text-2xl font-black text-brand-orange">{pomodoroCount || 0}</p>
          </div>
        </div>
      </div>

      {/* Student List Table */}
      <div className="bg-card border border-foreground/5 rounded-3xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-foreground/5 flex justify-between items-center">
          <h2 className="text-xl font-bold">Öğrenci Listesi</h2>
          <button className="text-sm font-bold text-primary hover:underline">Tümünü Gör</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-foreground/5 text-foreground/60 text-sm">
                <th className="p-4 font-bold">Öğrenci Adı</th>
                <th className="p-4 font-bold">Rol</th>
                <th className="p-4 font-bold">Kayıt Tarihi</th>
                <th className="p-4 font-bold">Aksiyon</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-foreground/5">
              {students?.map((student) => (
                <tr key={student.id} className="hover:bg-foreground/[0.02] transition-colors group">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-blue to-brand-purple flex items-center justify-center text-white font-bold shadow-sm">
                        {student.email ? student.email[0].toUpperCase() : "?"}
                      </div>
                      <div>
                        <p className="font-bold text-foreground group-hover:text-primary transition-colors cursor-pointer">{student.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 font-medium text-foreground/80">{student.role}</td>
                  <td className="p-4 font-medium text-foreground/80">
                    {new Date(student.created_at).toLocaleDateString('tr-TR')}
                  </td>
                  <td className="p-4">
                    <button className="p-2 text-foreground/40 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                      <MoreVertical size={20} />
                    </button>
                  </td>
                </tr>
              ))}
              {(!students || students.length === 0) && (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-foreground/50">
                    Henüz kayıtlı öğrenci bulunmuyor.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
