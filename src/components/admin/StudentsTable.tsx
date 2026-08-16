"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";

type Profile = {
  id: string;
  full_name: string;
  email: string;
  phone: string | null;
  role: string;
  created_at: string;
};

export default function StudentsTable() {
  const [students, setStudents] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    setLoading(true);
    const supabase = createClient();
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("role", "student")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setStudents(data);
    }
    setLoading(false);
  };

  if (loading) {
    return <div className="text-center py-10">Yükleniyor...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400">
            <th className="py-3 px-4 font-medium">Ad Soyad</th>
            <th className="py-3 px-4 font-medium">E-posta</th>
            <th className="py-3 px-4 font-medium">Telefon</th>
            <th className="py-3 px-4 font-medium">Kayıt Tarihi</th>
            <th className="py-3 px-4 font-medium">Durum</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan={5} className="py-10 text-center text-gray-500">Henüz kayıtlı öğrenci bulunmuyor.</td>
            </tr>
          ) : (
            students.map((student) => (
              <tr key={student.id} className="border-b border-gray-100 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                <td className="py-3 px-4 font-medium">{student.full_name}</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{student.email}</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{student.phone || "-"}</td>
                <td className="py-3 px-4 text-sm text-gray-500">
                  {new Date(student.created_at).toLocaleDateString("tr-TR")}
                </td>
                <td className="py-3 px-4">
                  <span className="px-2.5 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs rounded-full font-medium">
                    Aktif
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
