'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { chapters } from '@/lib/data';
import { ChapterCategory, MeetingFrequency, MembershipStatus, GradeLevel, MeetingTime } from '@/types';

const categories: ChapterCategory[] = ['Academic', 'Arts', 'Service', 'Cultural', 'STEM', 'Sports', 'Leadership', 'Media', 'Other'];
const frequencies: MeetingFrequency[] = ['Daily', 'Weekly', 'Bi-weekly', 'Monthly'];
const membershipStatuses: MembershipStatus[] = ['Open Enrollment', 'Tryout Required', 'Application Required'];
const gradeLevels: GradeLevel[] = ['9th Only', '10th-12th', 'All Grades'];
const meetingTimes: MeetingTime[] = ['Before School', 'Lunch', 'After School', 'Weekends'];

export default function DirectoryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedFrequency, setSelectedFrequency] = useState<string>('');
  const [selectedMembership, setSelectedMembership] = useState<string>('');
  const [selectedGradeLevel, setSelectedGradeLevel] = useState<string>('');
  const [selectedMeetingTime, setSelectedMeetingTime] = useState<string>('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredChapters = useMemo(() => {
    return chapters.filter((chapter) => {
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
          chapter.name.toLowerCase().includes(query) ||
          chapter.description.toLowerCase().includes(query) ||
          chapter.category.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      if (selectedCategory && chapter.category !== selectedCategory) return false;
      if (selectedFrequency && chapter.meetingFrequency !== selectedFrequency) return false;
      if (selectedMembership && chapter.membershipStatus !== selectedMembership) return false;
      if (selectedGradeLevel && chapter.gradeLevel !== selectedGradeLevel) return false;
      if (selectedMeetingTime && chapter.meetingTime !== selectedMeetingTime) return false;

      return true;
    });
  }, [searchQuery, selectedCategory, selectedFrequency, selectedMembership, selectedGradeLevel, selectedMeetingTime]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedFrequency('');
    setSelectedMembership('');
    setSelectedGradeLevel('');
    setSelectedMeetingTime('');
  };

  const activeFilterCount = [
    selectedCategory,
    selectedFrequency,
    selectedMembership,
    selectedGradeLevel,
    selectedMeetingTime,
  ].filter(Boolean).length;

  return (
    <div className="bg-neutral-100 min-h-screen">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1920&q=80"
            alt="Students in discussion"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/95 to-primary-500/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="page-title text-white">Chapter Directory</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Browse and discover clubs and organizations that match your interests.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="card p-6 mb-8">
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-grow relative">
              <input
                type="text"
                placeholder="Search chapters by name, description, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-12"
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="square" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`btn-outline flex items-center gap-2 ${showFilters ? 'bg-primary-500 text-white' : ''}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filters
              {activeFilterCount > 0 && (
                <span className="bg-secondary-500 text-white px-2 py-0.5 text-sm">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="border-t border-neutral-200 pt-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* Category Filter */}
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

                {/* Frequency Filter */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">Meeting Frequency</label>
                  <select
                    value={selectedFrequency}
                    onChange={(e) => setSelectedFrequency(e.target.value)}
                    className="select-field"
                  >
                    <option value="">Any Frequency</option>
                    {frequencies.map((freq) => (
                      <option key={freq} value={freq}>{freq}</option>
                    ))}
                  </select>
                </div>

                {/* Membership Status Filter */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">Membership Status</label>
                  <select
                    value={selectedMembership}
                    onChange={(e) => setSelectedMembership(e.target.value)}
                    className="select-field"
                  >
                    <option value="">Any Status</option>
                    {membershipStatuses.map((status) => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </div>

                {/* Grade Level Filter */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">Grade Level</label>
                  <select
                    value={selectedGradeLevel}
                    onChange={(e) => setSelectedGradeLevel(e.target.value)}
                    className="select-field"
                  >
                    <option value="">All Grades</option>
                    {gradeLevels.map((level) => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>

                {/* Meeting Time Filter */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">Meeting Time</label>
                  <select
                    value={selectedMeetingTime}
                    onChange={(e) => setSelectedMeetingTime(e.target.value)}
                    className="select-field"
                  >
                    <option value="">Any Time</option>
                    {meetingTimes.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              {activeFilterCount > 0 && (
                <div className="mt-4 flex justify-end">
                  <button onClick={clearFilters} className="text-primary-500 hover:underline text-sm font-medium">
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-neutral-600">
            Showing <strong>{filteredChapters.length}</strong> of <strong>{chapters.length}</strong> chapters
          </p>
        </div>

        {/* Chapter Grid */}
        {filteredChapters.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChapters.map((chapter) => (
              <Link key={chapter.id} href={`/directory/${chapter.id}`} className="card-hover block">
                <div className="bg-primary-500 h-24 flex items-center justify-center relative">
                  <span className="text-3xl font-bold text-white font-heading">
                    {chapter.name.split(' ').map(w => w[0]).join('').slice(0, 3)}
                  </span>
                  <span className="absolute top-2 right-2 badge badge-secondary text-xs">
                    {chapter.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-primary-500 font-heading">{chapter.name}</h3>
                  <p className="text-sm text-neutral-600 mt-2 line-clamp-2">{chapter.description}</p>
                  
                  <div className="mt-4 space-y-2 text-sm text-neutral-500">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="square" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {chapter.meetingSchedule}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="square" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {chapter.memberCount} members
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="badge badge-outline text-xs">{chapter.membershipStatus}</span>
                    <span className="badge badge-outline text-xs">{chapter.meetingTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="card p-12 text-center">
            <svg className="w-16 h-16 mx-auto text-neutral-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-bold text-neutral-500 mb-2">No chapters found</h3>
            <p className="text-neutral-400 mb-4">Try adjusting your search or filters to find what you&apos;re looking for.</p>
            <button onClick={clearFilters} className="btn-primary">
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
