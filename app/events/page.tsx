"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { events } from "@/lib/data";
import {
  getSubmittedEvents,
  isLoggedIn,
  SubmittedEvent,
} from "@/lib/clientState";

export default function EventsPage() {
  const [category, setCategory] = useState("Any");
  const [month, setMonth] = useState("Any");
  const [submitted, setSubmitted] = useState<SubmittedEvent[]>([]);

  useEffect(() => {
    setSubmitted(getSubmittedEvents());
  }, []);

  const mergedEvents = useMemo(() => {
    const normalizedSubmitted = submitted.map((event) => ({
      id: event.id,
      title: event.title,
      description: event.description,
      date: event.date,
      startTime: event.startTime,
      endTime: event.endTime,
      location: event.location,
      chapterId: event.clubId,
      chapterName: event.clubName,
      category: "Other" as const,
      isPublic: true,
      requiresRSVP: false,
      currentAttendees: 0,
    }));

    return [...normalizedSubmitted, ...events].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );
  }, [submitted]);

  const categories = useMemo(
    () => [
      "Any",
      ...Array.from(new Set(mergedEvents.map((event) => event.category))),
    ],
    [mergedEvents],
  );

  const months = useMemo(() => {
    const labels = mergedEvents.map((event) =>
      new Date(event.date).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      }),
    );
    return ["Any", ...Array.from(new Set(labels))];
  }, [mergedEvents]);

  const filtered = useMemo(() => {
    return mergedEvents.filter((event) => {
      if (category !== "Any" && event.category !== category) return false;
      if (month !== "Any") {
        const label = new Date(event.date).toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        });
        if (label !== month) return false;
      }
      return true;
    });
  }, [category, month, mergedEvents]);

  return (
    <div className="bg-neutral-100 min-h-screen">
      <section className="bg-primary-500 text-white border-b-4 border-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-5xl font-heading font-bold">
              Events
            </h1>
            <p className="mt-2 text-neutral-100">
              Meetings, performances, competitions, and special activities
              across clubs.
            </p>
          </div>
          <Link
            href={isLoggedIn() ? "/events/new" : "/login?redirect=/events/new"}
            className="btn-secondary text-center"
          >
            Add Event
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="card p-5 grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-1">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="select-field"
            >
              {categories.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-1">
              Month
            </label>
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="select-field"
            >
              {months.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        <p className="mt-5 text-sm text-neutral-700">
          Showing {filtered.length} events
        </p>

        <div className="mt-4 space-y-3">
          {filtered.map((event) => (
            <div key={event.id} className="card p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <Link
                    href={`/events/${event.id}`}
                    className="text-xl font-heading font-bold text-primary-600 hover:underline"
                  >
                    {event.title}
                  </Link>
                  <p className="text-sm text-neutral-600">
                    {event.chapterName}
                  </p>
                  <p className="text-sm text-neutral-700 mt-1">
                    {event.date} · {event.startTime} - {event.endTime} ·{" "}
                    {event.location}
                  </p>
                </div>
                <span
                  className={`badge ${event.isPublic ? "badge-primary" : "badge-outline"}`}
                >
                  {event.isPublic ? "Open Event" : "Members Only"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
