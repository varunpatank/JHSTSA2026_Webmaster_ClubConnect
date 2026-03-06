-- ============================================================
-- ClubConnect Supabase Seed Data
-- Populated from lib/data.ts, exampleData.ts, hubData.ts, pageData.ts
-- Generated: March 5, 2026
-- ============================================================

BEGIN;

-- ======================== LOCATIONS ========================

INSERT INTO locations (id, building, room, lat, lng) VALUES
('550e8400-e29b-41d4-a716-446655440001', 'Main Building', 'Room 204', 47.7511, -122.2015),
('550e8400-e29b-41d4-a716-446655440002', 'Science Wing', 'Lab 101', 47.7512, -122.2016),
('550e8400-e29b-41d4-a716-446655440003', 'Arts Building', 'Theater', 47.7513, -122.2017),
('550e8400-e29b-41d4-a716-446655440004', 'Technology Wing', 'Room 305', 47.7514, -122.2018),
('550e8400-e29b-41d4-a716-446655440005', 'Gymnasium', 'Main Court', 47.7515, -122.2019),
('550e8400-e29b-41d4-a716-446655440006', 'Library', 'Meeting Room A', 47.7516, -122.2020),
('550e8400-e29b-41d4-a716-446655440007', 'Student Center', 'Room 150', 47.7517, -122.2021);

-- ======================== TAGS ========================

INSERT INTO tags (id, name) VALUES
('650e8400-e29b-41d4-a716-446655440001', 'Competition'),
('650e8400-e29b-41d4-a716-446655440002', 'Leadership'),
('650e8400-e29b-41d4-a716-446655440003', 'Community Service'),
('650e8400-e29b-41d4-a716-446655440004', 'Technology'),
('650e8400-e29b-41d4-a716-446655440005', 'Arts'),
('650e8400-e29b-41d4-a716-446655440006', 'STEM'),
('650e8400-e29b-41d4-a716-446655440007', 'Business'),
('650e8400-e29b-41d4-a716-446655440008', 'Debate'),
('650e8400-e29b-41d4-a716-446655440009', 'Environmental'),
('650e8400-e29b-41d4-a716-446655440010', 'Cultural');

-- ======================== CONTACT METHODS ========================

INSERT INTO contact_methods (id, emails, insta, discord, website) VALUES
('750e8400-e29b-41d4-a716-446655440001', ARRAY['tsa@school.edu'], '@school_tsa', 'discord.gg/schooltsa', 'https://schooltsa.org'),
('750e8400-e29b-41d4-a716-446655440002', ARRAY['robotics@school.edu'], '@school_robotics', NULL, 'https://schoolrobotics.org'),
('750e8400-e29b-41d4-a716-446655440003', ARRAY['modelun@school.edu'], '@school_mun', NULL, NULL),
('750e8400-e29b-41d4-a716-446655440004', ARRAY['drama@school.edu'], '@school_drama', NULL, NULL),
('750e8400-e29b-41d4-a716-446655440005', ARRAY['debate@school.edu'], '@school_debate', 'discord.gg/schooldebate', NULL),
('750e8400-e29b-41d4-a716-446655440006', ARRAY['science@school.edu'], '@school_science', NULL, NULL),
('750e8400-e29b-41d4-a716-446655440007', ARRAY['art@school.edu'], '@school_art', NULL, NULL),
('750e8400-e29b-41d4-a716-446655440008', ARRAY['eco@school.edu'], '@school_eco', NULL, NULL),
('750e8400-e29b-41d4-a716-446655440009', ARRAY['cs@school.edu'], '@school_cs', NULL, NULL),
('750e8400-e29b-41d4-a716-446655440010', ARRAY['math@school.edu'], '@school_math', NULL, NULL);

-- ======================== MEETING SCHEDULES ========================

INSERT INTO meeting_schedules (id, day_of_week, time, frequency) VALUES
('850e8400-e29b-41d4-a716-446655440001', 'Tuesday', '15:30', 'Weekly'),
('850e8400-e29b-41d4-a716-446655440002', 'Wednesday', '16:00', 'Weekly'),
('850e8400-e29b-41d4-a716-446655440003', 'Thursday', '15:00', 'Weekly'),
('850e8400-e29b-41d4-a716-446655440004', 'Monday', '15:30', 'Weekly'),
('850e8400-e29b-41d4-a716-446655440005', 'Friday', '16:00', 'Bi-weekly'),
('850e8400-e29b-41d4-a716-446655440006', 'Wednesday', '15:30', 'Weekly'),
('850e8400-e29b-41d4-a716-446655440007', 'Tuesday', '16:00', 'Weekly');

-- ======================== ORGANIZATIONS (CHAPTERS) ========================

INSERT INTO organizations (
  id, name, slug, description, location_id, contact_methods_id, category,
  meeting_frequency, membership_status, grade_level, meeting_time,
  meeting_schedule_text, member_count, logo, color, is_published, is_active
) VALUES
-- Technology Student Association
('a50e8400-e29b-41d4-a716-446655440001', 
 'Technology Student Association', 
 'tsa',
 'National organization for middle and high school students engaged in STEM. TSA''s membership includes over 233,000 students in approximately 2,000 schools spanning 48 states.',
 '550e8400-e29b-41d4-a716-446655440001',
 '750e8400-e29b-41d4-a716-446655440001',
 'STEM',
 'Weekly',
 'Open Enrollment',
 'All Grades',
 'After School',
 'Every Tuesday, 3:30 PM - 4:30 PM',
 45,
 '🔧',
 'bg-blue-600',
 true,
 true),

-- Robotics Team
('a50e8400-e29b-41d4-a716-446655440002',
 'Robotics Team',
 'robotics',
 'Design, build, and program competitive robots. Participate in regional and national competitions while developing engineering and teamwork skills.',
 '550e8400-e29b-41d4-a716-446655440002',
 '750e8400-e29b-41d4-a716-446655440002',
 'STEM',
 'Weekly',
 'Open Enrollment',
 'All Grades',
 'After School',
 'Every Wednesday, 4:00 PM - 6:00 PM',
 35,
 '🤖',
 'bg-indigo-600',
 true,
 true),

-- Model United Nations
('a50e8400-e29b-41d4-a716-446655440003',
 'Model United Nations',
 'model-un',
 'Simulate UN committee sessions to debate and resolve world issues. Develop diplomacy, public speaking, and international relations skills.',
 '550e8400-e29b-41d4-a716-446655440006',
 '750e8400-e29b-41d4-a716-446655440003',
 'Academic',
 'Weekly',
 'Open Enrollment',
 'All Grades',
 'After School',
 'Every Thursday, 3:00 PM - 4:30 PM',
 52,
 '🌍',
 'bg-purple-600',
 true,
 true),

-- Drama Club
('a50e8400-e29b-41d4-a716-446655440004',
 'Drama Club',
 'drama',
 'Theater productions, acting workshops, and performing arts. Two full productions per year plus showcases and workshops.',
 '550e8400-e29b-41d4-a716-446655440003',
 '750e8400-e29b-41d4-a716-446655440004',
 'Arts',
 'Bi-weekly',
 'Open Enrollment',
 'All Grades',
 'After School',
 'Every Monday, 3:30 PM - 5:30 PM',
 28,
 '🎭',
 'bg-pink-600',
 true,
 true),

-- Debate Team
('a50e8400-e29b-41d4-a716-446655440005',
 'Debate Team',
 'debate',
 'Competitive speech and debate team. Policy debate, Lincoln-Douglas, Public Forum, and original oratory. Regional and state competitions.',
 '550e8400-e29b-41d4-a716-446655440006',
 '750e8400-e29b-41d4-a716-446655440005',
 'Academic',
 'Weekly',
 'Tryout Required',
 'All Grades',
 'After School',
 'Every Friday, 4:00 PM - 5:30 PM',
 22,
 '🎤',
 'bg-red-600',
 true,
 true),

-- Science Olympiad
('a50e8400-e29b-41d4-a716-446655440006',
 'Science Olympiad',
 'science-olympiad',
 'National STEM competition featuring 23 team events in various science disciplines. Build devices, complete lab activities, and take science tests.',
 '550e8400-e29b-41d4-a716-446655440002',
 '750e8400-e29b-41d4-a716-446655440006',
 'STEM',
 'Weekly',
 'Application Required',
 'All Grades',
 'After School',
 'Every Wednesday, 3:30 PM - 5:00 PM',
 30,
 '🔬',
 'bg-green-600',
 true,
 true),

-- Art Club
('a50e8400-e29b-41d4-a716-446655440007',
 'Art Club',
 'art-club',
 'Creative expression through various media. Painting, drawing, sculpture, digital art. Host exhibitions and participate in art shows.',
 '550e8400-e29b-41d4-a716-446655440007',
 '750e8400-e29b-41d4-a716-446655440007',
 'Arts',
 'Weekly',
 'Open Enrollment',
 'All Grades',
 'After School',
 'Every Tuesday, 4:00 PM - 5:00 PM',
 30,
 '🎨',
 'bg-amber-600',
 true,
 true),

-- Environmental Club
('a50e8400-e29b-41d4-a716-446655440008',
 'Environmental Club',
 'environmental',
 'Promote sustainability and environmental awareness. Beach cleanups, recycling programs, garden maintenance, and advocacy.',
 '550e8400-e29b-41d4-a716-446655440007',
 '750e8400-e29b-41d4-a716-446655440008',
 'Service',
 'Bi-weekly',
 'Open Enrollment',
 'All Grades',
 'After School',
 'Every other Wednesday, 3:30 PM - 4:30 PM',
 25,
 '🌱',
 'bg-teal-600',
 true,
 true),

-- Community Service Club
('a50e8400-e29b-41d4-a716-446655440009',
 'Community Service Club',
 'community-service',
 'Service projects supporting local community organizations. Food drives, tutoring programs, senior center visits, and volunteer opportunities.',
 '550e8400-e29b-41d4-a716-446655440007',
 '750e8400-e29b-41d4-a716-446655440009',
 'Service',
 'Weekly',
 'Open Enrollment',
 'All Grades',
 'After School',
 'Every Thursday, 3:30 PM - 4:30 PM',
 40,
 '🤝',
 'bg-green-600',
 true,
 true),

-- Math League
('a50e8400-e29b-41d4-a716-446655440010',
 'Math League',
 'math-league',
 'Competitive mathematics team. Problem-solving competitions, AMC preparation, and peer tutoring.',
 '550e8400-e29b-41d4-a716-446655440006',
 '750e8400-e29b-41d4-a716-446655440010',
 'Academic',
 'Weekly',
 'Open Enrollment',
 'All Grades',
 'After School',
 'Every Monday, 3:30 PM - 4:30 PM',
 24,
 '📐',
 'bg-indigo-600',
 true,
 true);

-- ======================== ORGANIZATION MEETING SCHEDULES ========================

INSERT INTO organization_meeting_schedules (organization_id, meeting_schedule_id) VALUES
('a50e8400-e29b-41d4-a716-446655440001', '850e8400-e29b-41d4-a716-446655440001'),
('a50e8400-e29b-41d4-a716-446655440002', '850e8400-e29b-41d4-a716-446655440002'),
('a50e8400-e29b-41d4-a716-446655440003', '850e8400-e29b-41d4-a716-446655440003'),
('a50e8400-e29b-41d4-a716-446655440004', '850e8400-e29b-41d4-a716-446655440004'),
('a50e8400-e29b-41d4-a716-446655440005', '850e8400-e29b-41d4-a716-446655440005'),
('a50e8400-e29b-41d4-a716-446655440006', '850e8400-e29b-41d4-a716-446655440002'),
('a50e8400-e29b-41d4-a716-446655440007', '850e8400-e29b-41d4-a716-446655440001'),
('a50e8400-e29b-41d4-a716-446655440008', '850e8400-e29b-41d4-a716-446655440002'),
('a50e8400-e29b-41d4-a716-446655440009', '850e8400-e29b-41d4-a716-446655440003'),
('a50e8400-e29b-41d4-a716-446655440010', '850e8400-e29b-41d4-a716-446655440004');

-- ======================== ORGANIZATION TAGS ========================

INSERT INTO organization_tags (organization_id, tag_id) VALUES
('a50e8400-e29b-41d4-a716-446655440001', '650e8400-e29b-41d4-a716-446655440001'),
('a50e8400-e29b-41d4-a716-446655440001', '650e8400-e29b-41d4-a716-446655440004'),
('a50e8400-e29b-41d4-a716-446655440001', '650e8400-e29b-41d4-a716-446655440006'),
('a50e8400-e29b-41d4-a716-446655440002', '650e8400-e29b-41d4-a716-446655440001'),
('a50e8400-e29b-41d4-a716-446655440002', '650e8400-e29b-41d4-a716-446655440006'),
('a50e8400-e29b-41d4-a716-446655440003', '650e8400-e29b-41d4-a716-446655440002'),
('a50e8400-e29b-41d4-a716-446655440004', '650e8400-e29b-41d4-a716-446655440005'),
('a50e8400-e29b-41d4-a716-446655440005', '650e8400-e29b-41d4-a716-446655440001'),
('a50e8400-e29b-41d4-a716-446655440005', '650e8400-e29b-41d4-a716-446655440008'),
('a50e8400-e29b-41d4-a716-446655440006', '650e8400-e29b-41d4-a716-446655440001'),
('a50e8400-e29b-41d4-a716-446655440006', '650e8400-e29b-41d4-a716-446655440006'),
('a50e8400-e29b-41d4-a716-446655440007', '650e8400-e29b-41d4-a716-446655440005'),
('a50e8400-e29b-41d4-a716-446655440008', '650e8400-e29b-41d4-a716-446655440009'),
('a50e8400-e29b-41d4-a716-446655440009', '650e8400-e29b-41d4-a716-446655440003'),
('a50e8400-e29b-41d4-a716-446655440010', '650e8400-e29b-41d4-a716-446655440001');

-- ======================== ADVISORS ========================

INSERT INTO advisors (id, organization_id, name, email, department, phone) VALUES
('b50e8400-e29b-41d4-a716-446655440001', 'a50e8400-e29b-41d4-a716-446655440001', 'Ms. Sarah Johnson', 's.johnson@school.edu', 'Technology', '555-0101'),
('b50e8400-e29b-41d4-a716-446655440002', 'a50e8400-e29b-41d4-a716-446655440002', 'Mr. David Chen', 'd.chen@school.edu', 'Engineering', '555-0102'),
('b50e8400-e29b-41d4-a716-446655440003', 'a50e8400-e29b-41d4-a716-446655440003', 'Dr. Emily Rodriguez', 'e.rodriguez@school.edu', 'Social Studies', '555-0103'),
('b50e8400-e29b-41d4-a716-446655440004', 'a50e8400-e29b-41d4-a716-446655440004', 'Ms. Jennifer Martinez', 'j.martinez@school.edu', 'Drama', '555-0104'),
('b50e8400-e29b-41d4-a716-446655440005', 'a50e8400-e29b-41d4-a716-446655440005', 'Mr. Robert Williams', 'r.williams@school.edu', 'English', '555-0105'),
('b50e8400-e29b-41d4-a716-446655440006', 'a50e8400-e29b-41d4-a716-446655440006', 'Dr. Lisa Anderson', 'l.anderson@school.edu', 'Science', '555-0106'),
('b50e8400-e29b-41d4-a716-446655440007', 'a50e8400-e29b-41d4-a716-446655440007', 'Ms. Rachel Kim', 'r.kim@school.edu', 'Art', '555-0107'),
('b50e8400-e29b-41d4-a716-446655440008', 'a50e8400-e29b-41d4-a716-446655440008', 'Mr. James Taylor', 'j.taylor@school.edu', 'Science', '555-0108'),
('b50e8400-e29b-41d4-a716-446655440009', 'a50e8400-e29b-41d4-a716-446655440009', 'Ms. Patricia Wilson', 'p.wilson@school.edu', 'Counseling', '555-0109'),
('b50e8400-e29b-41d4-a716-446655440010', 'a50e8400-e29b-41d4-a716-446655440010', 'Mr. Michael Brown', 'm.brown@school.edu', 'Mathematics', '555-0110');

-- ======================== PROPOSALS ========================

INSERT INTO proposals (
  id, chapter_name, slug, mission_statement, proposed_advisor, submitter_name,
  status, created_at, updated_at
) VALUES
('c50e8400-e29b-41d4-a716-446655440001',
 'Photography Club',
 'photography-club',
 'To foster appreciation for photography as an art form and develop technical skills.',
 'Ms. Rachel Kim',
 'Emily Chen',
 'Under Review',
 '2026-01-10 10:00:00',
 '2026-01-10 10:00:00'),

('c50e8400-e29b-41d4-a716-446655440002',
 'Chess Club',
 'chess-club',
 'To promote strategic thinking and competitive chess playing.',
 'Mr. Michael Brown',
 'Marcus Johnson',
 'Submitted',
 '2026-01-08 14:30:00',
 '2026-01-08 14:30:00'),

('c50e8400-e29b-41d4-a716-446655440003',
 'Entrepreneurship Society',
 'entrepreneurship-society',
 'To develop business acumen and entrepreneurial mindset among students.',
 'Ms. Sarah Williams',
 'Sarah Williams',
 'Under Review',
 '2026-01-05 09:15:00',
 '2026-01-05 09:15:00');

-- ======================== EVENTS ========================

INSERT INTO events (
  id, title, description, date, start_time, end_time, location,
  organization_id, organization_name, category, event_type,
  is_public, requires_rsvp, created_at
) VALUES
('d50e8400-e29b-41d4-a716-446655440001',
 'TSA State Conference',
 'Annual Technology Student Association state competition with various tech events.',
 '2026-03-15',
 '08:00',
 '17:00',
 'Convention Center',
 'a50e8400-e29b-41d4-a716-446655440001',
 'Technology Student Association',
 'STEM',
 'Competition',
 true,
 true,
 '2026-02-01 10:00:00'),

('d50e8400-e29b-41d4-a716-446655440002',
 'Spring Club Fair',
 'Meet representatives from all school clubs and organizations.',
 '2026-03-20',
 '11:00',
 '14:00',
 'Main Gymnasium',
 NULL,
 'All Clubs',
 'Other',
 'Event',
 true,
 false,
 '2026-02-15 09:00:00'),

('d50e8400-e29b-41d4-a716-446655440003',
 'Robotics Showcase',
 'Demonstration of student-built robots and engineering projects.',
 '2026-04-22',
 '18:00',
 '20:00',
 'Engineering Lab',
 'a50e8400-e29b-41d4-a716-446655440002',
 'Robotics Team',
 'STEM',
 'Event',
 true,
 false,
 '2026-03-01 15:00:00'),

('d50e8400-e29b-41d4-a716-446655440004',
 'Spring Musical Performance',
 'Drama Club presents their spring production.',
 '2026-04-12',
 '19:00',
 '21:30',
 'Theater',
 'a50e8400-e29b-41d4-a716-446655440004',
 'Drama Club',
 'Arts',
 'Event',
 true,
 true,
 '2026-02-20 11:00:00'),

('d50e8400-e29b-41d4-a716-446655440005',
 'Model UN Conference',
 'Regional Model United Nations conference and debate.',
 '2026-03-08',
 '09:00',
 '16:00',
 'University Campus',
 'a50e8400-e29b-41d4-a716-446655440003',
 'Model United Nations',
 'Academic',
 'Competition',
 true,
 true,
 '2026-02-10 08:00:00'),

('d50e8400-e29b-41d4-a716-446655440006',
 'Art Exhibition Opening',
 'Opening reception for student art exhibition.',
 '2026-05-01',
 '18:00',
 '20:00',
 'Art Gallery',
 'a50e8400-e29b-41d4-a716-446655440007',
 'Art Club',
 'Arts',
 'Event',
 true,
 false,
 '2026-03-15 10:00:00');

-- ======================== RESOURCES ========================

INSERT INTO resources (id, title, description, category, date_added, views, helpful) VALUES
('e50e8400-e29b-41d4-a716-446655440001',
 'Club Officer Handbook',
 'Complete guide for leading your club effectively, including best practices and templates.',
 'Handbooks',
 '2025-09-01',
 1247,
 89),

('e50e8400-e29b-41d4-a716-446655440002',
 'Event Planning Templates',
 'Ready-to-use templates for organizing club events, including checklists and schedules.',
 'Templates',
 '2025-09-15',
 856,
 72),

('e50e8400-e29b-41d4-a716-446655440003',
 'Fundraising Ideas Guide',
 'Creative ways to raise money for your club with proven strategies.',
 'Guides',
 '2025-10-01',
 1092,
 95),

('e50e8400-e29b-41d4-a716-446655440004',
 'Meeting Agenda Templates',
 'Structure your meetings for maximum productivity with these templates.',
 'Templates',
 '2025-10-15',
 743,
 68),

('e50e8400-e29b-41d4-a716-446655440005',
 'Social Media Guide for Clubs',
 'Grow your club presence online with effective social media strategies.',
 'Guides',
 '2025-11-01',
 924,
 81),

('e50e8400-e29b-41d4-a716-446655440006',
 'Member Recruitment Tips',
 'Strategies to attract and retain members throughout the school year.',
 'Guides',
 '2025-11-15',
 1156,
 92);

-- ======================== ACHIEVEMENTS ========================

INSERT INTO achievements (
  id, name, description, icon, category, points, rarity, requirements
) VALUES
('f50e8400-e29b-41d4-a716-446655440001',
 'First Steps',
 'Joined your first club',
 '👟',
 'Membership',
 50,
 'Common',
 ARRAY['Join one club']),

('f50e8400-e29b-41d4-a716-446655440002',
 'Social Butterfly',
 'Joined 3 or more clubs',
 '🦋',
 'Membership',
 150,
 'Uncommon',
 ARRAY['Join three clubs']),

('f50e8400-e29b-41d4-a716-446655440003',
 'Event Enthusiast',
 'Attended 10 club events',
 '🎉',
 'Participation',
 200,
 'Uncommon',
 ARRAY['Attend 10 events']),

('f50e8400-e29b-41d4-a716-446655440004',
 'Leadership Rising',
 'Became a club officer',
 '⭐',
 'Leadership',
 300,
 'Rare',
 ARRAY['Elected to officer position']),

('f50e8400-e29b-41d4-a716-446655440005',
 'Competition Champion',
 'Won a competition',
 '🏆',
 'Competition',
 500,
 'Epic',
 ARRAY['Win first place in competition']),

('f50e8400-e29b-41d4-a716-446655440006',
 'Perfect Attendance',
 'Attended all meetings for a semester',
 '📅',
 'Participation',
 250,
 'Rare',
 ARRAY['100% attendance for semester']),

('f50e8400-e29b-41d4-a716-446655440007',
 'Club Founder',
 'Founded a new club',
 '🌟',
 'Leadership',
 1000,
 'Legendary',
 ARRAY['Successfully establish new club']),

('f50e8400-e29b-41d4-a716-446655440008',
 'Community Hero',
 'Completed 50 hours of community service',
 '🦸',
 'Service',
 400,
 'Epic',
 ARRAY['Complete 50 service hours']),

('f50e8400-e29b-41d4-a716-446655440009',
 'Mentor',
 'Mentored 5 new members',
 '👨‍🏫',
 'Leadership',
 350,
 'Rare',
 ARRAY['Mentor 5 members']),

('f50e8400-e29b-41d4-a716-446655440010',
 'Event Organizer',
 'Organized a major club event',
 '📋',
 'Leadership',
 300,
 'Rare',
 ARRAY['Successfully organize event']);

-- ======================== DISCUSSIONS ========================

INSERT INTO discussions (
  id, title, content, author_name, organization_id, category,
  tags, views, likes, is_pinned, created_at, updated_at
) VALUES
('g50e8400-e29b-41d4-a716-446655440001',
 'Tips for recruiting new members at the beginning of the year?',
 'Our club lost a lot of seniors last year and we need to rebuild. What strategies have worked for you to attract new members during club fair and the first few weeks of school?',
 'Sarah Chen',
 NULL,
 'Recruiting',
 ARRAY['recruiting', 'membership', 'growth'],
 234,
 18,
 true,
 '2026-02-09 10:30:00',
 '2026-02-09 14:20:00'),

('g50e8400-e29b-41d4-a716-446655440002',
 'How to handle disagreements between officers?',
 'Two of our officers have very different visions for the club direction and it''s causing tension. Looking for advice on conflict resolution in leadership teams.',
 'Jordan Lee',
 NULL,
 'Leadership',
 ARRAY['leadership', 'conflict', 'teamwork'],
 156,
 24,
 false,
 '2026-02-08 16:00:00',
 '2026-02-08 17:30:00'),

('g50e8400-e29b-41d4-a716-446655440003',
 'Best fundraising ideas that actually work?',
 'We need to raise $500 for our upcoming competition. What fundraisers have been most successful for your clubs? Looking for ideas beyond the usual bake sales.',
 'Alex Martinez',
 'a50e8400-e29b-41d4-a716-446655440001',
 'Fundraising',
 ARRAY['fundraising', 'money', 'competition'],
 312,
 31,
 false,
 '2026-02-08 09:15:00',
 '2026-02-08 12:45:00'),

('g50e8400-e29b-41d4-a716-446655440004',
 'Virtual club meetings - how do you keep them engaging?',
 'We still have some hybrid members who attend virtually. What tools and techniques do you use to keep online participants engaged?',
 'Nina Okafor',
 NULL,
 'Meetings',
 ARRAY['virtual', 'meetings', 'hybrid', 'engagement'],
 178,
 11,
 false,
 '2026-02-07 14:30:00',
 '2026-02-07 14:30:00'),

('g50e8400-e29b-41d4-a716-446655440005',
 'TSA Webmaster Competition - Theme Interpretation',
 'How are other teams interpreting the "Community Resource Hub" theme? Looking to exchange ideas without giving away competitive secrets!',
 'David Kim',
 'a50e8400-e29b-41d4-a716-446655440001',
 'Competitions',
 ARRAY['tsa', 'webmaster', 'competition', 'theme'],
 445,
 52,
 true,
 '2026-02-06 11:00:00',
 '2026-02-06 13:15:00');

-- ======================== DISCUSSION REPLIES ========================

INSERT INTO discussion_replies (
  id, discussion_id, content, author_name, likes, is_answer, created_at
) VALUES
('h50e8400-e29b-41d4-a716-446655440001',
 'g50e8400-e29b-41d4-a716-446655440001',
 'We created an interactive demo at our club fair booth - it really helped draw people in! Also, having current members wear club shirts creates visibility.',
 'Marcus Johnson',
 12,
 true,
 '2026-02-09 11:45:00'),

('h50e8400-e29b-41d4-a716-446655440002',
 'g50e8400-e29b-41d4-a716-446655440001',
 'Social media presence before school starts helps a lot. We post teaser content on Instagram over the summer.',
 'Emily Rodriguez',
 8,
 false,
 '2026-02-09 14:20:00'),

('h50e8400-e29b-41d4-a716-446655440003',
 'g50e8400-e29b-41d4-a716-446655440002',
 'Schedule a dedicated meeting to discuss the vision openly. Sometimes writing down everyone''s ideas helps depersonalize the conflict.',
 'Dr. Patricia Williams',
 15,
 true,
 '2026-02-08 17:30:00'),

('h50e8400-e29b-41d4-a716-446655440004',
 'g50e8400-e29b-41d4-a716-446655440003',
 'We did a car wash and made over $800 in one day! The key is picking a high-traffic location and promoting heavily.',
 'Chris Taylor',
 9,
 false,
 '2026-02-08 10:00:00'),

('h50e8400-e29b-41d4-a716-446655440005',
 'g50e8400-e29b-41d4-a716-446655440003',
 'Spirit wear sales work great for us. We design custom club merchandise and sell it to members and their families.',
 'Maya Patel',
 14,
 true,
 '2026-02-08 12:45:00'),

('h50e8400-e29b-41d4-a716-446655440006',
 'g50e8400-e29b-41d4-a716-446655440005',
 'We''re focusing on making it actually useful for real students. The key is interactivity and user-created content.',
 'Sophie Zhang',
 21,
 false,
 '2026-02-06 13:15:00');

-- ======================== COMPETITIONS ========================

INSERT INTO competitions (
  id, name, organization_sponsor, description, category, eligibility,
  registration_deadline, competition_dates, location, location_type,
  entry_fee, prizes, website_url, difficulty, is_featured
) VALUES
('i50e8400-e29b-41d4-a716-446655440001',
 'TSA State Conference',
 'Technology Student Association',
 'State-level technology and engineering competitions across 40+ events.',
 'STEM',
 ARRAY['TSA members', 'Grades 9-12'],
 '2026-02-20',
 'March 15-17, 2026',
 'State Convention Center',
 'In-Person',
 '$125 per student',
 ARRAY['State medals', 'Qualifying for Nationals', 'Scholarships'],
 'https://tsaweb.org',
 'Intermediate',
 true),

('i50e8400-e29b-41d4-a716-446655440002',
 'Science Olympiad Regionals',
 'Science Olympiad',
 'Team-based science competition with 23 different events.',
 'STEM',
 ARRAY['Science Olympiad members', 'All grades'],
 '2026-01-30',
 'February 25, 2026',
 'University Science Building',
 'In-Person',
 '$150 per team',
 ARRAY['Regional medals', 'State qualification'],
 'https://soinc.org',
 'Advanced',
 true),

('i50e8400-e29b-41d4-a716-446655440003',
 'Model UN Regional Conference',
 'United Nations Association',
 'Simulate UN committees and debate global issues.',
 'Academic',
 ARRAY['Model UN members', 'Grades 9-12'],
 '2026-02-15',
 'March 8-9, 2026',
 'Downtown Conference Center',
 'In-Person',
 '$80 per delegate',
 ARRAY['Best Delegate awards', 'Outstanding Position Papers'],
 'https://modelun.org',
 'Intermediate',
 false),

('i50e8400-e29b-41d4-a716-446655440004',
 'National Debate Tournament',
 'National Speech & Debate Association',
 'Policy, LD, and Public Forum debate competition.',
 'Academic',
 ARRAY['Debate team members', 'Qualified competitors'],
 '2026-03-01',
 'April 15-18, 2026',
 'Multiple locations',
 'In-Person',
 '$200 per competitor',
 ARRAY['National champion titles', 'College scholarships'],
 'https://speechanddebate.org',
 'Elite',
 true);

-- ======================== MENTORS ========================

INSERT INTO mentors (
  id, name, type, title, organization_name, bio, expertise,
  availability, email, sessions_completed, rating
) VALUES
('j50e8400-e29b-41d4-a716-446655440001',
 'Greg Shelton',
 'Advisor',
 'Technology Teacher',
 'Juanita HS Webmaster',
 'Advisor with 10+ years experience mentoring Webmaster teams.',
 ARRAY['Web Development', 'TSA Competitions', 'Team Leadership'],
 'Available',
 'gshelton@lwsd.org',
 45,
 4.8),

('j50e8400-e29b-41d4-a716-446655440002',
 'Jessica Chen',
 'Alumni',
 'Policy Analyst',
 'Model United Nations',
 'Georgetown graduate who was MUN president. Now works in international relations.',
 ARRAY['International Relations', 'Public Speaking', 'Diplomacy'],
 'Limited',
 'j.chen@email.com',
 12,
 4.9),

('j50e8400-e29b-41d4-a716-446655440003',
 'Marcus Williams',
 'Alumni',
 'Robotics Engineer at Boston Dynamics',
 'Robotics Team',
 'MIT graduate who led championship robotics team. Expert in mechanical engineering.',
 ARRAY['Robotics', 'Engineering', 'Competition Strategy'],
 'Available',
 'm.williams@email.com',
 28,
 4.7),

('j50e8400-e29b-41d4-a716-446655440004',
 'Sarah Martinez',
 'Alumni',
 'Non-profit Director',
 'Community Service Club',
 'UC Berkeley graduate specializing in social work and community organizing.',
 ARRAY['Community Service', 'Non-profit Management', 'Event Planning'],
 'Full',
 's.martinez@email.com',
 56,
 4.9);

-- ======================== COLLABORATIONS ========================

INSERT INTO collaborations (
  id, title, description, host_organization_id, type, categories,
  requirements, benefits, proposed_date, deadline,
  max_participants, status
) VALUES
('k50e8400-e29b-41d4-a716-446655440001',
 'STEM Career Fair Partnership',
 'Joint career fair bringing industry professionals to speak with students.',
 'a50e8400-e29b-41d4-a716-446655440001',
 'Joint Event',
 ARRAY['STEM', 'Academic']::org_category[],
 ARRAY['STEM-focused clubs', 'Minimum 5 volunteers'],
 ARRAY['Industry connections', 'Resume review', 'Networking'],
 '2026-04-10',
 '2026-03-15',
 5,
 'Open'),

('k50e8400-e29b-41d4-a716-446655440002',
 'Spring Arts Showcase',
 'Combined exhibition and performance featuring multiple arts clubs.',
 'a50e8400-e29b-41d4-a716-446655440004',
 'Joint Event',
 ARRAY['Arts', 'Media']::org_category[],
 ARRAY['Arts/Performance clubs', 'Venue space contribution'],
 ARRAY['Shared audience', 'Joint publicity', 'Resource sharing'],
 '2026-05-15',
 '2026-04-01',
 4,
 'Open'),

('k50e8400-e29b-41d4-a716-446655440003',
 'Earth Day Cleanup Initiative',
 'Multi-club community service event focused on environmental action.',
 'a50e8400-e29b-41d4-a716-446655440008',
 'Community Service',
 ARRAY['Service', 'Environmental']::org_category[],
 ARRAY['Any club interested in service', 'Minimum 10 volunteers'],
 ARRAY['Service hours', 'Community impact', 'Team building'],
 '2026-04-22',
 '2026-04-15',
 NULL,
 'Open');

-- ======================== SUCCESS STORIES ========================

INSERT INTO success_stories (
  id, title, summary, full_story, organization_id, author_name, author_role,
  category, tags, featured, likes, date_published
) VALUES
('l50e8400-e29b-41d4-a716-446655440001',
 'From Club Member to Tech Entrepreneur',
 'How TSA skills helped me launch my startup',
 'My journey in Technology Student Association taught me more than just coding and engineering skills. The competitions, leadership opportunities, and collaborative projects prepared me for the challenges of running a tech startup. When I founded my company in college, I drew directly on the project management, presentation skills, and technical expertise I developed through TSA. The network I built continues to be invaluable.',
 'a50e8400-e29b-41d4-a716-446655440001',
 'Sarah Chen',
 'Class of 2020',
 'Alumni Career',
 ARRAY['entrepreneurship', 'technology', 'career'],
 true,
 156,
 '2026-01-15'),

('l50e8400-e29b-41d4-a716-446655440002',
 'Leadership Lessons That Shaped My Career',
 'The business skills I learned in FBLA',
 'Serving as chapter president taught me more about leadership than any classroom ever could. Managing a team, organizing events, handling conflicts, and balancing multiple priorities - these real-world experiences prepared me for my career in business. The confidence I gained speaking in front of groups and making executive decisions has been instrumental in my professional success.',
 NULL,
 'Michael Brown',
 'Class of 2018',
 'Leadership Journey',
 ARRAY['leadership', 'business', 'career'],
 false,
 89,
 '2026-01-20'),

('l50e8400-e29b-41d4-a716-446655440003',
 'Winning State Championship Through Teamwork',
 'Our robotics team''s journey to victory',
 'After two years of competing and falling short, our robotics team finally won the state championship. The key wasn''t just technical skills - it was learning to work together effectively. We implemented better communication systems, created clear role definitions, and supported each other through setbacks. The lessons about perseverance, collaboration, and continuous improvement apply far beyond robotics.',
 'a50e8400-e29b-41d4-a716-446655440002',
 'Alex Thompson',
 'Team Captain',
 'Competition Victory',
 ARRAY['robotics', 'teamwork', 'competition'],
 true,
 243,
 '2026-02-01');

-- ======================== ALUMNI ========================

INSERT INTO alumni (id, name, grad_year, chapter, college, major, career, available) VALUES
('m50e8400-e29b-41d4-a716-446655440001',
 'Jessica Chen',
 2022,
 'Model United Nations',
 'Georgetown University',
 'International Relations',
 'Policy Analyst',
 true),

('m50e8400-e29b-41d4-a716-446655440002',
 'Marcus Williams',
 2021,
 'Robotics Team',
 'MIT',
 'Mechanical Engineering',
 'Robotics Engineer at Boston Dynamics',
 true),

('m50e8400-e29b-41d4-a716-446655440003',
 'Sarah Martinez',
 2020,
 'Community Service Club',
 'UC Berkeley',
 'Social Work',
 'Non-profit Director',
 false),

('m50e8400-e29b-41d4-a716-446655440004',
 'Dr. Jennifer Walsh',
 2015,
 'Technology Student Association',
 'Stanford University',
 'Computer Science',
 'Software Engineer at Google',
 true),

('m50e8400-e29b-41d4-a716-446655440005',
 'Marcus Thompson',
 2017,
 'Future Business Leaders',
 'Wharton School',
 'Finance',
 'Investment Banker',
 true),

('m50e8400-e29b-41d4-a716-446655440006',
 'Amanda Lee',
 2019,
 'Drama Club',
 'Juilliard',
 'Theater Performance',
 'Broadway Performer',
 true);

-- ======================== BUDGET ALLOCATIONS ========================

INSERT INTO budget_allocations (
  id, organization_id, allocated, spent, fiscal_year
) VALUES
('n50e8400-e29b-41d4-a716-446655440001',
 'a50e8400-e29b-41d4-a716-446655440003',
 3500.00,
 2100.00,
 '2025-2026'),

('n50e8400-e29b-41d4-a716-446655440002',
 'a50e8400-e29b-41d4-a716-446655440002',
 8000.00,
 5500.00,
 '2025-2026'),

('n50e8400-e29b-41d4-a716-446655440003',
 'a50e8400-e29b-41d4-a716-446655440004',
 4500.00,
 3200.00,
 '2025-2026'),

('n50e8400-e29b-41d4-a716-446655440004',
 'a50e8400-e29b-41d4-a716-446655440009',
 1500.00,
 800.00,
 '2025-2026'),

('n50e8400-e29b-41d4-a716-446655440005',
 'a50e8400-e29b-41d4-a716-446655440005',
 2500.00,
 1900.00,
 '2025-2026'),

('n50e8400-e29b-41d4-a716-446655440006',
 'a50e8400-e29b-41d4-a716-446655440008',
 1200.00,
 650.00,
 '2025-2026');

-- ======================== PURCHASE REQUESTS ========================

INSERT INTO purchase_requests (
  id, organization_id, item, amount, status, date
) VALUES
('o50e8400-e29b-41d4-a716-446655440001',
 'a50e8400-e29b-41d4-a716-446655440002',
 'Motor Controllers (x5)',
 450.00,
 'Pending',
 '2026-01-10'),

('o50e8400-e29b-41d4-a716-446655440002',
 'a50e8400-e29b-41d4-a716-446655440004',
 'Costume Materials',
 320.00,
 'Approved',
 '2026-01-08'),

('o50e8400-e29b-41d4-a716-446655440003',
 'a50e8400-e29b-41d4-a716-446655440003',
 'Conference Registration',
 800.00,
 'Pending',
 '2026-01-05');

-- ======================== GRANTS ========================

INSERT INTO grants (id, title, amount, deadline, description, eligibility) VALUES
('p50e8400-e29b-41d4-a716-446655440001',
 'Innovation Grant',
 '$2,500',
 '2026-02-15',
 'For chapters developing new technology or innovative programs.',
 'STEM and Academic chapters'),

('p50e8400-e29b-41d4-a716-446655440002',
 'Community Impact Award',
 '$1,500',
 '2026-03-01',
 'For chapters with outstanding community service projects.',
 'Service and Cultural chapters'),

('p50e8400-e29b-41d4-a716-446655440003',
 'Arts Enrichment Fund',
 '$2,000',
 '2026-02-28',
 'Support for arts programs, productions, and equipment.',
 'Arts and Media chapters');

-- ======================== CLUB HEALTH METRICS ========================

INSERT INTO club_health_metrics (
  id, organization_id, overall_score, member_engagement,
  event_frequency, member_retention, leadership_development,
  community_impact, financial_health, total_members,
  active_members, events_this_month, new_members_last_30,
  recommendations
) VALUES
('q50e8400-e29b-41d4-a716-446655440001',
 'a50e8400-e29b-41d4-a716-446655440003',
 95,
 98,
 95,
 92,
 96,
 90,
 95,
 52,
 48,
 4,
 6,
 ARRAY['Excellent performance across all metrics', 'Consider expanding leadership roles']),

('q50e8400-e29b-41d4-a716-446655440002',
 'a50e8400-e29b-41d4-a716-446655440002',
 92,
 95,
 90,
 88,
 94,
 92,
 90,
 35,
 32,
 3,
 4,
 ARRAY['Strong performance overall', 'Focus on member retention strategies']),

('q50e8400-e29b-41d4-a716-446655440003',
 'a50e8400-e29b-41d4-a716-446655440004',
 88,
 85,
 92,
 86,
 88,
 85,
 90,
 28,
 24,
 5,
 3,
 ARRAY['Good performance', 'Improve member engagement through interactive activities']),

('q50e8400-e29b-41d4-a716-446655440004',
 'a50e8400-e29b-41d4-a716-446655440005',
 85,
 88,
 82,
 85,
 90,
 80,
 85,
 22,
 20,
 2,
 2,
 ARRAY['Solid performance', 'Increase event frequency for better engagement']),

('q50e8400-e29b-41d4-a716-446655440005',
 'a50e8400-e29b-41d4-a716-446655440008',
 72,
 68,
 75,
 70,
 75,
 80,
 70,
 25,
 18,
 2,
 1,
 ARRAY['Fair performance', 'Focus on member engagement', 'Consider member feedback surveys']);

-- ======================== CLUB IDEAS ========================

INSERT INTO club_ideas (
  id, name, tagline, description, category, target_audience,
  estimated_interest, startup_cost, difficulty_to_start,
  suggested_activities, votes
) VALUES
('r50e8400-e29b-41d4-a716-446655440001',
 'Coffee & Coding Club',
 'Learn to code in a relaxed, social environment',
 'A club where students can learn programming languages, work on projects together, and enjoy refreshments while coding.',
 'STEM',
 ARRAY['Beginners interested in coding', 'Students interested in computer science'],
 'High',
 'Low - $50',
 'Easy',
 ARRAY['Weekly coding challenges', 'Hackathons', 'Guest speakers from tech industry', 'Build apps for school clubs'],
 42),

('r50e8400-e29b-41d4-a716-446655440002',
 'Meditation & Mindfulness Club',
 'Find calm in the chaos of high school',
 'A weekly gathering to practice meditation, mindfulness techniques, and stress management strategies.',
 'Other',
 ARRAY['Students interested in mental wellness', 'Anyone feeling stressed'],
 'Medium',
 'Free',
 'Easy',
 ARRAY['Guided meditation sessions', 'Breathing exercises', 'Guest wellness speakers', 'Stress management workshops'],
 38),

('r50e8400-e29b-41d4-a716-446655440003',
 'Film Production Club',
 'Lights, camera, action!',
 'Create short films, documentaries, and video content for the school and local community.',
 'Media',
 ARRAY['Students interested in filmmaking', 'Aspiring directors and editors'],
 'Medium',
 'Medium - $200',
 'Moderate',
 ARRAY['Script writing workshops', 'Film production projects', 'Film festival participation', 'Equipment training'],
 31),

('r50e8400-e29b-41d4-a716-446655440004',
 'Cooking & Culinary Arts Club',
 'Where food meets friendship',
 'Learn cooking techniques, explore world cuisines, and prepare food for school events.',
 'Other',
 ARRAY['Food enthusiasts', 'Future chefs', 'Students interested in nutrition'],
 'High',
 'Medium - $150',
 'Moderate',
 ARRAY['Cooking demonstrations', 'Recipe exchanges', 'Bake sales', 'Cultural food celebrations'],
 56);

-- ======================== ANNOUNCEMENTS ========================

INSERT INTO announcements (
  id, title, content, date, priority, author, pinned, organization_id
) VALUES
('s50e8400-e29b-41d4-a716-446655440001',
 'Club Fair Next Week!',
 'Don''t miss the Spring Club Fair on March 20th in the Main Gymnasium. Meet representatives from all clubs and sign up for next year!',
 '2026-03-05',
 'high',
 'Student Activities Office',
 true,
 NULL),

('s50e8400-e29b-41d4-a716-446655440002',
 'Webmaster Project Deadline',
 'All Webmaster teams must submit their projects by February 20th. Make sure to review the rubric before submission.',
 '2026-02-07',
 'high',
 'Ms. Sarah Johnson',
 true,
 'a50e8400-e29b-41d4-a716-446655440001'),

('s50e8400-e29b-41d4-a716-446655440003',
 'Competition Registration Open',
 'Sign up for individual events for regionals! Registration closes February 15th.',
 '2026-02-05',
 'medium',
 'Alex Martinez',
 false,
 'a50e8400-e29b-41d4-a716-446655440001'),

('s50e8400-e29b-41d4-a716-446655440004',
 'New Grant Opportunities',
 'Three new grants are now available for clubs. Check the Funding page for details and deadlines.',
 '2026-02-10',
 'medium',
 'Financial Office',
 false,
 NULL);

-- ======================== ACTIVITY LOG ========================

INSERT INTO activity_log (id, action, type, created_at) VALUES
('t50e8400-e29b-41d4-a716-446655440001',
 'New member joined Model UN',
 'member',
 '2026-03-05 08:00:00'),

('t50e8400-e29b-41d4-a716-446655440002',
 'Robotics Team updated meeting schedule',
 'update',
 '2026-03-04 19:00:00'),

('t50e8400-e29b-41d4-a716-446655440003',
 'Drama Club event approved',
 'event',
 '2026-03-04 10:00:00'),

('t50e8400-e29b-41d4-a716-446655440004',
 'New proposal submitted: Photography Club',
 'proposal',
 '2026-03-03 14:00:00'),

('t50e8400-e29b-41d4-a716-446655440005',
 'Community Service Club hours verified',
 'verification',
 '2026-03-02 11:00:00');

-- ======================== STARTER GUIDES ========================

INSERT INTO starter_guides (
  id, title, description, category, difficulty, estimated_time,
  views, helpful, date_updated
) VALUES
('u50e8400-e29b-41d4-a716-446655440001',
 'Starting Your First Club',
 'Complete guide to launching a new club from ideation to first meeting.',
 'Getting Started',
 'Beginner',
 '30 minutes',
 892,
 78,
 '2026-01-15'),

('u50e8400-e29b-41d4-a716-446655440002',
 'Club Officer Best Practices',
 'Essential leadership skills and responsibilities for club officers.',
 'Leadership',
 'Beginner',
 '45 minutes',
 1247,
 94,
 '2026-01-20'),

('u50e8400-e29b-41d4-a716-446655440003',
 'Effective Member Recruitment',
 'Strategies to attract and retain members throughout the school year.',
 'Management',
 'Intermediate',
 '25 minutes',
 735,
 81,
 '2026-02-01'),

('u50e8400-e29b-41d4-a716-446655440004',
 'Running Productive Meetings',
 'Structure your club meetings for maximum engagement and outcomes.',
 'Management',
 'Beginner',
 '20 minutes',
 654,
 72,
 '2026-02-05'),

('u50e8400-e29b-41d4-a716-446655440005',
 'Event Planning 101',
 'Step-by-step guide to organizing successful club events.',
 'Events',
 'Intermediate',
 '40 minutes',
 823,
 86,
 '2026-02-10');

-- ======================== QUIZ QUESTIONS ========================

INSERT INTO quiz_questions (id, question, question_type, options, sort_order) VALUES
('v50e8400-e29b-41d4-a716-446655440001',
 'What activities interest you most?',
 'multiple',
 '[
   {"id": "academic", "text": "Academic competitions"},
   {"id": "creative", "text": "Creative arts"},
   {"id": "service", "text": "Community service"},
   {"id": "tech", "text": "Technology & Engineering"},
   {"id": "sports", "text": "Sports & Recreation"}
 ]'::jsonb,
 1),

('v50e8400-e29b-41d4-a716-446655440002',
 'How often would you like to meet?',
 'single',
 '[
   {"id": "daily", "text": "Daily"},
   {"id": "weekly", "text": "Weekly"},
   {"id": "biweekly", "text": "Bi-weekly"},
   {"id": "monthly", "text": "Monthly"}
 ]'::jsonb,
 2),

('v50e8400-e29b-41d4-a716-446655440003',
 'What time works best for you?',
 'single',
 '[
   {"id": "before", "text": "Before school"},
   {"id": "lunch", "text": "During lunch"},
   {"id": "after", "text": "After school"},
   {"id": "weekend", "text": "Weekends"}
 ]'::jsonb,
 3);

COMMIT;

-- ============================================================
-- END OF SEED DATA
-- ============================================================
