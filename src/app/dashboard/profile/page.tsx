import ProfileForm from "@/components/dashboard/ProfileForm";

export const metadata = {
  title: "Profilim | Dashboard",
};

export default function ProfilePage() {
  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Kişisel Bilgiler</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Hesap bilgilerinizi ve iletişim detaylarınızı buradan güncelleyebilirsiniz.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 md:p-8">
        <ProfileForm />
      </div>
    </div>
  );
}
