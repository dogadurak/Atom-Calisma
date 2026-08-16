import StudentsTable from "@/components/admin/StudentsTable";

export const metadata = {
  title: "Öğrenciler | Admin Paneli",
};

export default function StudentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Kayıtlı Öğrenciler</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Sisteme kayıt olmuş olan tüm öğrencilerin listesi ve temel bilgileri.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6">
        <StudentsTable />
      </div>
    </div>
  );
}
