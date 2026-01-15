import React, { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY || "");

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { role: "user" | "bot"; text: string }[]
  >([
    {
      role: "bot",
      text: "Hi! I am the Alieus AI Assistant. How can I help you today?",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setInput("");
    setLoading(true);

    try {
      const model = ai.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(userMsg);
      const response = await result.response;
      const botResponse = response.text() || "I'm sorry, I couldn't process that.";
      setMessages((prev) => [...prev, { role: "bot", text: botResponse }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Error connecting to AI service. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[400px] h-[500px] glass rounded-2xl flex flex-col shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
          <div className="p-4 bg-green-500 text-black flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <i className="fa-solid fa-robot text-green-500 text-sm"></i>
              </div>
              <span className="font-bold">Alieus AI</span>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-grow overflow-y-auto p-4 space-y-4"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    m.role === "user"
                      ? "bg-green-500 text-black rounded-tr-none"
                      : "bg-white/10 text-white rounded-tl-none"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-gray-400 text-xs italic">
                AI is thinking...
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10 bg-black/40">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex space-x-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                className="flex-grow bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-green-500"
              />
              <button
                type="submit"
                className="w-10 h-10 bg-green-500 text-black rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-green-500 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group"
      >
        <i
          className={`fa-solid ${
            isOpen ? "fa-minus" : "fa-comment-dots"
          } text-black text-2xl group-hover:rotate-12`}
        ></i>
      </button>
    </div>
  );
};

export default ChatBot;
