"use client";

import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

export default function ScoreRadial({ score }) {
  const data = [{ name: "score", value: score, fill: "#14b8a6" }];

  return (
    <div className="bg-white rounded-2xl p-6 border shadow-sm flex flex-col items-center">
      <h2 className="font-semibold text-slate-800 mb-2">
        Resume Score
      </h2>

      <RadialBarChart
        width={200}
        height={200}
        innerRadius="70%"
        outerRadius="100%"
        data={data}
        startAngle={90}
        endAngle={-270}
      >
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar dataKey="value" cornerRadius={10} />
      </RadialBarChart>

      <p className="text-3xl font-bold text-teal-600 -mt-24">
        {score}
      </p>

      <p className="text-xs text-slate-500 mt-2">
        Overall Performance
      </p>
    </div>
  );
}