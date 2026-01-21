'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { chapters, events } from '@/lib/data';

const myChapters = chapters.slice(0, 3);
const mySchedule = events.slice(0, 4);

const upcomingDeadlines = [
  { id: 1, title: 'Model UN Conference Registration', date: '2026-01-20', type: 'event' },
  { id: 2, title: 'Robotics Team Dues Payment', date: '2026-01-25', type: 'dues' },
  { id: 3, title: 'Drama Club Audition Sign-up', date: '2026-01-16', type: 'application' },
];

const recommendedChapters = chapters.slice(4, 7);

const quizQuestions = [
  {
    id: 1,
    question: 'What activities interest you most?',
    options: ['Academic competitions', 'Creative arts', 'Community service', 'Technology & Engineering', 'Sports & Recreation'],
  },
  {
    id: 2,
    question: 'How often would you like to meet?',
    options: ['Daily', 'Weekly', 'Bi-weekly', 'Monthly'],
  },
  {
    id: 3,
    question: 'What time works best for you?',
    options: ['Before school', 'During lunch', 'After school', 'Weekends'],
  },
];

export default function StudentPortal() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'discover' | 'involvement' | 'collaboration'>('dashboard');
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);

  const handleQuizAnswer = (answer: string) => {
    setQuizAnswers([...quizAnswers, answer]);
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      setQuizStep(quizQuestions.length);
    }
  };

  return (
    <div className="bg-neutral-100 min-h-screen">
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80"
            alt="Students collaborating"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/95 to-primary-500/85"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-white/80 mb-1">Welcome back,</p>
              <h1 className="page-title text-white mb-0">Student Dashboard</h1>
            </div>
            <div className="mt-4 md:mt-0">
              <Link href="/directory" className="btn-secondary">
                Browse All Chapters
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="card mb-8">
          <div className="flex flex-wrap border-b border-neutral-200">
            {[
              { key: 'dashboard', label: 'My Dashboard' },
              { key: 'discover', label: 'Discover Chapters' },
              { key: 'involvement', label: 'My Involvement' },
              { key: 'collaboration', label: 'Collaboration' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as typeof activeTab)}
                className={`px-6 py-4 font-medium transition-colors ${
                  activeTab === tab.key
                    ? 'text-primary-500 border-b-2 border-primary-500 bg-primary-500/5'
                    : 'text-neutral-600 hover:text-primary-500 hover:bg-neutral-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'dashboard' && (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="card">
                <div className="p-4 border-b border-neutral-200 flex justify-between items-center">
                  <h2 className="text-lg font-bold text-primary-500 font-heading">My Chapters</h2>
                  <Link href="/directory" className="text-sm text-secondary-500 hover:underline">Find More</Link>
                </div>
                <div className="divide-y divide-neutral-200">
                  {myChapters.map((chapter) => (
                    <div key={chapter.id} className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary-500 flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">
                            {chapter.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-neutral-800">{chapter.name}</h3>
                          <p className="text-sm text-neutral-500">
                            {chapter.meetingSchedule}
                          </p>
                        </div>
                      </div>
                      <Link href={`/directory/${chapter.id}`} className="text-primary-500 hover:underline text-sm">
                        View →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <div className="p-4 border-b border-neutral-200 flex justify-between items-center">
                  <h2 className="text-lg font-bold text-primary-500 font-heading">My Schedule</h2>
                  <Link href="/events" className="text-sm text-secondary-500 hover:underline">Full Calendar</Link>
                </div>
                <div className="divide-y divide-neutral-200">
                  {mySchedule.map((event) => (
                    <div key={event.id} className="p-4 flex items-start gap-4">
                      <div className="text-center flex-shrink-0">
                        <div className="text-xs text-neutral-500 uppercase">
                          {new Date(event.date).toLocaleDateString('en-US', { weekday: 'short' })}
                        </div>
                        <div className="text-2xl font-bold text-primary-500">
                          {new Date(event.date).getDate()}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-800">{event.title}</h3>
                        <p className="text-sm text-neutral-500">
                          {event.startTime} - {event.endTime} • {event.location}
                        </p>
                        <span className="badge badge-outline text-xs mt-1">{event.chapterName}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card">
                <div className="p-4 border-b border-neutral-200">
                  <h2 className="text-lg font-bold text-primary-500 font-heading">Upcoming Deadlines</h2>
                </div>
                <div className="divide-y divide-neutral-200">
                  {upcomingDeadlines.map((deadline) => (
                    <div key={deadline.id} className="p-4">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-medium text-neutral-800 text-sm">{deadline.title}</h3>
                          <p className="text-xs text-neutral-500">
                            {new Date(deadline.date).toLocaleDateString('en-US', { 
                              month: 'short', day: 'numeric' 
                            })}
                          </p>
                        </div>
                        <span className={`badge text-xs ${
                          deadline.type === 'dues' ? 'bg-yellow-100 text-yellow-700' :
                          deadline.type === 'event' ? 'bg-blue-100 text-blue-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {deadline.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <div className="p-4 border-b border-neutral-200">
                  <h2 className="text-lg font-bold text-primary-500 font-heading">Recommended For You</h2>
                </div>
                <div className="divide-y divide-neutral-200">
                  {recommendedChapters.map((chapter) => (
                    <div key={chapter.id} className="p-4">
                      <h3 className="font-semibold text-neutral-800 text-sm">{chapter.name}</h3>
                      <p className="text-xs text-neutral-500 mb-2">{chapter.category} • {chapter.memberCount} members</p>
                      <Link href={`/directory/${chapter.id}`} className="text-primary-500 hover:underline text-xs">
                        Learn More →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'discover' && (
          <div className="space-y-8">
            <div className="card p-8">
              {!quizStarted ? (
                <div className="text-center max-w-2xl mx-auto">
                  <h2 className="text-2xl font-bold text-primary-500 font-heading mb-4">Find Your Perfect Chapter</h2>
                  <p className="text-neutral-600 mb-6">
                    Take our quick quiz to discover chapters that match your interests and schedule.
                  </p>
                  <button onClick={() => setQuizStarted(true)} className="btn-primary">
                    Start Quiz
                  </button>
                </div>
              ) : quizStep < quizQuestions.length ? (
                <div className="max-w-2xl mx-auto">
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-neutral-500 mb-2">
                      <span>Question {quizStep + 1} of {quizQuestions.length}</span>
                      <span>{Math.round(((quizStep + 1) / quizQuestions.length) * 100)}%</span>
                    </div>
                    <div className="bg-neutral-200 h-2">
                      <div 
                        className="bg-primary-500 h-full transition-all"
                        style={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }}
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary-500 mb-6 font-heading">
                    {quizQuestions[quizStep].question}
                  </h3>
                  <div className="space-y-3">
                    {quizQuestions[quizStep].options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleQuizAnswer(option)}
                        className="w-full p-4 text-left border-2 border-neutral-200 hover:border-primary-500 hover:bg-primary-500/5 transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center max-w-2xl mx-auto">
                  <div className="w-16 h-16 bg-green-100 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-primary-500 font-heading mb-4">Quiz Complete!</h2>
                  <p className="text-neutral-600 mb-6">
                    Based on your answers, we found these chapters that might be a great fit for you.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    {recommendedChapters.map((chapter) => (
                      <Link key={chapter.id} href={`/directory/${chapter.id}`} className="card p-4 hover:shadow-card-hover transition-shadow">
                        <h4 className="font-semibold text-primary-500">{chapter.name}</h4>
                        <p className="text-sm text-neutral-500">{chapter.category}</p>
                      </Link>
                    ))}
                  </div>
                  <button 
                    onClick={() => { setQuizStarted(false); setQuizStep(0); setQuizAnswers([]); }}
                    className="btn-outline"
                  >
                    Retake Quiz
                  </button>
                </div>
              )}
            </div>

            <div className="card">
              <div className="p-4 border-b border-neutral-200">
                <h2 className="text-lg font-bold text-primary-500 font-heading">New This Year</h2>
              </div>
              <div className="p-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {chapters.slice(5, 8).map((chapter) => (
                  <Link key={chapter.id} href={`/directory/${chapter.id}`} className="p-4 border border-neutral-200 hover:border-primary-500 transition-colors">
                    <span className="badge bg-green-100 text-green-700 text-xs mb-2">New</span>
                    <h3 className="font-semibold text-neutral-800">{chapter.name}</h3>
                    <p className="text-sm text-neutral-500">{chapter.category} • {chapter.memberCount} members</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="card">
              <div className="p-4 border-b border-neutral-200">
                <h2 className="text-lg font-bold text-primary-500 font-heading">Looking for Members</h2>
              </div>
              <div className="p-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {chapters.filter(c => c.membershipStatus === 'Open Enrollment').slice(0, 3).map((chapter) => (
                  <Link key={chapter.id} href={`/directory/${chapter.id}`} className="p-4 border border-neutral-200 hover:border-primary-500 transition-colors">
                    <span className="badge badge-secondary text-xs mb-2">Open Enrollment</span>
                    <h3 className="font-semibold text-neutral-800">{chapter.name}</h3>
                    <p className="text-sm text-neutral-500">{chapter.meetingTime} • {chapter.meetingFrequency}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'involvement' && (
          <div className="space-y-8">
            <div className="card p-6">
              <h2 className="text-2xl font-bold text-primary-500 font-heading mb-6">My Involvement Transcript</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="stat-card">
                  <div className="stat-number text-2xl">3</div>
                  <div className="stat-label">Active Chapters</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number text-2xl">2</div>
                  <div className="stat-label">Leadership Roles</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number text-2xl">45</div>
                  <div className="stat-label">Hours This Semester</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number text-2xl">12</div>
                  <div className="stat-label">Events Attended</div>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="btn-primary">
                  Download Transcript
                </button>
                <button className="btn-outline">
                  Request Verification
                </button>
              </div>
            </div>

            <div className="card">
              <div className="p-4 border-b border-neutral-200">
                <h2 className="text-lg font-bold text-primary-500 font-heading">Chapter Membership History</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="table-header">Chapter</th>
                      <th className="table-header">Role</th>
                      <th className="table-header">Duration</th>
                      <th className="table-header">Hours</th>
                      <th className="table-header">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table-row-hover">
                      <td className="table-cell font-medium">Model United Nations</td>
                      <td className="table-cell">Secretary</td>
                      <td className="table-cell">2024-Present</td>
                      <td className="table-cell">120</td>
                      <td className="table-cell"><span className="badge badge-primary">Active</span></td>
                    </tr>
                    <tr className="table-row-hover">
                      <td className="table-cell font-medium">Community Service Club</td>
                      <td className="table-cell">Member</td>
                      <td className="table-cell">2023-Present</td>
                      <td className="table-cell">85</td>
                      <td className="table-cell"><span className="badge badge-primary">Active</span></td>
                    </tr>
                    <tr className="table-row-hover">
                      <td className="table-cell font-medium">Drama Club</td>
                      <td className="table-cell">Member</td>
                      <td className="table-cell">2025-Present</td>
                      <td className="table-cell">25</td>
                      <td className="table-cell"><span className="badge badge-primary">Active</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="card">
              <div className="p-4 border-b border-neutral-200">
                <h2 className="text-lg font-bold text-primary-500 font-heading">Achievements & Badges</h2>
              </div>
              <div className="p-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: 'Active Participant', desc: 'Attended 10+ events', icon: '🏆' },
                  { name: 'Service Star', desc: '50+ volunteer hours', icon: '⭐' },
                  { name: 'Leadership Badge', desc: 'Held officer position', icon: '🎖️' },
                  { name: 'Team Player', desc: 'Member of 3+ chapters', icon: '🤝' },
                ].map((badge) => (
                  <div key={badge.name} className="text-center p-4 border border-neutral-200 bg-neutral-50">
                    <div className="text-4xl mb-2">{badge.icon}</div>
                    <h4 className="font-semibold text-primary-500">{badge.name}</h4>
                    <p className="text-sm text-neutral-500">{badge.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'collaboration' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card">
                <div className="p-4 border-b border-neutral-200">
                  <h2 className="text-lg font-bold text-primary-500 font-heading">Joint Events</h2>
                </div>
                <div className="p-4 space-y-4">
                  <div className="p-4 border border-neutral-200">
                    <div className="flex gap-2 mb-2">
                      <span className="badge badge-outline text-xs">Model UN</span>
                      <span className="badge badge-outline text-xs">Debate Team</span>
                    </div>
                    <h3 className="font-semibold text-neutral-800">Public Speaking Workshop</h3>
                    <p className="text-sm text-neutral-500">January 25, 2026 • After School</p>
                  </div>
                  <div className="p-4 border border-neutral-200">
                    <div className="flex gap-2 mb-2">
                      <span className="badge badge-outline text-xs">Environmental Club</span>
                      <span className="badge badge-outline text-xs">Community Service</span>
                    </div>
                    <h3 className="font-semibold text-neutral-800">Campus Clean-Up Day</h3>
                    <p className="text-sm text-neutral-500">February 1, 2026 • 9:00 AM</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="p-4 border-b border-neutral-200">
                  <h2 className="text-lg font-bold text-primary-500 font-heading">Shared Resources</h2>
                </div>
                <div className="p-4 space-y-4">
                  <div className="p-4 border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800">A/V Equipment</h3>
                    <p className="text-sm text-neutral-500">Projector, microphones, and speakers available for events</p>
                    <button className="text-primary-500 hover:underline text-sm mt-2">Reserve →</button>
                  </div>
                  <div className="p-4 border border-neutral-200">
                    <h3 className="font-semibold text-neutral-800">Event Supplies</h3>
                    <p className="text-sm text-neutral-500">Tables, chairs, and decorations for activities</p>
                    <button className="text-primary-500 hover:underline text-sm mt-2">Reserve →</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="p-4 border-b border-neutral-200">
                <h2 className="text-lg font-bold text-primary-500 font-heading">Cross-Chapter Committees</h2>
              </div>
              <div className="p-4 grid sm:grid-cols-3 gap-4">
                <div className="p-4 border border-neutral-200">
                  <h3 className="font-semibold text-neutral-800">Spring Festival Planning</h3>
                  <p className="text-sm text-neutral-500 mb-2">8 chapters participating</p>
                  <button className="btn-outline text-sm py-1 w-full">Join Committee</button>
                </div>
                <div className="p-4 border border-neutral-200">
                  <h3 className="font-semibold text-neutral-800">Charity Fundraiser</h3>
                  <p className="text-sm text-neutral-500 mb-2">5 chapters participating</p>
                  <button className="btn-outline text-sm py-1 w-full">Join Committee</button>
                </div>
                <div className="p-4 border border-neutral-200">
                  <h3 className="font-semibold text-neutral-800">Club Fair Organization</h3>
                  <p className="text-sm text-neutral-500 mb-2">All chapters invited</p>
                  <button className="btn-outline text-sm py-1 w-full">Join Committee</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
