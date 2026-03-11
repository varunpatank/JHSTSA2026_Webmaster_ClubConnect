import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Announcement } from "@/lib/data";
import { announcements, events, stats } from "@/lib/data";

function HomeAnnouncementStrip({
  announcement,
}: {
  announcement?: Announcement;
}) {
  if (!announcement) {
    return null;
  }

  return (
    <div className="relative z-10 border-t border-secondary-700 bg-secondary-500/95 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <span className="bg-white text-secondary-700 text-xs font-bold px-3 py-1 rounded-2xl shrink-0">
            NEW
          </span>
          <p className="text-lg font-medium truncate">{announcement.title}</p>
        </div>
        <Link
          href="/events"
          className="text-sm font-semibold underline underline-offset-2 hover:text-secondary-100 whitespace-nowrap"
        >
          View All
        </Link>
      </div>
    </div>
  );
}

export default function HomePage() {
  const upcomingEvents = events.slice(0, 3);
  const latestAnnouncement = announcements[0];

  return (
    <div className="min-h-screen bg-neutral-100">
      <section className="relative overflow-hidden border-b border-primary-700">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1800&q=80"
            alt="Students gathered at a school event"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-600/60 to-primary-800/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-5 md:pt-8 md:pb-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <span className="inline-flex items-center bg-secondary-500 text-white text-sm font-semibold px-4 py-1.5 rounded-2xl">
                Your School Community Hub
              </span>
              <h1 className="mt-4 text-2xl md:text-5xl font-heading font-bold leading-[1.02] tracking-tight">
                Welcome to
                <br />
                ClubConnect
              </h1>
              <p className="mt-4 max-w-xl text-lg text-white/90 leading-relaxed">
                Your central hub for school clubs, chapters, and student
                organizations. Discover, connect, and thrive with peers who
                share your passions.
              </p>
              <div className="mt-6 flex flex-col gap-3 w-auto sm:flex-row">
                <Link
                  href="/start-a-club"
                  className="inline-flex items-center justify-center border border-white/80 hover:bg-white hover:text-primary-700 text-white px-6 py-2.5 font-semibold rounded-2xl transition-colors"
                >
                  Start a New Club
                </Link>
                <Link
                  href="/directory"
                  className="inline-flex items-center justify-center gap-2 bg-secondary-500 hover:bg-secondary-600 border border-secondary-500 text-white px-6 py-2.5 font-semibold rounded-2xl transition-colors animate-jump-right"
                >
                  Browse Clubs
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 ">
              <article className="border border-white/25 bg-white/15 backdrop-blur-sm p-5 text-center text-white rounded-2xl hover:bg-white/25 transition-colors ">
                <p className="text-5xl font-heading font-bold text-secondary-300">
                  {stats.activeChapters}
                </p>
                <p className="mt-1 text-lg text-white/90">Active Clubs</p>
              </article>
              <article className="border border-white/25 bg-white/15 backdrop-blur-sm p-5 text-center text-white rounded-2xl hover:bg-white/25 transition-colors">
                <p className="text-5xl font-heading font-bold text-secondary-300">
                  {stats.totalMembers.toLocaleString()}
                </p>
                <p className="mt-1 text-lg text-white/90">Student Members</p>
              </article>
              <article className="border border-white/25 bg-white/15 backdrop-blur-sm p-5 text-center text-white rounded-2xl hover:bg-white/25 transition-colors">
                <p className="text-5xl font-heading font-bold text-secondary-300">
                  {stats.upcomingEvents}
                </p>
                <p className="mt-1 text-lg text-white/90">Upcoming Events</p>
              </article>
              <article className="border border-white/25 bg-white/15 backdrop-blur-sm p-5 text-center text-white rounded-2xl hover:bg-white/25 transition-colors ">
                <p className="text-5xl font-heading font-bold text-secondary-300">
                  +{stats.newMembersThisMonth}
                </p>
                <p className="mt-1 text-lg text-white/90">New This Month</p>
              </article>
            </div>
          </div>
        </div>

        <HomeAnnouncementStrip announcement={latestAnnouncement} />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-7 grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white border border-neutral-200 p-5 rounded-2xl">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-2xl font-heading font-bold text-primary-700">
              Upcoming Events
            </h2>
            <Link
              href="/events"
              className="text-sm font-semibold text-primary-600 hover:underline"
            >
              View All
            </Link>
          </div>
          <div className="space-y-2.5">
            {upcomingEvents.map((event) => (
              <Link
                href={`/events/${event.id}`}
                key={event.id}
                className="block border border-neutral-200 p-3 hover:border-primary-300 hover:bg-primary-50/40 transition-colors rounded-2xl"
              >
                <p className="font-semibold text-primary-700 text-base">
                  {event.title}
                </p>
                <p className="text-sm text-neutral-600 mt-0.5">
                  {event.chapterName}
                </p>
                <p className="text-sm text-neutral-600 mt-0.5">
                  {event.date} · {event.startTime} - {event.endTime} ·{" "}
                  {event.location}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white border border-neutral-200 p-5 rounded-2xl">
            <h2 className="text-xl font-heading font-bold text-primary-700 mb-2">
              Quick Access
            </h2>
            <div className="space-y-2">
              <Link
                href="/directory"
                className="block border border-neutral-200 p-2.5 text-sm font-semibold text-primary-700 hover:border-primary-300 hover:bg-primary-50/40 transition-colors rounded-2xl"
              >
                Chapter Directory
              </Link>
              <Link
                href="/resources"
                className="block border border-neutral-200 p-2.5 text-sm font-semibold text-primary-700 hover:border-primary-300 hover:bg-primary-50/40 transition-colors rounded-2xl"
              >
                Resource Library
              </Link>
              <Link
                href="/propose"
                className="block border border-neutral-200 p-2.5 text-sm font-semibold text-primary-700 hover:border-primary-300 hover:bg-primary-50/40 transition-colors rounded-2xl"
              >
                Propose a New Chapter
              </Link>
            </div>
          </div>

          <div className="bg-primary-700 text-white border border-primary-800 p-5 rounded-2xl">
            <h2 className="text-xl font-heading font-bold text-secondary-500">
              Ready to get involved?
            </h2>
            <p className="mt-2 text-sm text-white/90">
              Join a chapter, attend events, and build leadership through real
              student projects.
            </p>
            <div className="mt-3 space-y-2">
              <Link
                href="/directory"
                className="block bg-secondary-500 hover:bg-secondary-600 border border-secondary-500 text-white p-2.5 text-sm font-semibold transition-colors text-center rounded-2xl"
              >
                Explore Chapters
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
