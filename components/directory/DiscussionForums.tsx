"use client";

import { useState } from "react";
import Image from "next/image";

interface Discussion {
  id: string;
  title: string;
  content: string;
  author: { name: string; avatar: string; role: string };
  category: string;
  createdAt: string;
  replies: Reply[];
  views: number;
  likes: number;
  isPinned: boolean;
  tags: string[];
}

interface Reply {
  id: string;
  content: string;
  author: { name: string; avatar: string; role: string };
  createdAt: string;
  likes: number;
  isAnswer?: boolean;
}

const demoDiscussions: Discussion[] = [
  {
    id: "1",
    title: "Tips for recruiting new members at the beginning of the year?",
    content:
      "Our club lost a lot of seniors last year and we need to rebuild. What strategies have worked for you to attract new members during club fair?",
    author: {
      name: "Sarah Chen",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      role: "President",
    },
    category: "Recruiting",
    createdAt: "2026-02-09T10:30:00",
    views: 234,
    likes: 18,
    isPinned: true,
    tags: ["recruiting", "membership"],
    replies: [
      {
        id: "1a",
        content:
          "We created an interactive demo at our club fair booth — it really helped draw people in! Also, having current members wear club shirts creates visibility.",
        author: {
          name: "Marcus Johnson",
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
          role: "Vice President",
        },
        createdAt: "2026-02-09T11:45:00",
        likes: 12,
        isAnswer: true,
      },
      {
        id: "1b",
        content:
          "Social media presence before school starts helps a lot. We post teaser content on Instagram over the summer.",
        author: {
          name: "Emily Rodriguez",
          avatar:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
          role: "Member",
        },
        createdAt: "2026-02-09T14:20:00",
        likes: 8,
      },
    ],
  },
  {
    id: "2",
    title: "How to handle disagreements between officers?",
    content:
      "Two of our officers have very different visions for the club direction and it's causing tension. Looking for advice on conflict resolution.",
    author: {
      name: "Jordan Lee",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
      role: "Advisor",
    },
    category: "Leadership",
    createdAt: "2026-02-08T16:00:00",
    views: 156,
    likes: 24,
    isPinned: false,
    tags: ["leadership", "conflict"],
    replies: [
      {
        id: "2a",
        content:
          "Schedule a dedicated meeting to discuss the vision openly. Sometimes writing down everyone's ideas helps depersonalize the conflict.",
        author: {
          name: "Dr. Patricia Williams",
          avatar:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
          role: "Mentor",
        },
        createdAt: "2026-02-08T17:30:00",
        likes: 15,
        isAnswer: true,
      },
    ],
  },
  {
    id: "3",
    title: "Best fundraising ideas that actually work?",
    content:
      "We need to raise $500 for our upcoming competition. What fundraisers have been most successful? Looking for ideas beyond bake sales.",
    author: {
      name: "Alex Martinez",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
      role: "Treasurer",
    },
    category: "Fundraising",
    createdAt: "2026-02-08T09:15:00",
    views: 312,
    likes: 31,
    isPinned: false,
    tags: ["fundraising", "competition"],
    replies: [
      {
        id: "3a",
        content:
          "Spirit wear sales work great for us. We design custom club merchandise and sell it to members and their families.",
        author: {
          name: "Maya Patel",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
          role: "Secretary",
        },
        createdAt: "2026-02-08T12:45:00",
        likes: 14,
        isAnswer: true,
      },
    ],
  },
  {
    id: "4",
    title: "Virtual club meetings — how do you keep them engaging?",
    content:
      "We still have some hybrid members who attend virtually. What tools and techniques do you use to keep online participants engaged?",
    author: {
      name: "Nina Okafor",
      avatar:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80",
      role: "Vice President",
    },
    category: "Meetings",
    createdAt: "2026-02-07T14:30:00",
    views: 178,
    likes: 11,
    isPinned: false,
    tags: ["virtual", "engagement"],
    replies: [],
  },
];

const categories = [
  "All",
  "Recruiting",
  "Leadership",
  "Fundraising",
  "Meetings",
  "Events",
  "Competitions",
  "General",
];

function formatTime(timestamp: string) {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(hours / 24);
  if (hours < 1) return "Just now";
  if (hours < 24) return `${hours}h ago`;
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days}d ago`;
  return date.toLocaleDateString();
}

export default function DiscussionForums() {
  const [discussions, setDiscussions] = useState<Discussion[]>(demoDiscussions);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"recent" | "popular" | "unanswered">(
    "recent",
  );
  const [selectedDiscussion, setSelectedDiscussion] =
    useState<Discussion | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [newDiscussion, setNewDiscussion] = useState({
    title: "",
    content: "",
    category: "General",
    tags: "",
  });
  const [newReply, setNewReply] = useState("");

  const filteredDiscussions = discussions
    .filter((d) => {
      if (selectedCategory !== "All" && d.category !== selectedCategory)
        return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          d.title.toLowerCase().includes(q) ||
          d.content.toLowerCase().includes(q) ||
          d.tags.some((t) => t.toLowerCase().includes(q))
        );
      }
      return true;
    })
    .sort((a, b) => {
      if (a.isPinned !== b.isPinned) return a.isPinned ? -1 : 1;
      if (sortBy === "recent")
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      if (sortBy === "popular")
        return b.likes + b.replies.length - (a.likes + a.replies.length);
      if (sortBy === "unanswered") return a.replies.length - b.replies.length;
      return 0;
    });

  const createDiscussion = () => {
    if (!newDiscussion.title.trim() || !newDiscussion.content.trim()) return;
    const discussion: Discussion = {
      id: Date.now().toString(),
      title: newDiscussion.title,
      content: newDiscussion.content,
      author: {
        name: "You",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
        role: "Member",
      },
      category: newDiscussion.category,
      createdAt: new Date().toISOString(),
      replies: [],
      views: 0,
      likes: 0,
      isPinned: false,
      tags: newDiscussion.tags
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t),
    };
    setDiscussions([discussion, ...discussions]);
    setNewDiscussion({ title: "", content: "", category: "General", tags: "" });
    setIsCreating(false);
    setSelectedDiscussion(discussion);
  };

  const addReply = () => {
    if (!newReply.trim() || !selectedDiscussion) return;
    const reply: Reply = {
      id: Date.now().toString(),
      content: newReply,
      author: {
        name: "You",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
        role: "Member",
      },
      createdAt: new Date().toISOString(),
      likes: 0,
    };
    const updated = discussions.map((d) =>
      d.id === selectedDiscussion.id
        ? { ...d, replies: [...d.replies, reply] }
        : d,
    );
    setDiscussions(updated);
    setSelectedDiscussion({
      ...selectedDiscussion,
      replies: [...selectedDiscussion.replies, reply],
    });
    setNewReply("");
  };

  const likeDiscussion = (id: string) => {
    setDiscussions(
      discussions.map((d) => (d.id === id ? { ...d, likes: d.likes + 1 } : d)),
    );
    if (selectedDiscussion?.id === id) {
      setSelectedDiscussion({
        ...selectedDiscussion,
        likes: selectedDiscussion.likes + 1,
      });
    }
  };

  // Thread detail view
  if (selectedDiscussion) {
    return (
      <div className="bg-white border border-neutral-200 p-5 space-y-5 rounded-xl">
        <button
          onClick={() => setSelectedDiscussion(null)}
          className="text-primary-600 hover:text-primary-700 text-sm font-medium"
        >
          ← Back to discussions
        </button>

        {/* Thread */}
        <div className="border border-neutral-200 p-5 rounded-lg">
          <div className="flex items-start gap-3">
            <Image
              src={selectedDiscussion.author.avatar}
              alt={selectedDiscussion.author.name}
              width={40}
              height={40}
              className="w-10 h-10 object-cover shrink-0 rounded-full"
            />
            <div className="flex-grow min-w-0">
              <h3 className="text-lg font-heading font-bold text-primary-700">
                {selectedDiscussion.title}
              </h3>
              <p className="text-neutral-600 text-sm mt-2">
                {selectedDiscussion.content}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {selectedDiscussion.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-neutral-100 text-neutral-500 text-xs rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-3 text-xs text-neutral-500">
                <span>
                  {selectedDiscussion.author.name} ·{" "}
                  {selectedDiscussion.author.role}
                </span>
                <span>{formatTime(selectedDiscussion.createdAt)}</span>
                <span>👁 {selectedDiscussion.views}</span>
                <button
                  onClick={() => likeDiscussion(selectedDiscussion.id)}
                  className="hover:text-red-500"
                >
                  ❤️ {selectedDiscussion.likes}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Replies */}
        <h4 className="font-semibold text-neutral-700 text-sm">
          {selectedDiscussion.replies.length} Replies
        </h4>
        <div className="space-y-3">
          {selectedDiscussion.replies.map((reply) => (
            <div
              key={reply.id}
              className={`border p-4 ${reply.isAnswer ? "border-l-4 border-l-green-500 bg-green-50/50 rounded-r-lg" : "border-neutral-200 rounded-lg"}`}
            >
              <div className="flex items-start gap-3">
                <Image
                  src={reply.author.avatar}
                  alt={reply.author.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-cover shrink-0 rounded-full"
                />
                <div>
                  {reply.isAnswer && (
                    <span className="text-green-600 text-xs font-semibold block mb-1">
                      ✓ Best Answer
                    </span>
                  )}
                  <p className="text-sm text-neutral-700">{reply.content}</p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-neutral-500">
                    <span>
                      {reply.author.name} · {reply.author.role}
                    </span>
                    <span>{formatTime(reply.createdAt)}</span>
                    <span>❤️ {reply.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reply form */}
        <div className="border border-neutral-200 p-4 rounded-lg">
          <h4 className="font-semibold text-neutral-700 text-sm mb-2">
            Add Reply
          </h4>
          <textarea
            value={newReply}
            onChange={(e) => setNewReply(e.target.value)}
            placeholder="Share your thoughts…"
            className="input-field text-sm"
            rows={3}
          />
          <button
            onClick={addReply}
            className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 text-sm font-semibold mt-2 transition-colors rounded-md"
          >
            Post Reply
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-neutral-200 p-4 space-y-3 rounded-xl">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <h2 className="text-lg font-heading font-bold text-primary-700">
          💬 Discussion Forums
        </h2>
        <button
          onClick={() => setIsCreating(!isCreating)}
          className="bg-secondary-500 hover:bg-secondary-600 text-white px-4 py-2 text-sm font-semibold transition-colors rounded-md"
        >
          + New Discussion
        </button>
      </div>

      {/* Create form */}
      {isCreating && (
        <div className="border-2 border-primary-300 p-4 space-y-3 animate-fade-up rounded-lg">
          <h3 className="font-heading font-bold text-primary-700 text-sm">
            Start a New Discussion
          </h3>
          <input
            type="text"
            value={newDiscussion.title}
            onChange={(e) =>
              setNewDiscussion({ ...newDiscussion, title: e.target.value })
            }
            placeholder="What's your question or topic?"
            className="input-field text-sm"
          />
          <textarea
            value={newDiscussion.content}
            onChange={(e) =>
              setNewDiscussion({ ...newDiscussion, content: e.target.value })
            }
            placeholder="Provide details…"
            className="input-field text-sm"
            rows={3}
          />
          <div className="grid sm:grid-cols-2 gap-3">
            <select
              value={newDiscussion.category}
              onChange={(e) =>
                setNewDiscussion({ ...newDiscussion, category: e.target.value })
              }
              className="select-field text-sm"
            >
              {categories
                .filter((c) => c !== "All")
                .map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
            </select>
            <input
              type="text"
              value={newDiscussion.tags}
              onChange={(e) =>
                setNewDiscussion({ ...newDiscussion, tags: e.target.value })
              }
              placeholder="Tags (comma separated)"
              className="input-field text-sm"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={createDiscussion}
              className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 text-sm font-semibold transition-colors rounded-md"
            >
              Post Discussion
            </button>
            <button
              onClick={() => setIsCreating(false)}
              className="border border-neutral-300 text-neutral-600 px-4 py-2 text-sm font-semibold hover:bg-neutral-50 transition-colors rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Filters row */}
      <div className="flex flex-wrap gap-2 items-center">
        <div className="flex gap-1 flex-wrap flex-grow">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 text-xs font-semibold transition-colors rounded-md ${
                selectedCategory === cat
                  ? "bg-primary-500 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
          className="border border-neutral-300 px-2 py-1 text-xs rounded-md"
        >
          <option value="recent">Most Recent</option>
          <option value="popular">Most Popular</option>
          <option value="unanswered">Unanswered</option>
        </select>
      </div>

      {/* Search */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search discussions…"
        className="input-field text-sm"
      />

      {/* Threads list */}
      <div className="space-y-2">
        {filteredDiscussions.map((d) => (
          <button
            key={d.id}
            onClick={() => setSelectedDiscussion(d)}
            className={`w-full text-left border p-3 hover:border-primary-300 transition-all ${
              d.isPinned
                ? "border-l-4 border-l-secondary-500 border-neutral-200 rounded-r-lg"
                : "border-neutral-200 rounded-lg"
            }`}
          >
            <div className="flex items-start gap-3">
              <Image
                src={d.author.avatar}
                alt={d.author.name}
                width={36}
                height={36}
                className="w-9 h-9 object-cover shrink-0 rounded-full"
              />
              <div className="min-w-0 flex-grow">
                <div className="flex items-center gap-2 mb-0.5">
                  {d.isPinned && (
                    <span className="text-secondary-500 text-xs">📌</span>
                  )}
                  <h4 className="font-semibold text-neutral-800 text-sm truncate">
                    {d.title}
                  </h4>
                </div>
                <p className="text-xs text-neutral-500 line-clamp-1">
                  {d.content}
                </p>
                <div className="flex items-center gap-3 mt-1.5 text-xs text-neutral-400">
                  <span>{d.author.name}</span>
                  <span className="bg-primary-50 text-primary-600 px-1.5 py-0.5 font-semibold rounded-md">
                    {d.category}
                  </span>
                  <span>{formatTime(d.createdAt)}</span>
                  <span>💬 {d.replies.length}</span>
                  <span>👁 {d.views}</span>
                  <span>❤️ {d.likes}</span>
                </div>
              </div>
            </div>
          </button>
        ))}
        {filteredDiscussions.length === 0 && (
          <div className="text-center py-6">
            <p className="text-3xl mb-2">💬</p>
            <p className="text-neutral-500 text-sm">No discussions found.</p>
            <button
              onClick={() => setIsCreating(true)}
              className="text-primary-600 text-sm font-semibold hover:underline mt-1"
            >
              Start one →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
