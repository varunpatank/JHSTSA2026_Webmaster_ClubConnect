"use client";

import { useRef, useEffect, useState } from "react";
import { chapters, events } from "@/lib/data";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const suggestions = [
  "What STEM clubs are available?",
  "Which clubs meet after school?",
  "Recommend a club for someone who likes art",
  "What events are happening soon?",
  "How do I start a new club?",
];

function generateResponse(input: string): string {
  const q = input.toLowerCase();

  // Club search by category
  const categories = [
    "stem",
    "academic",
    "arts",
    "service",
    "cultural",
    "media",
    "leadership",
    "sports",
  ];
  for (const cat of categories) {
    if (q.includes(cat)) {
      const matches = chapters.filter((c) => c.category.toLowerCase() === cat);
      if (matches.length > 0) {
        return `I found ${matches.length} ${cat} club${matches.length > 1 ? "s" : ""}:\n\n${matches
          .map(
            (c) =>
              `• **${c.name}** — ${c.memberCount} members, meets ${c.meetingTime.toLowerCase()}. ${c.membershipStatus}.`,
          )
          .join("\n")}`;
      }
      return `I don't see any ${cat} clubs right now. You could propose one!`;
    }
  }

  // Meeting time queries
  if (q.includes("after school") || q.includes("afternoon")) {
    const matches = chapters.filter((c) => c.meetingTime === "After School");
    return `${matches.length} clubs meet after school:\n\n${matches.map((c) => `• **${c.name}** (${c.category}) — ${c.meetingSchedule}`).join("\n")}`;
  }
  if (q.includes("lunch")) {
    const matches = chapters.filter((c) => c.meetingTime === "Lunch");
    return `${matches.length} clubs meet during lunch:\n\n${matches.map((c) => `• **${c.name}** (${c.category}) — ${c.meetingSchedule}`).join("\n")}`;
  }

  // Events
  if (
    q.includes("event") ||
    q.includes("happening") ||
    q.includes("upcoming")
  ) {
    const upcoming = events.slice(0, 3);
    return `Here are upcoming events:\n\n${upcoming.map((e) => `• **${e.title}** — ${e.date}, ${e.startTime} at ${e.location} (${e.chapterName})`).join("\n")}`;
  }

  // Start a club
  if (q.includes("start") && q.includes("club")) {
    return "To start a new club:\n\n1. Define your club's purpose and mission\n2. Find a faculty advisor\n3. Gather at least 5 interested members\n4. Draft a constitution\n5. Submit a proposal at /propose\n\nCheck our **Resources** page for templates and guides!";
  }

  // Art / creative
  if (q.includes("art") || q.includes("creative") || q.includes("perform")) {
    const arts = chapters.filter(
      (c) => c.category === "Arts" || c.category === "Media",
    );
    return `For creative interests, check out:\n\n${arts.map((c) => `• **${c.name}** — ${c.description.slice(0, 80)}…`).join("\n")}`;
  }

  // Recommend
  if (
    q.includes("recommend") ||
    q.includes("suggest") ||
    q.includes("help me find")
  ) {
    return "I'd love to help! Try our **Club Match Quiz** above — it takes just 1 minute and gives personalized recommendations based on your interests and schedule.\n\nOr tell me what you're interested in (e.g., 'I like technology', 'I want to help people') and I'll suggest clubs!";
  }

  // Resource
  if (q.includes("resource") || q.includes("template") || q.includes("guide")) {
    return "Check out our **Resources** page for:\n\n• Constitution templates\n• Budget request forms\n• Event planning checklists\n• Meeting minutes templates\n• Leadership guides\n\nVisit /resources to browse and download.";
  }

  // Alumni / counselor
  if (q.includes("alumni") || q.includes("mentor") || q.includes("counselor")) {
    return "We have alumni connections available:\n\n• **Jessica Chen** (Georgetown, Policy Analyst) — Model UN alum\n• **Marcus Williams** (MIT, Robotics Engineer) — Robotics alum\n\nFor counselor meetings, contact your school counselor through the main office or check the **Student Resources** section on this page.";
  }

  // Default
  return 'I can help you find clubs, events, and resources! Try asking:\n\n• "What STEM clubs are available?"\n• "Which clubs meet during lunch?"\n• "How do I start a new club?"\n• "What events are coming up?"\n• "Recommend a club for someone who likes art"';
}

export default function AIChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi! I'm ClubConnect's assistant. I can help you find clubs, resources, events, and more. What are you looking for?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text.trim(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = generateResponse(text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div
      className="bg-white border border-neutral-200 flex flex-col rounded-xl overflow-hidden"
      style={{ height: 370 }}
    >
      <div className="bg-primary-700 text-white px-4 py-3 flex items-center gap-2">
        <span className="text-lg">💬</span>
        <div>
          <h3 className="font-heading font-bold text-sm">ClubConnect AI</h3>
          <p className="text-xs text-white/70">
            Ask about clubs, events & resources
          </p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex-grow overflow-y-auto p-3 space-y-2.5"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] px-3 py-2 text-sm whitespace-pre-line rounded-lg ${
                msg.role === "user"
                  ? "bg-primary-500 text-white"
                  : "bg-neutral-100 text-neutral-700 border border-neutral-200"
              }`}
            >
              {msg.content
                .split("**")
                .map((part, i) =>
                  i % 2 === 1 ? (
                    <strong key={i}>{part}</strong>
                  ) : (
                    <span key={i}>{part}</span>
                  ),
                )}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-neutral-100 border border-neutral-200 px-3 py-2 text-sm text-neutral-500 rounded-lg">
              <span className="animate-pulse">Thinking…</span>
            </div>
          </div>
        )}
      </div>

      {/* Suggestions */}
      {messages.length <= 2 && (
        <div className="px-3 pb-2 flex flex-wrap gap-1">
          {suggestions.slice(0, 3).map((s) => (
            <button
              key={s}
              onClick={() => sendMessage(s)}
              className="text-xs px-2 py-1 bg-primary-50 text-primary-600 border border-primary-200 hover:bg-primary-100 transition-colors truncate rounded-md"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <div className="p-3 border-t border-neutral-200 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
          placeholder="Ask about clubs, events…"
          className="flex-grow px-3 py-2 border border-neutral-300 text-sm focus:border-primary-500 focus:outline-none rounded-md"
        />
        <button
          onClick={() => sendMessage(input)}
          disabled={!input.trim()}
          className="bg-primary-500 hover:bg-primary-600 disabled:opacity-40 text-white px-4 py-2 text-sm font-semibold transition-colors rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
}
