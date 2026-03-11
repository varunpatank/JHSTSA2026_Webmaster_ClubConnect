import type { ChapterMeetingLocation } from "@/types";

export function getPrimaryLocation(location: ChapterMeetingLocation) {
  return location.room || location.internalLocation || "Campus";
}

export function getLocationScopeKey(location: ChapterMeetingLocation) {
  return (
    location.address ||
    location.parentOrg ||
    location.internalLocation ||
    location.room ||
    "Campus"
  );
}

export function getLocationScopeLabel(location: ChapterMeetingLocation) {
  return location.parentOrg || location.address || getLocationScopeKey(location);
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
