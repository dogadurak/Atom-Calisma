import DailySummary from "@/components/dashboard/DailySummary";
import Gamification from "@/components/dashboard/Gamification";
import StudyStats from "@/components/dashboard/StudyStats";
import BrainMap from "@/components/dashboard/BrainMap";

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <div className="mb-10 mt-4">
        <h1 className="text-4xl font-extrabold tracking-tight mb-3 text-slate-900 dark:text-white">
          Hoş Geldin, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Ahmet!</span> 👋
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg font-light">
          Bugün harika bir gün. Zihin mimarini inşa etmeye devam et.
        </p>
      </div>

      <BrainMap />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <DailySummary />
          <StudyStats />
        </div>
        <div className="lg:col-span-1">
          <Gamification />
        </div>
      </div>
    </div>
  );
}
