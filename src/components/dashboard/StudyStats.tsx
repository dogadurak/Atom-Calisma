"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { name: "Pzt", soru: 120 },
  { name: "Sal", soru: 150 },
  { name: "Çar", soru: 90 },
  { name: "Per", soru: 180 },
  { name: "Cum", soru: 210 },
  { name: "Cmt", soru: 300 },
  { name: "Paz", soru: 250 },
];

export default function StudyStats() {
  return (
    <div className="bg-white/80 dark:bg-[#0b1121]/80 backdrop-blur-xl rounded-[2rem] p-8 border border-black/5 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] col-span-1 lg:col-span-2">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <h2 className="text-2xl font-extrabold tracking-tight">Haftalık İvme Analizi</h2>
        <select className="bg-white dark:bg-[#030712] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-sm font-medium outline-none focus:border-cyan-500 transition-colors text-slate-600 dark:text-slate-300 shadow-sm cursor-pointer hover:border-cyan-500/50">
          <option>Bu Hafta</option>
          <option>Geçen Hafta</option>
          <option>Bu Ay</option>
        </select>
      </div>

      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCyan" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={1}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.8}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" opacity={0.03} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: "currentColor", opacity: 0.4, fontWeight: 500 }} 
              dy={10} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: "currentColor", opacity: 0.4, fontWeight: 500 }} 
            />
            <Tooltip 
              cursor={{ fill: "currentColor", opacity: 0.02 }}
              contentStyle={{ 
                backgroundColor: "rgba(3, 7, 18, 0.9)", 
                backdropFilter: "blur(10px)",
                borderRadius: "16px", 
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)",
                color: "#fff"
              }} 
              itemStyle={{ color: "#06b6d4", fontWeight: "900" }}
              labelStyle={{ color: "#94a3b8", fontWeight: "500", marginBottom: "4px" }}
            />
            <Bar dataKey="soru" fill="url(#colorCyan)" radius={[6, 6, 0, 0]} maxBarSize={45} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
