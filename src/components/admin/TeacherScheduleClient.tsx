"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Users, Calendar, Clock, Plus, X, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

type Schedule = {
  id: string;
  student_id: string;
  teacher_name: string;
  day_of_week: string;
  time_slot: string;
  created_at: string;
  profiles: {
    email: string;
    full_name: string | null;
  };
};

type Student = {
  id: string;
  email: string;
};

export default function TeacherScheduleClient({
  teacherName,
  initialSchedules,
  students,
}: {
  teacherName: string;
  initialSchedules: Schedule[];
  students: Student[];
}) {
  const [schedules, setSchedules] = useState<Schedule[]>(initialSchedules);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  // Form states
  const [selectedStudent, setSelectedStudent] = useState("");
  const [day, setDay] = useState("Pazartesi");
  const [time, setTime] = useState("09:00 - 10:00");

  const uniqueStudentsCount = new Set(schedules.map((s) => s.student_id)).size;
  const totalLessons = schedules.length;

  const handleAddSchedule = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStudent) return;
    
    setLoading(true);
    const { data, error } = await supabase
      .from("teacher_schedules")
      .insert({
        student_id: selectedStudent,
        teacher_name: teacherName,
        day_of_week: day,
        time_slot: time,
      })
      .select(`*, profiles(email, full_name)`)
      .single();

    if (!error && data) {
      setSchedules([...schedules, data]);
      setIsModalOpen(false);
      setSelectedStudent("");
      router.refresh();
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Bu dersi silmek istediğinize emin misiniz?")) return;
    
    const { error } = await supabase
      .from("teacher_schedules")
      .delete()
      .eq("id", id);
      
    if (!error) {
      setSchedules(schedules.filter(s => s.id !== id));
      router.refresh();
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {teacherName}'nın Programı
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            {teacherName} öğretmenine ait haftalık ders programı ve öğrenci takibi.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 flex items-center gap-2 rounded-xl font-medium transition-colors"
        >
          <Plus size={20} />
          Yeni Ders Ekle
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center gap-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl">
            <Users className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Öğrenci Sayısı</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{uniqueStudentsCount}</p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center gap-4">
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-xl">
            <Calendar className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Haftalık Aktif Ders</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{totalLessons}</p>
          </div>
        </div>
      </div>

      {/* Schedule Table */}
      <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 text-sm">
                <th className="p-4 font-bold">Öğrenci</th>
                <th className="p-4 font-bold">Gün</th>
                <th className="p-4 font-bold">Saat</th>
                <th className="p-4 font-bold w-20 text-center">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {schedules.map((schedule) => (
                <tr key={schedule.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/20 transition-colors">
                  <td className="p-4">
                    <p className="font-medium text-gray-900 dark:text-white">
                      {schedule.profiles.email}
                    </p>
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
                      <Calendar size={14} />
                      {schedule.day_of_week}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400">
                      <Clock size={14} />
                      {schedule.time_slot}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <button 
                      onClick={() => handleDelete(schedule.id)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {schedules.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-gray-500 dark:text-gray-400">
                    Henüz planlanmış bir ders bulunmuyor.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-gray-800">
              <h2 className="text-xl font-bold">Yeni Ders Ekle</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleAddSchedule} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Öğrenci
                </label>
                <select
                  required
                  value={selectedStudent}
                  onChange={(e) => setSelectedStudent(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-transparent"
                >
                  <option value="" disabled>Öğrenci Seçin</option>
                  {students.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.email}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Gün
                  </label>
                  <select
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-transparent"
                  >
                    {["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"].map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Saat
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-transparent"
                  >
                    {[
                      "09:00 - 10:00",
                      "10:00 - 11:00",
                      "11:00 - 12:00",
                      "13:00 - 14:00",
                      "14:00 - 15:00",
                      "15:00 - 16:00",
                      "16:00 - 17:00",
                      "17:00 - 18:00"
                    ].map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-xl font-medium transition-colors disabled:opacity-50"
                >
                  {loading ? "Kaydediliyor..." : "Kaydet"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
