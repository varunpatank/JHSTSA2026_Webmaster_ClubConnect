"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  addSubmittedEvent,
  getAdminClubs,
  isLoggedIn,
} from "@/lib/clientState";
import { chapters } from "@/lib/data";

interface EventSubmissionFormProps {
  initialClubId?: string;
}

export default function EventSubmissionForm({
  initialClubId,
}: EventSubmissionFormProps) {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const [clubId, setClubId] = useState(initialClubId || "");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");

  const availableClubs = useMemo(() => {
    const admin = getAdminClubs();
    if (admin.length > 0)
      return admin.map((club) => ({ id: club.id, name: club.name }));
    return chapters
      .slice(0, 6)
      .map((club) => ({ id: club.id, name: club.name }));
  }, []);

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login?redirect=/events/new");
      return;
    }
    if (!clubId && availableClubs[0]) {
      setClubId(availableClubs[0].id);
    }
    setLoaded(true);
  }, [availableClubs, clubId, router]);

  if (!loaded) {
    return <div className="min-h-screen bg-neutral-100" />;
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const selectedClub = availableClubs.find((club) => club.id === clubId);

    addSubmittedEvent({
      id: `custom-${Date.now()}`,
      clubId,
      clubName: selectedClub?.name || "Club",
      title,
      description,
      date,
      startTime,
      endTime,
      location,
    });

    router.push("/events?from=created");
  };

  return (
    <div className="bg-neutral-100 min-h-screen">
      <section className="bg-primary-500 text-white border-b-4 border-secondary-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-4xl font-heading font-bold">Event Submission</h1>
          <p className="mt-2 text-neutral-100">
            Create a club event to publish it on the club page, homepage events
            section, and events listing.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <form className="card p-6 space-y-4" onSubmit={onSubmit}>
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-1">
              Hosting club
            </label>
            <select
              className="select-field"
              value={clubId}
              onChange={(e) => setClubId(e.target.value)}
              required
            >
              {availableClubs.map((club) => (
                <option key={club.id} value={club.id}>
                  {club.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-1">
              Event title
            </label>
            <input
              className="input-field"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-1">
              Description
            </label>
            <textarea
              className="input-field min-h-24"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">
                Date
              </label>
              <input
                type="date"
                className="input-field"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">
                Location
              </label>
              <input
                className="input-field"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">
                Start time
              </label>
              <input
                type="time"
                className="input-field"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">
                End time
              </label>
              <input
                type="time"
                className="input-field"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn-primary w-full">
            Submit Event
          </button>
        </form>
      </section>
    </div>
  );
}
