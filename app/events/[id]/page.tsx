"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { events } from "@/lib/data";
import { getSubmittedEvents, SubmittedEvent } from "@/lib/clientState";

export default function EventDetailPage() {
  const params = useParams<{ id: string }>();
  const [localEvent, setLocalEvent] = useState<SubmittedEvent | null>(null);

  useEffect(() => {
    const found = getSubmittedEvents().find((item) => item.id === params.id);
    if (found) setLocalEvent(found);
  }, [params.id]);

  const seeded = events.find((item) => item.id === params.id);

  if (!seeded && !localEvent) {
    return (
      <div className="min-h-screen bg-neutral-100 flex items-center justify-center px-4">
        <div className="card p-8 max-w-xl w-full text-center">
          <h1 className="text-2xl font-heading font-bold text-primary-600">
            Event Not Found
          </h1>
          <Link href="/events" className="btn-primary inline-block mt-5">
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  const event = seeded
    ? {
        title: seeded.title,
        chapterName: seeded.chapterName,
        location: seeded.location,
        date: seeded.date,
        startTime: seeded.startTime,
        endTime: seeded.endTime,
        description: seeded.description,
        isPublic: seeded.isPublic,
      }
    : {
        title: localEvent!.title,
        chapterName: localEvent!.clubName,
        location: localEvent!.location,
        date: localEvent!.date,
        startTime: localEvent!.startTime,
        endTime: localEvent!.endTime,
        description: localEvent!.description,
        isPublic: true,
      };

  return (
    <div className="min-h-screen bg-neutral-100 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link
          href="/events"
          className="text-sm font-semibold text-primary-600 hover:underline"
        >
          ← Back to Events
        </Link>
        <div className="card p-8 mt-3">
          <h1 className="text-3xl font-heading font-bold text-primary-600">
            {event.title}
          </h1>
          <p className="mt-2 text-neutral-700">Hosted by {event.chapterName}</p>
          <div className="mt-4 text-sm text-neutral-700 space-y-1">
            <p>
              <span className="font-semibold">Date:</span> {event.date}
            </p>
            <p>
              <span className="font-semibold">Time:</span> {event.startTime} -{" "}
              {event.endTime}
            </p>
            <p>
              <span className="font-semibold">Location:</span> {event.location}
            </p>
            <p>
              <span className="font-semibold">Visibility:</span>{" "}
              {event.isPublic ? "Open Event" : "Members Only"}
            </p>
          </div>
          <p className="mt-6 text-neutral-700">{event.description}</p>
        </div>
      </div>
    </div>
  );
}
