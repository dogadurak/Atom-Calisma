import ApplicationsTable from "@/components/admin/ApplicationsTable";

export const metadata = {
  title: "Gelen Başvurular | Admin Paneli",
};

export default function ApplicationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Gelen Başvurular</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Sistem üzerinden yapılan aday öğrenci başvurularını buradan inceleyebilir ve durumlarını güncelleyebilirsiniz.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6">
        <ApplicationsTable />
      </div>
    </div>
  );
}
