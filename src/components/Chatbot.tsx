"use client";

import { FormEvent, useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";
import { getChatResponse } from "@/lib/chatbotEngine";

interface ChatMessage {
  id: number;
  role: "user" | "bot";
  text: string;
}

const WELCOME: ChatMessage = {
  id: 0,
  role: "bot",
  text: "Hi! Ask me about symptoms, due dates, ovulation, kicks, contractions, or weight gain.",
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    const userMsg: ChatMessage = { id: Date.now(), role: "user", text };
    const botMsg: ChatMessage = { id: Date.now() + 1, role: "bot", text: getChatResponse(text) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="glass-strong mb-4 flex h-96 w-80 flex-col overflow-hidden rounded-3xl shadow-2xl shadow-accent-deep/20"
          >
            <div className="flex items-center justify-between border-b border-panel/50 px-4 py-3">
              <p className="font-semibold text-slate">Pregnancy FAQ Bot</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full p-1 text-slate/50 transition hover:bg-panel/60 hover:text-ink"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            <div ref={scrollRef} className="scrollbar-thin flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2 text-sm ${
                    m.role === "user"
                      ? "ml-auto bg-accent-deep text-white"
                      : "bg-panel/80 text-ink"
                  }`}
                >
                  {m.text}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2 border-t border-panel/50 p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 rounded-full border border-panel/60 bg-panel/80 px-4 py-2 text-sm text-ink outline-none focus:ring-2 focus:ring-accent-deep/40"
              />
              <button
                type="submit"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-deep text-white transition hover:bg-accent"
                aria-label="Send"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-deep text-white shadow-xl shadow-accent-deep/30"
        aria-label="Toggle chat"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>
    </div>
  );
}
