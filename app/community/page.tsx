'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<'discussions' | 'spotlight' | 'stories' | 'alumni'>('discussions');

  const discussions = [
    { id: 1, title: 'Tips for TSA State Competition?', author: 'Maria G.', club: 'TSA', replies: 23, lastActive: '2 hours ago', hot: true },
    { id: 2, title: 'Best fundraising ideas for spring', author: 'James L.', club: 'FBLA', replies: 18, lastActive: '5 hours ago', hot: true },
    { id: 3, title: 'How to balance club leadership with academics', author: 'Sophie K.', club: 'NHS', replies: 31, lastActive: '1 day ago', hot: false },
    { id: 4, title: 'Robotics competition strategies', author: 'Alex J.', club: 'Robotics', replies: 15, lastActive: '1 day ago', hot: false },
    { id: 5, title: 'New member recruitment ideas', author: 'Taylor M.', club: 'Drama', replies: 12, lastActive: '2 days ago', hot: false },
  ];

  const spotlights = [
    { id: 1, title: 'TSA Chapter Wins State Championship', club: 'TSA', date: 'Nov 2024', image: '🏆', featured: true },
    { id: 2, title: 'Drama Club Spring Musical Sells Out', club: 'Drama', date: 'Oct 2024', image: '🎭', featured: false },
    { id: 3, title: 'Robotics Team Qualifies for Nationals', club: 'Robotics', date: 'Oct 2024', image: '🤖', featured: false },
    { id: 4, title: 'NHS Community Service Milestone', club: 'NHS', date: 'Sep 2024', image: '🤝', featured: false },
  ];

  const successStories = [
    { id: 1, title: 'From Club Member to Tech Entrepreneur', author: 'Sarah Chen, Class of 2020', club: 'TSA', excerpt: 'How TSA skills helped me launch my startup...' },
    { id: 2, title: 'Leadership Lessons That Shaped My Career', author: 'Michael Brown, Class of 2018', club: 'FBLA', excerpt: 'The business skills I learned in FBLA...' },
    { id: 3, title: 'Finding My Voice Through Debate', author: 'Emily Rodriguez, Class of 2021', club: 'Debate', excerpt: 'Public speaking transformed my confidence...' },
  ];

  const alumni = [
    { id: 1, name: 'Dr. Jennifer Walsh', year: '2015', role: 'Software Engineer at Google', club: 'TSA' },
    { id: 2, name: 'Marcus Thompson', year: '2017', role: 'Investment Banker', club: 'FBLA' },
    { id: 3, name: 'Amanda Lee', year: '2019', role: 'Broadway Performer', club: 'Drama' },
  ];

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold font-heading mb-4">Community</h1>
          <p className="text-xl text-neutral-200 max-w-2xl">
            Connect with fellow students, celebrate achievements, and learn from alumni success stories.
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-neutral-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-0">
            {[
              { key: 'discussions', label: 'Discussions', icon: '💬' },
              { key: 'spotlight', label: 'Club Spotlight', icon: '⭐' },
              { key: 'stories', label: 'Success Stories', icon: '🌟' },
              { key: 'alumni', label: 'Alumni Network', icon: '🎓' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as 'discussions' | 'spotlight' | 'stories' | 'alumni')}
                className={`px-6 py-4 font-medium border-b-3 transition-colors ${
                  activeTab === tab.key
                    ? 'border-secondary-500 text-primary-600 bg-neutral-50'
                    : 'border-transparent text-neutral-600 hover:text-primary-600 hover:bg-neutral-50'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Discussions Tab */}
        {activeTab === 'discussions' && (
          <div>
            <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold text-primary-700">Forum Discussions</h2>
              <Link 
                href="/hub/discussions"
                className="px-4 py-2 bg-secondary-500 text-white hover:bg-secondary-600 transition-colors"
              >
                ➕ Start New Discussion
              </Link>
            </div>

            <div className="space-y-4">
              {discussions.map(discussion => (
                <Link
                  key={discussion.id}
                  href="/hub/discussions"
                  className="block bg-white border-2 border-neutral-200 p-6 hover:border-primary-400 transition-colors"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        {discussion.hot && (
                          <span className="px-2 py-1 bg-accent-100 text-accent-700 text-xs font-bold">🔥 HOT</span>
                        )}
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium">{discussion.club}</span>
                      </div>
                      <h3 className="text-lg font-bold text-primary-700">{discussion.title}</h3>
                      <p className="text-neutral-500 text-sm mt-1">Started by {discussion.author}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary-600">{discussion.replies}</div>
                      <div className="text-neutral-400 text-sm">replies</div>
                      <div className="text-neutral-500 text-xs mt-2">Active {discussion.lastActive}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-6 p-6 bg-primary-50 border-2 border-primary-200">
              <h3 className="font-bold text-primary-700 mb-2">Join the Conversation!</h3>
              <p className="text-neutral-600 mb-4">Share tips, ask questions, and connect with fellow club members across your school.</p>
              <Link 
                href="/hub/discussions"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 transition-colors"
              >
                Browse All Discussions →
              </Link>
            </div>
          </div>
        )}

        {/* Spotlight Tab */}
        {activeTab === 'spotlight' && (
          <div>
            <h2 className="text-2xl font-bold text-primary-700 mb-6">Club Spotlight</h2>

            {/* Featured Spotlight */}
            {spotlights.filter(s => s.featured).map(spotlight => (
              <div key={spotlight.id} className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white p-8 mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/20 text-sm font-bold">⭐ FEATURED</span>
                  <span className="text-sm">{spotlight.date}</span>
                </div>
                <div className="text-6xl mb-4">{spotlight.image}</div>
                <h3 className="text-2xl font-bold mb-2">{spotlight.title}</h3>
                <p className="text-white/80">{spotlight.club}</p>
              </div>
            ))}

            {/* Other Spotlights */}
            <div className="grid md:grid-cols-3 gap-6">
              {spotlights.filter(s => !s.featured).map(spotlight => (
                <div key={spotlight.id} className="bg-white border-2 border-neutral-200 p-6 hover:border-primary-400 transition-colors">
                  <div className="text-4xl mb-4">{spotlight.image}</div>
                  <span className="text-sm text-neutral-500">{spotlight.date}</span>
                  <h3 className="text-lg font-bold text-primary-700 mt-2">{spotlight.title}</h3>
                  <p className="text-secondary-600 mt-1">{spotlight.club}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link 
                href="/spotlight"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
              >
                View All Spotlights →
              </Link>
            </div>
          </div>
        )}

        {/* Success Stories Tab */}
        {activeTab === 'stories' && (
          <div>
            <h2 className="text-2xl font-bold text-primary-700 mb-6">Success Stories</h2>

            <div className="space-y-6">
              {successStories.map(story => (
                <div key={story.id} className="bg-white border-2 border-neutral-200 p-8 hover:border-primary-400 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium">{story.club}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary-700 mb-2">{story.title}</h3>
                  <p className="text-secondary-600 font-medium mb-3">{story.author}</p>
                  <p className="text-neutral-600">{story.excerpt}</p>
                  <button className="mt-4 text-primary-600 font-medium hover:text-primary-700">
                    Read Full Story →
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link 
                href="/hub/stories"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
              >
                View All Stories →
              </Link>
            </div>
          </div>
        )}

        {/* Alumni Tab */}
        {activeTab === 'alumni' && (
          <div>
            <h2 className="text-2xl font-bold text-primary-700 mb-6">Alumni Network</h2>

            <div className="bg-primary-50 border-2 border-primary-200 p-6 mb-8">
              <h3 className="font-bold text-primary-700 mb-2">Connect with Alumni</h3>
              <p className="text-neutral-600">Our alumni network helps current students learn from graduates who've gone on to successful careers.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {alumni.map(person => (
                <div key={person.id} className="bg-white border-2 border-neutral-200 p-6 text-center">
                  <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                    👤
                  </div>
                  <h3 className="text-lg font-bold text-primary-700">{person.name}</h3>
                  <p className="text-secondary-600 font-medium">Class of {person.year}</p>
                  <p className="text-neutral-500 text-sm mt-2">{person.role}</p>
                  <span className="inline-block mt-3 px-3 py-1 bg-primary-100 text-primary-700 text-sm">
                    {person.club}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link 
                href="/alumni"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
              >
                View Full Alumni Directory →
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-white border-t border-neutral-200 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Have a story to share?</h2>
                <p className="text-white/80">Your club achievements deserve recognition. Submit your spotlight or success story.</p>
              </div>
              <Link 
                href="/hub/request"
                className="px-6 py-3 bg-secondary-500 text-white font-medium hover:bg-secondary-600 transition-colors"
              >
                Submit Your Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
