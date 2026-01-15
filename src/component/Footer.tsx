import React from "react";
import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../Constant";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080808] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-tr from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-bolt text-white text-sm"></i>
              </div>
              <span className="text-xl font-bold font-heading">
                ALIEUS<span className="text-green-500">COIN</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The next evolution of decentralized finance. Secure, scalable, and
              community-driven. Empowering the future of global transactions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-green-500 hover:text-black transition-all"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-green-500 hover:text-black transition-all"
              >
                <i className="fa-brands fa-telegram"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-green-500 hover:text-black transition-all"
              >
                <i className="fa-brands fa-discord"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 font-heading">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-green-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 font-heading">Resources</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Whitepaper
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Audit Report
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Token Contract
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 font-heading">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with the latest news and ecosystem developments.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 focus:outline-none focus:border-green-500 transition-colors"
              />
              <button className="absolute right-2 top-2 h-8 px-4 bg-green-500 text-black text-xs font-bold rounded-md hover:bg-green-600">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Alieus Coin Ecosystem. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
