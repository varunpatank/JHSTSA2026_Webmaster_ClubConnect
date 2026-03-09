"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { events, stats } from "@/lib/data";
import {
  ArrowRight,
  CalendarCheck,
  GraduationCap,
  Handshake,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const upcomingEvents = events.slice(0, 4);

  const carouselSlides = [
    {
      src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
      alt: "Students collaborating in a school club environment",
      title: "Student-Led Innovation",
      subtitle: "Real projects, real teamwork, real impact.",
    },
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      alt: "Students discussing ideas in a team setting",
      title: "Collaborative Culture",
      subtitle: "Clubs where every voice contributes.",
    },
    {
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
      alt: "Students in a focused school workshop",
      title: "Leadership Growth",
      subtitle: "Build confidence through meaningful roles.",
    },
  ];

  const reviews = [
    {
      quote:
        "ClubConnect made discovery simple. Students now find the right chapter much faster.",
      name: "A. Reynolds",
      role: "Activities Coordinator",
    },
    {
      quote:
        "Our officer team coordinates meetings and announcements with far less confusion now.",
      name: "M. Chen",
      role: "Chapter President",
    },
    {
      quote:
        "The structure feels school-ready and clear for both advisors and student leaders.",
      name: "J. Patel",
      role: "Faculty Advisor",
    },
  ];

  const quotes = [
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    "The unexamined life is not worth living.",
    "Knowing yourself is the beginning of all wisdom.",
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % carouselSlides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [carouselSlides.length]);
  const features = [
    {
      title: "Discover Clubs Fast",
      description:
        "Explore chapters by interest, schedule, and membership status in one organized directory.",
      icon: Users,
    },
    {
      title: "Run Better Events",
      description:
        "Publish meetings and campus events with clear details students can act on quickly.",
      icon: CalendarCheck,
    },
    {
      title: "School-Ready Workflow",
      description:
        "Built for advisors and student leaders with structured processes and accountability.",
      icon: ShieldCheck,
    },
  ];

  const credibilityItems = [
    "47 active student chapters",
    "1,283 engaged members",
    "Trusted by advisors and officers",
  ];

  return (
    <div className="relative bg-gradient-to-b from-primary-50 via-primary-100/40 to-secondary-50/30 min-h-screen overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-[-8rem] h-72 w-72 rounded-full bg-primary-200/40 blur-3xl animate-drift-slower" />
        <div className="absolute top-[38%] left-[-7rem] h-80 w-80 rounded-full bg-secondary-200/30 blur-3xl animate-drift-slow" />
        <div className="absolute bottom-[-8rem] right-[12%] h-72 w-72 rounded-full bg-primary-300/20 blur-3xl animate-drift-slower" />
      </div>

      <section className="relative z-10 border-b border-primary-200 bg-gradient-to-b from-primary-50/90 to-primary-100/50">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-up">
              <h1
                className="mt-3 text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-800 leading-tight animate-fade-up"
                style={{ animationDelay: "120ms" }}
              >
                The modern hub for school clubs and chapters.
              </h1>
              <p
                className="mt-5 max-w-xl text-neutral-600 text-lg leading-relaxed animate-fade-up"
                style={{ animationDelay: "180ms" }}
              >
                ClubConnect helps students discover opportunities, join
                chapters, and launch new organizations with a clear and
                school-approved process.
              </p>
              <div
                className="mt-8 flex flex-col sm:flex-row gap-3 animate-fade-up"
                style={{ animationDelay: "240ms" }}
              >
                <Link
                  href="/directory"
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  Browse Clubs
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/start-a-club"
                  className="btn-outline inline-flex items-center justify-center"
                >
                  Start a New Club
                </Link>
              </div>
              <div
                className="mt-8 grid sm:grid-cols-3 gap-3 animate-fade-up"
                style={{ animationDelay: "300ms" }}
              >
                {credibilityItems.map((item, index) => (
                  <div
                    key={item}
                    style={{ animationDelay: `${360 + index * 70}ms` }}
                    className={`rounded-xl border px-4 py-3 text-sm shadow-sm ${
                      index === 0
                        ? "border-primary-200 bg-primary-50/60 text-primary-800"
                        : index === 1
                          ? "border-secondary-200 bg-secondary-50/60 text-neutral-800"
                          : "border-accent-200 bg-red-50/60 text-neutral-800"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="relative animate-zoom-in"
              style={{ animationDelay: "0ms" }}
            >
              <div className="rounded-2xl border border-primary-200 bg-primary-50 shadow-card overflow-hidden ux-hover-lift-sm">
                <div className="relative h-[320px] md:h-[390px] w-full">
                  {carouselSlides.map((slide, index) => (
                    <div
                      key={slide.src}
                      className={`absolute inset-0 transition-opacity duration-300 ${
                        index === activeSlide ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        width={1200}
                        height={900}
                        priority={index === 0}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="text-sm font-semibold">{slide.title}</p>
                        <p className="text-xs text-white/90 mt-1">
                          {slide.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {carouselSlides.map((slide, index) => (
                      <button
                        key={slide.title}
                        type="button"
                        onClick={() => setActiveSlide(index)}
                        className={`h-2.5 rounded-full transition-all ${
                          index === activeSlide
                            ? "w-6 bg-primary-600"
                            : "w-2.5 bg-primary-200 hover:bg-primary-300"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-neutral-600">Campus moments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 py-8 animate-fade-up"
        style={{ animationDelay: "120ms" }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card p-5 bg-gradient-to-br from-primary-50 to-white border-primary-100 ux-hover-lift-sm">
            <p className="text-3xl font-heading font-bold text-primary-600">
              {stats.activeChapters}
            </p>
            <p className="text-sm text-neutral-600">Active Clubs</p>
          </div>
          <div className="card p-5 bg-gradient-to-br from-secondary-50 to-white border-secondary-100 ux-hover-lift-sm">
            <p className="text-3xl font-heading font-bold text-primary-600">
              {stats.totalMembers}
            </p>
            <p className="text-sm text-neutral-600">Student Members</p>
          </div>
          <div className="card p-5 bg-gradient-to-br from-blue-50 to-white border-blue-100 ux-hover-lift-sm">
            <p className="text-3xl font-heading font-bold text-primary-600">
              {stats.upcomingEvents}
            </p>
            <p className="text-sm text-neutral-600">Upcoming Events</p>
          </div>
          <div className="card p-5 bg-gradient-to-br from-red-50 to-white border-red-100 ux-hover-lift-sm">
            <p className="text-3xl font-heading font-bold text-primary-600">
              +{stats.newMembersThisMonth}
            </p>
            <p className="text-sm text-neutral-600">New This Month</p>
          </div>
        </div>
      </section>

      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 py-10 rounded-2xl bg-gradient-to-r from-primary-100/60 via-primary-50/80 to-secondary-50/60 border border-primary-200/70 animate-fade-up"
        style={{ animationDelay: "160ms" }}
      >
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Features</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-heading text-primary-800">
            Everything students and advisors need in one place
          </h2>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="card-hover p-6 bg-primary-50/90 ux-hover-lift"
                style={{ animationDelay: `${240 + index * 80}ms` }}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                    index === 0
                      ? "bg-primary-100 text-primary-700"
                      : index === 1
                        ? "bg-secondary-100 text-secondary-700"
                        : "bg-red-100 text-accent-500"
                  }`}
                >
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-primary-800">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid lg:grid-cols-3 gap-6 animate-fade-up"
        style={{ animationDelay: "180ms" }}
      >
        <div className="lg:col-span-2 card p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-heading font-bold text-primary-700">
              Upcoming Events
            </h2>
            <Link
              href="/events"
              className="text-sm font-semibold text-primary-600 hover:underline"
            >
              View all
            </Link>
          </div>
          <div className="mt-5 space-y-4">
            {upcomingEvents.map((event) => (
              <Link
                href={`/events/${event.id}`}
                key={event.id}
                className="block rounded-xl border border-neutral-200 p-4 hover:border-primary-300 hover:bg-primary-50/40 ux-hover-lift-sm"
              >
                <p className="font-semibold text-primary-600">{event.title}</p>
                <p className="text-sm text-neutral-600">{event.chapterName}</p>
                <p className="text-sm text-neutral-600">
                  {event.date} · {event.startTime} - {event.endTime} ·{" "}
                  {event.location}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="card p-6 bg-gradient-to-br from-primary-50/60 to-white border-primary-100">
            <h2 className="text-xl font-heading font-bold text-primary-700">
              Why schools choose ClubConnect
            </h2>
            <div className="mt-4 space-y-3 text-sm text-neutral-700">
              <div className="flex gap-2 items-start">
                <Sparkles size={16} className="text-primary-600 mt-0.5" />
                <p>Simple onboarding for students and officers.</p>
              </div>
              <div className="flex gap-2 items-start">
                <Handshake size={16} className="text-primary-600 mt-0.5" />
                <p>Clear collaboration between chapters and advisors.</p>
              </div>
              <div className="flex gap-2 items-start">
                <GraduationCap size={16} className="text-primary-600 mt-0.5" />
                <p>Professional school-ready experience for every grade.</p>
              </div>
            </div>
          </div>
          <div className="card p-6 bg-gradient-to-br from-secondary-50/50 to-white border-secondary-100">
            <h2 className="text-xl font-heading font-bold text-primary-700">
              Resources & Support
            </h2>
            <div className="mt-4 space-y-2">
              <Link
                href="/resources"
                className="block rounded-xl border border-neutral-200 p-3 text-sm font-semibold text-primary-600 hover:border-primary-300 hover:bg-primary-50/40 ux-hover-lift-sm"
              >
                Start-Club Guidance
              </Link>
              <Link
                href="/profile"
                className="block rounded-xl border border-neutral-200 p-3 text-sm font-semibold text-primary-600 hover:border-primary-300 hover:bg-primary-50/40 ux-hover-lift-sm"
              >
                Your Clubs & Notifications
              </Link>
              <Link
                href="/donate"
                className="block rounded-xl border border-neutral-200 p-3 text-sm font-semibold text-primary-600 hover:border-primary-300 hover:bg-primary-50/40 ux-hover-lift-sm"
              >
                Donation Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 py-8 animate-fade-up"
        style={{ animationDelay: "220ms" }}
      >
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Reviews</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-heading text-primary-800">
            What students and advisors are saying
          </h2>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="card p-5 bg-gradient-to-br from-primary-50/70 to-white border-primary-100 ux-hover-lift-sm"
            >
              <div className="text-secondary-500 text-sm tracking-wide">
                ★★★★★
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-neutral-700">
                “{review.quote}”
              </blockquote>
              <p className="mt-4 text-sm font-semibold text-primary-700">
                {review.name}
              </p>
              <p className="text-xs text-neutral-500">{review.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 py-2 animate-fade-up"
        style={{ animationDelay: "240ms" }}
      >
        <article className="card p-6 md:p-8 bg-gradient-to-br from-primary-50/60 to-white border-primary-100">
          <p className="eyebrow">About ClubConnect</p>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            ClubConnect is a school-focused platform for chapter discovery,
            event communication, and responsible growth of student
            organizations. It is designed to be clear, accessible, and reliable
            for students, advisors, and administrators.
          </p>
        </article>
      </section>

      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 py-8 animate-fade-up"
        style={{ animationDelay: "250ms" }}
      >
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Philosophical Quotes</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-heading text-primary-800">
            Ideas that shape strong communities
          </h2>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {quotes.map((quote) => (
            <blockquote
              key={quote}
              className="card p-5 bg-gradient-to-br from-secondary-50/50 to-white border-secondary-100 text-sm leading-relaxed text-neutral-700 ux-hover-lift-sm"
            >
              “{quote}”
            </blockquote>
          ))}
        </div>
      </section>

      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 animate-fade-up"
        style={{ animationDelay: "260ms" }}
      >
        <div className="rounded-2xl border border-primary-200 bg-gradient-to-r from-primary-700 via-primary-600 to-secondary-600 p-8 md:p-10 shadow-card text-center ux-hover-lift-sm">
          <h2 className="text-3xl font-heading text-white">
            Ready to find your chapter?
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-white/90">
            Explore opportunities, connect with peers, and build meaningful
            projects through the ClubConnect community.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/directory"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white text-primary-700 font-semibold hover:bg-neutral-100"
            >
              Explore Directory
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/propose"
              className="inline-flex items-center px-6 py-2.5 rounded-xl border-2 border-white text-white font-semibold hover:bg-white hover:text-primary-700"
            >
              Propose a New Chapter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
