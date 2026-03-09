import type { ChapterMeetingLocation } from "@/types";

export function getPrimaryLocation(location: ChapterMeetingLocation) {
  return location.room || location.internalLocation || "Campus";
}

export function formatChapterLocation(location: ChapterMeetingLocation) {
  const primary = getPrimaryLocation(location);
  const extras = [
    location.internalLocation && location.internalLocation !== primary
      ? location.internalLocation
      : undefined,
    location.parentOrg,
  ].filter(Boolean);

  return extras.length > 0 ? `${primary}, ${extras.join(", ")}` : primary;
}
