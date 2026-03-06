// Centralized example/demo data moved from page components and UI files.
// Organized by source page for clarity.

import { Chapter, ChapterCategory } from '@/lib/types';

// ==========================================
// ACHIEVEMENTS PAGE DATA
// ==========================================

export const achievementCategories = ['All', 'Leadership', 'Growth', 'Events', 'Community', 'Innovation', 'Competition'];
export const tierOrder: Record<string, number> = { 'Legendary': 0, 'Epic': 1, 'Rare': 2, 'Uncommon': 3, 'Common': 4 };

export const tierColors: Record<string, string> = {
  'Legendary': 'from-amber-400 to-orange-500 border-amber-400',
  'Epic': 'from-purple-400 to-indigo-500 border-purple-400',
  'Rare': 'from-blue-400 to-cyan-500 border-blue-400',
  'Uncommon': 'from-green-300 to-teal-400 border-green-300',
  'Common': 'from-neutral-300 to-neutral-400 border-neutral-300'
};

export const tierBg: Record<string, string> = {
  'Legendary': 'bg-gradient-to-br from-amber-50 to-orange-50',
  'Epic': 'bg-gradient-to-br from-purple-50 to-indigo-50',
  'Rare': 'bg-gradient-to-br from-blue-50 to-cyan-50',
  'Uncommon': 'bg-gradient-to-br from-green-50 to-teal-50',
  'Common': 'bg-neutral-50'
};

export const achievementUserProgress = {
  unlockedAchievements: ['ach-1', 'ach-3', 'ach-5', 'ach-9'],
  totalPoints: 450,
  rank: 12,
  streak: 5
};

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
// CALENDAR PAGE DATA
// ==========================================

export const eventTypeColors: Record<string, string> = {
  'Meeting': 'bg-blue-100 text-blue-700 border-blue-300',
  'Competition': 'bg-red-100 text-red-700 border-red-300',
  'Deadline': 'bg-amber-100 text-amber-700 border-amber-300',
  'Workshop': 'bg-purple-100 text-purple-700 border-purple-300',
  'Event': 'bg-green-100 text-green-700 border-green-300'
};

export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// ==========================================
// MANAGE CLUB PAGE DATA
// ==========================================

interface ClubDraft {
  id: string;
  name: string;
  category: string;
  description: string;
  mission: string;
  meetingSchedule: string;
  meetingLocation: string;
  advisorName: string;
  advisorEmail: string;
  officers: { id: string; name: string; role: string; email: string; bio: string }[];
  socialLinks: { platform: string; url: string }[];
  requirements: string[];
  benefits: string[];
  coverImage: string;
  logo: string;
  color: string;
  status: 'draft' | 'submitted' | 'approved' | 'active';
  createdAt: string;
  lastUpdated: string;
}

interface ManageClubEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: 'meeting' | 'event' | 'competition' | 'social';
}

interface ManageClubAnnouncement {
  id: string;
  title: string;
  content: string;
  date: string;
  pinned: boolean;
}

export const manageClubDemo: ClubDraft = {
  id: '1',
  name: 'Technology Student Association',
  category: 'STEM',
  description: 'A national organization dedicated to preparing students for careers in technology, innovation, design, and engineering.',
  mission: 'To empower students through STEM competitions, leadership opportunities, and community service.',
  meetingSchedule: 'Every Tuesday, 3:30 PM - 4:30 PM',
  meetingLocation: 'Room 204, Technology Wing',
  advisorName: 'Ms. Sarah Johnson',
  advisorEmail: 's.johnson@school.edu',
  officers: [
    { id: '1', name: 'Alex Martinez', role: 'President', email: 'alex.m@school.edu', bio: 'Junior passionate about robotics and web development' },
    { id: '2', name: 'Jordan Lee', role: 'Vice President', email: 'jordan.l@school.edu', bio: 'Senior focusing on cybersecurity and networking' },
  ],
  socialLinks: [
    { platform: 'Instagram', url: 'https://instagram.com/schooltsa' },
    { platform: 'Discord', url: 'https://discord.gg/schooltsa' },
  ],
  requirements: ['Maintain good academic standing', 'Pay annual dues ($15)', 'Attend at least 2 meetings per month'],
  benefits: ['Compete at regional/state/national level', 'Develop technical skills', 'Network with industry professionals', 'Earn service hours'],
  coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80',
  logo: '🔧',
  color: 'bg-blue-600',
  status: 'active',
  createdAt: '2025-08-15',
  lastUpdated: '2026-02-08'
};

export const manageClubDemoEvents: ManageClubEvent[] = [
  { id: '1', title: 'Weekly Chapter Meeting', date: '2026-02-11', time: '3:30 PM', location: 'Room 204', description: 'Regular meeting to discuss upcoming competitions', type: 'meeting' },
  { id: '2', title: 'Regional Conference', date: '2026-02-25', time: '8:00 AM', location: 'Convention Center', description: 'TSA Regional Competition', type: 'competition' },
];

export const manageClubDemoAnnouncements: ManageClubAnnouncement[] = [
  { id: '1', title: 'Webmaster Project Deadline', content: 'All Webmaster teams must submit their projects by February 20th.', date: '2026-02-07', pinned: true },
  { id: '2', title: 'Competition Registration Open', content: 'Sign up for individual events for regionals!', date: '2026-02-05', pinned: false },
];

export const clubCategoryOptions = ['STEM', 'Arts', 'Academic', 'Service', 'Cultural', 'Sports', 'Social', 'Business', 'Environmental', 'Other'];
export const clubColorOptions = [
  { value: 'bg-blue-600', label: 'Blue' },
  { value: 'bg-green-600', label: 'Green' },
  { value: 'bg-purple-600', label: 'Purple' },
  { value: 'bg-red-600', label: 'Red' },
  { value: 'bg-amber-600', label: 'Amber' },
  { value: 'bg-pink-600', label: 'Pink' },
  { value: 'bg-teal-600', label: 'Teal' },
  { value: 'bg-indigo-600', label: 'Indigo' },
];
export const clubLogoOptions = ['🔧', '🎨', '📚', '🎭', '🌍', '💻', '🎵', '⚽', '🔬', '📷', '✍️', '🤝', '🌱', '💼', '🎯'];
export const socialPlatforms = ['Instagram', 'Twitter', 'Discord', 'Facebook', 'YouTube', 'TikTok', 'Website', 'Email'];

// ==========================================
// COLLABORATE PAGE DATA
// ==========================================

export const collaborateTypeFilters = ['All', 'Joint Event', 'Fundraiser', 'Community Service', 'Competition Team', 'Workshop', 'Resource Sharing'];
export const collaborateStatusColors: Record<string, string> = {
  'Open': 'bg-green-500',
  'In Progress': 'bg-blue-500',
  'Completed': 'bg-neutral-500',
  'Cancelled': 'bg-red-500'
};

// ==========================================
// DISCUSSIONS PAGE DATA
// ==========================================

interface Discussion {
  id: string;
  title: string;
  content: string;
  author: { name: string; avatar: string; role: string };
  category: string;
  club?: string;
  createdAt: string;
  replies: DiscussionReply[];
  views: number;
  likes: number;
  isPinned: boolean;
  isLocked: boolean;
  tags: string[];
}

interface DiscussionReply {
  id: string;
  content: string;
  author: { name: string; avatar: string; role: string };
  createdAt: string;
  likes: number;
  isAnswer?: boolean;
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
// COMPARE PAGE DATA
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
      { key: 'timeCommitment', label: 'Time Commitment', compute: () => 'Moderate' },
      { key: 'duesRequired', label: 'Dues Required', compute: () => 'Varies' },
      { key: 'attendancePolicy', label: 'Attendance Policy', compute: () => 'Flexible' }
    ]
  },
  {
    name: 'Opportunities',
    metrics: [
      { key: 'competitions', label: 'Competitions', compute: (club: Chapter) => club.category === 'STEM' || club.category === 'Academic' ? 'Yes' : 'Limited' },
      { key: 'leadership', label: 'Leadership Roles', compute: () => 'Available' },
      { key: 'communityService', label: 'Community Service', compute: (club: Chapter) => club.category === 'Service' ? 'Primary Focus' : 'Occasional' }
    ]
  },
  {
    name: 'Culture & Experience',
    metrics: [
      { key: 'beginnerFriendly', label: 'Beginner Friendly', compute: () => 'Yes' },
      { key: 'socialEvents', label: 'Social Events', compute: () => 'Regular' },
      { key: 'mentorship', label: 'Mentorship Program', compute: () => 'Available' }
    ]
  }
];

// ==========================================
// MY COLLECTIONS PAGE DATA
// ==========================================

interface Collection {
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

interface CollectionItem {
  id: string;
  title: string;
  type: 'resource' | 'event' | 'club' | 'link' | 'note';
  url?: string;
  note?: string;
  addedAt: string;
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
// MENTORS PAGE DATA
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

export const mentorTypeColors: Record<string, string> = {
  'Alumni': 'bg-purple-100 text-purple-700',
  'Current Officer': 'bg-blue-100 text-blue-700',
  'Advisor': 'bg-green-100 text-green-700',
  'Community Partner': 'bg-amber-100 text-amber-700'
};

export const mentorAvailabilityColors: Record<string, string> = {
  'Available': 'bg-green-500',
  'Limited': 'bg-yellow-500',
  'Full': 'bg-red-500'
};

// ==========================================
// HEALTH PAGE DATA
// ==========================================

export const healthBenchmarkValues: Record<string, number> = {
  memberRetention: 75,
  eventAttendance: 70,
  memberSatisfaction: 7.5,
  leadershipDevelopment: 60,
  communityImpact: 100,
  financialHealth: 80,
  growthRate: 10,
  engagementScore: 75
};

export const healthMetricInfo: Record<string, { label: string; icon: string; unit: string; description: string }> = {
  memberRetention: { label: 'Member Retention', icon: '👥', unit: '%', description: 'Percentage of members who continue year-over-year' },
  eventAttendance: { label: 'Event Attendance', icon: '📅', unit: '%', description: 'Average attendance rate at events' },
  memberSatisfaction: { label: 'Member Satisfaction', icon: '😊', unit: '/10', description: 'Average satisfaction score from surveys' },
  leadershipDevelopment: { label: 'Leadership Dev', icon: '🌟', unit: '%', description: 'Members taking on leadership roles' },
  communityImpact: { label: 'Community Impact', icon: '❤️', unit: 'hrs', description: 'Volunteer hours contributed' },
  financialHealth: { label: 'Financial Health', icon: '💰', unit: '%', description: 'Budget utilization and reserves' },
  growthRate: { label: 'Growth Rate', icon: '📈', unit: '%', description: 'Year-over-year membership growth' },
  engagementScore: { label: 'Engagement', icon: '🔥', unit: '/100', description: 'Overall engagement composite score' }
};

// ==========================================
// STORIES PAGE DATA
// ==========================================

export const storyCategories = ['All', 'Growth', 'Competition', 'Community Impact', 'Innovation', 'Fundraising'];

// ==========================================
// RUBRICS WEBMASTER PAGE DATA
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
// REQUEST PAGE DATA
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

export const requestPriorityColors: Record<string, string> = {
  'Low': 'bg-blue-100 text-blue-700',
  'Medium': 'bg-yellow-100 text-yellow-700',
  'High': 'bg-orange-100 text-orange-700',
  'Critical': 'bg-red-100 text-red-700'
};

export const requestStatusColors: Record<string, string> = {
  'Submitted': 'bg-neutral-100 text-neutral-600',
  'Under Review': 'bg-blue-100 text-blue-600',
  'In Progress': 'bg-purple-100 text-purple-600',
  'Completed': 'bg-green-100 text-green-600',
  'Declined': 'bg-red-100 text-red-600'
};

// ==========================================
// QUIZ PAGE DATA
// ==========================================

interface QuizQuestion {
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
  },
  {
    id: 7,
    question: "What motivates you most?",
    options: [
      { text: "Solving complex problems and innovating", scores: { STEM: 3, Academic: 1 } },
      { text: "Recognition and achievement", scores: { Academic: 3, STEM: 1 } },
      { text: "Creative expression and self-discovery", scores: { Arts: 3, Cultural: 1 } },
      { text: "Making an impact on my community", scores: { Service: 3 } },
      { text: "Connecting with diverse people", scores: { Cultural: 3, Service: 1 } }
    ]
  }
];

// ==========================================
// IDEAS PAGE DATA
// ==========================================

export const ideaCategories: ChapterCategory[] = ['Academic', 'Arts', 'Service', 'Cultural', 'STEM', 'Sports', 'Leadership', 'Media', 'Other'];

export const ideaInterestColors: Record<string, string> = {
  'Low': 'bg-neutral-100 text-neutral-600',
  'Medium': 'bg-blue-100 text-blue-700',
  'High': 'bg-green-100 text-green-700',
  'Very High': 'bg-purple-100 text-purple-700'
};

export const ideaCostColors: Record<string, string> = {
  'Free': 'text-green-600',
  'Low ($0-50)': 'text-blue-600',
  'Medium ($50-200)': 'text-yellow-600',
  'High ($200+)': 'text-red-600'
};

// ==========================================
// INITIATION STAGE PAGE DATA
// ==========================================

export const initiationStageDetails = [
  {
    id: 'ideation',
    title: 'Ideation & Planning',
    description: 'Brainstorm club ideas and validate student interest.',
    tools: [
      { name: 'Club Ideas Board', href: '/hub/ideas' },
      { name: 'Club Finder Quiz', href: '/hub/quiz' },
      { name: 'External Resources Library', href: '/hub/external' },
    ],
  },
  {
    id: 'proposal',
    title: 'Proposal & Approval',
    description: 'Prepare and submit the official proposal to start a club.',
    tools: [
      { name: 'Propose New Club', href: '/propose' },
      { name: 'Officer Guides', href: '/hub/guides/guide-2' },
      { name: 'Request Resources', href: '/hub/request' },
    ],
  },
  {
    id: 'setup',
    title: 'Setup & Structure',
    description: 'Create constitution, officer roles, and meeting plans.',
    tools: [
      { name: 'Starter Guides', href: '/hub' },
      { name: 'Meeting Agenda Templates', href: '/hub/guides/guide-4' },
      { name: 'Club Health Check', href: '/hub/health' },
    ],
  },
  {
    id: 'recruitment',
    title: 'Recruitment & Launch',
    description: 'Run your first recruitment drives and launch events.',
    tools: [
      { name: 'Event Calendar', href: '/hub/calendar' },
      { name: 'Fundraising Ideas', href: '/funding' },
      { name: 'Social Media Guide', href: '/hub/external' },
    ],
  },
  {
    id: 'operations',
    title: 'Operations & Management',
    description: 'Manage members, announcements, and recurring activities.',
    tools: [
      { name: 'Club Manager', href: '/hub/manage-club' },
      { name: 'Member Collections', href: '/hub/my-collections' },
      { name: 'Mentors & Advisors', href: '/hub/mentors' },
    ],
  },
  {
    id: 'growth',
    title: 'Growth & Competitions',
    description: 'Scale membership, track competitions, and celebrate wins.',
    tools: [
      { name: 'Competitions', href: '/hub/competitions' },
      { name: 'Club Comparison', href: '/hub/compare' },
      { name: 'Spotlight & Stories', href: '/hub/stories' },
    ],
  },
];

// ==========================================
// PROFILE PAGE DATA
// ==========================================

interface ProfileBadge {
  id: string;
  name: string;
  icon: string;
  description: string;
  earnedAt: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface ProfileClubMembership {
  id: string;
  name: string;
  role: string;
  joinedAt: string;
  contributions: number;
  logo: string;
}

interface ProfileActivity {
  id: string;
  type: 'event' | 'achievement' | 'club' | 'resource' | 'goal';
  title: string;
  description: string;
  timestamp: string;
  icon: string;
}

export const profileDemoBadges: ProfileBadge[] = [
  { id: '1', name: 'First Steps', icon: '👣', description: 'Joined ClubConnect', earnedAt: '2025-09-01', rarity: 'common' },
  { id: '2', name: 'Social Butterfly', icon: '🦋', description: 'Joined 5+ clubs', earnedAt: '2025-10-15', rarity: 'rare' },
  { id: '3', name: 'Leader Rising', icon: '⭐', description: 'Became a club officer', earnedAt: '2025-11-01', rarity: 'epic' },
  { id: '4', name: 'Event Master', icon: '🎪', description: 'Attended 10+ events', earnedAt: '2025-12-10', rarity: 'rare' },
  { id: '5', name: 'Goal Getter', icon: '🎯', description: 'Completed 5 goals', earnedAt: '2026-01-05', rarity: 'rare' },
  { id: '6', name: 'Helping Hand', icon: '🤝', description: '10+ volunteer hours', earnedAt: '2026-01-20', rarity: 'epic' },
  { id: '7', name: 'Competition Ready', icon: '🏆', description: 'Competed in TSA', earnedAt: '2026-02-01', rarity: 'legendary' }
];

export const profileDemoClubs: ProfileClubMembership[] = [
  { id: '1', name: 'Technology Student Association', role: 'President', joinedAt: '2024-09-01', contributions: 47, logo: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&q=80' },
  { id: '2', name: 'Debate Club', role: 'Vice President', joinedAt: '2024-09-15', contributions: 32, logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80' },
  { id: '3', name: 'National Honor Society', role: 'Member', joinedAt: '2025-01-10', contributions: 18, logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=100&q=80' },
  { id: '4', name: 'Environmental Club', role: 'Secretary', joinedAt: '2025-09-01', contributions: 12, logo: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=100&q=80' }
];

export const profileDemoActivities: ProfileActivity[] = [
  { id: '1', type: 'achievement', title: 'Earned Competition Ready badge', description: 'Competed in TSA State Competition', timestamp: '2026-02-01T10:00:00', icon: '🏆' },
  { id: '2', type: 'event', title: 'Attended TSA State Conference', description: 'Represented school at state level', timestamp: '2026-02-01T08:00:00', icon: '📅' },
  { id: '3', type: 'goal', title: 'Completed goal: Finish Webmaster project', description: 'Major milestone achieved', timestamp: '2026-01-28T15:30:00', icon: '🎯' },
  { id: '4', type: 'club', title: 'Posted announcement in TSA', description: 'Competition reminder for all members', timestamp: '2026-01-25T12:00:00', icon: '📢' },
  { id: '5', type: 'resource', title: 'Saved 3 new resources', description: 'Design tools added to collection', timestamp: '2026-01-20T16:45:00', icon: '📚' }
];

export const profileRarityColors: Record<string, string> = {
  common: 'bg-neutral-100 border-neutral-300 text-neutral-600',
  rare: 'bg-blue-100 border-blue-400 text-blue-700',
  epic: 'bg-purple-100 border-purple-400 text-purple-700',
  legendary: 'bg-amber-100 border-amber-400 text-amber-700'
};

// ==========================================
// GOALS PAGE DATA
// ==========================================

interface GoalData {
  id: string;
  title: string;
  description: string;
  category: 'leadership' | 'academic' | 'service' | 'personal' | 'competition';
  targetDate: string;
  progress: number;
  milestones: GoalMilestone[];
  status: 'not-started' | 'in-progress' | 'completed' | 'on-hold';
  createdAt: string;
  reflection?: string;
}

interface GoalMilestone {
  id: string;
  title: string;
  completed: boolean;
  completedAt?: string;
}

interface GoalJournalEntry {
  id: string;
  date: string;
  title: string;
  content: string;
  mood: 'great' | 'good' | 'okay' | 'challenging' | 'difficult';
  tags: string[];
  relatedGoal?: string;
}

export const demoGoals: GoalData[] = [
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

export const demoJournal: GoalJournalEntry[] = [
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

export const goalCategoryColors: Record<string, string> = {
  'leadership': 'bg-purple-500',
  'academic': 'bg-blue-500',
  'service': 'bg-green-500',
  'personal': 'bg-pink-500',
  'competition': 'bg-amber-500'
};

export const goalCategoryIcons: Record<string, string> = {
  'leadership': '👑',
  'academic': '📚',
  'service': '🤝',
  'personal': '🌟',
  'competition': '🏆'
};

export const goalMoodEmojis: Record<string, string> = {
  'great': '😄',
  'good': '🙂',
  'okay': '😐',
  'challenging': '😓',
  'difficult': '😔'
};

// ==========================================
// HOME PAGE DATA
// ==========================================

export const featuredClubImages = [
  'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80',
  'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
];

// ==========================================
// REFERENCES PAGE DATA
// ==========================================

export const referenceImageLinks = [
  {
    url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80',
    description: 'Conference event hero image',
    page: 'Events'
  },
  {
    url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1920&q=80',
    description: 'Students celebration hero image',
    page: 'Home, Alumni'
  },
  {
    url: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1920&q=80',
    description: 'Group of students image',
    page: 'Home, Directory'
  },
  {
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80',
    description: 'Student with laptop image',
    page: 'Home'
  },
  {
    url: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&q=80',
    description: 'Team working together image',
    page: 'Home'
  },
  {
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    description: 'Portrait headshot image',
    page: 'Home'
  },
  {
    url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    description: 'Students collaborating image',
    page: 'Home, Officer'
  },
  {
    url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80',
    description: 'Student discussion group image',
    page: 'Home, Student'
  },
  {
    url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1920&q=80',
    description: 'Students in classroom image',
    page: 'Directory Detail, Spotlight'
  },
  {
    url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80',
    description: 'Library books hero image',
    page: 'Resources'
  },
  {
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80',
    description: 'Team meeting hero image',
    page: 'Propose'
  },
  {
    url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80',
    description: 'Campus building hero image',
    page: 'Login'
  },
  {
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
    description: 'Office workspace hero image',
    page: 'Admin'
  },
  {
    url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80',
    description: 'Financial documents hero image',
    page: 'Funding'
  },
  {
    url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80',
    description: 'Business meeting hero image',
    page: 'Announcements'
  },
];

// ==========================================
// MY SPACE PAGE DATA
// ==========================================

export const mySpaceUser = {
  name: 'Alex Johnson',
  grade: '11th Grade',
  clubs: ['TSA', 'Robotics Club', 'NHS'],
  role: 'TSA Chapter President',
  joinDate: 'August 2023',
};

// ==========================================
// CLUB BUILDER COMPONENT DATA
// ==========================================

export const clubBuilderCategories = ['Academic', 'Arts', 'Service', 'Cultural', 'STEM', 'Sports', 'Leadership', 'Media', 'Other'];
export const clubBuilderEmojis = ['🎯', '💡', '🚀', '🎨', '🎵', '🤝', '📚', '🏆', '💻', '🔬', '🎮', '⚙️'];

// ==========================================
// HEADER COMPONENT DATA
// ==========================================

export const mainNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/explore', label: 'Explore' },
  { href: '/my-space', label: 'My Space' },
  { href: '/community', label: 'Community' },
  { href: '/meetings', label: 'Meetings' },
];

export const headerInitiationStages = [
  { id: 'ideation', label: 'Ideation & Planning' },
  { id: 'proposal', label: 'Proposal & Approval' },
  { id: 'setup', label: 'Setup & Structure' },
  { id: 'recruitment', label: 'Recruitment & Launch' },
  { id: 'operations', label: 'Operations & Management' },
  { id: 'growth', label: 'Growth & Competitions' },
];
