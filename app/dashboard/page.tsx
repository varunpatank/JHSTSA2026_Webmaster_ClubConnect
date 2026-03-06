'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  demoProfile,
  demoSavedItems,
  demoActivity,
  demoDashboardEvents as demoEvents,
  demoAchievements,
  type UserProfile,
  type SavedItem,
  type UserActivity,
  type MyEvent,
  type Achievement,
} from '@/lib/pageData';

export default function DashboardPage() {
  const [profile, setProfile] = useState<UserProfile>(demoProfile);
  const [savedItems, setSavedItems] = useState<SavedItem[]>(demoSavedItems);
  const [activities, setActivities] = useState<UserActivity[]>(demoActivity);
  const [myEvents, setMyEvents] = useState<MyEvent[]>(demoEvents);
  const [achievements, setAchievements] = useState<Achievement[]>(demoAchievements);
  const [activeTab, setActiveTab] = useState<'overview' | 'clubs' | 'events' | 'saved' | 'settings'>('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ name: profile.name, email: profile.email, grade: profile.grade });

  const rarityColors: Record<string, string> = {
    'Common': 'bg-gray-100 text-gray-700 border-gray-300',
    'Uncommon': 'bg-green-100 text-green-700 border-green-300',
    'Rare': 'bg-blue-100 text-blue-700 border-blue-300',
    'Epic': 'bg-purple-100 text-purple-700 border-purple-300',
    'Legendary': 'bg-amber-100 text-amber-700 border-amber-300'
  };

  const typeIcons: Record<string, string> = {
    'resource': '📄',
    'event': '📅',
    'club': '👥',
    'opportunity': '💼'
  };

  const activityIcons: Record<string, string> = {
    'joined': '✅',
    'saved': '❤️',
    'rsvp': '📅',
    'submitted': '📤',
    'completed': '🏆'
  };

  const handleSaveProfile = () => {
    setProfile({ ...profile, ...editForm });
    setIsEditing(false);
  };

  const removeSavedItem = (id: string) => {
    setSavedItems(savedItems.filter(item => item.id !== id));
  };

  const updateRSVP = (eventId: string, status: 'going' | 'maybe' | 'not-going') => {
    setMyEvents(myEvents.map(e => e.id === eventId ? { ...e, rsvpStatus: status } : e));
  };

  return (
    <div className="bg-neutral-100 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={100}
                height={100}
                className="w-24 h-24 object-cover border-4 border-white shadow-lg"
              />
              <span className="absolute -bottom-2 -right-2 bg-secondary-500 text-white text-xs px-2 py-1 font-semibold">
                {profile.role.toUpperCase()}
              </span>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold font-heading">{profile.name}</h1>
              <p className="text-white/80">{profile.email} • {profile.grade}</p>
              <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
                {profile.interests.map(interest => (
                  <span key={interest} className="bg-white/20 text-white text-xs px-2 py-1">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:ml-auto flex gap-3">
              <Link href="/hub" className="btn-secondary text-sm">
                Explore Hub
              </Link>
              <button 
                onClick={() => setActiveTab('settings')}
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 font-semibold transition-colors"
              >
                ⚙️ Settings
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-neutral-200 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary-500">{profile.joinedClubs.length}</div>
              <div className="text-xs text-neutral-500">Clubs Joined</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary-500">{myEvents.filter(e => e.rsvpStatus === 'going').length}</div>
              <div className="text-xs text-neutral-500">Upcoming Events</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent-500">{savedItems.length}</div>
              <div className="text-xs text-neutral-500">Saved Items</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{achievements.length}</div>
              <div className="text-xs text-neutral-500">Achievements</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">{activities.length}</div>
              <div className="text-xs text-neutral-500">Activities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b border-neutral-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto">
            {[
              { id: 'overview', label: '📊 Overview', icon: '📊' },
              { id: 'clubs', label: '👥 My Clubs', icon: '👥' },
              { id: 'events', label: '📅 My Events', icon: '📅' },
              { id: 'saved', label: '❤️ Saved', icon: '❤️' },
              { id: 'settings', label: '⚙️ Settings', icon: '⚙️' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-6 py-3 font-semibold text-sm whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-500'
                    : 'border-transparent text-neutral-500 hover:text-neutral-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Recent Activity */}
              <div className="lg:col-span-2">
                <div className="card p-6">
                  <h2 className="text-xl font-bold font-heading text-primary-500 mb-4 flex items-center gap-2">
                    📋 Recent Activity
                  </h2>
                  <div className="space-y-3">
                    {activities.map(activity => (
                      <div key={activity.id} className="flex items-start gap-3 p-3 bg-neutral-50 hover:bg-neutral-100 transition-colors">
                        <span className="text-xl">{activityIcons[activity.type]}</span>
                        <div className="flex-grow">
                          <p className="text-neutral-700">{activity.description}</p>
                          <p className="text-xs text-neutral-400">
                            {new Date(activity.timestamp).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Events Preview */}
                <div className="card p-6 mt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold font-heading text-primary-500 flex items-center gap-2">
                      📅 Upcoming Events
                    </h2>
                    <button 
                      onClick={() => setActiveTab('events')}
                      className="text-sm text-primary-500 hover:underline"
                    >
                      View All →
                    </button>
                  </div>
                  <div className="space-y-3">
                    {myEvents.filter(e => e.rsvpStatus !== 'not-going').slice(0, 3).map(event => (
                      <div key={event.id} className="flex items-center gap-4 p-3 border border-neutral-200 hover:border-primary-300 transition-colors">
                        <div className="text-center bg-primary-50 p-2 min-w-[60px]">
                          <div className="text-xs text-primary-500">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</div>
                          <div className="text-xl font-bold text-primary-600">{new Date(event.date).getDate()}</div>
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-semibold text-neutral-800">{event.title}</h4>
                          <p className="text-sm text-neutral-500">{event.club} • {event.time} • {event.location}</p>
                        </div>
                        <span className={`px-2 py-1 text-xs font-semibold ${
                          event.rsvpStatus === 'going' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {event.rsvpStatus === 'going' ? '✓ Going' : '? Maybe'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Achievements */}
                <div className="card p-6">
                  <h2 className="text-lg font-bold font-heading text-primary-500 mb-4 flex items-center gap-2">
                    🏆 Achievements
                  </h2>
                  <div className="grid grid-cols-2 gap-3">
                    {achievements.map(achievement => (
                      <div 
                        key={achievement.id} 
                        className={`p-3 border text-center ${rarityColors[achievement.rarity]} cursor-pointer hover:scale-105 transition-transform`}
                        title={achievement.description}
                      >
                        <div className="text-2xl mb-1">{achievement.icon}</div>
                        <div className="text-xs font-semibold">{achievement.name}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <Link href="/hub/achievements" className="text-sm text-primary-500 hover:underline">
                      View All Achievements →
                    </Link>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="card p-6">
                  <h2 className="text-lg font-bold font-heading text-primary-500 mb-4">⚡ Quick Actions</h2>
                  <div className="space-y-2">
                    <Link href="/directory" className="block w-full p-3 bg-neutral-50 hover:bg-primary-50 text-neutral-700 hover:text-primary-600 transition-colors text-left">
                      🔍 Find New Clubs
                    </Link>
                    <Link href="/hub/quiz" className="block w-full p-3 bg-neutral-50 hover:bg-primary-50 text-neutral-700 hover:text-primary-600 transition-colors text-left">
                      🎯 Take Club Quiz
                    </Link>
                    <Link href="/events" className="block w-full p-3 bg-neutral-50 hover:bg-primary-50 text-neutral-700 hover:text-primary-600 transition-colors text-left">
                      📅 Browse Events
                    </Link>
                    <Link href="/propose" className="block w-full p-3 bg-neutral-50 hover:bg-primary-50 text-neutral-700 hover:text-primary-600 transition-colors text-left">
                      ➕ Propose New Club
                    </Link>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="card p-6">
                  <h2 className="text-lg font-bold font-heading text-primary-500 mb-4">💡 Recommended For You</h2>
                  <div className="space-y-3">
                    <Link href="/directory/science-olympiad" className="block p-3 border border-neutral-200 hover:border-secondary-400 transition-colors">
                      <div className="font-semibold text-neutral-700">Science Olympiad</div>
                      <div className="text-xs text-neutral-500">Based on your STEM interest</div>
                    </Link>
                    <Link href="/hub/competitions" className="block p-3 border border-neutral-200 hover:border-secondary-400 transition-colors">
                      <div className="font-semibold text-neutral-700">Upcoming Competitions</div>
                      <div className="text-xs text-neutral-500">Prepare for TSA regionals</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Clubs Tab */}
          {activeTab === 'clubs' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold font-heading text-primary-500">My Clubs</h2>
                <Link href="/directory" className="btn-primary">+ Join a Club</Link>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {profile.joinedClubs.map((club, index) => (
                  <div key={index} className="card p-6">
                    <h3 className="text-lg font-bold font-heading text-primary-500 mb-2">{club}</h3>
                    <p className="text-sm text-neutral-600 mb-4">
                      You&apos;ve been a member since January 2026
                    </p>
                    <div className="flex gap-2">
                      <Link href={`/directory/${club.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-primary-500 hover:underline">
                        View Club →
                      </Link>
                      <button className="text-sm text-red-500 hover:underline ml-auto">
                        Leave
                      </button>
                    </div>
                  </div>
                ))}

                <div className="card p-6 border-2 border-dashed border-neutral-300 flex flex-col items-center justify-center text-center hover:border-primary-400 transition-colors cursor-pointer">
                  <Link href="/directory" className="w-full h-full flex flex-col items-center justify-center">
                    <div className="text-4xl mb-2">➕</div>
                    <h3 className="font-bold text-neutral-600">Join a New Club</h3>
                    <p className="text-sm text-neutral-400">Explore the directory</p>
                  </Link>
                </div>
              </div>

              {/* Club Suggestions */}
              <div className="card p-6 mt-6">
                <h3 className="text-lg font-bold font-heading text-primary-500 mb-4">🎯 Clubs You Might Like</h3>
                <p className="text-neutral-600 mb-4">Based on your interests and activity</p>
                <div className="grid md:grid-cols-3 gap-4">
                  {['Science Olympiad', 'Debate Team', 'Computer Science Club'].map(club => (
                    <div key={club} className="p-4 border border-neutral-200 hover:border-primary-300 transition-colors">
                      <h4 className="font-semibold text-neutral-700">{club}</h4>
                      <p className="text-xs text-neutral-500 mb-2">Similar to your current clubs</p>
                      <button className="text-sm text-primary-500 hover:underline">Learn More</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold font-heading text-primary-500">My Events</h2>
                <Link href="/events" className="btn-primary">Browse All Events</Link>
              </div>

              <div className="space-y-4">
                {myEvents.map(event => (
                  <div key={event.id} className="card p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="text-center bg-primary-50 p-4 md:min-w-[100px]">
                        <div className="text-sm text-primary-500">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</div>
                        <div className="text-3xl font-bold text-primary-600">{new Date(event.date).getDate()}</div>
                        <div className="text-xs text-primary-400">{new Date(event.date).toLocaleDateString('en-US', { weekday: 'short' })}</div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-bold text-neutral-800">{event.title}</h3>
                        <p className="text-neutral-600">{event.club}</p>
                        <p className="text-sm text-neutral-500">🕐 {event.time} • 📍 {event.location}</p>
                      </div>
                      <div className="flex gap-2">
                        {['going', 'maybe', 'not-going'].map(status => (
                          <button
                            key={status}
                            onClick={() => updateRSVP(event.id, status as 'going' | 'maybe' | 'not-going')}
                            className={`px-3 py-2 text-sm font-semibold border-2 transition-all ${
                              event.rsvpStatus === status
                                ? status === 'going' 
                                  ? 'bg-green-500 text-white border-green-500'
                                  : status === 'maybe'
                                  ? 'bg-yellow-500 text-white border-yellow-500'
                                  : 'bg-red-500 text-white border-red-500'
                                : 'bg-white text-neutral-600 border-neutral-300 hover:border-neutral-400'
                            }`}
                          >
                            {status === 'going' ? '✓ Going' : status === 'maybe' ? '? Maybe' : '✗ Not Going'}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add to Calendar */}
              <div className="card p-6 bg-primary-50 border-primary-200">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">📅</div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-primary-700">Sync with Your Calendar</h3>
                    <p className="text-sm text-primary-600">Export your club events to Google Calendar, Apple Calendar, or Outlook</p>
                  </div>
                  <button className="btn-primary">Export Calendar</button>
                </div>
              </div>
            </div>
          )}

          {/* Saved Tab */}
          {activeTab === 'saved' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold font-heading text-primary-500">Saved Items</h2>
                <span className="text-neutral-500">{savedItems.length} items saved</span>
              </div>

              {savedItems.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {savedItems.map(item => (
                    <div key={item.id} className="card p-5">
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-2xl">{typeIcons[item.type]}</span>
                        <button 
                          onClick={() => removeSavedItem(item.id)}
                          className="text-red-400 hover:text-red-600 transition-colors"
                          title="Remove from saved"
                        >
                          ✕
                        </button>
                      </div>
                      <h3 className="font-bold text-neutral-700 mb-1">{item.title}</h3>
                      <p className="text-xs text-neutral-400">
                        Saved on {new Date(item.savedAt).toLocaleDateString()}
                      </p>
                      <div className="mt-3">
                        <span className={`px-2 py-1 text-xs font-semibold ${
                          item.type === 'resource' ? 'bg-blue-100 text-blue-700' :
                          item.type === 'event' ? 'bg-green-100 text-green-700' :
                          item.type === 'club' ? 'bg-purple-100 text-purple-700' :
                          'bg-amber-100 text-amber-700'
                        }`}>
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="text-5xl mb-4">📌</div>
                  <h3 className="text-xl font-bold text-neutral-700 mb-2">No saved items yet</h3>
                  <p className="text-neutral-600 mb-4">Start exploring and save resources, events, and clubs you&apos;re interested in</p>
                  <Link href="/hub" className="btn-primary">Explore Resources</Link>
                </div>
              )}
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-2xl font-bold font-heading text-primary-500">Profile Settings</h2>

              <div className="card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold">Personal Information</h3>
                  <button 
                    onClick={() => setIsEditing(!isEditing)}
                    className="text-primary-500 hover:underline"
                  >
                    {isEditing ? 'Cancel' : 'Edit'}
                  </button>
                </div>

                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-1">Name</label>
                      <input
                        type="text"
                        value={editForm.name}
                        onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-1">Email</label>
                      <input
                        type="email"
                        value={editForm.email}
                        onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-1">Grade</label>
                      <select
                        value={editForm.grade}
                        onChange={(e) => setEditForm({ ...editForm, grade: e.target.value })}
                        className="select-field"
                      >
                        <option>Freshman (9th)</option>
                        <option>Sophomore (10th)</option>
                        <option>Junior (11th)</option>
                        <option>Senior (12th)</option>
                      </select>
                    </div>
                    <button onClick={handleSaveProfile} className="btn-primary">
                      Save Changes
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-neutral-500">Name</div>
                      <div className="font-semibold">{profile.name}</div>
                    </div>
                    <div>
                      <div className="text-sm text-neutral-500">Email</div>
                      <div className="font-semibold">{profile.email}</div>
                    </div>
                    <div>
                      <div className="text-sm text-neutral-500">Grade</div>
                      <div className="font-semibold">{profile.grade}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Notification Settings */}
              <div className="card p-6">
                <h3 className="text-lg font-bold mb-4">Notification Preferences</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Event reminders', description: 'Get notified about upcoming events', enabled: true },
                    { label: 'New announcements', description: 'Updates from your clubs', enabled: true },
                    { label: 'Weekly digest', description: 'Summary of activities and opportunities', enabled: false },
                    { label: 'Competition alerts', description: 'Deadlines and registration reminders', enabled: true },
                  ].map((setting, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-neutral-700">{setting.label}</div>
                        <div className="text-sm text-neutral-500">{setting.description}</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked={setting.enabled} className="sr-only peer" />
                        <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-checked:bg-primary-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:h-5 after:w-5 after:transition-all"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interest Settings */}
              <div className="card p-6">
                <h3 className="text-lg font-bold mb-4">Interests</h3>
                <p className="text-sm text-neutral-600 mb-4">Select your interests to get personalized recommendations</p>
                <div className="flex flex-wrap gap-2">
                  {['STEM', 'Arts', 'Leadership', 'Community Service', 'Sports', 'Music', 'Academic', 'Cultural', 'Environment', 'Business', 'Competition', 'Creative Writing'].map(interest => (
                    <button
                      key={interest}
                      className={`px-3 py-1.5 border-2 font-semibold text-sm transition-all ${
                        profile.interests.includes(interest)
                          ? 'bg-primary-500 text-white border-primary-500'
                          : 'bg-white text-neutral-600 border-neutral-300 hover:border-primary-400'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Danger Zone */}
              <div className="card p-6 border-red-200">
                <h3 className="text-lg font-bold text-red-600 mb-4">Danger Zone</h3>
                <p className="text-sm text-neutral-600 mb-4">Irreversible actions for your account</p>
                <div className="flex gap-4">
                  <button className="px-4 py-2 border-2 border-red-300 text-red-600 hover:bg-red-50 font-semibold transition-colors">
                    Leave All Clubs
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 font-semibold transition-colors">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
