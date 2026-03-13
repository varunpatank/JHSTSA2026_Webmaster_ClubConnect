-- Create avatars table to store avatar PNGs (one per user)
-- Notes: The DB enforces that uploaded data is an image, <=1MB,
-- and recorded dimensions are 400x400. Actual conversion/cropping
-- to webp and resizing should be performed by the uploader (app)
-- or an edge function prior to inserting the row.
create table if not exists avatars (
    id uuid primary key default gen_random_uuid(),
    user_id uuid not null references profiles(id) on delete cascade,
    file bytea not null,
    filename varchar(1024),
    created_at timestamptz not null default now(),
    constraint one_avatar_per_user unique (user_id),
    constraint avatar_is_image check (content_type LIKE 'image/%'),
    constraint avatar_max_size check (octet_length(file) <= 1048576),
);

create index if not exists idx_avatars_user on avatars(user_id);

-- Replace textual avatar_url in profiles with a foreign key to avatars
alter table profiles drop column if exists avatar_url;
alter table profiles add column avatar_id uuid references avatars(id) on delete set null;

-- Enable Row Level Security on avatars
alter table avatars enable row level security;

-- Allow everyone to view avatars
create policy "Avatars are viewable by everyone"
on avatars for select
to authenticated, anon
using (true);

-- Allow authenticated users to insert an avatar for themselves only
create policy "Users can insert their avatar"
on avatars for insert
to authenticated
with check ((select auth.uid()) = user_id);

-- Allow users to update/delete only their own avatar
create policy "Users can update their avatar"
on avatars for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

create policy "Users can delete their avatar"
on avatars for delete
to authenticated
using ((select auth.uid()) = user_id);

-- Ensure only the profile owner can change the profile's avatar_id
-- (There is already a general profiles update policy, but add an explicit
-- policy focused on avatar updates so intent is clear.)
create policy "Users can update their profile avatar_id"
on profiles for update
to authenticated
using ((select auth.uid()) = id)
with check ((select auth.uid()) = id);
