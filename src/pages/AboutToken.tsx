import React, { useEffect } from "react";
import { gsap } from "gsap";

const AboutToken: React.FC = () => {
  useEffect(() => {
    gsap.from(".animate-up", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      clearProps: "all",
    });
  }, []);

  return (
    <div className="pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-up">
            <h1 className="text-5xl font-bold font-heading mb-6 text-black">
              About Alieus <span className="text-green-500 bg-green-500/10">Token</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed bg-black-200 p-6 rounded-2xl">
              Alieus Coin is more than just a cryptocurrency. It's a
              foundational layer for a new decentralized economy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="animate-up">
              <h2 className="text-3xl font-bold font-heading mb-6 text-white">
                Our Mission
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We believe that financial freedom should be accessible to
                everyone, regardless of their location or background. Alieus
                Coin aims to bridge the gap between traditional finance and the
                decentralized world.
              </p>
              <div className="space-y-4">
                {[
                  "Decentralized Governance",
                  "Transparent Auditing",
                  "Community Ownership",
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <i className="fa-solid fa-check text-green-500 text-xs"></i>
                    </div>
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-up">
              <img
                src="https://picsum.photos/600/400?random=2"
                alt="Blockchain"
                className="rounded-3xl border border-white/10 shadow-2xl"
              />
            </div>
          </div>

          <div className="animate-up glass p-10 md:p-16 rounded-3xl border-white/10 text-center relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"></div>
            <h2 className="text-3xl font-bold font-heading mb-8 text-white">
              Built on Security & Trust
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { title: "Verified Contract", icon: "fa-code" },
                { title: "Locked Liquidity", icon: "fa-lock" },
                { title: "Certik Audit", icon: "fa-stamp" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                    <i
                      className={`fa-solid ${item.icon} text-green-500 text-xl`}
                    ></i>
                  </div>
                  <span className="font-bold text-white">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutToken;
