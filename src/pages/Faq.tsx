import React, { useState } from "react";
import { FAQ_ITEMS } from "../Constant";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold font-heading mb-6">
              Common <span className="text-green-500">Questions</span>
            </h1>
            <p className="text-gray-400">
              Everything you need to know about Alieus Coin and our ecosystem.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, i) => (
              <div
                key={i}
                className={`glass rounded-2xl border transition-all duration-300 ${
                  openIndex === i
                    ? "border-green-500/50 bg-white/5"
                    : "border-white/5"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-8 py-6 flex justify-between items-center text-left"
                >
                  <span
                    className={`text-lg font-bold font-heading transition-colors ${
                      openIndex === i ? "text-green-500" : "text-gray-200"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <i
                    className={`fa-solid fa-chevron-down transition-transform duration-300 ${
                      openIndex === i
                        ? "rotate-180 text-green-500"
                        : "text-gray-500"
                    }`}
                  ></i>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-10 glass rounded-3xl border-white/10 text-center">
            <h3 className="text-2xl font-bold font-heading mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-400 mb-8">
              Can't find the answer you're looking for? Contact our support team
              or join our community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-3 bg-green-500 text-black font-bold rounded-full hover:bg-green-600 transition-all">
                Join Telegram
              </button>
              <button className="px-8 py-3 glass hover:bg-white/10 text-white font-bold rounded-full transition-all">
                Email Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
