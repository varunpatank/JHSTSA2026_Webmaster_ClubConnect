import { ChapterCategory, MeetingFrequency, MembershipStatus, GradeLevel, MeetingTime } from '@/types';
import type { StarterGuideCategory } from '@/types';

// ==========================================
// ABOUT PAGE DATA
// ==========================================

export const aboutPartners = [
  { id: 'state-tsa', name: 'State TSA', src: '/partners/state-tsa.svg' },
  { id: 'local-library', name: 'Local Library', src: '/partners/local-library.svg' },
  { id: 'city-bank', name: 'City Bank', src: '/partners/city-bank.svg' },
  { id: 'techco', name: 'TechCo', src: '/partners/techco.svg' },
  { id: 'arts-guild', name: 'Arts Guild', src: '/partners/arts-guild.svg' },
  { id: 'university', name: 'University Partner', src: '/partners/university-partner.svg' },
];

// ==========================================
// COMMUNITY PAGE DATA
// ==========================================

export const communityDiscussions = [
  { id: 1, title: 'Tips for TSA State Competition?', author: 'Maria G.', club: 'TSA', replies: 23, lastActive: '2 hours ago', hot: true },
  { id: 2, title: 'Best fundraising ideas for spring', author: 'James L.', club: 'FBLA', replies: 18, lastActive: '5 hours ago', hot: true },
  { id: 3, title: 'How to balance club leadership with academics', author: 'Sophie K.', club: 'NHS', replies: 31, lastActive: '1 day ago', hot: false },
  { id: 4, title: 'Robotics competition strategies', author: 'Alex J.', club: 'Robotics', replies: 15, lastActive: '1 day ago', hot: false },
  { id: 5, title: 'New member recruitment ideas', author: 'Taylor M.', club: 'Drama', replies: 12, lastActive: '2 days ago', hot: false },
];

export const communitySpotlights = [
  { id: 1, title: 'TSA Chapter Wins State Championship', club: 'TSA', date: 'Nov 2024', image: '🏆', featured: true },
  { id: 2, title: 'Drama Club Spring Musical Sells Out', club: 'Drama', date: 'Oct 2024', image: '🎭', featured: false },
  { id: 3, title: 'Robotics Team Qualifies for Nationals', club: 'Robotics', date: 'Oct 2024', image: '🤖', featured: false },
  { id: 4, title: 'NHS Community Service Milestone', club: 'NHS', date: 'Sep 2024', image: '🤝', featured: false },
];

export const communitySuccessStories = [
  { id: 1, title: 'From Club Member to Tech Entrepreneur', author: 'Sarah Chen, Class of 2020', club: 'TSA', excerpt: 'How TSA skills helped me launch my startup...' },
  { id: 2, title: 'Leadership Lessons That Shaped My Career', author: 'Michael Brown, Class of 2018', club: 'FBLA', excerpt: 'The business skills I learned in FBLA...' },
  { id: 3, title: 'Finding My Voice Through Debate', author: 'Emily Rodriguez, Class of 2021', club: 'Debate', excerpt: 'Public speaking transformed my confidence...' },
];

export const communityAlumni = [
  { id: 1, name: 'Dr. Jennifer Walsh', year: '2015', role: 'Software Engineer at Google', club: 'TSA' },
  { id: 2, name: 'Marcus Thompson', year: '2017', role: 'Investment Banker', club: 'FBLA' },
  { id: 3, name: 'Amanda Lee', year: '2019', role: 'Broadway Performer', club: 'Drama' },
];

export const communityMembers = [
  { id: 'm1', name: 'Greg Shelton', role: 'Advisor', club: 'Juanita HS Webmaster', email: 'gshelton@lwsd.org', bio: 'Advisor with 10+ years experience mentoring Webmaster teams.', availability: ['Mon 3:30pm','Wed 4:00pm'] },
  { id: 'm2', name: 'Alex Johnson', role: 'Team Captain', club: 'Robotics', email: 'a.johnson@student.edu', bio: 'Lead programmer and mentor for new members.', availability: ['Tue 5:00pm','Thu 3:30pm'] },
  { id: 'm3', name: 'Isabella Martinez', role: 'President', club: 'Community Service', email: 'i.martinez@student.edu', bio: 'Organizes large volunteer drives and outreach.', availability: ['Fri 12:00pm'] },
];

// ==========================================
// EXPLORE PAGE DATA
// ==========================================

export const exploreClubs = [
  { id: 'tsa', name: 'Technology Student Association', category: 'STEM', members: 45, description: 'Competitive technology and leadership organization' },
  { id: 'fbla', name: 'Future Business Leaders', category: 'Business', members: 38, description: 'Developing business skills and career readiness' },
  { id: 'nhs', name: 'National Honor Society', category: 'Academic', members: 52, description: 'Recognizing outstanding academic achievement' },
  { id: 'drama', name: 'Drama Club', category: 'Arts', members: 28, description: 'Theatre productions and performing arts' },
  { id: 'debate', name: 'Debate Team', category: 'Academic', members: 22, description: 'Competitive speech and debate' },
  { id: 'robotics', name: 'Robotics Club', category: 'STEM', members: 35, description: 'Building and programming robots for competition' },
  { id: 'art', name: 'Art Club', category: 'Arts', members: 30, description: 'Creative expression and art exhibitions' },
  { id: 'eco', name: 'Environmental Club', category: 'Service', members: 25, description: 'Promoting sustainability and eco-friendly initiatives' },
];

export const exploreEvents = [
  { id: 1, title: 'TSA State Conference', date: 'Mar 15-17, 2025', type: 'Competition', club: 'TSA' },
  { id: 2, title: 'Spring Club Fair', date: 'Mar 20, 2025', type: 'Fair', club: 'All Clubs' },
  { id: 3, title: 'FBLA Regional Competition', date: 'Apr 5, 2025', type: 'Competition', club: 'FBLA' },
  { id: 4, title: 'Spring Musical', date: 'Apr 12-14, 2025', type: 'Performance', club: 'Drama' },
  { id: 5, title: 'Robotics Showcase', date: 'Apr 22, 2025', type: 'Showcase', club: 'Robotics' },
  { id: 6, title: 'Art Exhibition Opening', date: 'May 1, 2025', type: 'Exhibition', club: 'Art Club' },
];

export const exploreResources = [
  { id: 1, title: 'Club Officer Handbook', category: 'Guides', icon: '📘', description: 'Complete guide for leading your club effectively' },
  { id: 2, title: 'Event Planning Templates', category: 'Templates', icon: '📋', description: 'Ready-to-use templates for organizing events' },
  { id: 3, title: 'Fundraising Ideas', category: 'Fundraising', icon: '💰', description: 'Creative ways to raise money for your club' },
  { id: 4, title: 'Meeting Agenda Templates', category: 'Templates', icon: '📝', description: 'Structure your meetings for maximum productivity' },
  { id: 5, title: 'Social Media Guide', category: 'Marketing', icon: '📱', description: 'Grow your club presence online' },
  { id: 6, title: 'Member Recruitment Tips', category: 'Guides', icon: '👥', description: 'Strategies to attract and retain members' },
];

export const exploreCategories = ['All', 'STEM', 'Business', 'Academic', 'Arts', 'Service'];

// ==========================================
// INITIATION PAGE DATA
// ==========================================

export const initiationStages = [
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
      { name: 'Event Planning Templates', href: '/hub/guides/guide-5', icon: '📋' },
      { name: 'Fundraising Ideas', href: '/funding', icon: '💰' },
      { name: 'Social Media Guide', href: '/hub/external', icon: '📱' },
      { name: 'Member Recruitment Tips', href: '/hub/guides/guide-3', icon: '👥' },
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
      { name: 'Officer Guides', href: '/hub/guides/guide-2', icon: '📖' },
      { name: 'Request Resources', href: '/hub/request', icon: '🛠️' },
      { name: 'Club Officer Handbook', href: '/hub/guides/guide-2', icon: '📘' },
      { name: 'Meeting Agenda Templates', href: '/hub/guides/guide-4', icon: '📝' },
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
      { name: 'Meeting Agenda Templates', href: '/hub/guides/guide-4', icon: '📅' },
      { name: 'Club Health Check', href: '/hub/health', icon: '💊' },
      { name: 'Event Planning Templates', href: '/hub/guides/guide-5', icon: '📋' },
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
      { name: 'Member Recruitment Tips', href: '/hub/guides/guide-3', icon: '👥' },
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

// ==========================================
// DIRECTORY PAGE DATA (filter options)
// ==========================================

export const directoryCategories: ChapterCategory[] = ['Academic', 'Arts', 'Service', 'Cultural', 'STEM', 'Sports', 'Leadership', 'Media', 'Other'];
export const directoryFrequencies: MeetingFrequency[] = ['Daily', 'Weekly', 'Bi-weekly', 'Monthly'];
export const directoryMembershipStatuses: MembershipStatus[] = ['Open Enrollment', 'Tryout Required', 'Application Required'];
export const directoryGradeLevels: GradeLevel[] = ['9th Only', '10th-12th', 'All Grades'];
export const directoryMeetingTimes: MeetingTime[] = ['Before School', 'Lunch', 'After School', 'Weekends'];

// ==========================================
// EVENTS PAGE DATA
// ==========================================

export const eventsCategories: ChapterCategory[] = ['Academic', 'Arts', 'Service', 'Cultural', 'STEM', 'Sports', 'Leadership', 'Media', 'Other'];

// ==========================================
// DASHBOARD PAGE DATA
// ==========================================

export interface SavedItem {
  id: string;
  type: 'resource' | 'event' | 'club' | 'opportunity';
  title: string;
  savedAt: string;
}

export interface UserActivity {
  id: string;
  type: 'joined' | 'saved' | 'rsvp' | 'submitted' | 'completed';
  description: string;
  timestamp: string;
}

export interface MyEvent {
  id: string;
  title: string;
  club: string;
  date: string;
  time: string;
  location: string;
  rsvpStatus: 'going' | 'maybe' | 'not-going';
}

export interface Achievement {
  id: string;
  name: string;
  icon: string;
  description: string;
  earnedAt: string;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';
}

export interface UserProfile {
  name: string;
  email: string;
  grade: string;
  avatar: string;
  joinedClubs: string[];
  interests: string[];
  role: 'student' | 'officer' | 'advisor';
}

export const demoProfile: UserProfile = {
  name: 'Alex Johnson',
  email: 'alex.j@school.edu',
  grade: 'Junior (11th)',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
  joinedClubs: ['Technology Student Association', 'Robotics Club', 'Math League'],
  interests: ['STEM', 'Leadership', 'Competition'],
  role: 'student'
};

export const demoSavedItems: SavedItem[] = [
  { id: '1', type: 'resource', title: 'TSA Competition Guide 2026', savedAt: '2026-02-08' },
  { id: '2', type: 'event', title: 'Regional TSA Conference', savedAt: '2026-02-07' },
  { id: '3', type: 'club', title: 'Environmental Club', savedAt: '2026-02-05' },
  { id: '4', type: 'opportunity', title: 'Summer STEM Mentorship', savedAt: '2026-02-04' },
];

export const demoActivity: UserActivity[] = [
  { id: '1', type: 'rsvp', description: 'RSVPed to Regional TSA Conference', timestamp: '2026-02-09T14:30:00' },
  { id: '2', type: 'saved', description: 'Saved TSA Competition Guide', timestamp: '2026-02-08T10:15:00' },
  { id: '3', type: 'submitted', description: 'Submitted new club proposal', timestamp: '2026-02-07T16:45:00' },
  { id: '4', type: 'completed', description: 'Completed Club Finder Quiz', timestamp: '2026-02-06T09:00:00' },
  { id: '5', type: 'joined', description: 'Joined Math League', timestamp: '2026-02-05T11:30:00' },
];

export const demoDashboardEvents: MyEvent[] = [
  { id: '1', title: 'TSA Chapter Meeting', club: 'TSA', date: '2026-02-12', time: '3:30 PM', location: 'Room 204', rsvpStatus: 'going' },
  { id: '2', title: 'Robotics Build Session', club: 'Robotics Club', date: '2026-02-14', time: '4:00 PM', location: 'Engineering Lab', rsvpStatus: 'going' },
  { id: '3', title: 'Math League Practice', club: 'Math League', date: '2026-02-15', time: '3:00 PM', location: 'Room 118', rsvpStatus: 'maybe' },
];

export const demoAchievements: Achievement[] = [
  { id: '1', name: 'First Steps', icon: '👟', description: 'Joined your first club', earnedAt: '2026-01-15', rarity: 'Common' },
  { id: '2', name: 'Quiz Master', icon: '🎯', description: 'Completed the Club Finder Quiz', earnedAt: '2026-02-06', rarity: 'Common' },
  { id: '3', name: 'Social Butterfly', icon: '🦋', description: 'Joined 3 or more clubs', earnedAt: '2026-02-05', rarity: 'Uncommon' },
  { id: '4', name: 'Resource Hunter', icon: '📚', description: 'Saved 5+ resources', earnedAt: '2026-02-08', rarity: 'Uncommon' },
];

// ==========================================
// MY SPACE PAGE DATA
// ==========================================

export const mySpaceGoals = [
  { id: 1, title: 'Win TSA State Competition', progress: 65, deadline: 'Mar 2025', status: 'in-progress' },
  { id: 2, title: 'Recruit 10 new members', progress: 80, deadline: 'Dec 2024', status: 'in-progress' },
  { id: 3, title: 'Complete leadership training', progress: 100, deadline: 'Nov 2024', status: 'completed' },
  { id: 4, title: 'Organize spring fundraiser', progress: 20, deadline: 'Apr 2025', status: 'in-progress' },
];

export const mySpaceCollections = [
  { id: 1, name: 'Competition Resources', items: 12, icon: '🏆' },
  { id: 2, name: 'Meeting Templates', items: 8, icon: '📋' },
  { id: 3, name: 'Fundraising Ideas', items: 15, icon: '💰' },
];

export const mySpaceClubs = [
  { id: 'tsa', name: 'Technology Student Association', role: 'President', status: 'Active' },
  { id: 'robotics', name: 'Robotics Club', role: 'Member', status: 'Active' },
  { id: 'nhs', name: 'National Honor Society', role: 'Member', status: 'Active' },
];

export const mySpaceRecentActivity = [
  { id: 1, action: 'Completed goal: Leadership training', time: '2 hours ago', icon: '✅' },
  { id: 2, action: 'Added resource to Competition collection', time: '1 day ago', icon: '📚' },
  { id: 3, action: 'Posted in TSA discussion forum', time: '2 days ago', icon: '💬' },
  { id: 4, action: 'Updated goal progress: State Competition', time: '3 days ago', icon: '📊' },
];

export const mySpaceNotifications = [
  { id: 1, message: 'TSA meeting tomorrow at 3pm', type: 'reminder', unread: true },
  { id: 2, message: 'New competition deadline announced', type: 'alert', unread: true },
  { id: 3, message: 'Your fundraiser proposal was approved', type: 'success', unread: false },
];

// ==========================================
// NOTIFICATIONS PAGE DATA
// ==========================================

export interface NotificationItem {
  id: string;
  type: 'event' | 'announcement' | 'achievement' | 'reminder' | 'system' | 'mention';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  link?: string;
  club?: string;
  priority: 'low' | 'normal' | 'high';
}

export interface NotificationPreference {
  type: string;
  label: string;
  description: string;
  email: boolean;
  push: boolean;
  inApp: boolean;
}

export const demoNotifications: NotificationItem[] = [
  {
    id: '1',
    type: 'event',
    title: 'Event Reminder: TSA Chapter Meeting',
    message: 'Your meeting starts in 1 hour. Room 204, Technology Wing.',
    timestamp: '2026-02-10T14:30:00',
    read: false,
    link: '/events',
    club: 'Technology Student Association',
    priority: 'high'
  },
  {
    id: '2',
    type: 'announcement',
    title: 'New Announcement from Robotics Club',
    message: 'Competition registration deadline extended to February 20th!',
    timestamp: '2026-02-10T10:15:00',
    read: false,
    link: '/hub/announcements',
    club: 'Robotics Club',
    priority: 'normal'
  },
  {
    id: '3',
    type: 'achievement',
    title: '🏆 Achievement Unlocked!',
    message: 'You earned "Social Butterfly" for joining 3 clubs!',
    timestamp: '2026-02-09T16:00:00',
    read: false,
    link: '/hub/achievements',
    priority: 'normal'
  },
  {
    id: '4',
    type: 'reminder',
    title: 'Goal Reminder',
    message: 'Your goal "Complete 50 Service Hours" is 64% complete. Keep going!',
    timestamp: '2026-02-09T09:00:00',
    read: true,
    link: '/hub/goals',
    priority: 'low'
  },
  {
    id: '5',
    type: 'system',
    title: 'Welcome to ClubConnect!',
    message: 'Complete your profile to get personalized club recommendations.',
    timestamp: '2026-02-08T12:00:00',
    read: true,
    link: '/dashboard',
    priority: 'normal'
  },
  {
    id: '6',
    type: 'mention',
    title: 'You were mentioned in a discussion',
    message: 'Alex Martinez mentioned you in "Webmaster Competition Planning"',
    timestamp: '2026-02-08T11:30:00',
    read: true,
    club: 'TSA',
    priority: 'normal'
  },
  {
    id: '7',
    type: 'event',
    title: 'RSVP Confirmation',
    message: 'You\'re confirmed for "Regional TSA Conference" on Feb 25th.',
    timestamp: '2026-02-07T14:00:00',
    read: true,
    link: '/events',
    club: 'TSA',
    priority: 'low'
  },
  {
    id: '8',
    type: 'announcement',
    title: 'New Resource Available',
    message: 'Check out the new "Leadership Development Guide" in the Resource Hub.',
    timestamp: '2026-02-06T09:30:00',
    read: true,
    link: '/hub',
    priority: 'low'
  },
];

export const demoPreferences: NotificationPreference[] = [
  { type: 'events', label: 'Event Reminders', description: 'Upcoming events and meeting reminders', email: true, push: true, inApp: true },
  { type: 'announcements', label: 'Club Announcements', description: 'News and updates from your clubs', email: true, push: true, inApp: true },
  { type: 'achievements', label: 'Achievement Alerts', description: 'When you earn new badges or achievements', email: false, push: true, inApp: true },
  { type: 'goals', label: 'Goal Reminders', description: 'Progress updates and deadline reminders', email: false, push: true, inApp: true },
  { type: 'mentions', label: 'Mentions', description: 'When someone mentions you in discussions', email: true, push: true, inApp: true },
  { type: 'newsletter', label: 'Weekly Digest', description: 'Summary of activities and opportunities', email: true, push: false, inApp: false },
  { type: 'system', label: 'System Updates', description: 'Important platform announcements', email: true, push: false, inApp: true },
];

// ==========================================
// PROPOSE PAGE DATA
// ==========================================

export const proposeCategories = ['Academic', 'Arts', 'Service', 'Cultural', 'STEM', 'Sports', 'Leadership', 'Media', 'Other'];
export const proposeFrequencies = ['Daily', 'Weekly', 'Bi-weekly', 'Monthly'];
export const proposeMeetingTimes = ['Before School', 'Lunch', 'After School', 'Weekends'];
export const proposeGrades = ['9', '10', '11', '12'];

// ==========================================
// HUB PAGE DATA
// ==========================================

export const hubCategories: StarterGuideCategory[] = [
  'Getting Started',
  'Constitution & Bylaws',
  'Recruiting Members',
  'Running Meetings',
  'Event Planning',
  'Fundraising',
  'Marketing',
  'Leadership',
  'Advisor Relations',
  'Competitions'
];

// ==========================================
// HUB/EXTERNAL PAGE DATA
// ==========================================

export interface ExternalResource {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  subcategory: string;
  tags: string[];
  type: 'Website' | 'Tool' | 'Template' | 'Video' | 'Course' | 'Article' | 'Community';
  free: boolean;
  featured?: boolean;
}

export const externalResources: ExternalResource[] = [
  // LEADERSHIP & MANAGEMENT
  { id: '1', title: 'Harvard Leadership Principles', description: 'Free leadership courses from Harvard Business School Online', url: 'https://online.hbs.edu/subjects/leadership-management/', category: 'Leadership', subcategory: 'Courses', tags: ['leadership', 'management', 'free course'], type: 'Course', free: true, featured: true },
  { id: '2', title: 'TED Talks - Leadership Playlist', description: 'Curated playlist of the best TED talks on leadership', url: 'https://www.ted.com/topics/leadership', category: 'Leadership', subcategory: 'Videos', tags: ['leadership', 'inspiration', 'video'], type: 'Video', free: true },
  { id: '3', title: 'MindTools Leadership Skills', description: 'Comprehensive leadership skills toolkit and assessments', url: 'https://www.mindtools.com/pages/main/newMN_LDR.htm', category: 'Leadership', subcategory: 'Skills', tags: ['leadership', 'skills', 'assessment'], type: 'Website', free: true },
  { id: '4', title: 'Coursera - Organizational Leadership', description: 'Northwestern University leadership specialization', url: 'https://www.coursera.org/specializations/organizational-leadership', category: 'Leadership', subcategory: 'Courses', tags: ['leadership', 'organization', 'certificate'], type: 'Course', free: false },
  { id: '5', title: 'Simon Sinek - Start With Why', description: 'Official resources from bestselling author Simon Sinek', url: 'https://simonsinek.com/inspire/', category: 'Leadership', subcategory: 'Inspiration', tags: ['leadership', 'purpose', 'motivation'], type: 'Website', free: true },
  // EVENT PLANNING
  { id: '6', title: 'Eventbrite - Free Event Planning', description: 'Create and manage events for free with ticketing', url: 'https://www.eventbrite.com/', category: 'Event Planning', subcategory: 'Tools', tags: ['events', 'ticketing', 'registration'], type: 'Tool', free: true, featured: true },
  { id: '7', title: 'Canva Event Templates', description: 'Thousands of free event flyer and poster templates', url: 'https://www.canva.com/templates/?query=event', category: 'Event Planning', subcategory: 'Design', tags: ['design', 'flyers', 'posters'], type: 'Template', free: true },
  { id: '8', title: 'Google Forms', description: 'Create registration forms and surveys for free', url: 'https://docs.google.com/forms/', category: 'Event Planning', subcategory: 'Tools', tags: ['forms', 'registration', 'surveys'], type: 'Tool', free: true },
  { id: '9', title: 'Doodle Scheduling', description: 'Find the best time for group meetings', url: 'https://doodle.com/', category: 'Event Planning', subcategory: 'Scheduling', tags: ['scheduling', 'meetings', 'polls'], type: 'Tool', free: true },
  { id: '10', title: 'When2meet', description: 'Simple group availability scheduling', url: 'https://www.when2meet.com/', category: 'Event Planning', subcategory: 'Scheduling', tags: ['scheduling', 'free', 'simple'], type: 'Tool', free: true },
  { id: '11', title: 'Splash Event Marketing', description: 'Event marketing and management platform', url: 'https://splashthat.com/', category: 'Event Planning', subcategory: 'Marketing', tags: ['events', 'marketing', 'professional'], type: 'Tool', free: false },
  // FUNDRAISING
  { id: '12', title: 'GoFundMe Charity', description: 'Crowdfunding platform for charitable causes', url: 'https://www.gofundme.com/start/charity-fundraising', category: 'Fundraising', subcategory: 'Crowdfunding', tags: ['crowdfunding', 'donations', 'charity'], type: 'Tool', free: true, featured: true },
  { id: '13', title: 'DoSomething.org Grants', description: 'Grants specifically for youth-led initiatives', url: 'https://www.dosomething.org/', category: 'Fundraising', subcategory: 'Grants', tags: ['grants', 'youth', 'social impact'], type: 'Website', free: true },
  { id: '14', title: 'Youth Service America Grants', description: 'Database of grants for youth service projects', url: 'https://ysa.org/grants/', category: 'Fundraising', subcategory: 'Grants', tags: ['grants', 'service', 'youth'], type: 'Website', free: true },
  { id: '15', title: 'Donors Choose', description: 'Funding platform for educational projects', url: 'https://www.donorschoose.org/', category: 'Fundraising', subcategory: 'Education', tags: ['education', 'classroom', 'projects'], type: 'Tool', free: true },
  { id: '16', title: 'Classy Fundraising', description: 'Professional nonprofit fundraising platform', url: 'https://www.classy.org/', category: 'Fundraising', subcategory: 'Platform', tags: ['nonprofit', 'fundraising', 'professional'], type: 'Tool', free: false },
  { id: '17', title: 'Fundraising Ideas - SignUpGenius', description: '100+ fundraising ideas for clubs and groups', url: 'https://www.signupgenius.com/fundraising/fundraising-ideas.cfm', category: 'Fundraising', subcategory: 'Ideas', tags: ['ideas', 'fundraising', 'list'], type: 'Article', free: true },
  // MARKETING & SOCIAL MEDIA
  { id: '18', title: 'Canva - Free Design Tool', description: 'Create stunning graphics, presentations, and more', url: 'https://www.canva.com/', category: 'Marketing', subcategory: 'Design', tags: ['design', 'graphics', 'social media'], type: 'Tool', free: true, featured: true },
  { id: '19', title: 'Buffer - Social Media Scheduler', description: 'Schedule and manage social media posts', url: 'https://buffer.com/', category: 'Marketing', subcategory: 'Social Media', tags: ['social media', 'scheduling', 'analytics'], type: 'Tool', free: true },
  { id: '20', title: 'Mailchimp - Email Marketing', description: 'Free email marketing for up to 500 contacts', url: 'https://mailchimp.com/', category: 'Marketing', subcategory: 'Email', tags: ['email', 'newsletter', 'marketing'], type: 'Tool', free: true },
  { id: '21', title: 'Later - Instagram Scheduler', description: 'Visual social media planner and scheduler', url: 'https://later.com/', category: 'Marketing', subcategory: 'Social Media', tags: ['instagram', 'scheduling', 'visual'], type: 'Tool', free: true },
  { id: '22', title: 'Unsplash - Free Photos', description: 'Beautiful, free images for any project', url: 'https://unsplash.com/', category: 'Marketing', subcategory: 'Images', tags: ['photos', 'free', 'stock images'], type: 'Website', free: true },
  { id: '23', title: 'Pexels - Free Videos & Photos', description: 'Free stock videos and photos', url: 'https://www.pexels.com/', category: 'Marketing', subcategory: 'Media', tags: ['video', 'photos', 'free'], type: 'Website', free: true },
  { id: '24', title: 'Hootsuite Academy', description: 'Free social media marketing courses', url: 'https://education.hootsuite.com/', category: 'Marketing', subcategory: 'Courses', tags: ['social media', 'courses', 'certification'], type: 'Course', free: true },
  // COMMUNICATION & COLLABORATION
  { id: '25', title: 'Slack - Team Communication', description: 'Free team messaging and collaboration', url: 'https://slack.com/', category: 'Communication', subcategory: 'Messaging', tags: ['communication', 'team', 'messaging'], type: 'Tool', free: true, featured: true },
  { id: '26', title: 'Discord - Community Server', description: 'Free voice, video, and text communication', url: 'https://discord.com/', category: 'Communication', subcategory: 'Community', tags: ['voice', 'community', 'gaming'], type: 'Tool', free: true },
  { id: '27', title: 'Microsoft Teams', description: 'Free for education - meetings, chat, and files', url: 'https://www.microsoft.com/en-us/microsoft-teams/group-chat-software', category: 'Communication', subcategory: 'Meetings', tags: ['video', 'meetings', 'microsoft'], type: 'Tool', free: true },
  { id: '28', title: 'Google Workspace for Education', description: 'Free productivity tools for schools', url: 'https://edu.google.com/workspace-for-education/', category: 'Communication', subcategory: 'Productivity', tags: ['google', 'education', 'collaboration'], type: 'Tool', free: true },
  { id: '29', title: 'Notion - All-in-One Workspace', description: 'Notes, docs, and project management', url: 'https://www.notion.so/', category: 'Communication', subcategory: 'Productivity', tags: ['notes', 'wiki', 'project management'], type: 'Tool', free: true },
  { id: '30', title: 'Trello - Project Boards', description: 'Visual project management with boards', url: 'https://trello.com/', category: 'Communication', subcategory: 'Project Management', tags: ['kanban', 'projects', 'tasks'], type: 'Tool', free: true },
  // COMPETITIONS & ACADEMIC
  { id: '31', title: 'TSA Official Website', description: 'Technology Student Association resources and competitions', url: 'https://tsaweb.org/', category: 'Competitions', subcategory: 'TSA', tags: ['tsa', 'technology', 'stem'], type: 'Website', free: true, featured: true },
  { id: '32', title: 'DECA Official', description: 'Business and marketing competition resources', url: 'https://www.deca.org/', category: 'Competitions', subcategory: 'Business', tags: ['deca', 'business', 'marketing'], type: 'Website', free: true },
  { id: '33', title: 'FBLA Official', description: 'Future Business Leaders of America', url: 'https://www.fbla.org/', category: 'Competitions', subcategory: 'Business', tags: ['fbla', 'business', 'leadership'], type: 'Website', free: true },
  { id: '34', title: 'Science Olympiad', description: 'STEM competition resources and events', url: 'https://www.soinc.org/', category: 'Competitions', subcategory: 'Science', tags: ['science', 'olympiad', 'stem'], type: 'Website', free: true },
  { id: '35', title: 'Model UN Resources', description: 'Best Delegate MUN preparation guides', url: 'https://bestdelegate.com/', category: 'Competitions', subcategory: 'Model UN', tags: ['mun', 'debate', 'diplomacy'], type: 'Website', free: true },
  { id: '36', title: 'Debate Resources - NSDA', description: 'National Speech & Debate Association', url: 'https://www.speechanddebate.org/', category: 'Competitions', subcategory: 'Debate', tags: ['debate', 'speech', 'forensics'], type: 'Website', free: true },
  { id: '37', title: 'FIRST Robotics', description: 'Robotics competition programs', url: 'https://www.firstinspires.org/', category: 'Competitions', subcategory: 'Robotics', tags: ['robotics', 'stem', 'engineering'], type: 'Website', free: true },
  { id: '38', title: 'Math Olympiad', description: 'Mathematical Association of America competitions', url: 'https://www.maa.org/math-competitions', category: 'Competitions', subcategory: 'Math', tags: ['math', 'olympiad', 'competition'], type: 'Website', free: true },
  // TEMPLATES & DOCUMENTS
  { id: '39', title: 'Club Constitution Template', description: 'Free editable constitution templates', url: 'https://templates.office.com/', category: 'Templates', subcategory: 'Documents', tags: ['constitution', 'bylaws', 'template'], type: 'Template', free: true },
  { id: '40', title: 'Google Docs Templates', description: 'Free document templates for any purpose', url: 'https://docs.google.com/document/u/0/?tgif=d&ftv=1', category: 'Templates', subcategory: 'Documents', tags: ['documents', 'google', 'templates'], type: 'Template', free: true },
  { id: '41', title: 'Meeting Agenda Templates', description: 'Professional meeting agenda templates', url: 'https://www.smartsheet.com/free-meeting-agenda-templates', category: 'Templates', subcategory: 'Meetings', tags: ['meeting', 'agenda', 'template'], type: 'Template', free: true },
  { id: '42', title: 'Budget Spreadsheet Templates', description: 'Free Excel budget templates', url: 'https://templates.office.com/en-us/budgets', category: 'Templates', subcategory: 'Finance', tags: ['budget', 'finance', 'excel'], type: 'Template', free: true },
  { id: '43', title: 'Presentation Templates', description: 'Google Slides and PowerPoint templates', url: 'https://slidesgo.com/', category: 'Templates', subcategory: 'Presentations', tags: ['slides', 'presentation', 'powerpoint'], type: 'Template', free: true },
  // VOLUNTEER & SERVICE
  { id: '44', title: 'VolunteerMatch', description: 'Find local volunteer opportunities', url: 'https://www.volunteermatch.org/', category: 'Service', subcategory: 'Opportunities', tags: ['volunteer', 'service', 'local'], type: 'Website', free: true, featured: true },
  { id: '45', title: 'Idealist.org', description: 'Nonprofit jobs and volunteer opportunities', url: 'https://www.idealist.org/', category: 'Service', subcategory: 'Opportunities', tags: ['nonprofit', 'jobs', 'volunteer'], type: 'Website', free: true },
  { id: '46', title: 'Points of Light', description: 'Volunteer and civic engagement resources', url: 'https://www.pointsoflight.org/', category: 'Service', subcategory: 'Resources', tags: ['civic', 'engagement', 'service'], type: 'Website', free: true },
  { id: '47', title: 'UN Volunteers', description: 'Online volunteering opportunities globally', url: 'https://www.onlinevolunteering.org/', category: 'Service', subcategory: 'Global', tags: ['un', 'global', 'online'], type: 'Website', free: true },
  { id: '48', title: 'Create the Good (AARP)', description: 'Service project ideas and resources', url: 'https://createthegood.aarp.org/', category: 'Service', subcategory: 'Ideas', tags: ['projects', 'ideas', 'community'], type: 'Website', free: true },
  // SKILLS & LEARNING
  { id: '49', title: 'Khan Academy', description: 'Free courses on any subject', url: 'https://www.khanacademy.org/', category: 'Learning', subcategory: 'General', tags: ['learning', 'free', 'courses'], type: 'Course', free: true, featured: true },
  { id: '50', title: 'Coursera - Free Courses', description: 'University courses from top institutions', url: 'https://www.coursera.org/', category: 'Learning', subcategory: 'University', tags: ['courses', 'university', 'certificate'], type: 'Course', free: true },
  { id: '51', title: 'edX - Free Online Courses', description: 'Courses from Harvard, MIT, and more', url: 'https://www.edx.org/', category: 'Learning', subcategory: 'University', tags: ['harvard', 'mit', 'courses'], type: 'Course', free: true },
  { id: '52', title: 'LinkedIn Learning', description: 'Professional skills courses (free trial)', url: 'https://www.linkedin.com/learning/', category: 'Learning', subcategory: 'Professional', tags: ['linkedin', 'professional', 'skills'], type: 'Course', free: false },
  { id: '53', title: 'Skillshare', description: 'Creative and business courses', url: 'https://www.skillshare.com/', category: 'Learning', subcategory: 'Creative', tags: ['creative', 'design', 'business'], type: 'Course', free: false },
  { id: '54', title: 'Codecademy', description: 'Learn to code for free', url: 'https://www.codecademy.com/', category: 'Learning', subcategory: 'Coding', tags: ['coding', 'programming', 'free'], type: 'Course', free: true },
  { id: '55', title: 'freeCodeCamp', description: 'Free coding bootcamp and certifications', url: 'https://www.freecodecamp.org/', category: 'Learning', subcategory: 'Coding', tags: ['coding', 'bootcamp', 'free'], type: 'Course', free: true },
  // WEBSITES & TECHNOLOGY
  { id: '56', title: 'Wix - Free Website Builder', description: 'Create a free club website', url: 'https://www.wix.com/', category: 'Technology', subcategory: 'Websites', tags: ['website', 'builder', 'free'], type: 'Tool', free: true },
  { id: '57', title: 'Weebly - Simple Websites', description: 'Drag-and-drop website builder', url: 'https://www.weebly.com/', category: 'Technology', subcategory: 'Websites', tags: ['website', 'simple', 'free'], type: 'Tool', free: true },
  { id: '58', title: 'Google Sites', description: 'Free website creation with Google', url: 'https://sites.google.com/', category: 'Technology', subcategory: 'Websites', tags: ['google', 'free', 'simple'], type: 'Tool', free: true },
  { id: '59', title: 'GitHub Pages', description: 'Free hosting for web projects', url: 'https://pages.github.com/', category: 'Technology', subcategory: 'Hosting', tags: ['github', 'hosting', 'free'], type: 'Tool', free: true },
  { id: '60', title: 'Linktree', description: 'One link for all your social media', url: 'https://linktr.ee/', category: 'Technology', subcategory: 'Social', tags: ['link', 'social', 'bio'], type: 'Tool', free: true },
  // COMMUNITY BUILDING
  { id: '61', title: 'Circle - Community Platform', description: 'Build online communities for your club', url: 'https://circle.so/', category: 'Community', subcategory: 'Platform', tags: ['community', 'members', 'forum'], type: 'Tool', free: false },
  { id: '62', title: 'Mighty Networks', description: 'All-in-one community platform', url: 'https://www.mightynetworks.com/', category: 'Community', subcategory: 'Platform', tags: ['community', 'courses', 'membership'], type: 'Tool', free: false },
  { id: '63', title: 'Facebook Groups Guide', description: 'How to create and manage Facebook groups', url: 'https://www.facebook.com/help/1629740080681586', category: 'Community', subcategory: 'Social', tags: ['facebook', 'groups', 'community'], type: 'Article', free: true },
  { id: '64', title: 'Reddit Community Guide', description: 'Create and moderate subreddits', url: 'https://mods.reddithelp.com/', category: 'Community', subcategory: 'Social', tags: ['reddit', 'moderation', 'community'], type: 'Article', free: true },
  // FINANCE & BUDGETING
  { id: '65', title: 'Wave Accounting', description: 'Free accounting software for small orgs', url: 'https://www.waveapps.com/', category: 'Finance', subcategory: 'Accounting', tags: ['accounting', 'free', 'invoicing'], type: 'Tool', free: true },
  { id: '66', title: 'Mint Budget Tracker', description: 'Personal and organizational budgeting', url: 'https://mint.intuit.com/', category: 'Finance', subcategory: 'Budgeting', tags: ['budget', 'tracking', 'free'], type: 'Tool', free: true },
  { id: '67', title: 'PayPal for Nonprofits', description: 'Payment processing for organizations', url: 'https://www.paypal.com/us/webapps/mpp/nonprofit', category: 'Finance', subcategory: 'Payments', tags: ['payments', 'donations', 'nonprofit'], type: 'Tool', free: true },
  { id: '68', title: 'Venmo for Business', description: 'Accept payments for club dues/events', url: 'https://venmo.com/business/', category: 'Finance', subcategory: 'Payments', tags: ['payments', 'venmo', 'mobile'], type: 'Tool', free: true },
  // AWARDS & RECOGNITION
  { id: '69', title: 'Congressional Award', description: 'Congress\'s award for young Americans', url: 'https://www.congressionalaward.org/', category: 'Awards', subcategory: 'National', tags: ['congress', 'service', 'recognition'], type: 'Website', free: true },
  { id: '70', title: "President's Volunteer Service Award", description: 'National recognition for volunteers', url: 'https://www.presidentialserviceawards.gov/', category: 'Awards', subcategory: 'National', tags: ['president', 'volunteer', 'award'], type: 'Website', free: true },
  { id: '71', title: 'Prudential Spirit of Community', description: 'Youth volunteer recognition program', url: 'https://spirit.prudential.com/', category: 'Awards', subcategory: 'Youth', tags: ['prudential', 'youth', 'volunteer'], type: 'Website', free: true },
  { id: '72', title: 'Gloria Barron Prize', description: 'Award for young heroes', url: 'https://barronprize.org/', category: 'Awards', subcategory: 'Youth', tags: ['heroes', 'youth', 'award'], type: 'Website', free: true },
  // MENTAL HEALTH & WELLNESS
  { id: '73', title: 'Active Minds', description: 'Mental health resources for students', url: 'https://www.activeminds.org/', category: 'Wellness', subcategory: 'Mental Health', tags: ['mental health', 'students', 'support'], type: 'Website', free: true },
  { id: '74', title: 'Crisis Text Line', description: 'Text HOME to 741741 for crisis support', url: 'https://www.crisistextline.org/', category: 'Wellness', subcategory: 'Crisis', tags: ['crisis', 'text', 'support'], type: 'Website', free: true },
  { id: '75', title: 'Headspace for Students', description: 'Free meditation app for students', url: 'https://www.headspace.com/students', category: 'Wellness', subcategory: 'Meditation', tags: ['meditation', 'students', 'free'], type: 'Tool', free: true },
  // ADDITIONAL RESOURCES
  { id: '76', title: 'Adobe Express', description: 'Free design and video creation tool', url: 'https://www.adobe.com/express/', category: 'Marketing', subcategory: 'Design', tags: ['design', 'video', 'adobe'], type: 'Tool', free: true },
  { id: '77', title: 'Figma', description: 'Collaborative design tool', url: 'https://www.figma.com/', category: 'Technology', subcategory: 'Design', tags: ['design', 'collaborative', 'ui'], type: 'Tool', free: true },
  { id: '78', title: 'Loom - Video Messaging', description: 'Record and share video messages', url: 'https://www.loom.com/', category: 'Communication', subcategory: 'Video', tags: ['video', 'messaging', 'screen recording'], type: 'Tool', free: true },
  { id: '79', title: 'Calendly', description: 'Easy scheduling for meetings', url: 'https://calendly.com/', category: 'Event Planning', subcategory: 'Scheduling', tags: ['scheduling', 'meetings', 'calendar'], type: 'Tool', free: true },
  { id: '80', title: 'Zoom', description: 'Video conferencing platform', url: 'https://zoom.us/', category: 'Communication', subcategory: 'Meetings', tags: ['video', 'meetings', 'webinar'], type: 'Tool', free: true },
  { id: '81', title: 'Asana', description: 'Project and task management', url: 'https://asana.com/', category: 'Communication', subcategory: 'Project Management', tags: ['projects', 'tasks', 'teams'], type: 'Tool', free: true },
  { id: '82', title: 'Airtable', description: 'Flexible database and spreadsheet', url: 'https://airtable.com/', category: 'Technology', subcategory: 'Database', tags: ['database', 'spreadsheet', 'flexible'], type: 'Tool', free: true },
  { id: '83', title: 'Typeform', description: 'Beautiful forms and surveys', url: 'https://www.typeform.com/', category: 'Event Planning', subcategory: 'Forms', tags: ['forms', 'surveys', 'beautiful'], type: 'Tool', free: true },
  { id: '84', title: 'SurveyMonkey', description: 'Online survey creation', url: 'https://www.surveymonkey.com/', category: 'Event Planning', subcategory: 'Surveys', tags: ['surveys', 'research', 'feedback'], type: 'Tool', free: true },
  { id: '85', title: 'Miro - Online Whiteboard', description: 'Collaborative whiteboard for teams', url: 'https://miro.com/', category: 'Communication', subcategory: 'Collaboration', tags: ['whiteboard', 'brainstorming', 'visual'], type: 'Tool', free: true },
  { id: '86', title: 'Mentimeter', description: 'Interactive presentations and polls', url: 'https://www.mentimeter.com/', category: 'Event Planning', subcategory: 'Presentations', tags: ['polls', 'interactive', 'presentations'], type: 'Tool', free: true },
  { id: '87', title: 'Kahoot!', description: 'Game-based learning and trivia', url: 'https://kahoot.com/', category: 'Learning', subcategory: 'Games', tags: ['games', 'trivia', 'learning'], type: 'Tool', free: true },
  { id: '88', title: 'Quizlet', description: 'Flashcards and study tools', url: 'https://quizlet.com/', category: 'Learning', subcategory: 'Study', tags: ['flashcards', 'study', 'learning'], type: 'Tool', free: true },
  { id: '89', title: 'Grammarly', description: 'Writing assistant and grammar checker', url: 'https://www.grammarly.com/', category: 'Technology', subcategory: 'Writing', tags: ['writing', 'grammar', 'editing'], type: 'Tool', free: true },
  { id: '90', title: 'Hemingway Editor', description: 'Make your writing clear and bold', url: 'https://hemingwayapp.com/', category: 'Technology', subcategory: 'Writing', tags: ['writing', 'clarity', 'editing'], type: 'Tool', free: true },
  { id: '91', title: 'Remove.bg', description: 'Remove image backgrounds instantly', url: 'https://www.remove.bg/', category: 'Marketing', subcategory: 'Images', tags: ['images', 'background', 'editing'], type: 'Tool', free: true },
  { id: '92', title: 'TinyPNG', description: 'Compress images for web', url: 'https://tinypng.com/', category: 'Technology', subcategory: 'Images', tags: ['compression', 'images', 'optimization'], type: 'Tool', free: true },
  { id: '93', title: 'Coolors', description: 'Color palette generator', url: 'https://coolors.co/', category: 'Marketing', subcategory: 'Design', tags: ['colors', 'palette', 'design'], type: 'Tool', free: true },
  { id: '94', title: 'Font Awesome', description: 'Free icons for web projects', url: 'https://fontawesome.com/', category: 'Technology', subcategory: 'Icons', tags: ['icons', 'web', 'free'], type: 'Tool', free: true },
  { id: '95', title: 'Flaticon', description: 'Free vector icons', url: 'https://www.flaticon.com/', category: 'Marketing', subcategory: 'Icons', tags: ['icons', 'vector', 'free'], type: 'Website', free: true },
  { id: '96', title: 'Dribbble', description: 'Design inspiration gallery', url: 'https://dribbble.com/', category: 'Marketing', subcategory: 'Inspiration', tags: ['design', 'inspiration', 'portfolio'], type: 'Community', free: true },
  { id: '97', title: 'Behance', description: 'Creative portfolio platform', url: 'https://www.behance.net/', category: 'Marketing', subcategory: 'Inspiration', tags: ['portfolio', 'creative', 'inspiration'], type: 'Community', free: true },
  { id: '98', title: 'Product Hunt', description: 'Discover new tools and apps', url: 'https://www.producthunt.com/', category: 'Technology', subcategory: 'Discovery', tags: ['tools', 'apps', 'new'], type: 'Community', free: true },
  { id: '99', title: 'Zapier', description: 'Automate workflows between apps', url: 'https://zapier.com/', category: 'Technology', subcategory: 'Automation', tags: ['automation', 'workflows', 'integration'], type: 'Tool', free: true },
  { id: '100', title: 'IFTTT', description: 'Connect your apps and devices', url: 'https://ifttt.com/', category: 'Technology', subcategory: 'Automation', tags: ['automation', 'iot', 'connection'], type: 'Tool', free: true },
];

export const externalResourceCategories = [...new Set(externalResources.map(r => r.category))];
export const externalResourceTypes = ['All', 'Website', 'Tool', 'Template', 'Video', 'Course', 'Article', 'Community'];

// ==========================================
// HUB/ACHIEVEMENTS PAGE DATA
// ==========================================

export const achievementCategories = ['All', 'Leadership', 'Growth', 'Events', 'Community', 'Innovation', 'Competition'];

export const achievementLeaderboard = [
  { rank: 1, name: 'Robotics Club', points: 1250, badges: 18 },
  { rank: 2, name: 'Debate Society', points: 1180, badges: 16 },
  { rank: 3, name: 'Science Olympiad', points: 1050, badges: 15 },
  { rank: 4, name: 'DECA Chapter', points: 980, badges: 14 },
  { rank: 5, name: 'Key Club', points: 920, badges: 13 },
  { rank: 6, name: 'Drama Club', points: 850, badges: 12 },
  { rank: 7, name: 'Math League', points: 780, badges: 11 },
  { rank: 8, name: 'Environmental Club', points: 720, badges: 10 },
  { rank: 9, name: 'Photography Club', points: 680, badges: 9 },
  { rank: 10, name: 'Chess Club', points: 620, badges: 8 },
];

// ==========================================
// HUB/CALENDAR PAGE DATA
// ==========================================

export const calendarMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// ==========================================
// HUB/COLLABORATE PAGE DATA
// ==========================================

export const collaborateTypeFilters = ['All', 'Joint Event', 'Fundraiser', 'Community Service', 'Competition Team', 'Workshop', 'Resource Sharing'];

// ==========================================
// HUB/COMPARE PAGE DATA
// ==========================================

export const comparisonCategories = [
  {
    name: 'Basic Info',
    metrics: [
      { key: 'category', label: 'Category' },
      { key: 'memberCount', label: 'Members' },
      { key: 'meetingSchedule', label: 'Meeting Schedule' }
    ]
  },
  {
    name: 'Commitment',
    metrics: [
      { key: 'timeCommitment', label: 'Time Commitment' },
      { key: 'duesRequired', label: 'Dues Required' },
      { key: 'attendancePolicy', label: 'Attendance Policy' }
    ]
  },
  {
    name: 'Opportunities',
    metrics: [
      { key: 'competitions', label: 'Competitions' },
      { key: 'leadership', label: 'Leadership Roles' },
      { key: 'communityService', label: 'Community Service' }
    ]
  },
  {
    name: 'Culture & Experience',
    metrics: [
      { key: 'beginnerFriendly', label: 'Beginner Friendly' },
      { key: 'socialEvents', label: 'Social Events' },
      { key: 'mentorship', label: 'Mentorship Program' }
    ]
  }
];

// ==========================================
// HUB/COMPETITIONS PAGE DATA
// ==========================================

export const competitionsCategories: ChapterCategory[] = ['Academic', 'Arts', 'Service', 'Cultural', 'STEM', 'Sports', 'Leadership', 'Media', 'Other'];

// ==========================================
// HUB/DISCUSSIONS PAGE DATA
// ==========================================

interface Reply {
  id: string;
  content: string;
  author: { name: string; avatar: string; role: string };
  createdAt: string;
  likes: number;
  isAnswer?: boolean;
}

export interface Discussion {
  id: string;
  title: string;
  content: string;
  author: { name: string; avatar: string; role: string };
  category: string;
  club?: string;
  createdAt: string;
  replies: Reply[];
  views: number;
  likes: number;
  isPinned: boolean;
  isLocked: boolean;
  tags: string[];
}

export const demoDiscussions: Discussion[] = [
  {
    id: '1',
    title: 'Tips for recruiting new members at the beginning of the year?',
    content: 'Our club lost a lot of seniors last year and we need to rebuild. What strategies have worked for you to attract new members during club fair and the first few weeks of school?',
    author: { name: 'Sarah Chen', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80', role: 'President' },
    category: 'Recruiting',
    createdAt: '2026-02-09T10:30:00',
    views: 234,
    likes: 18,
    isPinned: true,
    isLocked: false,
    tags: ['recruiting', 'membership', 'growth'],
    replies: [
      {
        id: '1a',
        content: 'We created an interactive demo at our club fair booth - it really helped draw people in! Also, having current members wear club shirts creates visibility.',
        author: { name: 'Marcus Johnson', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80', role: 'Vice President' },
        createdAt: '2026-02-09T11:45:00',
        likes: 12,
        isAnswer: true
      },
      {
        id: '1b',
        content: 'Social media presence before school starts helps a lot. We post teaser content on Instagram over the summer.',
        author: { name: 'Emily Rodriguez', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80', role: 'Member' },
        createdAt: '2026-02-09T14:20:00',
        likes: 8
      }
    ]
  },
  {
    id: '2',
    title: 'How to handle disagreements between officers?',
    content: 'Two of our officers have very different visions for the club direction and it\'s causing tension. Looking for advice on conflict resolution in leadership teams.',
    author: { name: 'Jordan Lee', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80', role: 'Advisor' },
    category: 'Leadership',
    createdAt: '2026-02-08T16:00:00',
    views: 156,
    likes: 24,
    isPinned: false,
    isLocked: false,
    tags: ['leadership', 'conflict', 'teamwork'],
    replies: [
      {
        id: '2a',
        content: 'Schedule a dedicated meeting to discuss the vision openly. Sometimes writing down everyone\'s ideas helps depersonalize the conflict.',
        author: { name: 'Dr. Patricia Williams', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80', role: 'Mentor' },
        createdAt: '2026-02-08T17:30:00',
        likes: 15,
        isAnswer: true
      }
    ]
  },
  {
    id: '3',
    title: 'Best fundraising ideas that actually work?',
    content: 'We need to raise $500 for our upcoming competition. What fundraisers have been most successful for your clubs? Looking for ideas beyond the usual bake sales.',
    author: { name: 'Alex Martinez', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80', role: 'Treasurer' },
    category: 'Fundraising',
    club: 'Technology Student Association',
    createdAt: '2026-02-08T09:15:00',
    views: 312,
    likes: 31,
    isPinned: false,
    isLocked: false,
    tags: ['fundraising', 'money', 'competition'],
    replies: [
      {
        id: '3a',
        content: 'We did a car wash and made over $800 in one day! The key is picking a high-traffic location and promoting heavily.',
        author: { name: 'Chris Taylor', avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&q=80', role: 'President' },
        createdAt: '2026-02-08T10:00:00',
        likes: 9
      },
      {
        id: '3b',
        content: 'Spirit wear sales work great for us. We design custom club merchandise and sell it to members and their families.',
        author: { name: 'Maya Patel', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80', role: 'Secretary' },
        createdAt: '2026-02-08T12:45:00',
        likes: 14,
        isAnswer: true
      }
    ]
  },
  {
    id: '4',
    title: 'Virtual club meetings - how do you keep them engaging?',
    content: 'We still have some hybrid members who attend virtually. What tools and techniques do you use to keep online participants engaged?',
    author: { name: 'Nina Okafor', avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80', role: 'Vice President' },
    category: 'Meetings',
    createdAt: '2026-02-07T14:30:00',
    views: 178,
    likes: 11,
    isPinned: false,
    isLocked: false,
    tags: ['virtual', 'meetings', 'hybrid', 'engagement'],
    replies: []
  },
  {
    id: '5',
    title: 'TSA Webmaster Competition - Theme Interpretation',
    content: 'How are other teams interpreting the "Community Resource Hub" theme? Looking to exchange ideas without giving away competitive secrets!',
    author: { name: 'David Kim', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80', role: 'Team Lead' },
    category: 'Competitions',
    club: 'Technology Student Association',
    createdAt: '2026-02-06T11:00:00',
    views: 445,
    likes: 52,
    isPinned: true,
    isLocked: false,
    tags: ['tsa', 'webmaster', 'competition', 'theme'],
    replies: [
      {
        id: '5a',
        content: 'We\'re focusing on making it actually useful for real students. The key is interactivity and user-created content.',
        author: { name: 'Sophie Zhang', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80', role: 'Developer' },
        createdAt: '2026-02-06T13:15:00',
        likes: 21
      }
    ]
  }
];

export const discussionCategories = ['All', 'Recruiting', 'Leadership', 'Fundraising', 'Meetings', 'Events', 'Competitions', 'General'];

// ==========================================
// HUB/GOALS PAGE DATA
// ==========================================

export interface Goal {
  id: string;
  title: string;
  description: string;
  category: 'leadership' | 'academic' | 'service' | 'personal' | 'competition';
  targetDate: string;
  progress: number;
  milestones: Milestone[];
  status: 'not-started' | 'in-progress' | 'completed' | 'on-hold';
  createdAt: string;
  reflection?: string;
}

export interface Milestone {
  id: string;
  title: string;
  completed: boolean;
  completedAt?: string;
}

export interface JournalEntry {
  id: string;
  date: string;
  title: string;
  content: string;
  mood: 'great' | 'good' | 'okay' | 'challenging' | 'difficult';
  tags: string[];
  relatedGoal?: string;
}

export const demoGoals: Goal[] = [
  {
    id: '1',
    title: 'Become TSA Chapter President',
    description: 'Run for and win the TSA chapter president election for the 2026-2027 school year',
    category: 'leadership',
    targetDate: '2026-05-15',
    progress: 40,
    status: 'in-progress',
    createdAt: '2026-01-10',
    milestones: [
      { id: '1a', title: 'Attend all chapter meetings this semester', completed: true, completedAt: '2026-02-01' },
      { id: '1b', title: 'Lead a committee or project', completed: true, completedAt: '2026-02-05' },
      { id: '1c', title: 'Create campaign platform', completed: false },
      { id: '1d', title: 'Get endorsements from officers', completed: false },
      { id: '1e', title: 'Win election', completed: false },
    ]
  },
  {
    id: '2',
    title: 'Complete 50 Service Hours',
    description: 'Volunteer in the community to fulfill NHS requirements and give back',
    category: 'service',
    targetDate: '2026-06-01',
    progress: 64,
    status: 'in-progress',
    createdAt: '2026-01-15',
    milestones: [
      { id: '2a', title: 'Food bank volunteer (10 hours)', completed: true, completedAt: '2026-01-20' },
      { id: '2b', title: 'Tutoring program (15 hours)', completed: true, completedAt: '2026-02-01' },
      { id: '2c', title: 'Environmental cleanup (7 hours)', completed: true, completedAt: '2026-02-08' },
      { id: '2d', title: 'Community event volunteer (18 hours)', completed: false },
    ]
  },
  {
    id: '3',
    title: 'Place at State TSA Competition',
    description: 'Win a top 3 placement in Webmaster or another TSA event at state',
    category: 'competition',
    targetDate: '2026-04-20',
    progress: 25,
    status: 'in-progress',
    createdAt: '2026-02-01',
    milestones: [
      { id: '3a', title: 'Form competition team', completed: true, completedAt: '2026-02-03' },
      { id: '3b', title: 'Complete project by deadline', completed: false },
      { id: '3c', title: 'Qualify at regionals', completed: false },
      { id: '3d', title: 'Place top 3 at state', completed: false },
    ]
  }
];

export const demoJournal: JournalEntry[] = [
  {
    id: '1',
    date: '2026-02-09',
    title: 'Productive club meeting today!',
    content: 'Led the discussion on our Webmaster project theme. Everyone loved my ideas for the Community Resource Hub concept. Feeling really confident about our chances at regionals.',
    mood: 'great',
    tags: ['tsa', 'leadership', 'webmaster'],
    relatedGoal: '3'
  },
  {
    id: '2',
    date: '2026-02-07',
    title: 'Finished my tutoring hours',
    content: 'Completed my 15 hours of tutoring for the semester. The kids really improved their math scores and it felt rewarding to help them succeed.',
    mood: 'good',
    tags: ['service', 'tutoring', 'accomplishment'],
    relatedGoal: '2'
  },
  {
    id: '3',
    date: '2026-02-05',
    title: 'Stressed about upcoming deadlines',
    content: 'Feeling overwhelmed with competition prep and schoolwork. Need to better manage my time. Made a new schedule to help.',
    mood: 'challenging',
    tags: ['stress', 'time-management'],
  }
];

// ==========================================
// HUB/IDEAS PAGE DATA
// ==========================================

export const ideasCategories: ChapterCategory[] = ['Academic', 'Arts', 'Service', 'Cultural', 'STEM', 'Sports', 'Leadership', 'Media', 'Other'];

// ==========================================
// HUB/MANAGE-CLUB PAGE DATA
// ==========================================

export const manageClubCategoryOptions = ['STEM', 'Arts', 'Academic', 'Service', 'Cultural', 'Sports', 'Social', 'Business', 'Environmental', 'Other'];
export const manageClubColorOptions = [
  { value: 'bg-blue-600', label: 'Blue' },
  { value: 'bg-green-600', label: 'Green' },
  { value: 'bg-purple-600', label: 'Purple' },
  { value: 'bg-red-600', label: 'Red' },
  { value: 'bg-amber-600', label: 'Amber' },
  { value: 'bg-pink-600', label: 'Pink' },
  { value: 'bg-teal-600', label: 'Teal' },
  { value: 'bg-indigo-600', label: 'Indigo' },
];
export const manageClubLogoOptions = ['🔧', '🎨', '📚', '🎭', '🌍', '💻', '🎵', '⚽', '🔬', '📷', '✍️', '🤝', '🌱', '💼', '🎯'];
export const manageClubSocialPlatforms = ['Instagram', 'Twitter', 'Discord', 'Facebook', 'YouTube', 'TikTok', 'Website', 'Email'];

// ==========================================
// HUB/MENTORS PAGE DATA
// ==========================================

export const mentorExpertiseAreas = [
  'Public speaking',
  'Entrepreneurship',
  'College applications',
  'Leadership development',
  'Programming',
  'Robotics',
  'Tech careers',
  'Community service',
  'Grant writing',
  'Fundraising',
  'Event planning'
];

// ==========================================
// HUB/MY-COLLECTIONS PAGE DATA
// ==========================================

export interface CollectionItem {
  id: string;
  title: string;
  type: 'resource' | 'event' | 'club' | 'link' | 'note';
  url?: string;
  note?: string;
  addedAt: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  items: CollectionItem[];
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
}

export const demoCollections: Collection[] = [
  {
    id: '1',
    name: 'TSA Competition Prep',
    description: 'Resources and links for TSA regionals and state competition',
    icon: '🏆',
    color: 'bg-blue-500',
    isPublic: false,
    createdAt: '2026-01-15',
    updatedAt: '2026-02-08',
    items: [
      { id: '1', title: 'TSA Official Themes', type: 'link', url: 'https://tsaweb.org', addedAt: '2026-01-15' },
      { id: '2', title: 'Webmaster Rubric PDF', type: 'resource', url: '/hub/rubrics/webmaster', addedAt: '2026-01-16' },
      { id: '3', title: 'Previous Winners Gallery', type: 'link', url: 'https://tsaweb.org', addedAt: '2026-01-20' },
      { id: '4', title: 'Team meeting notes', type: 'note', note: 'Discuss theme interpretation on Monday', addedAt: '2026-02-05' },
    ]
  },
  {
    id: '2',
    name: 'Leadership Resources',
    description: 'Books, videos, and articles about effective leadership',
    icon: '📚',
    color: 'bg-purple-500',
    isPublic: true,
    createdAt: '2026-01-20',
    updatedAt: '2026-02-06',
    items: [
      { id: '5', title: 'TED Talk: How Great Leaders Inspire', type: 'link', url: 'https://ted.com', addedAt: '2026-01-20' },
      { id: '6', title: 'Student Council Handbook', type: 'resource', addedAt: '2026-01-22' },
      { id: '7', title: 'Meeting Facilitation Tips', type: 'note', note: 'Use round-robin for equal participation', addedAt: '2026-02-01' },
    ]
  },
  {
    id: '3',
    name: 'Fundraising Ideas',
    description: 'Creative ways to raise money for club activities',
    icon: '💰',
    color: 'bg-green-500',
    isPublic: true,
    createdAt: '2026-02-01',
    updatedAt: '2026-02-07',
    items: [
      { id: '8', title: 'GoFundMe for Clubs', type: 'link', url: 'https://gofundme.com', addedAt: '2026-02-01' },
      { id: '9', title: 'Bake Sale Planning Template', type: 'resource', addedAt: '2026-02-03' },
    ]
  }
];

export const collectionIconOptions = ['📁', '🏆', '📚', '💡', '🎯', '⭐', '💰', '🎨', '🔬', '🌍', '🎵', '💻', '📝', '🤝', '🎓'];
export const collectionColorOptions = [
  { value: 'bg-primary-500', label: 'Navy' },
  { value: 'bg-secondary-500', label: 'Gold' },
  { value: 'bg-accent-500', label: 'Maroon' },
  { value: 'bg-blue-500', label: 'Blue' },
  { value: 'bg-green-500', label: 'Green' },
  { value: 'bg-purple-500', label: 'Purple' },
  { value: 'bg-pink-500', label: 'Pink' },
  { value: 'bg-orange-500', label: 'Orange' },
];

// ==========================================
// HUB/QUIZ PAGE DATA
// ==========================================

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: { [key: string]: number };
  }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What gets you most excited about after-school activities?",
    options: [
      { text: "Building and creating things with my hands", scores: { STEM: 3, Arts: 1 } },
      { text: "Competing and winning against other teams", scores: { Academic: 2, STEM: 2 } },
      { text: "Helping others and making a difference", scores: { Service: 3, Cultural: 1 } },
      { text: "Expressing myself and performing", scores: { Arts: 3, Cultural: 1 } },
      { text: "Learning about different cultures and perspectives", scores: { Cultural: 3, Service: 1 } }
    ]
  },
  {
    id: 2,
    question: "How do you prefer to work?",
    options: [
      { text: "In a small, focused team on technical projects", scores: { STEM: 3, Academic: 1 } },
      { text: "In a large group with lots of social interaction", scores: { Service: 2, Cultural: 2, Arts: 1 } },
      { text: "Independently with occasional collaboration", scores: { Academic: 3, Arts: 1 } },
      { text: "Leading others toward a common goal", scores: { Service: 2, Cultural: 1, Academic: 1 } }
    ]
  },
  {
    id: 3,
    question: "What skill do you most want to develop?",
    options: [
      { text: "Technical and problem-solving skills", scores: { STEM: 3, Academic: 2 } },
      { text: "Public speaking and debate", scores: { Academic: 3, Cultural: 1 } },
      { text: "Creativity and artistic expression", scores: { Arts: 3, Cultural: 1 } },
      { text: "Leadership and organization", scores: { Service: 2, Academic: 1, Cultural: 1 } },
      { text: "Cultural awareness and communication", scores: { Cultural: 3, Service: 1 } }
    ]
  },
  {
    id: 4,
    question: "What type of events interest you most?",
    options: [
      { text: "Hackathons and building competitions", scores: { STEM: 3 } },
      { text: "Academic competitions and tournaments", scores: { Academic: 3 } },
      { text: "Performances, shows, and exhibitions", scores: { Arts: 3 } },
      { text: "Community service projects and fundraisers", scores: { Service: 3 } },
      { text: "Cultural celebrations and awareness events", scores: { Cultural: 3 } }
    ]
  },
  {
    id: 5,
    question: "What career field interests you?",
    options: [
      { text: "Engineering, technology, or science", scores: { STEM: 3, Academic: 1 } },
      { text: "Law, business, or politics", scores: { Academic: 3, Cultural: 1 } },
      { text: "Arts, entertainment, or design", scores: { Arts: 3 } },
      { text: "Healthcare, education, or social work", scores: { Service: 3, Cultural: 1 } },
      { text: "International relations or languages", scores: { Cultural: 3, Academic: 1 } }
    ]
  },
  {
    id: 6,
    question: "How much time can you commit weekly?",
    options: [
      { text: "1-2 hours (light commitment)", scores: { Cultural: 1, Arts: 1, Service: 1 } },
      { text: "3-5 hours (moderate commitment)", scores: { Academic: 2, Service: 2, Arts: 2 } },
      { text: "6-10 hours (significant commitment)", scores: { STEM: 2, Academic: 2 } },
      { text: "10+ hours (intensive commitment)", scores: { STEM: 3, Academic: 3 } }
    ]
  }
];

// ==========================================
// HUB/REQUEST PAGE DATA
// ==========================================

export const requestCategories = [
  'Starter Guides',
  'Templates',
  'Training Materials',
  'Tools & Software',
  'Funding Resources',
  'Competition Prep',
  'Leadership Development',
  'Marketing & Outreach',
  'Other'
];

// ==========================================
// HUB/RUBRICS/WEBMASTER PAGE DATA
// ==========================================

export const rubricCategories = [
  { name: 'Theme (X2)', max: 10 },
  { name: 'Challenge (X3)', max: 10 },
  { name: 'Content (X2)', max: 10 },
  { name: 'Layout & Navigation (X2)', max: 10 },
  { name: 'Graphics & Color Scheme (X2)', max: 10 },
  { name: 'Function & Compatibility (X1)', max: 10 },
  { name: 'Spelling & Grammar (X1)', max: 10 },
];

// ==========================================
// HUB/STORIES PAGE DATA
// ==========================================

export const storiesCategories = ['All', 'Growth', 'Competition', 'Community Impact', 'Innovation', 'Fundraising'];

// ==========================================
// HUB/TUTORIAL PAGE DATA
// ==========================================

export interface TutorialStep {
  id: number;
  title: string;
  description: string;
  content: string[];
  tips: string[];
  image: string;
  action?: { label: string; href: string };
}

export const tutorialSteps: TutorialStep[] = [
  {
    id: 1,
    title: 'Welcome to ClubConnect!',
    description: 'Your complete guide to getting started with the Community Resource Hub',
    content: [
      'ClubConnect is your all-in-one platform for finding, joining, and managing school clubs and organizations.',
      'Whether you\'re looking to join your first club or you\'re an experienced officer, we have tools to help you succeed.',
      'This interactive tutorial will walk you through all the key features.'
    ],
    tips: [
      'You can skip ahead to any section using the progress bar above',
      'All features are available immediately — no account required to explore',
      'Bookmark pages you want to revisit later'
    ],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80'
  },
  {
    id: 2,
    title: 'Finding the Right Club',
    description: 'Discover clubs that match your interests and goals',
    content: [
      'Use the Chapter Directory to browse all available clubs at your school.',
      'Each club has a detailed profile with meeting times, requirements, and officer information.',
      'Not sure which club is right for you? Try our Club Finder Quiz to get personalized recommendations!'
    ],
    tips: [
      'Filter clubs by category (STEM, Arts, Service, etc.)',
      'Save clubs to your favorites for easy access',
      'Compare up to 4 clubs side-by-side using the Compare tool'
    ],
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    action: { label: 'Take the Quiz', href: '/hub/quiz' }
  },
  {
    id: 3,
    title: 'Joining a Club',
    description: 'How to become a member and get involved',
    content: [
      'Found a club you like? Visit their profile page and look for the "Join" or "Express Interest" button.',
      'Some clubs have open membership, while others may have requirements like tryouts or applications.',
      'Once you join, you\'ll get access to member-only resources, event RSVPs, and announcements.'
    ],
    tips: [
      'Attend a meeting before officially joining to get a feel for the club',
      'Talk to current members about their experience',
      'Check the club\'s social media for recent activities'
    ],
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80',
    action: { label: 'Browse Directory', href: '/directory' }
  },
  {
    id: 4,
    title: 'Your Personal Dashboard',
    description: 'Track your clubs, events, and achievements',
    content: [
      'Your Dashboard is your personal command center for all things ClubConnect.',
      'See your joined clubs, upcoming events, saved resources, and earned achievements at a glance.',
      'Customize your profile, set notification preferences, and track your involvement over time.'
    ],
    tips: [
      'Check your dashboard weekly to stay updated',
      'Use the saved items feature to build your resource library',
      'Update your interests to get better recommendations'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    action: { label: 'View Dashboard', href: '/dashboard' }
  },
  {
    id: 5,
    title: 'Using the Resource Hub',
    description: 'Access guides, tools, and external resources',
    content: [
      'The Resource Hub contains everything you need to run a successful club.',
      'Browse starter guides for topics like recruiting, fundraising, and event planning.',
      'Access our curated External Resources library with 100+ links to useful tools and websites.'
    ],
    tips: [
      'Use the search feature to find specific topics',
      'Create Collections to organize resources by project or goal',
      'Request new resources if you can\'t find what you need'
    ],
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
    action: { label: 'Explore Resources', href: '/hub/external' }
  },
  {
    id: 6,
    title: 'Setting and Tracking Goals',
    description: 'Plan your leadership journey with goal tracking',
    content: [
      'Use the Goal Tracker to set meaningful objectives for your club involvement.',
      'Break down big goals into milestones and track your progress over time.',
      'Keep a journal to reflect on your experiences and growth.'
    ],
    tips: [
      'Set SMART goals: Specific, Measurable, Achievable, Relevant, Time-bound',
      'Celebrate completing milestones — every step counts!',
      'Review and update your goals monthly'
    ],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
    action: { label: 'Start Goal Tracking', href: '/hub/goals' }
  },
  {
    id: 7,
    title: 'For Club Officers',
    description: 'Managing your club with powerful tools',
    content: [
      'As an officer, you have access to the Club Manager dashboard.',
      'Create and customize your club\'s profile page with branding, descriptions, and social links.',
      'Manage officers, schedule events, and post announcements to keep members informed.'
    ],
    tips: [
      'Keep your club profile updated regularly',
      'Use announcements for important updates',
      'Preview your public page before publishing changes'
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    action: { label: 'Open Club Manager', href: '/hub/manage-club' }
  },
  {
    id: 8,
    title: 'Starting a New Club',
    description: 'Turn your idea into reality',
    content: [
      'Have an idea for a new club? Use the Propose a Chapter feature to submit your proposal.',
      'Browse the Club Ideas page for inspiration and see what other students have suggested.',
      'Connect with mentors who can guide you through the process.'
    ],
    tips: [
      'Research if a similar club already exists',
      'Find a faculty advisor before submitting',
      'Recruit founding members to show interest'
    ],
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
    action: { label: 'Propose a Club', href: '/propose' }
  },
  {
    id: 9,
    title: 'You\'re All Set!',
    description: 'Start exploring and get involved',
    content: [
      'Congratulations! You now know how to use all the major features of ClubConnect.',
      'Remember, the best way to learn is by doing — so start exploring!',
      'If you have questions, check our FAQ or reach out through the Contact page.'
    ],
    tips: [
      'Start with one or two clubs that really interest you',
      'Attend events to meet other students',
      'Consider running for a leadership position'
    ],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80'
  }
];
