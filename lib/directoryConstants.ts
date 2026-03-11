/** Shared constants & helpers for the directory feature. */

export const CATEGORY_COLORS: Record<string, string> = {
  Academic: "bg-purple-100 text-purple-700",
  Arts: "bg-pink-100 text-pink-700",
  Service: "bg-green-100 text-green-700",
  Cultural: "bg-orange-100 text-orange-700",
  STEM: "bg-blue-100 text-blue-700",
  Sports: "bg-red-100 text-red-700",
  Leadership: "bg-amber-100 text-amber-700",
  Media: "bg-cyan-100 text-cyan-700",
  Other: "bg-neutral-100 text-neutral-700",
};

export const CATEGORY_TAG_COLORS: Record<string, string> = {
  STEM: "bg-blue-100 text-blue-700 border-blue-200",
  Arts: "bg-pink-100 text-pink-700 border-pink-200",
  Service: "bg-green-100 text-green-700 border-green-200",
  Leadership: "bg-amber-100 text-amber-700 border-amber-200",
  Academic: "bg-purple-100 text-purple-700 border-purple-200",
  Cultural: "bg-orange-100 text-orange-700 border-orange-200",
  Media: "bg-cyan-100 text-cyan-700 border-cyan-200",
};

export const MEETING_DAY_FILTERS = [
  "Any",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
] as const;

export const MEETING_TIME_FILTERS = [
  "Any",
  "Before School",
  "Lunch",
  "After School",
  "Weekends",
] as const;

export const CATEGORY_FILTERS = [
  "Any",
  "Academic",
  "Arts",
  "Service",
  "Cultural",
  "STEM",
  "Sports",
  "Leadership",
  "Media",
  "Other",
] as const;

export const SIZE_FILTERS = [
  "Any",
  "Small (< 30)",
  "Medium (30-50)",
  "Large (50+)",
] as const;

export const STATUS_FILTERS = [
  "Any",
  "Open Enrollment",
  "Application Required",
  "Tryout Required",
] as const;

/* ── Filter helpers ── */

const WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export function inferDay(schedule: string): string {
  return WEEKDAYS.find((day) => schedule.includes(day)) || "Varies";
}

export function matchesSize(memberCount: number, size: string): boolean {
  if (size === "Any") return true;
  if (size.includes("< 30")) return memberCount < 30;
  if (size.includes("30-50")) return memberCount >= 30 && memberCount <= 50;
  if (size.includes("50+")) return memberCount > 50;
  return true;
}
