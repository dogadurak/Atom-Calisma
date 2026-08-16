import { createClient } from "@/utils/supabase/server";
import { Users, FileText, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Admin Paneli | Atom Çalışma",
};

export default async function AdminDashboard() {
  const supabase = await createClient();

  // TEMPORARY BYPASS
  // const { data: { user } } = await supabase.auth.getUser();
  // if (!user) redirect("/login");

  let applicationsCount = 0;
  let studentsCount = 0;

  try {
    const { count: appCount } = await supabase
      .from("applications")
      .select("*", { count: "exact", head: true });
    applicationsCount = appCount || 0;

    const { count: stuCount } = await supabase
      .from("profiles")
      .select("*", { count: "exact", head: true })
      .eq("role", "student");
    studentsCount = stuCount || 0;
  } catch (error) {
    console.error("Supabase fetch error (expected with dummy url):", error);
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Genel Bakış</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center gap-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl">
            <FileText className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Gelen Başvurular</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{applicationsCount || 0}</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center gap-4">
          <div className="p-4 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-xl">
            <Users className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Kayıtlı Öğrenciler</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{studentsCount || 0}</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center gap-4">
          <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-xl">
            <TrendingUp className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Aktif Deneme Sayısı</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">0</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 mt-8">
        <h2 className="text-xl font-bold mb-4">Hoş Geldiniz</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Soldaki menüyü kullanarak gelen başvuruları inceleyebilir veya sisteme kayıtlı öğrencileri yönetebilirsiniz.
        </p>
      </div>
    </div>
  );
}
