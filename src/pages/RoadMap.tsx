import React, { useEffect } from "react";
import { ROADMAP_ITEMS } from "../Constant";
import { gsap } from "gsap";

const Roadmap: React.FC = () => {
  useEffect(() => {
    gsap.from(".roadmap-card", {
      scrollTrigger: {
        trigger: ".roadmap-container",
        start: "top 80%",
      },
      x: (index) => (index % 2 === 0 ? -100 : 100),
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power4.out",
      clearProps: "all",
    });
  }, []);

  return (
    <div className="pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold font-heading mb-6">Our Journey</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Following a strategic plan to achieve long-term growth and ecosystem
            stability.
          </p>
        </div>

        <div className="roadmap-container relative max-w-5xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-500/0 via-green-500/50 to-green-500/0 hidden md:block"></div>

          <div className="space-y-16 md:space-y-0">
            {ROADMAP_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row items-center justify-between ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                } mb-0 md:mb-20 last:mb-0`}
              >
                <div className="w-full md:w-[45%]">
                  <div
                    className={`roadmap-card p-8 glass rounded-3xl border border-white/5 hover:border-green-500/30 transition-all ${
                      item.status === "current"
                        ? "border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.1)]"
                        : ""
                    }`}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-green-500 font-bold text-sm tracking-widest uppercase">
                        {item.phase}
                      </span>
                      {item.status === "completed" && (
                        <i className="fa-solid fa-circle-check text-green-500"></i>
                      )}
                      {item.status === "current" && (
                        <span className="text-xs px-2 py-1 bg-green-500 text-black font-bold rounded">
                          IN PROGRESS
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold font-heading mb-6">
                      {item.title}
                    </h3>
                    <ul className="space-y-3">
                      {item.description.map((desc, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-3 text-sm text-gray-400"
                        >
                          <i className="fa-solid fa-chevron-right text-[10px] text-green-500 mt-1"></i>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center w-[10%] relative z-10">
                  <div
                    className={`w-6 h-6 rounded-full border-4 border-[#050505] shadow-lg ${
                      item.status === "completed"
                        ? "bg-green-500"
                        : item.status === "current"
                        ? "bg-green-500 animate-pulse"
                        : "bg-white/20"
                    }`}
                  ></div>
                </div>

                <div className="hidden md:block w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
