export interface Chapter {
  id: string;
  name: string;
  description: string;
  category: ChapterCategory;
  meetingFrequency: MeetingFrequency;
  membershipStatus: MembershipStatus;
  gradeLevel: GradeLevel;
  meetingTime: MeetingTime;
  advisor: Advisor;
  officers: Officer[];
  meetingSchedule: string;
  meetingLocation: string;
  membershipRequirements: string;
  dues: string;
  socialLinks: SocialLinks;
  achievements: string[];
  photoGallery: string[];
  memberCount: number;
  foundedYear: number;
  isActive: boolean;
}

export type ChapterCategory = 
  | 'Academic'
  | 'Arts'
  | 'Service'
  | 'Cultural'
  | 'STEM'
  | 'Sports'
  | 'Leadership'
  | 'Media'
  | 'Other';

export type MeetingFrequency = 
  | 'Daily'
  | 'Weekly'
  | 'Bi-weekly'
  | 'Monthly';

export type MembershipStatus = 
  | 'Open Enrollment'
  | 'Tryout Required'
  | 'Application Required';

export type GradeLevel = 
  | '9th Only'
  | '10th-12th'
  | 'All Grades';

export type MeetingTime = 
  | 'Before School'
  | 'Lunch'
  | 'After School'
  | 'Weekends';

export interface Advisor {
  name: string;
  email: string;
  department: string;
  phone?: string;
}

export interface Officer {
  name: string;
  position: string;
  email: string;
  grade: number;
  photo?: string;
}

export interface SocialLinks {
  website?: string;
  instagram?: string;
  twitter?: string;
  discord?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  chapterId: string;
  chapterName: string;
  category: ChapterCategory;
  isPublic: boolean;
  requiresRSVP: boolean;
  maxAttendees?: number;
  currentAttendees: number;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  fileType: string;
  downloadUrl: string;
  dateAdded: string;
}

export type ResourceCategory = 
  | 'Templates'
  | 'Training Materials'
  | 'Forms'
  | 'Guides'
  | 'Handbooks';

export interface Spotlight {
  id: string;
  chapterId: string;
  chapter: Chapter;
  title: string;
  content: string;
  highlights: string[];
  testimonials: Testimonial[];
  featuredImages: string[];
  datePublished: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface ChapterProposal {
  id: string;
  chapterName: string;
  missionStatement: string;
  proposedAdvisor: string;
  justification: string;
  constitutionDraft: string;
  firstYearPlan: string;
  budgetRequirements: string;
  meetingSpaceNeeds: string;
  submittedBy: string;
  submittedDate: string;
  status: ProposalStatus;
}

export type ProposalStatus = 
  | 'Submitted'
  | 'Under Review'
  | 'Approved'
  | 'Denied'
  | 'Needs Revision';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  grade?: number;
  chapters: string[];
}

export type UserRole = 
  | 'Student'
  | 'Officer'
  | 'Advisor'
  | 'Admin';

export interface Stats {
  activeChapters: number;
  totalMembers: number;
  upcomingEvents: number;
  newMembersThisMonth: number;
}
