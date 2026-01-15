import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Home: React.FC = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="hero-glow top-0 left-0"></div>
        <div className="hero-glow bottom-0 right-0 opacity-50"></div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="hero-content z-10">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span>Next Gen Web3 Solution</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
              Empower Your{" "}
              <span className="gradient-text">Financial Future</span> with
              Alieus Coin
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              Unlock the power of decentralized finance. Join a secure,
              transparent, and high-performance blockchain ecosystem designed
              for everyone.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="px-10 py-4 bg-green-500 hover:bg-green-600 text-black font-bold rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                Get Started
              </button>
              <button className="px-10 py-4 glass hover:bg-white/10 text-white font-bold rounded-full transition-all flex items-center justify-center space-x-2">
                <span>View Whitepaper</span>
                <i className="fa-solid fa-arrow-right text-sm"></i>
              </button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-green-500/10 blur-[100px] animate-pulse"></div>
            <img
              src="https://picsum.photos/800/800?random=1"
              alt="Crypto Illustration"
              className="relative rounded-3xl transform rotate-3 hover:rotate-0 transition-all duration-700 shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-heading mb-4">
              Core Ecosystem Features
            </h2>
            <p className="text-gray-400">
              Discover why Alieus Coin is the preferred choice for the next
              generation of digital asset users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Secure Wallet",
                icon: "fa-shield-halved",
                desc: "Military-grade encryption for all your digital assets and private keys.",
              },
              {
                title: "Instant Swaps",
                icon: "fa-repeat",
                desc: "High-speed decentralized exchange protocol for low-latency trading.",
              },
              {
                title: "DeFi Staking",
                icon: "fa-chart-line",
                desc: "Earn passive income by participating in our high-yield liquidity pools.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="feature-card p-10 glass rounded-3xl border-white/5 hover:border-green-500/50 transition-all group"
              >
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-green-500 group-hover:text-black transition-all">
                  <i
                    className={`fa-solid ${f.icon} text-2xl text-green-500 group-hover:text-black`}
                  ></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-heading">
                  {f.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 glass border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Total Volume", value: "$250M+" },
              { label: "Active Users", value: "80K+" },
              { label: "Transactions", value: "1.2M+" },
              { label: "Community", value: "150K+" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-5xl font-bold font-heading gradient-text mb-2">
                  {s.value}
                </div>
                <div className="text-gray-500 uppercase tracking-widest text-xs font-bold">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
