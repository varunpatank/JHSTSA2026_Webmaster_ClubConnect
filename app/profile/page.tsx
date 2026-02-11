'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  earnedAt: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface ClubMembership {
  id: string;
  name: string;
  role: string;
  joinedAt: string;
  contributions: number;
  logo: string;
}

interface Activity {
  id: string;
  type: 'event' | 'achievement' | 'club' | 'resource' | 'goal';
  title: string;
  description: string;
  timestamp: string;
  icon: string;
}

const demoBadges: Badge[] = [
  { id: '1', name: 'First Steps', icon: '👣', description: 'Joined ClubConnect', earnedAt: '2025-09-01', rarity: 'common' },
  { id: '2', name: 'Social Butterfly', icon: '🦋', description: 'Joined 5+ clubs', earnedAt: '2025-10-15', rarity: 'rare' },
  { id: '3', name: 'Leader Rising', icon: '⭐', description: 'Became a club officer', earnedAt: '2025-11-01', rarity: 'epic' },
  { id: '4', name: 'Event Master', icon: '🎪', description: 'Attended 10+ events', earnedAt: '2025-12-10', rarity: 'rare' },
  { id: '5', name: 'Goal Getter', icon: '🎯', description: 'Completed 5 goals', earnedAt: '2026-01-05', rarity: 'rare' },
  { id: '6', name: 'Helping Hand', icon: '🤝', description: '10+ volunteer hours', earnedAt: '2026-01-20', rarity: 'epic' },
  { id: '7', name: 'Competition Ready', icon: '🏆', description: 'Competed in TSA', earnedAt: '2026-02-01', rarity: 'legendary' }
];

const demoClubs: ClubMembership[] = [
  { id: '1', name: 'Technology Student Association', role: 'President', joinedAt: '2024-09-01', contributions: 47, logo: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&q=80' },
  { id: '2', name: 'Debate Club', role: 'Vice President', joinedAt: '2024-09-15', contributions: 32, logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80' },
  { id: '3', name: 'National Honor Society', role: 'Member', joinedAt: '2025-01-10', contributions: 18, logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=100&q=80' },
  { id: '4', name: 'Environmental Club', role: 'Secretary', joinedAt: '2025-09-01', contributions: 12, logo: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=100&q=80' }
];

const demoActivities: Activity[] = [
  { id: '1', type: 'achievement', title: 'Earned Competition Ready badge', description: 'Competed in TSA State Competition', timestamp: '2026-02-01T10:00:00', icon: '🏆' },
  { id: '2', type: 'event', title: 'Attended TSA State Conference', description: 'Represented school at state level', timestamp: '2026-02-01T08:00:00', icon: '📅' },
  { id: '3', type: 'goal', title: 'Completed goal: Finish Webmaster project', description: 'Major milestone achieved', timestamp: '2026-01-28T15:30:00', icon: '🎯' },
  { id: '4', type: 'club', title: 'Posted announcement in TSA', description: 'Competition reminder for all members', timestamp: '2026-01-25T12:00:00', icon: '📢' },
  { id: '5', type: 'resource', title: 'Saved 3 new resources', description: 'Design tools added to collection', timestamp: '2026-01-20T16:45:00', icon: '📚' }
];

const rarityColors = {
  common: 'bg-neutral-100 border-neutral-300 text-neutral-600',
  rare: 'bg-blue-100 border-blue-400 text-blue-700',
  epic: 'bg-purple-100 border-purple-400 text-purple-700',
  legendary: 'bg-amber-100 border-amber-400 text-amber-700'
};

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'badges' | 'clubs' | 'activity' | 'settings'>('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Alex Johnson',
    username: '@alexj2026',
    bio: 'Junior at Jefferson High School. Passionate about technology, leadership, and making a difference. TSA Webmaster competitor and club enthusiast.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    coverPhoto: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80',
    grade: '11',
    school: 'Jefferson High School',
    interests: ['Technology', 'Leadership', 'Public Speaking', 'Web Development', 'Community Service'],
    socialLinks: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      instagram: ''
    },
    isPublic: true,
    showEmail: false
  });

  const stats = {
    clubs: demoClubs.length,
    events: 23,
    badges: demoBadges.length,
    goals: 12,
    hours: 45
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const formatRelativeTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);
    if (hours < 1) return 'Just now';
    if (hours < 24) return `${hours}h ago`;
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days}d ago`;
    return formatDate(timestamp);
  };

  return (
    <div className="bg-neutral-100 min-h-screen">
      {/* Cover Photo */}
      <div className="relative h-48 md:h-64">
        <Image
          src={profile.coverPhoto}
          alt="Cover"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <Link href="/dashboard" className="text-white/80 hover:text-white text-sm bg-black/30 px-3 py-1 inline-flex items-center gap-2">
            ← Back to Dashboard
          </Link>
        </div>
      </div>

      {/* Profile Header */}
      <div className="max-w-5xl mx-auto px-4 -mt-16 relative z-10">
        <div className="card p-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Avatar */}
            <div className="relative">
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={128}
                height={128}
                className="w-32 h-32 object-cover border-4 border-white shadow-lg"
              />
              {isEditing && (
                <button className="absolute bottom-0 right-0 bg-primary-500 text-white p-2 text-sm">
                  📷
                </button>
              )}
            </div>

            {/* Info */}
            <div className="flex-grow">
              <div className="flex items-start justify-between">
                <div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="text-2xl font-bold text-neutral-800 border-b-2 border-primary-300 focus:border-primary-500 outline-none"
                    />
                  ) : (
                    <h1 className="text-2xl font-bold font-heading text-neutral-800">{profile.name}</h1>
                  )}
                  <p className="text-neutral-500">{profile.username}</p>
                </div>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className={isEditing ? 'btn-primary' : 'btn-outline'}
                >
                  {isEditing ? 'Save Profile' : 'Edit Profile'}
                </button>
              </div>

              {isEditing ? (
                <textarea
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  className="input-field mt-3 w-full"
                  rows={2}
                />
              ) : (
                <p className="text-neutral-600 mt-3">{profile.bio}</p>
              )}

              <div className="flex flex-wrap gap-2 mt-3">
                {profile.interests.map(interest => (
                  <span key={interest} className="px-3 py-1 bg-primary-100 text-primary-700 text-sm">
                    {interest}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mt-4 pt-4 border-t">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-500">{stats.clubs}</div>
                  <div className="text-sm text-neutral-500">Clubs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-500">{stats.events}</div>
                  <div className="text-sm text-neutral-500">Events</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary-500">{stats.badges}</div>
                  <div className="text-sm text-neutral-500">Badges</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-500">{stats.goals}</div>
                  <div className="text-sm text-neutral-500">Goals</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{stats.hours}</div>
                  <div className="text-sm text-neutral-500">Service Hrs</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mt-6 border-b">
          {(['overview', 'badges', 'clubs', 'activity', 'settings'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 font-medium capitalize transition-colors ${
                activeTab === tab
                  ? 'text-primary-600 border-b-2 border-primary-500 -mb-px'
                  : 'text-neutral-500 hover:text-neutral-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="py-6">
          {activeTab === 'overview' && (
            <div className="grid md:grid-cols-3 gap-6">
              {/* Recent Activity */}
              <div className="md:col-span-2 card p-6">
                <h3 className="text-lg font-bold text-neutral-800 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {demoActivities.slice(0, 4).map(activity => (
                    <div key={activity.id} className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0">
                      <span className="text-2xl">{activity.icon}</span>
                      <div className="flex-grow">
                        <p className="font-medium text-neutral-800">{activity.title}</p>
                        <p className="text-sm text-neutral-500">{activity.description}</p>
                      </div>
                      <span className="text-xs text-neutral-400">{formatRelativeTime(activity.timestamp)}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => setActiveTab('activity')} className="text-primary-500 hover:text-primary-700 text-sm mt-4">
                  View all activity →
                </button>
              </div>

              {/* Badges Showcase */}
              <div className="card p-6">
                <h3 className="text-lg font-bold text-neutral-800 mb-4">Featured Badges</h3>
                <div className="grid grid-cols-3 gap-3">
                  {demoBadges.slice(0, 6).map(badge => (
                    <div
                      key={badge.id}
                      className={`p-3 text-center border ${rarityColors[badge.rarity]} group cursor-pointer`}
                      title={badge.description}
                    >
                      <span className="text-3xl block mb-1 group-hover:scale-125 transition-transform">{badge.icon}</span>
                      <span className="text-xs font-medium truncate block">{badge.name}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => setActiveTab('badges')} className="text-primary-500 hover:text-primary-700 text-sm mt-4 block w-full text-center">
                  View all {demoBadges.length} badges →
                </button>
              </div>

              {/* Quick Stats Cards */}
              <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="card p-4 text-center bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                  <div className="text-4xl mb-2">🏆</div>
                  <div className="text-2xl font-bold text-blue-700">3</div>
                  <div className="text-sm text-blue-600">Competitions</div>
                </div>
                <div className="card p-4 text-center bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                  <div className="text-4xl mb-2">🤝</div>
                  <div className="text-2xl font-bold text-green-700">45</div>
                  <div className="text-sm text-green-600">Service Hours</div>
                </div>
                <div className="card p-4 text-center bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
                  <div className="text-4xl mb-2">📚</div>
                  <div className="text-2xl font-bold text-purple-700">28</div>
                  <div className="text-sm text-purple-600">Resources Saved</div>
                </div>
                <div className="card p-4 text-center bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
                  <div className="text-4xl mb-2">💬</div>
                  <div className="text-2xl font-bold text-amber-700">15</div>
                  <div className="text-sm text-amber-600">Discussions</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'badges' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-neutral-800">All Badges ({demoBadges.length})</h3>
                <div className="flex gap-2">
                  {(['all', 'common', 'rare', 'epic', 'legendary']).map(rarity => {
                    const isAll = rarity === 'all';
                    const colorClass = isAll 
                      ? 'bg-primary-100 text-primary-700' 
                      : rarityColors[rarity as keyof typeof rarityColors];
                    return (
                      <button
                        key={rarity}
                        className={`px-3 py-1 text-sm capitalize ${colorClass} border`}
                      >
                        {rarity}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {demoBadges.map(badge => (
                  <div
                    key={badge.id}
                    className={`card p-4 text-center border-2 ${rarityColors[badge.rarity]} hover:shadow-lg transition-shadow cursor-pointer`}
                  >
                    <span className="text-5xl block mb-3">{badge.icon}</span>
                    <h4 className="font-bold text-neutral-800">{badge.name}</h4>
                    <p className="text-xs text-neutral-600 mt-1">{badge.description}</p>
                    <p className="text-xs text-neutral-400 mt-2">Earned {formatDate(badge.earnedAt)}</p>
                    <span className={`inline-block mt-2 px-2 py-0.5 text-xs uppercase font-semibold ${rarityColors[badge.rarity]}`}>
                      {badge.rarity}
                    </span>
                  </div>
                ))}
                {/* Locked Badges */}
                {[1, 2, 3].map(i => (
                  <div key={`locked-${i}`} className="card p-4 text-center bg-neutral-100 border-2 border-dashed border-neutral-300 opacity-50">
                    <span className="text-5xl block mb-3 grayscale">🔒</span>
                    <h4 className="font-bold text-neutral-500">???</h4>
                    <p className="text-xs text-neutral-400 mt-1">Keep exploring to unlock!</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'clubs' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-neutral-800">My Clubs ({demoClubs.length})</h3>
                <Link href="/directory" className="btn-outline text-sm">
                  Browse More Clubs
                </Link>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {demoClubs.map(club => (
                  <div key={club.id} className="card p-5 flex items-center gap-4 hover:shadow-md transition-shadow">
                    <Image
                      src={club.logo}
                      alt={club.name}
                      width={64}
                      height={64}
                      className="w-16 h-16 object-cover"
                    />
                    <div className="flex-grow">
                      <h4 className="font-bold text-neutral-800">{club.name}</h4>
                      <p className={`text-sm ${
                        club.role === 'President' ? 'text-primary-600 font-semibold' :
                        club.role === 'Vice President' ? 'text-secondary-600 font-semibold' :
                        'text-neutral-500'
                      }`}>
                        {club.role}
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-neutral-400">
                        <span>Joined {formatDate(club.joinedAt)}</span>
                        <span>{club.contributions} contributions</span>
                      </div>
                    </div>
                    <Link href={`/directory/${club.id}`} className="btn-outline text-sm">
                      View
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'activity' && (
            <div>
              <h3 className="text-lg font-bold text-neutral-800 mb-6">Activity Timeline</h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-neutral-200"></div>
                <div className="space-y-6">
                  {demoActivities.map((activity, index) => (
                    <div key={activity.id} className="relative flex items-start gap-4 pl-10">
                      <div className="absolute left-0 w-8 h-8 bg-white border-2 border-primary-300 flex items-center justify-center text-lg">
                        {activity.icon}
                      </div>
                      <div className="card p-4 flex-grow">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold text-neutral-800">{activity.title}</h4>
                            <p className="text-sm text-neutral-600">{activity.description}</p>
                          </div>
                          <span className="text-xs text-neutral-400 whitespace-nowrap ml-4">
                            {formatRelativeTime(activity.timestamp)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="max-w-2xl">
              <h3 className="text-lg font-bold text-neutral-800 mb-6">Profile Settings</h3>
              <div className="card p-6 space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">Grade Level</label>
                  <select
                    value={profile.grade}
                    onChange={(e) => setProfile({ ...profile, grade: e.target.value })}
                    className="select-field"
                  >
                    <option value="9">Freshman (9th)</option>
                    <option value="10">Sophomore (10th)</option>
                    <option value="11">Junior (11th)</option>
                    <option value="12">Senior (12th)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">School</label>
                  <input
                    type="text"
                    value={profile.school}
                    onChange={(e) => setProfile({ ...profile, school: e.target.value })}
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">Interests (comma separated)</label>
                  <input
                    type="text"
                    value={profile.interests.join(', ')}
                    onChange={(e) => setProfile({ ...profile, interests: e.target.value.split(',').map(i => i.trim()) })}
                    className="input-field"
                  />
                </div>

                <hr />

                <h4 className="font-semibold text-neutral-700">Social Links</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs text-neutral-500 mb-1">GitHub</label>
                    <input
                      type="url"
                      value={profile.socialLinks.github}
                      onChange={(e) => setProfile({ ...profile, socialLinks: { ...profile.socialLinks, github: e.target.value } })}
                      className="input-field text-sm"
                      placeholder="https://github.com/..."
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-neutral-500 mb-1">LinkedIn</label>
                    <input
                      type="url"
                      value={profile.socialLinks.linkedin}
                      onChange={(e) => setProfile({ ...profile, socialLinks: { ...profile.socialLinks, linkedin: e.target.value } })}
                      className="input-field text-sm"
                      placeholder="https://linkedin.com/..."
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-neutral-500 mb-1">Instagram</label>
                    <input
                      type="url"
                      value={profile.socialLinks.instagram}
                      onChange={(e) => setProfile({ ...profile, socialLinks: { ...profile.socialLinks, instagram: e.target.value } })}
                      className="input-field text-sm"
                      placeholder="https://instagram.com/..."
                    />
                  </div>
                </div>

                <hr />

                <h4 className="font-semibold text-neutral-700">Privacy</h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={profile.isPublic}
                      onChange={(e) => setProfile({ ...profile, isPublic: e.target.checked })}
                      className="w-4 h-4"
                    />
                    <span className="text-neutral-700">Make profile public</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={profile.showEmail}
                      onChange={(e) => setProfile({ ...profile, showEmail: e.target.checked })}
                      className="w-4 h-4"
                    />
                    <span className="text-neutral-700">Show email on profile</span>
                  </label>
                </div>

                <div className="pt-4">
                  <button className="btn-primary">Save Settings</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
