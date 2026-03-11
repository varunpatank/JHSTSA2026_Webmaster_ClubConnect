"use client";

import Link from "next/link";
import { chapters } from "@/lib/data";
import type { Chapter } from "@/types";

function getPopularityScore(c: Chapter) {
  return (
    c.memberCount + (c.isActive ? 10 : 0) + (2026 - c.foundedYear > 5 ? 5 : 15)
  );
}

export default function TrendingClubs() {
  const sorted = [...chapters].sort(
    (a, b) => getPopularityScore(b) - getPopularityScore(a),
  );
  const trending = sorted.slice(0, 3);

  return (
    <div className="bg-white border border-neutral-200 p-4 rounded-xl h-full">
      <h2 className="text-lg font-heading font-bold text-primary-700 mb-3">
        🔥 Trending Clubs
      </h2>
      <div className="space-y-1.5">
        {trending.map((club, idx) => (
          <Link
            key={club.id}
            href={`/directory/${club.id}`}
            className="flex items-center gap-3 border border-neutral-200 p-3 hover:border-primary-300 hover:bg-primary-50/30 transition-all group rounded-lg"
          >
            <span className="text-2xl font-heading font-bold text-secondary-400 w-8 text-center">
              {idx + 1}
            </span>
            <div className="min-w-0">
              <p className="font-semibold text-primary-700 group-hover:text-primary-600 truncate text-sm">
                {club.name}
              </p>
              <p className="text-xs text-neutral-500">
                {club.memberCount} members · {club.category}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
