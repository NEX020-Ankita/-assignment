import React, { useEffect, useRef } from "react";
import { TOKEN_DETAILS } from "../Constant";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { gsap } from "gsap";

const data = [
  { name: "Public Sale", value: 40 },
  { name: "Liquidity Pool", value: 25 },
  { name: "Ecosystem Growth", value: 15 },
  { name: "Team & Advisors", value: 10 },
  { name: "Marketing", value: 10 },
];

const COLORS = ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444", "#a855f7"];

const Tokenomics: React.FC = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(".animate-fade", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      clearProps: "all",
    });
  }, []);

  return (
    <div ref={containerRef} className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade">
          <h1 className="text-5xl font-bold font-heading mb-6">Tokenomics</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transparent distribution strategy designed for long-term
            sustainability and value appreciation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="animate-fade">
            <div className="glass p-8 rounded-3xl border-white/5 space-y-6">
              <h3 className="text-2xl font-bold font-heading mb-6 border-b border-white/10 pb-4">
                Core Statistics
              </h3>
              {TOKEN_DETAILS.map((detail, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center group"
                >
                  <span className="text-gray-500 group-hover:text-green-500 transition-colors">
                    {detail.label}
                  </span>
                  <span className="font-bold text-gray-200">
                    {detail.value}
                  </span>
                </div>
              ))}
              <div className="mt-8 pt-6 border-t border-white/10">
                <button className="w-full py-4 bg-green-500/10 text-green-500 font-bold rounded-xl border border-green-500/20 hover:bg-green-500 hover:text-black transition-all">
                  Copy Contract Address
                </button>
              </div>
            </div>
          </div>

          <div className="animate-fade h-[400px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={140}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((_entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#111",
                    border: "1px solid #333",
                    borderRadius: "12px",
                    color: "#fff",
                  }}
                  itemStyle={{ color: "#fff" }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-fade">
          {[
            {
              label: "Burning Mechanism",
              value: "2% of every transaction is burned to reduce supply.",
            },
            {
              label: "Liquidity Lock",
              value: "100% of initial liquidity locked for 24 months.",
            },
            {
              label: "Reflection Rewards",
              value: "1% of transactions redistributed to active holders.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="p-8 glass rounded-3xl border-white/10 hover:border-green-500/30 transition-all text-center"
            >
              <h4 className="text-xl font-bold font-heading text-green-500 mb-4">
                {card.label}
              </h4>
              <p className="text-gray-400 text-sm">{card.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
