"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";


export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    target_exam: "YKS",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const supabase = createClient();
    
    const { error } = await supabase
      .from("applications")
      .insert([formData]);

    if (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error.message || "Bir hata oluştu, lütfen tekrar deneyin.");
    } else {
      setStatus("success");
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        target_exam: "YKS",
        message: "",
      });
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center bg-green-50 dark:bg-green-950/20 rounded-2xl border border-green-200 dark:border-green-900">
        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
        <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2">Başvurunuz Alındı!</h3>
        <p className="text-green-600 dark:text-green-300">
          En kısa sürede sizinle iletişime geçeceğiz.
        </p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-6 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
        >
          Yeni Başvuru Yap
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && (
        <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
          <p className="text-red-600 dark:text-red-400">{errorMessage}</p>
        </div>
      )}

      <div>
        <label htmlFor="full_name" className="block text-sm font-medium mb-2">Ad Soyad</label>
        <input
          type="text"
          id="full_name"
          name="full_name"
          required
          value={formData.full_name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          placeholder="Adınız ve Soyadınız"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">E-posta Adresi</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            placeholder="ornek@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">Telefon Numarası</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            placeholder="0555 555 5555"
          />
        </div>
      </div>

      <div>
        <label htmlFor="target_exam" className="block text-sm font-medium mb-2">Hedef Sınav</label>
        <select
          id="target_exam"
          name="target_exam"
          value={formData.target_exam}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none"
        >
          <option value="YKS">YKS (TYT / AYT)</option>
          <option value="LGS">LGS</option>
          <option value="KPSS">KPSS</option>
          <option value="DGS">DGS</option>
          <option value="ALES">ALES</option>
          <option value="Diger">Diğer</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">Eklemek İstedikleriniz (Opsiyonel)</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
          placeholder="Bize iletmek istediğiniz özel bir notunuz var mı?"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 transition-all flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Gönderiliyor...
          </>
        ) : (
          "Başvuruyu Tamamla"
        )}
      </button>
    </form>
  );
}
