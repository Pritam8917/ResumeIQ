"use client";

import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function SkillDonutChart({ data }) {
  const chartData = [
    { name: "Strong", value: data?.strong?.length || 0 },
    { name: "Improving", value: data?.improving?.length || 0 },
    { name: "Missing", value: data?.missing?.length || 0 },
  ];

  const COLORS = ["#10B981", "#F59E0B", "#EF4444"];

  return (
    <div className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition">
      <h2 className="font-semibold text-slate-800 mb-4">
        Skill Distribution
      </h2>

      <div className="flex justify-center">
        <PieChart width={260} height={260}>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={95}
            paddingAngle={5}
            dataKey="value"
          >
            {chartData.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      <div className="flex justify-around text-xs mt-4">
        <span className="text-green-600">Strong</span>
        <span className="text-amber-500">Improving</span>
        <span className="text-red-500">Missing</span>
      </div>
    </div>
  );
}