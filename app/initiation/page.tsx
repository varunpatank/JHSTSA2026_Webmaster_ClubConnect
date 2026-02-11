'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function InitiationPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  // Mission statement
  const mission = "Our mission is to empower every student club and chapter to thrive by providing access to resources, mentorship, and a collaborative community. We believe in the power of student leadership and teamwork to create lasting impact in our schools and beyond.";

  const stages = [
    {
      id: 'ideation',
      title: 'Ideation & Planning',
      description: 'Brainstorm club ideas and validate student interest.',
      icon: '💡',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      tools: [
        { name: 'Club Ideas Board', href: '/hub/ideas', icon: '🎯' },
        { name: 'Club Finder Quiz', href: '/hub/quiz', icon: '🔍' },
        { name: 'External Resources Library', href: '/hub/external', icon: '📚' },
        { name: 'Collaboration Board', href: '/hub/collaborate', icon: '🤝' },
        { name: 'Mentor Directory', href: '/hub/mentors', icon: '👨‍🏫' },
        { name: 'Spotlight & Stories', href: '/hub/stories', icon: '⭐' },
        { name: 'Event Planning Templates', href: '/hub/guides', icon: '📋' },
        { name: 'Fundraising Ideas', href: '/funding', icon: '💰' },
        { name: 'Social Media Guide', href: '/hub/external', icon: '📱' },
        { name: 'Member Recruitment Tips', href: '/hub/guides', icon: '👥' },
      ],
    },
    {
      id: 'proposal',
      title: 'Proposal & Approval',
      description: 'Prepare and submit the official proposal to start a club.',
      icon: '📝',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      tools: [
        { name: 'Propose New Club', href: '/propose', icon: '✨' },
        { name: 'Officer Guides', href: '/hub/guides', icon: '📖' },
        { name: 'Request Resources', href: '/hub/request', icon: '🛠️' },
        { name: 'Club Officer Handbook', href: '/hub/guides', icon: '📘' },
        { name: 'Meeting Agenda Templates', href: '/hub/guides', icon: '📝' },
        { name: 'External Resources', href: '/hub/external', icon: '🔗' },
      ],
    },
    {
      id: 'setup',
      title: 'Setup & Structure',
      description: 'Create constitution, officer roles, and meeting plans.',
      icon: '🏗️',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      tools: [
        { name: 'Starter Guides', href: '/hub', icon: '🚀' },
        { name: 'Meeting Agenda Templates', href: '/hub/guides', icon: '📅' },
        { name: 'Club Health Check', href: '/hub/health', icon: '💊' },
        { name: 'Event Planning Templates', href: '/hub/guides', icon: '📋' },
        { name: 'Collaboration Board', href: '/hub/collaborate', icon: '🤝' },
      ],
    },
    {
      id: 'recruitment',
      title: 'Recruitment & Launch',
      description: 'Run your first recruitment drives and launch events.',
      icon: '👥',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      tools: [
        { name: 'Event Calendar', href: '/hub/calendar', icon: '📆' },
        { name: 'Fundraising Ideas', href: '/funding', icon: '💰' },
        { name: 'Social Media Guide', href: '/hub/external', icon: '📱' },
        { name: 'Member Recruitment Tips', href: '/hub/guides', icon: '👥' },
        { name: 'Spotlight & Stories', href: '/hub/stories', icon: '⭐' },
      ],
    },
    {
      id: 'operations',
      title: 'Operations & Management',
      description: 'Manage members, announcements, and recurring activities.',
      icon: '⚙️',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      tools: [
        { name: 'Club Manager', href: '/hub/manage-club', icon: '🎛️' },
        { name: 'Member Collections', href: '/hub/my-collections', icon: '👥' },
        { name: 'Mentors & Advisors', href: '/hub/mentors', icon: '👨‍🏫' },
        { name: 'Collaboration Board', href: '/hub/collaborate', icon: '🤝' },
        { name: 'Club Health Check', href: '/hub/health', icon: '💊' },
      ],
    },
    {
      id: 'growth',
      title: 'Growth & Competitions',
      description: 'Scale membership, track competitions, and celebrate wins.',
      icon: '🚀',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      tools: [
        { name: 'Competitions', href: '/hub/competitions', icon: '🏆' },
        { name: 'Club Comparison', href: '/hub/compare', icon: '⚖️' },
        { name: 'Spotlight & Stories', href: '/hub/stories', icon: '⭐' },
        { name: 'Mentor Directory', href: '/hub/mentors', icon: '👨‍🏫' },
        { name: 'External Resources', href: '/hub/external', icon: '🔗' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Hero Section */}
      <div className="bg-primary-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="mb-6">
              <span className="text-6xl">🎯</span>
            </div>
            <h1 className="text-4xl font-bold font-heading mb-4">Club Creation Journey</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Follow our proven 6-stage process to launch your dream club. Each step includes the essential tools and resources you need to succeed.
            </p>
            <div className="mt-8 flex justify-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary-400">6</div>
                <div className="text-sm text-primary-200">Stages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary-400">30+</div>
                <div className="text-sm text-primary-200">Tools</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary-400">100%</div>
                <div className="text-sm text-primary-200">Success Rate</div>
              </div>
            </div>
            <div className="mt-8 max-w-2xl mx-auto bg-white/10 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-2 text-white">Our Mission</h2>
              <p className="text-primary-100">{mission}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Path */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {stages.map((stage, index) => (
              <div key={stage.id} className="flex items-center">
                <div className={`relative flex items-center justify-center w-16 h-16 rounded-full border-4 ${openId === stage.id ? 'border-primary-500 bg-primary-50' : 'border-neutral-300 bg-white'} transition-all duration-200 hover:border-primary-400 hover:shadow-md cursor-pointer`}
                     onClick={() => setOpenId(openId === stage.id ? null : stage.id)}>
                  <span className="text-2xl">{stage.icon}</span>
                  <div className={`absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-primary-600 text-white text-xs font-bold flex items-center justify-center ${openId === stage.id ? 'bg-secondary-500' : ''}`}>
                    {index + 1}
                  </div>
                </div>
                {index < stages.length - 1 && (
                  <div className="w-12 h-1 bg-neutral-300 mx-2 rounded-full">
                    <div className={`h-full bg-primary-500 rounded-full transition-all duration-500 ${openId === stage.id ? 'w-full' : 'w-0'}`}></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stage Details */}
        <div className="max-w-4xl mx-auto">
          {stages.map((stage, index) => (
            <div key={stage.id} className="mb-6">
              <div className={`bg-white border-2 ${stage.borderColor} rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200`}>
                <button
                  onClick={() => setOpenId(openId === stage.id ? null : stage.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full ${stage.bgColor} ${stage.color} flex items-center justify-center text-xl font-bold`}>
                      {index + 1}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-neutral-800">{stage.title}</h2>
                      <p className="text-neutral-600 mt-1">{stage.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-2 text-sm text-neutral-500">
                      <span>{stage.tools.length} tools available</span>
                    </div>
                    <div className={`text-2xl transition-transform duration-200 ${openId === stage.id ? 'rotate-180' : ''}`}>
                      ⌄
                    </div>
                  </div>
                </button>

                {openId === stage.id && (
                  <div className="border-t border-neutral-100 bg-neutral-50">
                    <div className="p-6">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                        {stage.tools.map((tool) => (
                          <Link
                            key={tool.href}
                            href={tool.href}
                            className="flex items-center gap-3 p-4 bg-white border border-neutral-200 rounded-lg hover:border-primary-300 hover:shadow-sm transition-all duration-200 group"
                          >
                            <span className="text-2xl">{tool.icon}</span>
                            <div className="flex-1">
                              <div className="font-medium text-neutral-800 group-hover:text-primary-600">{tool.name}</div>
                              <div className="text-xs text-neutral-500 mt-1">Click to access →</div>
                            </div>
                          </Link>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
                        <div className="text-sm text-neutral-600">
                          Complete this stage before moving to the next
                        </div>
                        <div className="flex gap-3">
                          <Link
                            href={`/initiation/${stage.id}`}
                            className="px-6 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                          >
                            Start This Stage
                          </Link>
                          {index < stages.length - 1 && (
                            <button
                              onClick={() => setOpenId(stages[index + 1].id)}
                              className="px-6 py-2 bg-secondary-500 text-white rounded-lg font-medium hover:bg-secondary-600 transition-colors"
                            >
                              Next Stage →
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white border-2 border-primary-200 rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">Ready to Start Your Club? 🚀</h2>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Every successful club started with someone taking the first step. Your journey to making a difference begins here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/initiation/ideation"
                className="px-8 py-3 bg-primary-600 text-white rounded-lg font-bold hover:bg-primary-700 transition-colors shadow-sm"
              >
                Begin Journey 💡
              </Link>
              <Link
                href="/propose"
                className="px-8 py-3 bg-secondary-500 text-white rounded-lg font-bold hover:bg-secondary-600 transition-colors shadow-sm"
              >
                Skip to Proposal 📝
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
