import ApplicationForm from "@/components/apply/ApplicationForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Öğrenci Başvurusu | Atom Çalışma",
  description: "Atom Çalışma dershanesi öğrenci başvuru formu. Geleceğinize ilk adımı atın.",
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-4">
            Geleceğinize İlk Adımı Atın
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Aşağıdaki formu doldurarak ön başvurunuzu oluşturun. Eğitim danışmanlarımız en kısa sürede sizinle iletişime geçecektir.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-900/5 border border-gray-100 dark:border-gray-800">
          <ApplicationForm />
        </div>
      </div>
    </div>
  );
}
