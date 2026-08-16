"use client";

import { useState } from "react";
import { Loader2, Mail, User, Phone, Calendar, School, Award, BookOpen, AlertCircle, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    birth_date: "",
    school: "",
    gpa: "",
    grade_level: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Kayıt işlemi başarısız oldu.");
      }

      setStatus("success");
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "Bir hata oluştu, lütfen tekrar deneyin.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Kayıt Başarılı! 🎉</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-sm">
          Kaydınız başarıyla alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.
        </p>
        <Link 
          href="/"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors font-medium inline-flex items-center gap-2"
        >
          Ana Sayfaya Dön
          <ArrowRight size={18} />
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "error" && (
        <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-xl flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
          <p className="text-red-600 dark:text-red-400 text-sm">{errorMessage}</p>
        </div>
      )}

      {/* İsim - Soyisim */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="first_name" className="block text-sm font-semibold mb-1.5 text-gray-700 dark:text-gray-300">Ad</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <User className="h-4.5 w-4.5 text-gray-400" />
            </div>
            <input
              type="text"
              id="first_name"
              name="first_name"
              required
              value={formData.first_name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 dark:text-white placeholder:text-gray-400"
              placeholder="Adınız"
            />
          </div>
        </div>
        <div>
          <label htmlFor="last_name" className="block text-sm font-semibold mb-1.5 text-gray-700 dark:text-gray-300">Soyad</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <User className="h-4.5 w-4.5 text-gray-400" />
            </div>
            <input
              type="text"
              id="last_name"
              name="last_name"
              required
              value={formData.last_name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 dark:text-white placeholder:text-gray-400"
              placeholder="Soyadınız"
            />
          </div>
        </div>
      </div>

      {/* E-posta */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-1.5 text-gray-700 dark:text-gray-300">E-posta Adresi</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <Mail className="h-4.5 w-4.5 text-gray-400" />
          </div>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 dark:text-white placeholder:text-gray-400"
            placeholder="ornek@email.com"
          />
        </div>
      </div>

      {/* Telefon */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold mb-1.5 text-gray-700 dark:text-gray-300">Telefon Numarası</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <Phone className="h-4.5 w-4.5 text-gray-400" />
          </div>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 dark:text-white placeholder:text-gray-400"
            placeholder="05XX XXX XX XX"
          />
        </div>
      </div>

      {/* Doğum Tarihi - Sınıf Seviyesi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="birth_date" className="block text-sm font-semibold mb-1.5 text-gray-700 dark:text-gray-300">Doğum Tarihi</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Calendar className="h-4.5 w-4.5 text-gray-400" />
            </div>
            <input
              type="date"
              id="birth_date"
              name="birth_date"
              required
              value={formData.birth_date}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 dark:text-white"
            />
          </div>
        </div>
        <div>
          <label htmlFor="grade_level" className="block text-sm font-semibold mb-1.5 text-gray-700 dark:text-gray-300">Sınıf Seviyesi</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <BookOpen className="h-4.5 w-4.5 text-gray-400" />
            </div>
            <select
              id="grade_level"
              name="grade_level"
              required
              value={formData.grade_level}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 dark:text-white appearance-none"
            >
              <option value="" disabled>Sınıf seçin</option>
              <option value="1">1. Sınıf</option>
              <option value="2">2. Sınıf</option>
              <option value="3">3. Sınıf</option>
              <option value="4">4. Sınıf</option>
              <option value="5">5. Sınıf</option>
              <option value="6">6. Sınıf</option>
              <option value="7">7. Sınıf</option>
              <option value="8">8. Sınıf</option>
            </select>
          </div>
        </div>
      </div>

      {/* Okul - Diploma Notu */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="school" className="block text-sm font-semibold mb-1.5 text-gray-700 dark:text-gray-300">Okul Adı</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <School className="h-4.5 w-4.5 text-gray-400" />
            </div>
            <input
              type="text"
              id="school"
              name="school"
              required
              value={formData.school}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 dark:text-white placeholder:text-gray-400"
              placeholder="Okulunuzun adı"
            />
          </div>
        </div>
        <div>
          <label htmlFor="gpa" className="block text-sm font-semibold mb-1.5 text-gray-700 dark:text-gray-300">Diploma Not Ortalaması</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Award className="h-4.5 w-4.5 text-gray-400" />
            </div>
            <input
              type="number"
              id="gpa"
              name="gpa"
              required
              min="0"
              max="100"
              step="0.01"
              value={formData.gpa}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 dark:text-white placeholder:text-gray-400"
              placeholder="Örn: 85.50"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 transition-all flex justify-center items-center gap-2.5 disabled:opacity-70 disabled:cursor-not-allowed mt-4 text-lg"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Kayıt Yapılıyor...
          </>
        ) : (
          <>
            Kayıt Ol
            <ArrowRight size={20} />
          </>
        )}
      </button>

      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
        Zaten hesabınız var mı?{" "}
        <Link href="/login" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
          Giriş Yapın
        </Link>
      </p>
    </form>
  );
}
