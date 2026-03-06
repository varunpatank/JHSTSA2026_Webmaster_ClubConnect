-- ============================================================
-- ClubConnect Supabase Seed Data
-- Populated from lib/data.ts, exampleData.ts, hubData.ts, pageData.ts
-- Generated: March 5, 2026
-- ============================================================

BEGIN;

DO $$
DECLARE
  -- Locations
  loc_main        uuid;
  loc_science     uuid;
  loc_arts        uuid;
  loc_tech        uuid;
  loc_gym         uuid;
  loc_library     uuid;
  loc_student     uuid;

  -- Tags
  tag_competition uuid;
  tag_leadership  uuid;
  tag_service     uuid;
  tag_technology  uuid;
  tag_arts        uuid;
  tag_stem        uuid;
  tag_business    uuid;
  tag_debate      uuid;
  tag_env         uuid;
  tag_cultural    uuid;

  -- Contact Methods
  cm_tsa          uuid;
  cm_robotics     uuid;
  cm_mun          uuid;
  cm_drama        uuid;
  cm_debate       uuid;
  cm_science      uuid;
  cm_art          uuid;
  cm_eco          uuid;
  cm_cs           uuid;
  cm_math         uuid;

  -- Meeting Schedules
  ms_tue_330      uuid;
  ms_wed_400      uuid;
  ms_thu_300      uuid;
  ms_mon_330      uuid;
  ms_fri_400      uuid;
  ms_wed_330      uuid;
  ms_tue_400      uuid;

  -- Organizations
  org_tsa         uuid;
  org_robotics    uuid;
  org_mun         uuid;
  org_drama       uuid;
  org_debate      uuid;
  org_science     uuid;
  org_art         uuid;
  org_env         uuid;
  org_service     uuid;
  org_math        uuid;

BEGIN

  -- ======================== LOCATIONS ========================

  INSERT INTO locations (building, room, lat, lng) VALUES ('Main Building', 'Room 204', 47.7511, -122.2015) RETURNING id INTO loc_main;
  INSERT INTO locations (building, room, lat, lng) VALUES ('Science Wing', 'Lab 101', 47.7512, -122.2016) RETURNING id INTO loc_science;
  INSERT INTO locations (building, room, lat, lng) VALUES ('Arts Building', 'Theater', 47.7513, -122.2017) RETURNING id INTO loc_arts;
  INSERT INTO locations (building, room, lat, lng) VALUES ('Technology Wing', 'Room 305', 47.7514, -122.2018) RETURNING id INTO loc_tech;
  INSERT INTO locations (building, room, lat, lng) VALUES ('Gymnasium', 'Main Court', 47.7515, -122.2019) RETURNING id INTO loc_gym;
  INSERT INTO locations (building, room, lat, lng) VALUES ('Library', 'Meeting Room A', 47.7516, -122.2020) RETURNING id INTO loc_library;
  INSERT INTO locations (building, room, lat, lng) VALUES ('Student Center', 'Room 150', 47.7517, -122.2021) RETURNING id INTO loc_student;

  -- ======================== TAGS ========================

  INSERT INTO tags (name) VALUES ('Competition') RETURNING id INTO tag_competition;
  INSERT INTO tags (name) VALUES ('Leadership') RETURNING id INTO tag_leadership;
  INSERT INTO tags (name) VALUES ('Community Service') RETURNING id INTO tag_service;
  INSERT INTO tags (name) VALUES ('Technology') RETURNING id INTO tag_technology;
  INSERT INTO tags (name) VALUES ('Arts') RETURNING id INTO tag_arts;
  INSERT INTO tags (name) VALUES ('STEM') RETURNING id INTO tag_stem;
  INSERT INTO tags (name) VALUES ('Business') RETURNING id INTO tag_business;
  INSERT INTO tags (name) VALUES ('Debate') RETURNING id INTO tag_debate;
  INSERT INTO tags (name) VALUES ('Environmental') RETURNING id INTO tag_env;
  INSERT INTO tags (name) VALUES ('Cultural') RETURNING id INTO tag_cultural;

  -- ======================== CONTACT METHODS ========================

  INSERT INTO contact_methods (emails, insta, discord, website) VALUES (ARRAY['tsa@school.edu'], '@school_tsa', 'discord.gg/schooltsa', 'https://schooltsa.org') RETURNING id INTO cm_tsa;
  INSERT INTO contact_methods (emails, insta, discord, website) VALUES (ARRAY['robotics@school.edu'], '@school_robotics', NULL, 'https://schoolrobotics.org') RETURNING id INTO cm_robotics;
  INSERT INTO contact_methods (emails, insta, discord, website) VALUES (ARRAY['modelun@school.edu'], '@school_mun', NULL, NULL) RETURNING id INTO cm_mun;
  INSERT INTO contact_methods (emails, insta, discord, website) VALUES (ARRAY['drama@school.edu'], '@school_drama', NULL, NULL) RETURNING id INTO cm_drama;
  INSERT INTO contact_methods (emails, insta, discord, website) VALUES (ARRAY['debate@school.edu'], '@school_debate', 'discord.gg/schooldebate', NULL) RETURNING id INTO cm_debate;
  INSERT INTO contact_methods (emails, insta, discord, website) VALUES (ARRAY['science@school.edu'], '@school_science', NULL, NULL) RETURNING id INTO cm_science;
  INSERT INTO contact_methods (emails, insta, discord, website) VALUES (ARRAY['art@school.edu'], '@school_art', NULL, NULL) RETURNING id INTO cm_art;
  INSERT INTO contact_methods (emails, insta, discord, website) VALUES (ARRAY['eco@school.edu'], '@school_eco', NULL, NULL) RETURNING id INTO cm_eco;
  INSERT INTO contact_methods (emails, insta, discord, website) VALUES (ARRAY['cs@school.edu'], '@school_cs', NULL, NULL) RETURNING id INTO cm_cs;
  INSERT INTO contact_methods (emails, insta, discord, website) VALUES (ARRAY['math@school.edu'], '@school_math', NULL, NULL) RETURNING id INTO cm_math;

  -- ======================== MEETING SCHEDULES ========================

  INSERT INTO meeting_schedules (day_of_week, time, frequency) VALUES ('Tuesday', '15:30', 'Weekly') RETURNING id INTO ms_tue_330;
  INSERT INTO meeting_schedules (day_of_week, time, frequency) VALUES ('Wednesday', '16:00', 'Weekly') RETURNING id INTO ms_wed_400;
  INSERT INTO meeting_schedules (day_of_week, time, frequency) VALUES ('Thursday', '15:00', 'Weekly') RETURNING id INTO ms_thu_300;
  INSERT INTO meeting_schedules (day_of_week, time, frequency) VALUES ('Monday', '15:30', 'Weekly') RETURNING id INTO ms_mon_330;
  INSERT INTO meeting_schedules (day_of_week, time, frequency) VALUES ('Friday', '16:00', 'Bi-weekly') RETURNING id INTO ms_fri_400;
  INSERT INTO meeting_schedules (day_of_week, time, frequency) VALUES ('Wednesday', '15:30', 'Weekly') RETURNING id INTO ms_wed_330;
  INSERT INTO meeting_schedules (day_of_week, time, frequency) VALUES ('Tuesday', '16:00', 'Weekly') RETURNING id INTO ms_tue_400;

  -- ======================== ORGANIZATIONS (CHAPTERS) ========================

  INSERT INTO organizations (
    name, slug, description, location_id, contact_methods_id, category,
    meeting_frequency, membership_status, grade_level, meeting_time,
    meeting_schedule_text, member_count, logo, color, is_published, is_active
  ) VALUES (
    'Technology Student Association',
    'tsa',
    'National organization for middle and high school students engaged in STEM. TSA''s membership includes over 233,000 students in approximately 2,000 schools spanning 48 states.',
    loc_main, cm_tsa, 'STEM', 'Weekly', 'Open Enrollment', 'All Grades', 'After School',
    'Every Tuesday, 3:30 PM - 4:30 PM', 45, '🔧', 'bg-blue-600', true, true
  ) RETURNING id INTO org_tsa;

  INSERT INTO organizations (
    name, slug, description, location_id, contact_methods_id, category,
    meeting_frequency, membership_status, grade_level, meeting_time,
    meeting_schedule_text, member_count, logo, color, is_published, is_active
  ) VALUES (
    'Robotics Team',
    'robotics',
    'Design, build, and program competitive robots. Participate in regional and national competitions while developing engineering and teamwork skills.',
    loc_science, cm_robotics, 'STEM', 'Weekly', 'Open Enrollment', 'All Grades', 'After School',
    'Every Wednesday, 4:00 PM - 6:00 PM', 35, '🤖', 'bg-indigo-600', true, true
  ) RETURNING id INTO org_robotics;

  INSERT INTO organizations (
    name, slug, description, location_id, contact_methods_id, category,
    meeting_frequency, membership_status, grade_level, meeting_time,
    meeting_schedule_text, member_count, logo, color, is_published, is_active
  ) VALUES (
    'Model United Nations',
    'model-un',
    'Simulate UN committee sessions to debate and resolve world issues. Develop diplomacy, public speaking, and international relations skills.',
    loc_library, cm_mun, 'Academic', 'Weekly', 'Open Enrollment', 'All Grades', 'After School',
    'Every Thursday, 3:00 PM - 4:30 PM', 52, '🌍', 'bg-purple-600', true, true
  ) RETURNING id INTO org_mun;

  INSERT INTO organizations (
    name, slug, description, location_id, contact_methods_id, category,
    meeting_frequency, membership_status, grade_level, meeting_time,
    meeting_schedule_text, member_count, logo, color, is_published, is_active
  ) VALUES (
    'Drama Club',
    'drama',
    'Theater productions, acting workshops, and performing arts. Two full productions per year plus showcases and workshops.',
    loc_arts, cm_drama, 'Arts', 'Bi-weekly', 'Open Enrollment', 'All Grades', 'After School',
    'Every Monday, 3:30 PM - 5:30 PM', 28, '🎭', 'bg-pink-600', true, true
  ) RETURNING id INTO org_drama;

  INSERT INTO organizations (
    name, slug, description, location_id, contact_methods_id, category,
    meeting_frequency, membership_status, grade_level, meeting_time,
    meeting_schedule_text, member_count, logo, color, is_published, is_active
  ) VALUES (
    'Debate Team',
    'debate',
    'Competitive speech and debate team. Policy debate, Lincoln-Douglas, Public Forum, and original oratory. Regional and state competitions.',
    loc_library, cm_debate, 'Academic', 'Weekly', 'Tryout Required', 'All Grades', 'After School',
    'Every Friday, 4:00 PM - 5:30 PM', 22, '🎤', 'bg-red-600', true, true
  ) RETURNING id INTO org_debate;

  INSERT INTO organizations (
    name, slug, description, location_id, contact_methods_id, category,
    meeting_frequency, membership_status, grade_level, meeting_time,
    meeting_schedule_text, member_count, logo, color, is_published, is_active
  ) VALUES (
    'Science Olympiad',
    'science-olympiad',
    'National STEM competition featuring 23 team events in various science disciplines. Build devices, complete lab activities, and take science tests.',
    loc_science, cm_science, 'STEM', 'Weekly', 'Application Required', 'All Grades', 'After School',
    'Every Wednesday, 3:30 PM - 5:00 PM', 30, '🔬', 'bg-green-600', true, true
  ) RETURNING id INTO org_science;

  INSERT INTO organizations (
    name, slug, description, location_id, contact_methods_id, category,
    meeting_frequency, membership_status, grade_level, meeting_time,
    meeting_schedule_text, member_count, logo, color, is_published, is_active
  ) VALUES (
    'Art Club',
    'art-club',
    'Creative expression through various media. Painting, drawing, sculpture, digital art. Host exhibitions and participate in art shows.',
    loc_student, cm_art, 'Arts', 'Weekly', 'Open Enrollment', 'All Grades', 'After School',
    'Every Tuesday, 4:00 PM - 5:00 PM', 30, '🎨', 'bg-amber-600', true, true
  ) RETURNING id INTO org_art;

  INSERT INTO organizations (
    name, slug, description, location_id, contact_methods_id, category,
    meeting_frequency, membership_status, grade_level, meeting_time,
    meeting_schedule_text, member_count, logo, color, is_published, is_active
  ) VALUES (
    'Environmental Club',
    'environmental',
    'Promote sustainability and environmental awareness. Beach cleanups, recycling programs, garden maintenance, and advocacy.',
    loc_student, cm_eco, 'Service', 'Bi-weekly', 'Open Enrollment', 'All Grades', 'After School',
    'Every other Wednesday, 3:30 PM - 4:30 PM', 25, '🌱', 'bg-teal-600', true, true
  ) RETURNING id INTO org_env;

  INSERT INTO organizations (
    name, slug, description, location_id, contact_methods_id, category,
    meeting_frequency, membership_status, grade_level, meeting_time,
    meeting_schedule_text, member_count, logo, color, is_published, is_active
  ) VALUES (
    'Community Service Club',
    'community-service',
    'Service projects supporting local community organizations. Food drives, tutoring programs, senior center visits, and volunteer opportunities.',
    loc_student, cm_cs, 'Service', 'Weekly', 'Open Enrollment', 'All Grades', 'After School',
    'Every Thursday, 3:30 PM - 4:30 PM', 40, '🤝', 'bg-green-600', true, true
  ) RETURNING id INTO org_service;

  INSERT INTO organizations (
    name, slug, description, location_id, contact_methods_id, category,
    meeting_frequency, membership_status, grade_level, meeting_time,
    meeting_schedule_text, member_count, logo, color, is_published, is_active
  ) VALUES (
    'Math League',
    'math-league',
    'Competitive mathematics team. Problem-solving competitions, AMC preparation, and peer tutoring.',
    loc_library, cm_math, 'Academic', 'Weekly', 'Open Enrollment', 'All Grades', 'After School',
    'Every Monday, 3:30 PM - 4:30 PM', 24, '📐', 'bg-indigo-600', true, true
  ) RETURNING id INTO org_math;

  -- ======================== ORGANIZATION MEETING SCHEDULES ========================

  INSERT INTO organization_meeting_schedules (organization_id, meeting_schedule_id) VALUES
  (org_tsa,      ms_tue_330),
  (org_robotics, ms_wed_400),
  (org_mun,      ms_thu_300),
  (org_drama,    ms_mon_330),
  (org_debate,   ms_fri_400),
  (org_science,  ms_wed_400),
  (org_art,      ms_tue_330),
  (org_env,      ms_wed_400),
  (org_service,  ms_thu_300),
  (org_math,     ms_mon_330);

  -- ======================== ORGANIZATION TAGS ========================

  INSERT INTO organization_tags (organization_id, tag_id) VALUES
  (org_tsa,      tag_competition),
  (org_tsa,      tag_technology),
  (org_tsa,      tag_stem),
  (org_robotics, tag_competition),
  (org_robotics, tag_stem),
  (org_mun,      tag_leadership),
  (org_drama,    tag_arts),
  (org_debate,   tag_competition),
  (org_debate,   tag_debate),
  (org_science,  tag_competition),
  (org_science,  tag_stem),
  (org_art,      tag_arts),
  (org_env,      tag_env),
  (org_service,  tag_service),
  (org_math,     tag_competition);

  -- ======================== ADVISORS ========================

  INSERT INTO advisors (organization_id, name, email, department, phone) VALUES
  (org_tsa,      'Ms. Sarah Johnson',     's.johnson@school.edu',   'Technology',    '555-0101'),
  (org_robotics, 'Mr. David Chen',        'd.chen@school.edu',      'Engineering',   '555-0102'),
  (org_mun,      'Dr. Emily Rodriguez',   'e.rodriguez@school.edu', 'Social Studies','555-0103'),
  (org_drama,    'Ms. Jennifer Martinez', 'j.martinez@school.edu',  'Drama',         '555-0104'),
  (org_debate,   'Mr. Robert Williams',   'r.williams@school.edu',  'English',       '555-0105'),
  (org_science,  'Dr. Lisa Anderson',     'l.anderson@school.edu',  'Science',       '555-0106'),
  (org_art,      'Ms. Rachel Kim',        'r.kim@school.edu',       'Art',           '555-0107'),
  (org_env,      'Mr. James Taylor',      'j.taylor@school.edu',    'Science',       '555-0108'),
  (org_service,  'Ms. Patricia Wilson',   'p.wilson@school.edu',    'Counseling',    '555-0109'),
  (org_math,     'Mr. Michael Brown',     'm.brown@school.edu',     'Mathematics',   '555-0110');

  -- ======================== EVENTS ========================

  INSERT INTO events (
    title, description, date, start_time, end_time, location,
    organization_id, organization_name, category, event_type,
    is_public, requires_rsvp, created_at
  ) VALUES
  ('TSA State Conference',
   'Annual Technology Student Association state competition with various tech events.',
   '2026-03-15', '08:00', '17:00', 'Convention Center',
   org_tsa, 'Technology Student Association', 'STEM', 'Competition',
   true, true, '2026-02-01 10:00:00'),

  ('Spring Club Fair',
   'Meet representatives from all school clubs and organizations.',
   '2026-03-20', '11:00', '14:00', 'Main Gymnasium',
   NULL, 'All Clubs', 'Other', 'Event',
   true, false, '2026-02-15 09:00:00'),

  ('Robotics Showcase',
   'Demonstration of student-built robots and engineering projects.',
   '2026-04-22', '18:00', '20:00', 'Engineering Lab',
   org_robotics, 'Robotics Team', 'STEM', 'Event',
   true, false, '2026-03-01 15:00:00'),

  ('Spring Musical Performance',
   'Drama Club presents their spring production.',
   '2026-04-12', '19:00', '21:30', 'Theater',
   org_drama, 'Drama Club', 'Arts', 'Event',
   true, true, '2026-02-20 11:00:00'),

  ('Model UN Conference',
   'Regional Model United Nations conference and debate.',
   '2026-03-08', '09:00', '16:00', 'University Campus',
   org_mun, 'Model United Nations', 'Academic', 'Competition',
   true, true, '2026-02-10 08:00:00'),

  ('Art Exhibition Opening',
   'Opening reception for student art exhibition.',
   '2026-05-01', '18:00', '20:00', 'Art Gallery',
   org_art, 'Art Club', 'Arts', 'Event',
   true, false, '2026-03-15 10:00:00');

  -- ======================== ANNOUNCEMENTS ========================

  INSERT INTO announcements (title, content, date, priority, author, pinned, organization_id) VALUES
  ('Club Fair Next Week!',
   'Don''t miss the Spring Club Fair on March 20th in the Main Gymnasium. Meet representatives from all clubs and sign up for next year!',
   '2026-03-05', 'high', 'Student Activities Office', true, NULL),

  ('Webmaster Project Deadline',
   'All Webmaster teams must submit their projects by February 20th. Make sure to review the rubric before submission.',
   '2026-02-07', 'high', 'Ms. Sarah Johnson', true, org_tsa),

  ('Competition Registration Open',
   'Sign up for individual events for regionals! Registration closes February 15th.',
   '2026-02-05', 'medium', 'Alex Martinez', false, org_tsa),

  ('New Grant Opportunities',
   'Three new grants are now available for clubs. Check the Funding page for details and deadlines.',
   '2026-02-10', 'medium', 'Financial Office', false, NULL);

  -- ======================== BUDGET ALLOCATIONS ========================

  INSERT INTO budget_allocations (organization_id, allocated, spent, fiscal_year) VALUES
  (org_mun,      3500.00, 2100.00, '2025-2026'),
  (org_robotics, 8000.00, 5500.00, '2025-2026'),
  (org_drama,    4500.00, 3200.00, '2025-2026'),
  (org_service,  1500.00,  800.00, '2025-2026'),
  (org_debate,   2500.00, 1900.00, '2025-2026'),
  (org_env,      1200.00,  650.00, '2025-2026');

  -- ======================== PURCHASE REQUESTS ========================

  INSERT INTO purchase_requests (organization_id, item, amount, status, date) VALUES
  (org_robotics, 'Motor Controllers (x5)', 450.00, 'Pending',  '2026-01-10'),
  (org_drama,    'Costume Materials',       320.00, 'Approved', '2026-01-08'),
  (org_mun,      'Conference Registration', 800.00, 'Pending',  '2026-01-05');

  -- ======================== CLUB HEALTH METRICS ========================

  INSERT INTO club_health_metrics (
    organization_id, overall_score, member_engagement,
    event_frequency, member_retention, leadership_development,
    community_impact, financial_health, total_members,
    active_members, events_this_month, new_members_last_30,
    recommendations
  ) VALUES
  (org_mun,      95, 98, 95, 92, 96, 90, 95, 52, 48, 4, 6,
   ARRAY['Excellent performance across all metrics', 'Consider expanding leadership roles']),
  (org_robotics, 92, 95, 90, 88, 94, 92, 90, 35, 32, 3, 4,
   ARRAY['Strong performance overall', 'Focus on member retention strategies']),
  (org_drama,    88, 85, 92, 86, 88, 85, 90, 28, 24, 5, 3,
   ARRAY['Good performance', 'Improve member engagement through interactive activities']),
  (org_debate,   85, 88, 82, 85, 90, 80, 85, 22, 20, 2, 2,
   ARRAY['Solid performance', 'Increase event frequency for better engagement']),
  (org_env,      72, 68, 75, 70, 75, 80, 70, 25, 18, 2, 1,
   ARRAY['Fair performance', 'Focus on member engagement', 'Consider member feedback surveys']);

  -- ======================== COLLABORATIONS ========================

  INSERT INTO collaborations (
    title, description, host_organization_id, type, categories,
    requirements, benefits, proposed_date, deadline,
    max_participants, status
  ) VALUES
  ('STEM Career Fair Partnership',
   'Joint career fair bringing industry professionals to speak with students.',
   org_tsa, 'Joint Event', ARRAY['STEM', 'Academic']::org_category[],
   ARRAY['STEM-focused clubs', 'Minimum 5 volunteers'],
   ARRAY['Industry connections', 'Resume review', 'Networking'],
   '2026-04-10', '2026-03-15', 5, 'Open'),

  ('Spring Arts Showcase',
   'Combined exhibition and performance featuring multiple arts clubs.',
   org_drama, 'Joint Event', ARRAY['Arts', 'Media']::org_category[],
   ARRAY['Arts/Performance clubs', 'Venue space contribution'],
   ARRAY['Shared audience', 'Joint publicity', 'Resource sharing'],
   '2026-05-15', '2026-04-01', 4, 'Open'),

  ('Earth Day Cleanup Initiative',
   'Multi-club community service event focused on environmental action.',
   org_env, 'Community Service', ARRAY['Service', 'Environmental']::org_category[],
   ARRAY['Any club interested in service', 'Minimum 10 volunteers'],
   ARRAY['Service hours', 'Community impact', 'Team building'],
   '2026-04-22', '2026-04-15', NULL, 'Open');

  -- ======================== SUCCESS STORIES ========================

  INSERT INTO success_stories (
    title, summary, full_story, organization_id, author_name, author_role,
    category, tags, featured, likes, date_published
  ) VALUES
  ('From Club Member to Tech Entrepreneur',
   'How TSA skills helped me launch my startup',
   'My journey in Technology Student Association taught me more than just coding and engineering skills. The competitions, leadership opportunities, and collaborative projects prepared me for the challenges of running a tech startup. When I founded my company in college, I drew directly on the project management, presentation skills, and technical expertise I developed through TSA. The network I built continues to be invaluable.',
   org_tsa, 'Sarah Chen', 'Class of 2020', 'Alumni Career',
   ARRAY['entrepreneurship', 'technology', 'career'], true, 156, '2026-01-15'),

  ('Leadership Lessons That Shaped My Career',
   'The business skills I learned in FBLA',
   'Serving as chapter president taught me more about leadership than any classroom ever could. Managing a team, organizing events, handling conflicts, and balancing multiple priorities - these real-world experiences prepared me for my career in business. The confidence I gained speaking in front of groups and making executive decisions has been instrumental in my professional success.',
   NULL, 'Michael Brown', 'Class of 2018', 'Leadership Journey',
   ARRAY['leadership', 'business', 'career'], false, 89, '2026-01-20'),

  ('Winning State Championship Through Teamwork',
   'Our robotics team''s journey to victory',
   'After two years of competing and falling short, our robotics team finally won the state championship. The key wasn''t just technical skills - it was learning to work together effectively. We implemented better communication systems, created clear role definitions, and supported each other through setbacks. The lessons about perseverance, collaboration, and continuous improvement apply far beyond robotics.',
   org_robotics, 'Alex Thompson', 'Team Captain', 'Competition Victory',
   ARRAY['robotics', 'teamwork', 'competition'], true, 243, '2026-02-01');

  -- ======================== DISCUSSIONS ========================

  INSERT INTO discussions (
    title, content, author_name, organization_id, category,
    tags, views, likes, is_pinned, created_at, updated_at
  ) VALUES
  ('Tips for recruiting new members at the beginning of the year?',
   'Our club lost a lot of seniors last year and we need to rebuild. What strategies have worked for you to attract new members during club fair and the first few weeks of school?',
   'Sarah Chen', NULL, 'Recruiting',
   ARRAY['recruiting', 'membership', 'growth'], 234, 18, true,
   '2026-02-09 10:30:00', '2026-02-09 14:20:00'),

  ('How to handle disagreements between officers?',
   'Two of our officers have very different visions for the club direction and it''s causing tension. Looking for advice on conflict resolution in leadership teams.',
   'Jordan Lee', NULL, 'Leadership',
   ARRAY['leadership', 'conflict', 'teamwork'], 156, 24, false,
   '2026-02-08 16:00:00', '2026-02-08 17:30:00'),

  ('Best fundraising ideas that actually work?',
   'We need to raise $500 for our upcoming competition. What fundraisers have been most successful for your clubs? Looking for ideas beyond the usual bake sales.',
   'Alex Martinez', org_tsa, 'Fundraising',
   ARRAY['fundraising', 'money', 'competition'], 312, 31, false,
   '2026-02-08 09:15:00', '2026-02-08 12:45:00'),

  ('Virtual club meetings - how do you keep them engaging?',
   'We still have some hybrid members who attend virtually. What tools and techniques do you use to keep online participants engaged?',
   'Nina Okafor', NULL, 'Meetings',
   ARRAY['virtual', 'meetings', 'hybrid', 'engagement'], 178, 11, false,
   '2026-02-07 14:30:00', '2026-02-07 14:30:00'),

  ('TSA Webmaster Competition - Theme Interpretation',
   'How are other teams interpreting the "Community Resource Hub" theme? Looking to exchange ideas without giving away competitive secrets!',
   'David Kim', org_tsa, 'Competitions',
   ARRAY['tsa', 'webmaster', 'competition', 'theme'], 445, 52, true,
   '2026-02-06 11:00:00', '2026-02-06 13:15:00');

END $$;

-- ======================== PROPOSALS ========================

INSERT INTO proposals (
  id, chapter_name, slug, mission_statement, proposed_advisor, submitter_name,
  status, created_at, updated_at
) VALUES
(gen_random_uuid(),
 'Photography Club', 'photography-club',
 'To foster appreciation for photography as an art form and develop technical skills.',
 'Ms. Rachel Kim', 'Emily Chen', 'Under Review',
 '2026-01-10 10:00:00', '2026-01-10 10:00:00'),

(gen_random_uuid(),
 'Chess Club', 'chess-club',
 'To promote strategic thinking and competitive chess playing.',
 'Mr. Michael Brown', 'Marcus Johnson', 'Submitted',
 '2026-01-08 14:30:00', '2026-01-08 14:30:00'),

(gen_random_uuid(),
 'Entrepreneurship Society', 'entrepreneurship-society',
 'To develop business acumen and entrepreneurial mindset among students.',
 'Ms. Sarah Williams', 'Sarah Williams', 'Under Review',
 '2026-01-05 09:15:00', '2026-01-05 09:15:00');

-- ======================== RESOURCES ========================

INSERT INTO resources (id, title, description, category, date_added, views, helpful) VALUES
(gen_random_uuid(), 'Club Officer Handbook',
 'Complete guide for leading your club effectively, including best practices and templates.',
 'Handbooks', '2025-09-01', 1247, 89),

(gen_random_uuid(), 'Event Planning Templates',
 'Ready-to-use templates for organizing club events, including checklists and schedules.',
 'Templates', '2025-09-15', 856, 72),

(gen_random_uuid(), 'Fundraising Ideas Guide',
 'Creative ways to raise money for your club with proven strategies.',
 'Guides', '2025-10-01', 1092, 95),

(gen_random_uuid(), 'Meeting Agenda Templates',
 'Structure your meetings for maximum productivity with these templates.',
 'Templates', '2025-10-15', 743, 68),

(gen_random_uuid(), 'Social Media Guide for Clubs',
 'Grow your club presence online with effective social media strategies.',
 'Guides', '2025-11-01', 924, 81),

(gen_random_uuid(), 'Member Recruitment Tips',
 'Strategies to attract and retain members throughout the school year.',
 'Guides', '2025-11-15', 1156, 92);

-- ======================== ACHIEVEMENTS ========================

INSERT INTO achievements (id, name, description, icon, category, points, rarity, requirements) VALUES
(gen_random_uuid(), 'First Steps',          'Joined your first club',                   '👟', 'Membership',     50, 'Common',    ARRAY['Join one club']),
(gen_random_uuid(), 'Social Butterfly',     'Joined 3 or more clubs',                   '🦋', 'Membership',    150, 'Uncommon',  ARRAY['Join three clubs']),
(gen_random_uuid(), 'Event Enthusiast',     'Attended 10 club events',                  '🎉', 'Participation', 200, 'Uncommon',  ARRAY['Attend 10 events']),
(gen_random_uuid(), 'Leadership Rising',    'Became a club officer',                    '⭐', 'Leadership',    300, 'Rare',      ARRAY['Elected to officer position']),
(gen_random_uuid(), 'Competition Champion', 'Won a competition',                         '🏆', 'Competition',   500, 'Epic',      ARRAY['Win first place in competition']),
(gen_random_uuid(), 'Perfect Attendance',   'Attended all meetings for a semester',     '📅', 'Participation', 250, 'Rare',      ARRAY['100% attendance for semester']),
(gen_random_uuid(), 'Club Founder',         'Founded a new club',                       '🌟', 'Leadership',   1000, 'Legendary', ARRAY['Successfully establish new club']),
(gen_random_uuid(), 'Community Hero',       'Completed 50 hours of community service',  '🦸', 'Service',       400, 'Epic',      ARRAY['Complete 50 service hours']),
(gen_random_uuid(), 'Mentor',               'Mentored 5 new members',                   '👨‍🏫', 'Leadership', 350, 'Rare',      ARRAY['Mentor 5 members']),
(gen_random_uuid(), 'Event Organizer',      'Organized a major club event',             '📋', 'Leadership',    300, 'Rare',      ARRAY['Successfully organize event']);

-- ======================== COMPETITIONS ========================

INSERT INTO competitions (
  id, name, organization_sponsor, description, category, eligibility,
  registration_deadline, competition_dates, location, location_type,
  entry_fee, prizes, website_url, difficulty, is_featured
) VALUES
(gen_random_uuid(),
 'TSA State Conference', 'Technology Student Association',
 'State-level technology and engineering competitions across 40+ events.',
 'STEM', ARRAY['TSA members', 'Grades 9-12'],
 '2026-02-20', 'March 15-17, 2026', 'State Convention Center', 'In-Person',
 '$125 per student', ARRAY['State medals', 'Qualifying for Nationals', 'Scholarships'],
 'https://tsaweb.org', 'Intermediate', true),

(gen_random_uuid(),
 'Science Olympiad Regionals', 'Science Olympiad',
 'Team-based science competition with 23 different events.',
 'STEM', ARRAY['Science Olympiad members', 'All grades'],
 '2026-01-30', 'February 25, 2026', 'University Science Building', 'In-Person',
 '$150 per team', ARRAY['Regional medals', 'State qualification'],
 'https://soinc.org', 'Advanced', true),

(gen_random_uuid(),
 'Model UN Regional Conference', 'United Nations Association',
 'Simulate UN committees and debate global issues.',
 'Academic', ARRAY['Model UN members', 'Grades 9-12'],
 '2026-02-15', 'March 8-9, 2026', 'Downtown Conference Center', 'In-Person',
 '$80 per delegate', ARRAY['Best Delegate awards', 'Outstanding Position Papers'],
 'https://modelun.org', 'Intermediate', false),

(gen_random_uuid(),
 'National Debate Tournament', 'National Speech & Debate Association',
 'Policy, LD, and Public Forum debate competition.',
 'Academic', ARRAY['Debate team members', 'Qualified competitors'],
 '2026-03-01', 'April 15-18, 2026', 'Multiple locations', 'In-Person',
 '$200 per competitor', ARRAY['National champion titles', 'College scholarships'],
 'https://speechanddebate.org', 'Elite', true);

-- ======================== MENTORS ========================

INSERT INTO mentors (
  id, name, type, title, organization_name, bio, expertise,
  availability, email, sessions_completed, rating
) VALUES
(gen_random_uuid(),
 'Greg Shelton', 'Advisor', 'Technology Teacher', 'Juanita HS Webmaster',
 'Advisor with 10+ years experience mentoring Webmaster teams.',
 ARRAY['Web Development', 'TSA Competitions', 'Team Leadership'],
 'Available', 'gshelton@lwsd.org', 45, 4.8),

(gen_random_uuid(),
 'Jessica Chen', 'Alumni', 'Policy Analyst', 'Model United Nations',
 'Georgetown graduate who was MUN president. Now works in international relations.',
 ARRAY['International Relations', 'Public Speaking', 'Diplomacy'],
 'Limited', 'j.chen@email.com', 12, 4.9),

(gen_random_uuid(),
 'Marcus Williams', 'Alumni', 'Robotics Engineer at Boston Dynamics', 'Robotics Team',
 'MIT graduate who led championship robotics team. Expert in mechanical engineering.',
 ARRAY['Robotics', 'Engineering', 'Competition Strategy'],
 'Available', 'm.williams@email.com', 28, 4.7),

(gen_random_uuid(),
 'Sarah Martinez', 'Alumni', 'Non-profit Director', 'Community Service Club',
 'UC Berkeley graduate specializing in social work and community organizing.',
 ARRAY['Community Service', 'Non-profit Management', 'Event Planning'],
 'Full', 's.martinez@email.com', 56, 4.9);

-- ======================== ALUMNI ========================

INSERT INTO alumni (id, name, grad_year, chapter, college, major, career, available) VALUES
(gen_random_uuid(), 'Jessica Chen',       2022, 'Model United Nations',          'Georgetown University', 'International Relations', 'Policy Analyst',                       true),
(gen_random_uuid(), 'Marcus Williams',    2021, 'Robotics Team',                  'MIT',                   'Mechanical Engineering',  'Robotics Engineer at Boston Dynamics', true),
(gen_random_uuid(), 'Sarah Martinez',     2020, 'Community Service Club',         'UC Berkeley',           'Social Work',             'Non-profit Director',                  false),
(gen_random_uuid(), 'Dr. Jennifer Walsh', 2015, 'Technology Student Association', 'Stanford University',   'Computer Science',        'Software Engineer at Google',          true),
(gen_random_uuid(), 'Marcus Thompson',    2017, 'Future Business Leaders',        'Wharton School',        'Finance',                 'Investment Banker',                    true),
(gen_random_uuid(), 'Amanda Lee',         2019, 'Drama Club',                     'Juilliard',             'Theater Performance',     'Broadway Performer',                   true);

-- ======================== GRANTS ========================

INSERT INTO grants (id, title, amount, deadline, description, eligibility) VALUES
(gen_random_uuid(),
 'Innovation Grant', '$2,500', '2026-02-15',
 'For chapters developing new technology or innovative programs.',
 'STEM and Academic chapters'),

(gen_random_uuid(),
 'Community Impact Award', '$1,500', '2026-03-01',
 'For chapters with outstanding community service projects.',
 'Service and Cultural chapters'),

(gen_random_uuid(),
 'Arts Enrichment Fund', '$2,000', '2026-02-28',
 'Support for arts programs, productions, and equipment.',
 'Arts and Media chapters');

-- ======================== CLUB IDEAS ========================

INSERT INTO club_ideas (
  id, name, tagline, description, category, target_audience,
  estimated_interest, startup_cost, difficulty_to_start,
  suggested_activities, votes
) VALUES
(gen_random_uuid(),
 'Coffee & Coding Club', 'Learn to code in a relaxed, social environment',
 'A club where students can learn programming languages, work on projects together, and enjoy refreshments while coding.',
 'STEM', ARRAY['Beginners interested in coding', 'Students interested in computer science'],
 'High', 'Low - $50', 'Easy',
 ARRAY['Weekly coding challenges', 'Hackathons', 'Guest speakers from tech industry', 'Build apps for school clubs'],
 42),

(gen_random_uuid(),
 'Meditation & Mindfulness Club', 'Find calm in the chaos of high school',
 'A weekly gathering to practice meditation, mindfulness techniques, and stress management strategies.',
 'Other', ARRAY['Students interested in mental wellness', 'Anyone feeling stressed'],
 'Medium', 'Free', 'Easy',
 ARRAY['Guided meditation sessions', 'Breathing exercises', 'Guest wellness speakers', 'Stress management workshops'],
 38),

(gen_random_uuid(),
 'Film Production Club', 'Lights, camera, action!',
 'Create short films, documentaries, and video content for the school and local community.',
 'Media', ARRAY['Students interested in filmmaking', 'Aspiring directors and editors'],
 'Medium', 'Medium - $200', 'Moderate',
 ARRAY['Script writing workshops', 'Film production projects', 'Film festival participation', 'Equipment training'],
 31),

(gen_random_uuid(),
 'Cooking & Culinary Arts Club', 'Where food meets friendship',
 'Learn cooking techniques, explore world cuisines, and prepare food for school events.',
 'Other', ARRAY['Food enthusiasts', 'Future chefs', 'Students interested in nutrition'],
 'High', 'Medium - $150', 'Moderate',
 ARRAY['Cooking demonstrations', 'Recipe exchanges', 'Bake sales', 'Cultural food celebrations'],
 56);

-- ======================== ACTIVITY LOG ========================

INSERT INTO activity_log (id, action, type, created_at) VALUES
(gen_random_uuid(), 'New member joined Model UN',               'member',       '2026-03-05 08:00:00'),
(gen_random_uuid(), 'Robotics Team updated meeting schedule',   'update',       '2026-03-04 19:00:00'),
(gen_random_uuid(), 'Drama Club event approved',                'event',        '2026-03-04 10:00:00'),
(gen_random_uuid(), 'New proposal submitted: Photography Club', 'proposal',     '2026-03-03 14:00:00'),
(gen_random_uuid(), 'Community Service Club hours verified',    'verification', '2026-03-02 11:00:00');

-- ======================== STARTER GUIDES ========================

INSERT INTO starter_guides (
  id, title, description, category, difficulty, estimated_time,
  views, helpful, date_updated
) VALUES
(gen_random_uuid(), 'Starting Your First Club',    'Complete guide to launching a new club from ideation to first meeting.',   'Getting Started', 'Beginner',     '30 minutes', 892,  78, '2026-01-15'),
(gen_random_uuid(), 'Club Officer Best Practices', 'Essential leadership skills and responsibilities for club officers.',       'Leadership',      'Beginner',     '45 minutes', 1247, 94, '2026-01-20'),
(gen_random_uuid(), 'Effective Member Recruitment','Strategies to attract and retain members throughout the school year.',     'Management',      'Intermediate', '25 minutes', 735,  81, '2026-02-01'),
(gen_random_uuid(), 'Running Productive Meetings', 'Structure your club meetings for maximum engagement and outcomes.',        'Management',      'Beginner',     '20 minutes', 654,  72, '2026-02-05'),
(gen_random_uuid(), 'Event Planning 101',           'Step-by-step guide to organizing successful club events.',               'Events',          'Intermediate', '40 minutes', 823,  86, '2026-02-10');

-- ======================== QUIZ QUESTIONS ========================

INSERT INTO quiz_questions (id, question, question_type, options, sort_order) VALUES
(gen_random_uuid(),
 'What activities interest you most?', 'multiple',
 '[
   {"id": "academic", "text": "Academic competitions"},
   {"id": "creative", "text": "Creative arts"},
   {"id": "service",  "text": "Community service"},
   {"id": "tech",     "text": "Technology & Engineering"},
   {"id": "sports",   "text": "Sports & Recreation"}
 ]'::jsonb, 1),

(gen_random_uuid(),
 'How often would you like to meet?', 'single',
 '[
   {"id": "daily",    "text": "Daily"},
   {"id": "weekly",   "text": "Weekly"},
   {"id": "biweekly", "text": "Bi-weekly"},
   {"id": "monthly",  "text": "Monthly"}
 ]'::jsonb, 2),

(gen_random_uuid(),
 'What time works best for you?', 'single',
 '[
   {"id": "before",  "text": "Before school"},
   {"id": "lunch",   "text": "During lunch"},
   {"id": "after",   "text": "After school"},
   {"id": "weekend", "text": "Weekends"}
 ]'::jsonb, 3);

-- ======================== DISCUSSION REPLIES ========================
-- Joined by title to avoid hardcoded IDs

INSERT INTO discussion_replies (id, discussion_id, content, author_name, likes, is_answer, created_at)
SELECT
  gen_random_uuid(),
  d.id,
  r.content,
  r.author_name,
  r.likes,
  r.is_answer,
  r.created_at
FROM (VALUES
  ('Tips for recruiting new members at the beginning of the year?',
   'We created an interactive demo at our club fair booth - it really helped draw people in! Also, having current members wear club shirts creates visibility.',
   'Marcus Johnson', 12, true, '2026-02-09 11:45:00'::timestamptz),

  ('Tips for recruiting new members at the beginning of the year?',
   'Social media presence before school starts helps a lot. We post teaser content on Instagram over the summer.',
   'Emily Rodriguez', 8, false, '2026-02-09 14:20:00'::timestamptz),

  ('How to handle disagreements between officers?',
   'Schedule a dedicated meeting to discuss the vision openly. Sometimes writing down everyone''s ideas helps depersonalize the conflict.',
   'Dr. Patricia Williams', 15, true, '2026-02-08 17:30:00'::timestamptz),

  ('Best fundraising ideas that actually work?',
   'We did a car wash and made over $800 in one day! The key is picking a high-traffic location and promoting heavily.',
   'Chris Taylor', 9, false, '2026-02-08 10:00:00'::timestamptz),

  ('Best fundraising ideas that actually work?',
   'Spirit wear sales work great for us. We design custom club merchandise and sell it to members and their families.',
   'Maya Patel', 14, true, '2026-02-08 12:45:00'::timestamptz),

  ('TSA Webmaster Competition - Theme Interpretation',
   'We''re focusing on making it actually useful for real students. The key is interactivity and user-created content.',
   'Sophie Zhang', 21, false, '2026-02-06 13:15:00'::timestamptz)
) AS r(discussion_title, content, author_name, likes, is_answer, created_at)
JOIN discussions d ON d.title = r.discussion_title;

COMMIT;

-- ============================================================
-- END OF SEED DATA
-- ============================================================
