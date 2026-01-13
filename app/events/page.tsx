'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { events } from '@/lib/data';
import { ChapterCategory } from '@/types';

const categories: ChapterCategory[] = ['Academic', 'Arts', 'Service', 'Cultural', 'STEM', 'Sports', 'Leadership', 'Media', 'Other'];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedMonth, setSelectedMonth] = useState<string>('');

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      if (selectedCategory && event.category !== selectedCategory) return false;
      if (selectedMonth) {
        const eventMonth = new Date(event.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
        if (eventMonth !== selectedMonth) return false;
      }
      return true;
    }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [selectedCategory, selectedMonth]);

  // Get unique months from events
  const months = useMemo(() => {
    const uniqueMonths = new Set(events.map(e => 
      new Date(e.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    ));
    return Array.from(uniqueMonths);
  }, []);

  // Group events by date
  const groupedEvents = useMemo(() => {
    const groups: { [key: string]: typeof events } = {};
    filteredEvents.forEach(event => {
      const dateKey = event.date;
      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }
      groups[dateKey].push(event);
    });
    return groups;
  }, [filteredEvents]);

  return (
    <div className="bg-neutral-100 min-h-screen">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
            alt="Event gathering"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/95 to-primary-500/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="page-title text-white">Events Calendar</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Stay up-to-date with chapter meetings, events, and activities across the school.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="card p-6 mb-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="select-field"
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">Month</label>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="select-field"
              >
                <option value="">All Months</option>
                {months.map((month) => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-neutral-600">
            Showing <strong>{filteredEvents.length}</strong> events
          </p>
        </div>

        {/* Events List */}
        {Object.keys(groupedEvents).length > 0 ? (
          <div className="space-y-8">
            {Object.entries(groupedEvents).map(([date, dateEvents]) => (
              <div key={date}>
                <h2 className="text-lg font-bold text-primary-500 mb-4 pb-2 border-b-2 border-primary-500">
                  {new Date(date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </h2>
                <div className="space-y-4">
                  {dateEvents.map((event) => (
                    <div key={event.id} className="card p-6 flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0 flex md:flex-col items-center md:items-start gap-4 md:gap-2">
                        <div className="bg-primary-500 text-white p-4 text-center min-w-[80px]">
                          <div className="text-sm font-medium">{event.startTime}</div>
                          <div className="text-xs text-neutral-300">to</div>
                          <div className="text-sm font-medium">{event.endTime}</div>
                        </div>
                        <span className="badge badge-secondary">{event.category}</span>
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-bold text-xl text-primary-500 font-heading">{event.title}</h3>
                        <Link 
                          href={`/directory/${event.chapterId}`}
                          className="text-secondary-500 hover:underline text-sm font-medium"
                        >
                          {event.chapterName}
                        </Link>
                        <p className="text-neutral-600 mt-2">{event.description}</p>
                        <div className="flex flex-wrap gap-4 mt-4 text-sm text-neutral-500">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="square" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="square" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {event.location}
                          </span>
                          {event.maxAttendees && (
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="square" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                              {event.currentAttendees} / {event.maxAttendees} attendees
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-end">
                        <span className={`badge ${event.isPublic ? 'badge-primary' : 'badge-outline'}`}>
                          {event.isPublic ? 'Open Event' : 'Members Only'}
                        </span>
                        {event.requiresRSVP && (
                          <button className="btn-secondary text-sm px-4 py-1">
                            RSVP
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="card p-12 text-center">
            <svg className="w-16 h-16 mx-auto text-neutral-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-xl font-bold text-neutral-500 mb-2">No events found</h3>
            <p className="text-neutral-400">Try adjusting your filters to see more events.</p>
          </div>
        )}
      </div>
    </div>
  );
}
