"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { chapters, events } from "@/lib/data";
import { addJoinedClub, isLoggedIn } from "@/lib/clientState";
import { formatChapterLocation } from "@/lib/location";

export default function ClubDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const chapter = chapters.find((item) => item.id === params.id);

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-100 px-4">
        <div className="card p-8 max-w-xl w-full text-center">
          <h1 className="text-2xl font-heading font-bold text-primary-600">
            Club Not Found
          </h1>
          <p className="text-neutral-600 mt-2">
            The selected club could not be located.
          </p>
          <Link href="/directory" className="btn-primary inline-block mt-5">
            Back to Directory
          </Link>
        </div>
      </div>
    );
  }

  const chapterEvents = events
    .filter((event) => event.chapterId === chapter.id)
    .slice(0, 3);

  const handleJoin = () => {
    if (!isLoggedIn()) {
      router.push(
        `/login?redirect=/directory/${chapter.id}&action=join&club=${chapter.id}`,
      );
      return;
    }

    const status =
      chapter.membershipStatus === "Open Enrollment" ? "member" : "pending";
    addJoinedClub({ id: chapter.id, name: chapter.name, status });
    router.push("/profile?from=join");
  };

  return (
    <div className="bg-neutral-100 min-h-screen">
      <section className="bg-primary-500 text-white border-b-4 border-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <Link
            href="/directory"
            className="text-sm text-neutral-100 hover:underline"
          >
            ← Back to Directory
          </Link>
          <div className="mt-3 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
            <div>
              <span className="badge bg-white text-primary-600">
                {chapter.category}
              </span>
              <h1 className="text-2xl md:text-5xl font-heading font-bold mt-3">
                {chapter.name}
              </h1>
              <p className="mt-2 text-neutral-100 max-w-3xl">
                {chapter.description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                type="button"
                onClick={handleJoin}
                className="btn-secondary"
              >
                Request to Join
              </button>
              <Link
                href={`/donate?club=${chapter.id}`}
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-500 text-center"
              >
                Donate to Club
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="card p-6">
            <h2 className="text-xl font-heading font-bold text-primary-600">
              Club Information
            </h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-4 text-sm text-neutral-700">
              <p>
                <span className="font-semibold">Meeting schedule:</span>{" "}
                {chapter.meetingSchedule}
              </p>
              <p>
                <span className="font-semibold">Meeting day/frequency:</span>{" "}
                {chapter.meetingFrequency}
              </p>
              <p>
                <span className="font-semibold">Meeting time:</span>{" "}
                {chapter.meetingTime}
              </p>
              <p>
                <span className="font-semibold">Room/location:</span>{" "}
                {formatChapterLocation(chapter.meetingLocation)}
              </p>
              <p>
                <span className="font-semibold">Founding date:</span>{" "}
                {chapter.foundedYear}
              </p>
              <p>
                <span className="font-semibold">School affiliation:</span>{" "}
                {chapter.meetingLocation.parentOrg || "Juanita High School"}
              </p>
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-xl font-heading font-bold text-primary-600">
              Requirements & Leadership
            </h2>
            <p className="mt-3 text-sm text-neutral-700">
              <span className="font-semibold">Membership requirements:</span>{" "}
              {chapter.membershipRequirements}
            </p>
            <p className="mt-2 text-sm text-neutral-700">
              <span className="font-semibold">Membership type:</span>{" "}
              {chapter.membershipStatus}
            </p>
            <h3 className="font-semibold text-primary-600 mt-5 mb-2">
              Chapter Officers
            </h3>
            <ul className="space-y-2 text-sm text-neutral-700">
              {chapter.officers.map((officer) => (
                <li
                  key={officer.email}
                  className="border border-neutral-200 p-3"
                >
                  <span className="font-semibold">{officer.position}:</span>{" "}
                  {officer.name} (Grade {officer.grade})
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-neutral-700">
              <span className="font-semibold">Faculty advisor:</span>{" "}
              {chapter.advisor.name} · {chapter.advisor.department}
            </p>
          </div>

          {chapterEvents.length > 0 && (
            <div className="card p-6">
              <h2 className="text-xl font-heading font-bold text-primary-600">
                Upcoming Club Events
              </h2>
              <div className="mt-4 space-y-3">
                {chapterEvents.map((event) => (
                  <Link
                    href={`/events/${event.id}`}
                    key={event.id}
                    className="block border border-neutral-200 p-4 hover:border-primary-400"
                  >
                    <p className="font-semibold text-primary-600">
                      {event.title}
                    </p>
                    <p className="text-sm text-neutral-700">
                      {event.date} · {event.startTime} - {event.endTime}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="space-y-6">
          <div className="card p-6">
            <h2 className="text-lg font-heading font-bold text-primary-600">
              Quick Facts
            </h2>
            <div className="mt-4 text-sm text-neutral-700 space-y-2">
              <p>
                <span className="font-semibold">Members:</span>{" "}
                {chapter.memberCount}
              </p>
              <p>
                <span className="font-semibold">Category:</span>{" "}
                {chapter.category}
              </p>
              <p>
                <span className="font-semibold">Status:</span> Active
              </p>
            </div>
          </div>
          <div className="card p-6">
            <h2 className="text-lg font-heading font-bold text-primary-600">
              External Links
            </h2>
            <div className="mt-4 space-y-2 text-sm">
              {chapter.socialLinks.website && (
                <a
                  href={chapter.socialLinks.website}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-primary-600 hover:underline"
                >
                  Website
                </a>
              )}
              {chapter.socialLinks.instagram && (
                <p className="text-neutral-700">
                  Instagram: {chapter.socialLinks.instagram}
                </p>
              )}
              {chapter.socialLinks.discord && (
                <p className="text-neutral-700">
                  Discord: {chapter.socialLinks.discord}
                </p>
              )}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
