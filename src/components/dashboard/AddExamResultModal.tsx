"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Target, X, Loader2 } from "lucide-react";

type Props = {
  onSuccess: () => void;
};

export default function AddExamResultModal({ onSuccess }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    exam_name: "",
    score: "",
    net_count: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    
    if (user) {
      const { error } = await supabase.from("exam_results").insert({
        student_id: user.id,
        exam_name: formData.exam_name,
        score: parseFloat(formData.score),
        net_count: parseFloat(formData.net_count)
      });
      
      if (!error) {
        setIsOpen(false);
        setFormData({ exam_name: "", score: "", net_count: "" });
        onSuccess();
      }
    }
    setLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-brand-orange text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-brand-orange/90 transition-all shadow-lg shadow-brand-orange/20"
      >
        <Target size={20} />
        Sonuç Ekle
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-gray-900 w-full max-w-md rounded-2xl p-6 shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white"
            >
              <X size={24} />
            </button>
            
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Yeni Deneme Sonucu</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Deneme Adı</label>
                <input 
                  type="text" 
                  required 
                  value={formData.exam_name}
                  onChange={(e) => setFormData({...formData, exam_name: e.target.value})}
                  className="w-full px-4 py-2 border rounded-xl dark:bg-gray-950 dark:border-gray-800 outline-none focus:ring-2 focus:ring-brand-orange/50"
                  placeholder="Örn: TYT Genel Deneme 1"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Net</label>
                  <input 
                    type="number" 
                    step="0.25"
                    required 
                    value={formData.net_count}
                    onChange={(e) => setFormData({...formData, net_count: e.target.value})}
                    className="w-full px-4 py-2 border rounded-xl dark:bg-gray-950 dark:border-gray-800 outline-none focus:ring-2 focus:ring-brand-orange/50"
                    placeholder="85.25"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Puan</label>
                  <input 
                    type="number" 
                    step="0.01"
                    required 
                    value={formData.score}
                    onChange={(e) => setFormData({...formData, score: e.target.value})}
                    className="w-full px-4 py-2 border rounded-xl dark:bg-gray-950 dark:border-gray-800 outline-none focus:ring-2 focus:ring-brand-orange/50"
                    placeholder="425.50"
                  />
                </div>
              </div>
              
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 mt-4"
              >
                {loading ? <Loader2 className="animate-spin" /> : "Kaydet"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
