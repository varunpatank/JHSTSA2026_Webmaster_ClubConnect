-- ============================================================
-- ClubConnect Supabase Schema
-- Aligned with Notion spec: Organization → Tag, Location,
-- ContactMethods, MeetingSchedule + app feature tables
-- ============================================================

-- ======================== ENUMS ========================

create type user_role as enum ('Student', 'Officer', 'Advisor', 'Admin');
create type org_category as enum ('Academic', 'Arts', 'Service', 'Cultural', 'STEM', 'Sports', 'Leadership', 'Media', 'Business', 'Environmental', 'Social', 'Other');
create type meeting_frequency as enum ('Daily', 'Weekly', 'Bi-weekly', 'Monthly');
create type membership_status as enum ('Open Enrollment', 'Tryout Required', 'Application Required');
create type grade_level as enum ('9th Only', '10th-12th', 'All Grades');
create type meeting_time as enum ('Before School', 'Lunch', 'After School', 'Weekends');
create type day_of_week as enum ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday');
create type proposal_status as enum ('Draft', 'Submitted', 'Under Review', 'Approved', 'Denied', 'Needs Revision');
create type event_type as enum ('Meeting', 'Event', 'Competition', 'Deadline', 'Workshop', 'Social');
create type resource_category as enum ('Templates', 'Training Materials', 'Forms', 'Guides', 'Handbooks');
create type notification_type as enum ('Event Reminder', 'New Resource', 'Competition Deadline', 'Mentorship Update', 'Achievement Unlocked', 'Collaboration Request', 'Announcement');
create type achievement_rarity as enum ('Common', 'Uncommon', 'Rare', 'Epic', 'Legendary');
create type collaboration_type as enum ('Joint Event', 'Fundraiser', 'Community Service', 'Competition Team', 'Workshop', 'Mentorship Exchange', 'Resource Sharing', 'Cross-Promotion');
create type collaboration_status as enum ('Open', 'In Progress', 'Completed', 'Cancelled');
create type mentor_type as enum ('Alumni', 'Current Officer', 'Advisor', 'Community Partner');
create type mentor_availability as enum ('Available', 'Limited', 'Full');
create type mentorship_request_status as enum ('Pending', 'Accepted', 'Declined', 'Completed');
create type competition_difficulty as enum ('Beginner-Friendly', 'Intermediate', 'Advanced', 'Elite');
create type competition_location_type as enum ('In-Person', 'Virtual', 'Hybrid');
create type competition_tracker_status as enum ('Interested', 'Registered', 'Preparing', 'Completed', 'Won');
create type resource_request_status as enum ('Submitted', 'Under Review', 'In Progress', 'Completed', 'Declined');
create type resource_request_urgency as enum ('Low', 'Medium', 'High', 'Critical');
create type success_category as enum ('Personal Growth', 'Competition Victory', 'Community Impact', 'Club Turnaround', 'Innovative Event', 'Leadership Journey', 'Collaboration Success', 'Fundraising Achievement', 'Alumni Career');
create type announcement_priority as enum ('high', 'medium', 'low');

-- ======================== CORE TABLES (Notion Spec) ========================

-- Notion: Location
create table locations (
  id         uuid primary key default gen_random_uuid(),
  building   text not null,
  room       text not null,
  lat        double precision,
  lng        double precision,
  created_at timestamptz not null default now()
);

-- Notion: Tag
create table tags (
  id   uuid primary key default gen_random_uuid(),
  name text not null unique
);

-- Notion: ContactMethods
create table contact_methods (
  id      uuid primary key default gen_random_uuid(),
  emails  text[] not null default '{}',
  insta   text,
  discord text,
  twitter text,
  website text
);

-- Notion: MeetingSchedule
create table meeting_schedules (
  id          uuid primary key default gen_random_uuid(),
  day_of_week day_of_week not null,
  time        text not null,            -- e.g. "15:30"
  frequency   meeting_frequency not null default 'Weekly'
);

-- Notion: Organization (central entity — replaces "Chapter" in app code)
create table organizations (
  id                   uuid primary key default gen_random_uuid(),
  name                 text not null,
  slug                 text not null unique,
  description          text not null check (char_length(description) <= 500),
  parent_organization_id uuid references organizations(id),
  location_id          uuid references locations(id),
  contact_methods_id   uuid references contact_methods(id),
  category             org_category not null default 'Other',
  meeting_frequency    meeting_frequency not null default 'Weekly',
  membership_status    membership_status not null default 'Open Enrollment',
  grade_level          grade_level not null default 'All Grades',
  meeting_time         meeting_time not null default 'After School',
  meeting_schedule_text text,           -- human-readable, e.g. "Every Tuesday, 3:30 PM - 5:00 PM"
  membership_requirements text,
  dues                 text,
  achievements         text[] default '{}',
  photo_gallery        text[] default '{}',
  member_count         int not null default 0,
  founded_year         int,
  logo                 text,            -- emoji or image URL
  color                text,            -- tailwind class, e.g. "bg-blue-600"
  cover_image          text,
  mission              text,
  is_published         boolean not null default false,
  allow_sub_org        boolean not null default false,
  is_active            boolean not null default true,
  created_at           timestamptz not null default now(),
  updated_at           timestamptz not null default now()
);

-- Invariant: cannot publish without at least one meeting schedule
-- Invariant: allow_sub_org requires location_id and contact_methods_id
-- (enforced via application logic or trigger)

-- Junction: Organization ↔ MeetingSchedule (many-to-many)
create table organization_meeting_schedules (
  organization_id    uuid not null references organizations(id) on delete cascade,
  meeting_schedule_id uuid not null references meeting_schedules(id) on delete cascade,
  primary key (organization_id, meeting_schedule_id)
);

-- Junction: Organization ↔ Tag
create table organization_tags (
  organization_id uuid not null references organizations(id) on delete cascade,
  tag_id          uuid not null references tags(id) on delete cascade,
  primary key (organization_id, tag_id)
);

-- ======================== USERS & MEMBERSHIP ========================

-- Profiles (extends Supabase auth.users)
create table profiles (
  id         uuid primary key references auth.users(id) on delete cascade,
  name       text not null,
  email      text not null,
  role       user_role not null default 'Student',
  grade      int check (grade between 9 and 12),
  avatar_url text,
  interests  text[] default '{}',
  bio        text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Members of an organization (with role within that org)
create table organization_members (
  id              uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organizations(id) on delete cascade,
  user_id         uuid not null references profiles(id) on delete cascade,
  role            text not null default 'Member',    -- President, VP, Secretary, etc.
  position        text,                               -- custom title
  attendance      int default 0 check (attendance between 0 and 100),
  dues_paid       boolean not null default false,
  joined_at       timestamptz not null default now(),
  unique (organization_id, user_id)
);

-- Advisors (linked to an org)
create table advisors (
  id              uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organizations(id) on delete cascade,
  name            text not null,
  email           text not null,
  department      text,
  phone           text
);

-- ======================== PROPOSALS (Notion: Submission Workflow) ========================

-- Draft → Approval from Parent Org → Submitted → Under Review → Approved/Denied
create table proposals (
  id                   uuid primary key default gen_random_uuid(),
  chapter_name         text not null,
  slug                 text,
  mission_statement    text,
  proposed_advisor     text,
  justification        text,
  constitution_draft   text,
  first_year_plan      text,
  budget_requirements  text,
  meeting_space_needs  text,
  submitted_by         uuid references profiles(id),
  submitter_name       text,
  parent_organization_id uuid references organizations(id),
  status               proposal_status not null default 'Draft',
  admin_notes          text,
  created_at           timestamptz not null default now(),
  updated_at           timestamptz not null default now()
);

-- ======================== EVENTS ========================

create table events (
  id                uuid primary key default gen_random_uuid(),
  title             text not null,
  description       text,
  date              date not null,
  start_time        text not null,
  end_time          text,
  location          text,
  location_id       uuid references locations(id),
  organization_id   uuid references organizations(id) on delete cascade,
  organization_name text,
  category          org_category,
  event_type        event_type not null default 'Event',
  is_public         boolean not null default true,
  requires_rsvp     boolean not null default false,
  max_attendees     int,
  current_attendees int not null default 0,
  is_recurring      boolean not null default false,
  recurrence_pattern text,
  color             text,
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now()
);

create table event_rsvps (
  id        uuid primary key default gen_random_uuid(),
  event_id  uuid not null references events(id) on delete cascade,
  user_id   uuid not null references profiles(id) on delete cascade,
  status    text not null default 'going' check (status in ('going', 'maybe', 'not_going')),
  created_at timestamptz not null default now(),
  unique (event_id, user_id)
);

-- ======================== RESOURCES ========================

create table resources (
  id           uuid primary key default gen_random_uuid(),
  title        text not null,
  description  text,
  category     resource_category not null,
  file_type    text,
  download_url text,
  date_added   date not null default current_date,
  views        int not null default 0,
  helpful      int not null default 0,
  created_at   timestamptz not null default now()
);

-- ======================== SPOTLIGHTS ========================

create table spotlights (
  id              uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organizations(id) on delete cascade,
  title           text not null,
  content         text not null,
  highlights      text[] default '{}',
  featured_images text[] default '{}',
  date_published  date not null default current_date,
  created_at      timestamptz not null default now()
);

create table spotlight_testimonials (
  id           uuid primary key default gen_random_uuid(),
  spotlight_id uuid not null references spotlights(id) on delete cascade,
  quote        text not null,
  author       text not null,
  role         text not null
);

-- ======================== ANNOUNCEMENTS ========================

create table announcements (
  id         uuid primary key default gen_random_uuid(),
  title      text not null,
  content    text not null,
  date       date not null default current_date,
  priority   announcement_priority not null default 'medium',
  author     text not null,
  pinned     boolean not null default false,
  organization_id uuid references organizations(id) on delete set null,
  created_at timestamptz not null default now()
);

-- ======================== ACHIEVEMENTS ========================

create table achievements (
  id           uuid primary key default gen_random_uuid(),
  name         text not null,
  description  text not null,
  icon         text,
  category     text not null,
  points       int not null default 0,
  rarity       achievement_rarity not null default 'Common',
  requirements text[] default '{}',
  unlocked_by  numeric(5,2) default 0   -- % of users who unlocked
);

create table user_achievements (
  id             uuid primary key default gen_random_uuid(),
  user_id        uuid not null references profiles(id) on delete cascade,
  achievement_id uuid not null references achievements(id) on delete cascade,
  date_earned    timestamptz not null default now(),
  unique (user_id, achievement_id)
);

-- ======================== DISCUSSIONS ========================

create table discussions (
  id              uuid primary key default gen_random_uuid(),
  title           text not null,
  content         text not null,
  author_id       uuid references profiles(id) on delete set null,
  author_name     text,
  organization_id uuid references organizations(id) on delete set null,
  category        text not null default 'General',
  tags            text[] default '{}',
  views           int not null default 0,
  likes           int not null default 0,
  is_pinned       boolean not null default false,
  is_locked       boolean not null default false,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create table discussion_replies (
  id            uuid primary key default gen_random_uuid(),
  discussion_id uuid not null references discussions(id) on delete cascade,
  content       text not null,
  author_id     uuid references profiles(id) on delete set null,
  author_name   text,
  likes         int not null default 0,
  is_answer     boolean not null default false,
  created_at    timestamptz not null default now()
);

-- ======================== COMPETITIONS ========================

create table competitions (
  id                    uuid primary key default gen_random_uuid(),
  name                  text not null,
  organization_sponsor  text,
  description           text,
  category              org_category,
  eligibility           text[] default '{}',
  registration_deadline date,
  competition_dates     text,
  location              text,
  location_type         competition_location_type not null default 'In-Person',
  entry_fee             text,
  prizes                text[] default '{}',
  website_url           text,
  difficulty            competition_difficulty not null default 'Beginner-Friendly',
  team_size             text,
  is_featured           boolean not null default false,
  created_at            timestamptz not null default now()
);

create table competition_resources (
  id             uuid primary key default gen_random_uuid(),
  competition_id uuid not null references competitions(id) on delete cascade,
  title          text not null,
  type           text not null,   -- Guide, Video, Practice, Template, External
  url            text not null
);

create table competition_trackers (
  id              uuid primary key default gen_random_uuid(),
  competition_id  uuid not null references competitions(id) on delete cascade,
  organization_id uuid not null references organizations(id) on delete cascade,
  status          competition_tracker_status not null default 'Interested',
  team_members    text[] default '{}',
  notes           text,
  checklist       jsonb default '[]',   -- [{task, completed}]
  created_at      timestamptz not null default now()
);

-- ======================== MENTORS ========================

create table mentors (
  id                uuid primary key default gen_random_uuid(),
  name              text not null,
  type              mentor_type not null,
  title             text,
  organization_name text,
  bio               text,
  expertise         text[] default '{}',
  chapters_advised  text[] default '{}',
  availability      mentor_availability not null default 'Available',
  contact_method    text,
  email             text,
  linkedin          text,
  sessions_completed int not null default 0,
  rating            numeric(3,2) default 0,
  photo_url         text,
  created_at        timestamptz not null default now()
);

create table mentor_testimonials (
  id        uuid primary key default gen_random_uuid(),
  mentor_id uuid not null references mentors(id) on delete cascade,
  quote     text not null,
  author    text not null,
  role      text,
  date      date
);

create table mentorship_requests (
  id              uuid primary key default gen_random_uuid(),
  mentor_id       uuid not null references mentors(id) on delete cascade,
  mentee_id       uuid references profiles(id) on delete set null,
  mentee_name     text not null,
  mentee_email    text not null,
  chapter_name    text,
  topics          text[] default '{}',
  message         text,
  preferred_schedule text,
  status          mentorship_request_status not null default 'Pending',
  created_at      timestamptz not null default now()
);

-- ======================== COLLABORATIONS ========================

create table collaborations (
  id                   uuid primary key default gen_random_uuid(),
  title                text not null,
  description          text,
  host_organization_id uuid not null references organizations(id) on delete cascade,
  type                 collaboration_type not null,
  categories           org_category[] default '{}',
  requirements         text[] default '{}',
  benefits             text[] default '{}',
  proposed_date        date,
  deadline             date,
  max_participants     int,
  current_interest     int not null default 0,
  status               collaboration_status not null default 'Open',
  created_at           timestamptz not null default now()
);

create table collaboration_interest (
  id              uuid primary key default gen_random_uuid(),
  collaboration_id uuid not null references collaborations(id) on delete cascade,
  organization_id uuid not null references organizations(id) on delete cascade,
  date_expressed  timestamptz not null default now(),
  unique (collaboration_id, organization_id)
);

-- ======================== SUCCESS STORIES ========================

create table success_stories (
  id              uuid primary key default gen_random_uuid(),
  title           text not null,
  summary         text,
  full_story      text not null,
  organization_id uuid references organizations(id) on delete set null,
  author_name     text not null,
  author_role     text,
  author_grade    text,
  category        success_category not null,
  tags            text[] default '{}',
  impact_metrics  jsonb default '[]',  -- [{label, value}]
  images          text[] default '{}',
  video_url       text,
  featured        boolean not null default false,
  likes           int not null default 0,
  shares          int not null default 0,
  date_published  date not null default current_date,
  created_at      timestamptz not null default now()
);

-- ======================== RESOURCE REQUESTS ========================

create table resource_requests (
  id              uuid primary key default gen_random_uuid(),
  title           text not null,
  description     text,
  category        text not null,
  request_type    text not null,   -- 'New Resource', 'Update Existing', 'Translation', 'Accessibility'
  urgency         resource_request_urgency not null default 'Medium',
  suggested_format text,
  requester_id    uuid references profiles(id) on delete set null,
  requester_name  text not null,
  requester_email text not null,
  chapter_name    text,
  status          resource_request_status not null default 'Submitted',
  admin_notes     text,
  upvotes         int not null default 0,
  created_at      timestamptz not null default now(),
  resolved_at     timestamptz
);

-- ======================== COLLECTIONS ========================

create table collections (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references profiles(id) on delete cascade,
  name        text not null,
  description text,
  icon        text,
  color       text,
  is_public   boolean not null default false,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create table collection_items (
  id            uuid primary key default gen_random_uuid(),
  collection_id uuid not null references collections(id) on delete cascade,
  title         text not null,
  type          text not null,   -- 'link', 'resource', 'note'
  url           text,
  note          text,
  added_at      timestamptz not null default now()
);

-- ======================== CLUB HEALTH ========================

create table club_health_metrics (
  id                     uuid primary key default gen_random_uuid(),
  organization_id        uuid not null references organizations(id) on delete cascade unique,
  overall_score          int not null default 0 check (overall_score between 0 and 100),
  member_engagement      int default 0,
  event_frequency        int default 0,
  member_retention       int default 0,
  leadership_development int default 0,
  community_impact       int default 0,
  financial_health       int default 0,
  growth_rate            numeric(5,2) default 0,
  engagement_score       numeric(5,2) default 0,
  total_members          int default 0,
  active_members         int default 0,
  events_this_month      int default 0,
  new_members_last_30    int default 0,
  recommendations        text[] default '{}',
  last_updated           timestamptz not null default now()
);

-- ======================== ALUMNI ========================

create table alumni (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  grad_year  int not null,
  chapter    text,
  college    text,
  major      text,
  career     text,
  photo_url  text,
  available  boolean not null default false,
  created_at timestamptz not null default now()
);

-- ======================== FUNDING ========================

create table budget_allocations (
  id              uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organizations(id) on delete cascade,
  allocated       numeric(10,2) not null default 0,
  spent           numeric(10,2) not null default 0,
  remaining       numeric(10,2) generated always as (allocated - spent) stored,
  fiscal_year     text,
  created_at      timestamptz not null default now()
);

create table purchase_requests (
  id              uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organizations(id) on delete cascade,
  item            text not null,
  amount          numeric(10,2) not null,
  status          text not null default 'Pending' check (status in ('Pending', 'Approved', 'Denied')),
  date            date not null default current_date,
  created_at      timestamptz not null default now()
);

create table grants (
  id           uuid primary key default gen_random_uuid(),
  title        text not null,
  amount       text not null,
  deadline     date,
  description  text,
  eligibility  text,
  created_at   timestamptz not null default now()
);

-- ======================== NOTIFICATIONS ========================

create table notifications (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references profiles(id) on delete cascade,
  type       notification_type not null,
  title      text not null,
  message    text,
  link       text,
  read       boolean not null default false,
  created_at timestamptz not null default now()
);

-- ======================== ACTIVITY LOG ========================

create table activity_log (
  id              uuid primary key default gen_random_uuid(),
  user_id         uuid references profiles(id) on delete set null,
  organization_id uuid references organizations(id) on delete set null,
  action          text not null,
  type            text,           -- 'member', 'update', 'event', 'proposal', 'verification'
  created_at      timestamptz not null default now()
);

-- ======================== SAVED ITEMS ========================

create table saved_items (
  id       uuid primary key default gen_random_uuid(),
  user_id  uuid not null references profiles(id) on delete cascade,
  type     text not null,   -- 'resource', 'event', 'club', 'opportunity'
  title    text not null,
  ref_id   uuid,            -- FK to the actual entity (optional, soft link)
  saved_at timestamptz not null default now()
);

-- ======================== STARTER GUIDES ========================

create table starter_guides (
  id              uuid primary key default gen_random_uuid(),
  title           text not null,
  description     text,
  category        text not null,
  difficulty      text not null default 'Beginner',
  estimated_time  text,
  steps           jsonb default '[]',   -- [{stepNumber, title, content, tips[], warnings[], resources[]}]
  download_url    text,
  video_url       text,
  related_guides  uuid[] default '{}',
  views           int not null default 0,
  helpful         int not null default 0,
  date_updated    date not null default current_date,
  created_at      timestamptz not null default now()
);

-- ======================== CLUB IDEAS ========================

create table club_ideas (
  id                  uuid primary key default gen_random_uuid(),
  name                text not null,
  tagline             text,
  description         text,
  category            org_category,
  target_audience     text[] default '{}',
  estimated_interest  text default 'Medium',
  startup_cost        text default 'Free',
  difficulty_to_start text default 'Moderate',
  suggested_activities text[] default '{}',
  potential_partners  text[] default '{}',
  success_tips        text[] default '{}',
  exists_at_school    boolean not null default false,
  votes               int not null default 0,
  submitted_by        uuid references profiles(id) on delete set null,
  created_at          timestamptz not null default now()
);

-- ======================== QUIZ ========================

create table quiz_questions (
  id            uuid primary key default gen_random_uuid(),
  question      text not null,
  question_type text not null default 'single',  -- single, multiple, scale, ranking
  options       jsonb not null default '[]',      -- [{id, text, categoryScores[]}]
  weight        numeric(3,2) not null default 1,
  sort_order    int not null default 0
);

-- ======================== INDEXES ========================

create index idx_org_slug on organizations(slug);
create index idx_org_category on organizations(category);
create index idx_org_parent on organizations(parent_organization_id);
create index idx_org_published on organizations(is_published);
create index idx_org_members_org on organization_members(organization_id);
create index idx_org_members_user on organization_members(user_id);
create index idx_events_date on events(date);
create index idx_events_org on events(organization_id);
create index idx_discussions_org on discussions(organization_id);
create index idx_discussions_category on discussions(category);
create index idx_notifications_user on notifications(user_id, read);
create index idx_activity_log_org on activity_log(organization_id);
create index idx_saved_items_user on saved_items(user_id);
create index idx_announcements_date on announcements(date);
create index idx_proposals_status on proposals(status);

-- ======================== TRIGGERS ========================

-- Auto-update updated_at
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger trg_organizations_updated_at before update on organizations
  for each row execute function update_updated_at();

create trigger trg_profiles_updated_at before update on profiles
  for each row execute function update_updated_at();

create trigger trg_proposals_updated_at before update on proposals
  for each row execute function update_updated_at();

create trigger trg_events_updated_at before update on events
  for each row execute function update_updated_at();

create trigger trg_discussions_updated_at before update on discussions
  for each row execute function update_updated_at();

create trigger trg_collections_updated_at before update on collections
  for each row execute function update_updated_at();

-- ======================== ROW LEVEL SECURITY ========================

alter table profiles enable row level security;
alter table organizations enable row level security;
alter table organization_members enable row level security;
alter table events enable row level security;
alter table announcements enable row level security;
alter table notifications enable row level security;
alter table proposals enable row level security;
alter table discussions enable row level security;
alter table discussion_replies enable row level security;
alter table collections enable row level security;
alter table collection_items enable row level security;
alter table saved_items enable row level security;

-- Public read for published orgs
create policy "Published orgs are viewable by everyone"
  on organizations for select
  using (is_published = true);

-- Authenticated users can read all orgs
create policy "Authenticated users can view all orgs"
  on organizations for select
  to authenticated
  using (true);

-- Users can read their own profile
create policy "Users can view own profile"
  on profiles for select
  using (auth.uid() = id);

-- Users can update their own profile
create policy "Users can update own profile"
  on profiles for update
  using (auth.uid() = id);

-- Public events are viewable by everyone
create policy "Public events are viewable"
  on events for select
  using (is_public = true);

-- Users can manage their own notifications
create policy "Users can view own notifications"
  on notifications for select
  using (auth.uid() = user_id);

create policy "Users can update own notifications"
  on notifications for update
  using (auth.uid() = user_id);

-- Users can manage their own saved items
create policy "Users can manage own saved items"
  on saved_items for all
  using (auth.uid() = user_id);

-- Users can manage their own collections
create policy "Users can manage own collections"
  on collections for all
  using (auth.uid() = user_id);

-- Discussions readable by everyone
create policy "Discussions are viewable by everyone"
  on discussions for select
  using (true);

-- Announcements readable by everyone
create policy "Announcements are viewable by everyone"
  on announcements for select
  using (true);
