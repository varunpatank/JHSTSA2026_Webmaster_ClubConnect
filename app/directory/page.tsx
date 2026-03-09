"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { chapters } from "@/lib/data";
import { formatChapterLocation, getPrimaryLocation } from "@/lib/location";

const DirectoryLeafletMap = dynamic(
  () => import("@/components/DirectoryLeafletMap"),
  { ssr: false },
);

const meetingDayFilters = [
  "Any",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];
const meetingTimeFilters = [
  "Any",
  "Before School",
  "Lunch",
  "After School",
  "Weekends",
];
const categoryFilters = [
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
];

function inferDay(schedule: string) {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  return days.find((day) => schedule.includes(day)) || "Varies";
}

export default function DirectoryPage() {
  const [search, setSearch] = useState("");
  const [meetingDay, setMeetingDay] = useState("Any");
  const [meetingTime, setMeetingTime] = useState("Any");
  const [category, setCategory] = useState("Any");
  const [roomFilter, setRoomFilter] = useState("Any");

  const rooms = useMemo(() => {
    const uniqueRooms = new Set(
      chapters.map((chapter) => getPrimaryLocation(chapter.meetingLocation)),
    );
    return ["Any", ...Array.from(uniqueRooms)];
  }, []);

  const filtered = useMemo(() => {
    return chapters.filter((chapter) => {
      const query = search.trim().toLowerCase();
      if (query) {
        const fields = [
          chapter.name,
          chapter.description,
          chapter.category,
          chapter.meetingLocation.parentOrg,
          chapter.meetingLocation.room,
          chapter.meetingLocation.internalLocation,
        ]
          .join(" ")
          .toLowerCase();
        if (!fields.includes(query)) return false;
      }

      if (
        meetingDay !== "Any" &&
        inferDay(chapter.meetingSchedule) !== meetingDay
      )
        return false;
      if (meetingTime !== "Any" && chapter.meetingTime !== meetingTime)
        return false;
      if (category !== "Any" && chapter.category !== category) return false;
      if (
        roomFilter !== "Any" &&
        getPrimaryLocation(chapter.meetingLocation) !== roomFilter
      )
        return false;

      return true;
    });
  }, [search, meetingDay, meetingTime, category, roomFilter]);

  return (
    <div className="bg-neutral-100 min-h-screen">
      <section className="bg-primary-500 text-white border-b-4 border-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 animate-fade-up">
          <p className="text-xs sm:text-sm uppercase tracking-[0.12em] font-semibold text-primary-100">
            Discover & Compare
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-heading font-bold">
            Club Directory
          </h1>
          <p className="mt-3 max-w-2xl text-primary-100 leading-relaxed">
            Explore clubs with map-assisted room filtering, search, and
            school-friendly discovery filters.
          </p>
        </div>
      </section>

      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid lg:grid-cols-[320px_1fr] gap-6 animate-fade-up"
        style={{ animationDelay: "100ms" }}
      >
        <aside className="card p-5 h-fit">
          <h2 className="text-lg font-heading font-bold text-primary-600">
            Filters
          </h2>
          <p className="body-muted mt-1">
            Narrow results quickly by time, category, and meeting room.
          </p>
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">
                Search
              </label>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, category, room"
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">
                Meeting day
              </label>
              <select
                value={meetingDay}
                onChange={(e) => setMeetingDay(e.target.value)}
                className="select-field"
              >
                {meetingDayFilters.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">
                Time
              </label>
              <select
                value={meetingTime}
                onChange={(e) => setMeetingTime(e.target.value)}
                className="select-field"
              >
                {meetingTimeFilters.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="select-field"
              >
                {categoryFilters.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">
                Room / location
              </label>
              <select
                value={roomFilter}
                onChange={(e) => setRoomFilter(e.target.value)}
                className="select-field"
              >
                {rooms.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <button
              type="button"
              className="btn-outline w-full"
              onClick={() => {
                setSearch("");
                setMeetingDay("Any");
                setMeetingTime("Any");
                setCategory("Any");
                setRoomFilter("Any");
              }}
            >
              Clear filters
            </button>
          </div>
        </aside>

        <div className="space-y-6">
          <div className="card p-5">
            <h2 className="text-lg font-heading font-bold text-primary-600">
              Interactive Club Map
            </h2>
            <p className="text-sm text-neutral-600 mt-1">
              Explore meeting locations and click a marker to filter clubs.
            </p>
            <div className="mt-4">
              <DirectoryLeafletMap
                chapters={filtered}
                activeRoom={roomFilter}
                onSelectRoom={setRoomFilter}
              />
            </div>
            <div className="mt-4 grid sm:grid-cols-3 gap-3">
              {rooms.slice(1, 7).map((room) => (
                <button
                  key={room}
                  type="button"
                  onClick={() =>
                    setRoomFilter(roomFilter === room ? "Any" : room)
                  }
                  className={`border px-3 py-3 text-left text-sm font-semibold ux-hover-lift-sm ${roomFilter === room ? "border-primary-500 bg-primary-50 text-primary-700" : "border-neutral-300 bg-white text-neutral-700 hover:border-primary-400"}`}
                >
                  {room}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between px-1">
            <p className="text-sm font-medium text-neutral-700">
              Showing {filtered.length} of {chapters.length} clubs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {filtered.map((chapter) => (
              <Link
                href={`/directory/${chapter.id}`}
                key={chapter.id}
                className="card p-5 hover:border-primary-400 ux-hover-lift"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-heading font-bold text-primary-600">
                    {chapter.name}
                  </h3>
                  <span className="badge badge-outline text-xs">
                    {chapter.category}
                  </span>
                </div>
                <p className="text-sm text-neutral-700 mt-2 line-clamp-2">
                  {chapter.description}
                </p>
                <div className="mt-4 text-sm text-neutral-700 space-y-1">
                  <p>
                    <span className="font-semibold">Meeting:</span>{" "}
                    {chapter.meetingSchedule}
                  </p>
                  <p>
                    <span className="font-semibold">Time:</span>{" "}
                    {chapter.meetingTime}
                  </p>
                  <p>
                    <span className="font-semibold">Location:</span>{" "}
                    {formatChapterLocation(chapter.meetingLocation)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
