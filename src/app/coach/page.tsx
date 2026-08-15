"use client";

import { Phone, Mail, MoreVertical, ShieldAlert, CheckCircle2 } from "lucide-react";

const MOCK_STUDENTS = [
  { id: 1, name: "Ahmet Yılmaz", grade: "8. Sınıf", phone: "0555 123 4567", email: "ahmet@ogrenci.com", status: "Aktif", lastActive: "2 saat önce" },
  { id: 2, name: "Ayşe Demir", grade: "7. Sınıf", phone: "0532 987 6543", email: "ayse@ogrenci.com", status: "Riskli", lastActive: "3 gün önce" },
  { id: 3, name: "Can Kaya", grade: "8. Sınıf", phone: "0544 321 0987", email: "can@ogrenci.com", status: "Aktif", lastActive: "15 dk önce" },
  { id: 4, name: "Zeynep Çelik", grade: "5. Sınıf", phone: "0505 555 1122", email: "zeynep@ogrenci.com", status: "Aktif", lastActive: "1 gün önce" },
];

export default function CoachDashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold mb-2">Hoş Geldin, Eğitmen! 👋</h1>
          <p className="text-foreground/60 text-lg">
            Bugün {MOCK_STUDENTS.length} öğrencinin sana ihtiyacı var.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="bg-card px-6 py-3 rounded-2xl border border-foreground/5 shadow-sm text-center">
            <p className="text-xs text-foreground/60 uppercase font-bold tracking-wider mb-1">Toplam Öğrenci</p>
            <p className="text-2xl font-black text-primary">{MOCK_STUDENTS.length}</p>
          </div>
          <div className="bg-card px-6 py-3 rounded-2xl border border-foreground/5 shadow-sm text-center">
            <p className="text-xs text-foreground/60 uppercase font-bold tracking-wider mb-1">Riskli</p>
            <p className="text-2xl font-black text-red-500">1</p>
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
                <th className="p-4 font-bold">Sınıf</th>
                <th className="p-4 font-bold">İletişim Bilgileri</th>
                <th className="p-4 font-bold">Durum</th>
                <th className="p-4 font-bold text-center">Aksiyon</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-foreground/5">
              {MOCK_STUDENTS.map((student) => (
                <tr key={student.id} className="hover:bg-foreground/[0.02] transition-colors group">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-blue to-brand-purple flex items-center justify-center text-white font-bold shadow-sm">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-bold text-foreground group-hover:text-primary transition-colors cursor-pointer">{student.name}</p>
                        <p className="text-xs text-foreground/50">Son giriş: {student.lastActive}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 font-medium text-foreground/80">{student.grade}</td>
                  <td className="p-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-foreground/80">
                        <Phone size={14} className="text-foreground/40" />
                        {student.phone}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground/80">
                        <Mail size={14} className="text-foreground/40" />
                        {student.email}
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col gap-1">
                      {student.status === "Aktif" ? (
                        <span className="flex items-center gap-1 text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-md w-max">
                          <CheckCircle2 size={14} /> Düzenli Çalışıyor
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-xs font-bold text-red-500 bg-red-500/10 px-2 py-1 rounded-md w-max">
                          <ShieldAlert size={14} /> Takip Edilmeli
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <button className="p-2 text-foreground/40 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                      <MoreVertical size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
