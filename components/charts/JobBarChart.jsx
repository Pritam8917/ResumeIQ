"use client";

import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function JobBarChart({ jobs }) {
  const data =
    jobs?.slice(0, 6).map((job) => ({
      name: job.role.slice(0, 12),
      match: job.match_percentage,
    })) || [];

  return (
    <div className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition">
      <h2 className="font-semibold text-slate-800 mb-4">Job Match Insights</h2>

      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data}>
          <XAxis dataKey="name" tick={{ fontSize: 10 }} />
          <Tooltip />
          <Bar
            dataKey="match"
            fill="#14b8a6"
            radius={[6, 6, 0, 0]}
            animationDuration={1200}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
