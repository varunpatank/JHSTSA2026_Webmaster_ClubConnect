-- Enums
do $$ begin
	if not exists (select 1 from pg_type where typname = 'user_permissions') then
		create type user_permissions as enum ('admin','officer','parent','teacher','partner','member');
	end if;
end $$;

-- Users
create table if not exists profiles (
	id uuid primary key references auth.users on delete cascade,
	first_name varchar(255) not null,
	last_name varchar(255) not null,
	bio text,
	email varchar(320) unique not null,
	phone_number varchar(32),
	grade smallint,
	school varchar(255),
	avatar_url text,
	created_at timestamptz not null default now()
);

-- Organizations
create table if not exists organizations (
	id uuid primary key default gen_random_uuid(),
	name varchar(255) not null,
	slug varchar(255) unique,
	description text,
	parent_org_id uuid references organizations(id) on delete set null,
	website varchar(1000),
	created_at timestamptz not null default now(),
	is_featured boolean not null default false
);

-- Meetings (organization meeting definitions)
create table if not exists meetings (
	id uuid primary key default gen_random_uuid(),
	org_id uuid not null references organizations(id) on delete cascade,
	frequency text,
	details text,
	next_occurrence timestamptz
);

-- Events
create table if not exists events (
	id uuid primary key default gen_random_uuid(),
	name varchar(512) not null,
	org_id uuid not null references organizations(id) on delete set null,
	description text,
	time timestamptz,
	website varchar(1000),
	created_at timestamptz not null default now(),
	is_featured boolean not null default false
);

-- Memberships
create table if not exists memberships (
	id uuid primary key default gen_random_uuid(),
	org_id uuid not null references organizations(id) on delete cascade,
	user_id uuid not null references profiles(id) on delete cascade,
	user_permissions user_permissions not null default 'member',
	position varchar(255),
	attendance bigint default 0,
	joined_at timestamptz not null default now(),
	notes text,
	unique (org_id, user_id)
);

-- Resources
create table if not exists resources (
	id uuid primary key default gen_random_uuid(),
	name varchar(512),
	resource_link varchar(2000) not null,
	org_id uuid references organizations(id) on delete set null,
	event_id uuid references events(id) on delete set null,
	created_at timestamptz not null default now(),
	description text not null,
	created_by uuid references profiles(id) on delete set null,
	is_featured boolean not null default false
);

-- Tags merged into join tables (no centralized tags table)
-- Many-to-many: resource_tags (tag string stored inline)
create table if not exists resource_tags (
	resource_id uuid not null references resources(id) on delete cascade,
	tag varchar(255) not null,
	primary key (resource_id, tag)
);

-- Many-to-many: event_tags (tag string stored inline)
create table if not exists event_tags (
	event_id uuid not null references events(id) on delete cascade,
	tag varchar(255) not null,
	primary key (event_id, tag)
);


create table if not exists organizations_tags (
	org_id uuid not null references organizations(id) on delete cascade,
	tag varchar(255) not null,
	primary key (org_id, tag)
);

-- Indexes to speed common lookups
create index if not exists idx_meetings_org on meetings(org_id);
create index if not exists idx_events_org on events(org_id);
create index if not exists idx_memberships_org on memberships(org_id);
create index if not exists idx_memberships_user on memberships(user_id);

-- Add foreign key constraints on `locations` to point back to owner tables
-- and ensure cascade delete so that when a parent organization/meeting/event
-- is removed, the associated location row is removed as well.
-- Locations: created after owner tables so FK constraints can be defined inline
create table if not exists locations (
	id uuid primary key default gen_random_uuid(),
	address varchar(1000),
	building varchar(255),
	room varchar(128),
	lat numeric,
	lng numeric,
	org_id uuid references organizations(id) on delete cascade,
	meeting_id uuid references meetings(id) on delete cascade,
	event_id uuid references events(id) on delete cascade,
	constraint locations_only_one_owner check (
		( (org_id is not null)::integer + (meeting_id is not null)::integer + (event_id is not null)::integer ) = 1
	)
);




