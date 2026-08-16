"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";

type Application = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  target_exam: string;
  message: string;
  status: string;
  created_at: string;
};

export default function ApplicationsTable() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    setLoading(true);
    const supabase = createClient();
    const { data, error } = await supabase
      .from("applications")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setApplications(data);
    }
    setLoading(false);
  };

  const updateStatus = async (id: string, newStatus: string) => {
    const supabase = createClient();
    const { error } = await supabase
      .from("applications")
      .update({ status: newStatus })
      .eq("id", id);
    
    if (!error) {
      setApplications((prev) => 
        prev.map(app => app.id === id ? { ...app, status: newStatus } : app)
      );
    }
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
            <th className="py-3 px-4 font-medium">İletişim</th>
            <th className="py-3 px-4 font-medium">Hedef Sınav</th>
            <th className="py-3 px-4 font-medium">Mesaj</th>
            <th className="py-3 px-4 font-medium">Tarih</th>
            <th className="py-3 px-4 font-medium">Durum</th>
            <th className="py-3 px-4 font-medium">İşlem</th>
          </tr>
        </thead>
        <tbody>
          {applications.length === 0 ? (
            <tr>
              <td colSpan={7} className="py-10 text-center text-gray-500">Henüz başvuru bulunmuyor.</td>
            </tr>
          ) : (
            applications.map((app) => (
              <tr key={app.id} className="border-b border-gray-100 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                <td className="py-3 px-4 font-medium">{app.full_name}</td>
                <td className="py-3 px-4">
                  <div className="flex flex-col text-sm">
                    <span>{app.email}</span>
                    <span className="text-gray-500">{app.phone}</span>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className="px-2.5 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">
                    {app.target_exam}
                  </span>
                </td>
                <td className="py-3 px-4 max-w-[200px] truncate" title={app.message}>{app.message || "-"}</td>
                <td className="py-3 px-4 text-sm text-gray-500">
                  {new Date(app.created_at).toLocaleDateString("tr-TR")}
                </td>
                <td className="py-3 px-4">
                  <span className={`px-2.5 py-1 text-xs rounded-full font-medium ${
                    app.status === 'pending' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                    app.status === 'approved' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                    app.status === 'rejected' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                    'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
                  }`}>
                    {app.status === 'pending' ? 'Bekliyor' :
                     app.status === 'approved' ? 'Onaylandı' :
                     app.status === 'rejected' ? 'Reddedildi' : app.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <select 
                    value={app.status}
                    onChange={(e) => updateStatus(app.id, e.target.value)}
                    className="text-sm border border-gray-200 dark:border-gray-700 rounded bg-white dark:bg-gray-950 px-2 py-1 outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="pending">Bekliyor</option>
                    <option value="approved">Onayla</option>
                    <option value="rejected">Reddet</option>
                  </select>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
