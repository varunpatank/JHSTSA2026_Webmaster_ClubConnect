-- Enable Row Level Security (RLS) for all tables
alter table if exists profiles enable row level security;
alter table if exists locations enable row level security;
alter table if exists organizations enable row level security;
alter table if exists meetings enable row level security;
alter table if exists events enable row level security;
alter table if exists memberships enable row level security;
alter table if exists resources enable row level security;
alter table if exists resource_tags enable row level security;
alter table if exists event_tags enable row level security;
alter table if exists organizations_tags enable row level security;

-- profiles
create policy "Profiles are viewable by everyone"
on profiles for select
to authenticated, anon
using (true);

create policy "Individuals can update their own profiles."
on profiles for update
to authenticated
using ((select auth.uid()) = id)
with check ((select auth.uid()) = id); -- make sure their change doesn't change their id!

-- memberships
create policy "Memberships are viewable by their members"
on memberships for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "Memberships are viewable by club officers and admins"
on memberships for select
to authenticated
using (
	(
		exists (
			select 1 from memberships m
			where m.org_id = memberships.org_id
                    and m.user_id = (select auth.uid())
				and m.user_permissions in ('admin','officer')
		)
	)
);


create policy "Memberships editable by officers (except permissions and position)"
on memberships for update
to authenticated
using (
	exists (
		select 1 from memberships m
		where m.org_id = memberships.org_id
                and m.user_id = (select auth.uid())
			and m.user_permissions = 'officer'
	)
)
with check (
	org_id = (select m.org_id from memberships m where m.id = memberships.id)
	and user_id = (select m.user_id from memberships m where m.id = memberships.id)
	and user_permissions = (select m.user_permissions from memberships m where m.id = memberships.id)
	and position = (select m.position from memberships m where m.id = memberships.id)
);

create policy "Memberships editable by admins (including permissions and position)"
on memberships for update
to authenticated
using (
	exists (
		select 1 from memberships m
		where m.org_id = memberships.org_id
                and m.user_id = (select auth.uid())
			and m.user_permissions = 'admin'
	)
)
with check (
	org_id = (select m.org_id from memberships m where m.id = memberships.id)
	and user_id = (select m.user_id from memberships m where m.id = memberships.id)
);

create policy "Memberships are deletable by their members"
on memberships for delete
to authenticated
using ((select auth.uid()) = user_id);

create policy "Memberships are deletable by club admins"
on memberships for delete
to authenticated
using (
	(
		exists (
			select 1 from memberships m
			where m.org_id = memberships.org_id
                    and m.user_id = (select auth.uid())
				and m.user_permissions = 'admin'
		)
	)
);


-- organizations
create policy "Organizations are selectable by everyone"
on organizations for select
to authenticated, anon
using (true);

create policy "Organizations are creatable by everyone"
on organizations for insert
to authenticated
with check (true);

create policy "Organizations are editable by admins"
on organizations for update
to authenticated
using (
  exists (
    select 1 from memberships m
    where m.org_id = organizations.id
            and m.user_id = (select auth.uid())
      and m.user_permissions = 'admin'
  )
);

create policy "Organizations are deletable by admins"
on organizations for delete
to authenticated
using (
  exists (
    select 1 from memberships m
    where m.org_id = organizations.id
            and m.user_id = (select auth.uid())
      and m.user_permissions = 'admin'
  )
);

-- organizations_tags
create policy "Organization tags are selectable by everyone"
on organizations_tags for select
to authenticated, anon
using (true);

create policy "Organization tags are creatable by admins"
on organizations_tags for insert
to authenticated
with check (
  exists (
    select 1 from memberships m
    where m.org_id = organizations_tags.org_id
            and m.user_id = (select auth.uid())
      and m.user_permissions = 'admin'
  )
);

create policy "Organization tags are editable by admins"
on organizations_tags for update
to authenticated
using (
  exists (
    select 1 from memberships m
    where m.org_id = organizations_tags.org_id
            and m.user_id = (select auth.uid())
      and m.user_permissions = 'admin'
  )
);

create policy "Organization tags are deletable by admins"
on organizations_tags for delete
to authenticated
using (
  exists (
    select 1 from memberships m
    where m.org_id = organizations_tags.org_id
            and m.user_id = (select auth.uid())
      and m.user_permissions = 'admin'
  )
);

-- meetings
create policy "Meetings are selectable by everyone"
on meetings for select
to authenticated, anon
using (true);

create policy "Meetings are creatable by admins"
on meetings for insert
to authenticated
with check (
    exists (
        select 1 from memberships m
        where m.org_id = meetings.org_id
            and m.user_id = (select auth.uid())
            and m.user_permissions = 'admin'
    )
);

create policy "Meetings are editable by admins"
on meetings for update
to authenticated
using (
    exists (
        select 1 from memberships m
        where m.org_id = meetings.org_id
            and m.user_id = (select auth.uid())
            and m.user_permissions = 'admin'
    )
);

create policy "Meetings are deletable by admins"
on meetings for delete
to authenticated
using (
    exists (
        select 1 from memberships m
        where m.org_id = meetings.org_id
            and m.user_id = (select auth.uid())
            and m.user_permissions = 'admin'
    )
);

-- events
create policy "Events are selectable by everyone"
on events for select
to authenticated, anon
using (true);

create policy "Events are creatable by admins"
on events for insert
to authenticated
with check (
    exists (
        select 1 from memberships m
        where m.org_id = events.org_id
            and m.user_id = (select auth.uid())
            and m.user_permissions = 'admin'
    )
);

create policy "Events are editable by admins"
on events for update
to authenticated
using (
    exists (
        select 1 from memberships m
        where m.org_id = events.org_id
            and m.user_id = (select auth.uid())
            and m.user_permissions = 'admin'
    )
);

create policy "Events are deletable by admins"
on events for delete
to authenticated
using (
    exists (
        select 1 from memberships m
        where m.org_id = events.org_id
            and m.user_id = (select auth.uid())
            and m.user_permissions = 'admin'
    )
);

-- event tags
create policy "Event tags are selectable by everyone"
on event_tags for select
to authenticated, anon
using (true);

create policy "Event tags are creatable by admins"
on event_tags for insert
to authenticated
with check (
    exists (
        select 1 from memberships m
        join events e on e.org_id = m.org_id
        where e.id = event_tags.event_id
            and m.user_id = (select auth.uid())
            and m.user_permissions = 'admin'
    )
);

create policy "Event tags are editable by admins"
on event_tags for update
to authenticated
using (
    exists (
        select 1 from memberships m
        join events e on e.org_id = m.org_id
        where e.id = event_tags.event_id
            and m.user_id = (select auth.uid())
            and m.user_permissions = 'admin'
    )
);

create policy "Event tags are deletable by admins"
on event_tags for delete
to authenticated
using (
    exists (
        select 1 from memberships m
        join events e on e.org_id = m.org_id
        where e.id = event_tags.event_id
            and m.user_id = (select auth.uid())
            and m.user_permissions = 'admin'
    )
);

-- locations
create policy "Locations are selectable by everyone"
on locations for select
to authenticated, anon
using (true);

create policy "Locations are creatable by organization admins"
on locations for insert
to authenticated
with check (
    exists (
        select 1 from memberships m
        where m.org_id = locations.org_id
            and m.user_id = (select auth.uid())
            and m.user_permissions = 'admin'
    )
);

create policy "Locations are editable by organization admins"
on locations for update
to authenticated
using (
    exists (
        select 1 from memberships m
        where m.org_id = locations.org_id
            and m.user_id = (select auth.uid())
            and m.user_permissions = 'admin'
    )
);

create policy "Locations are deletable by organization admins"
on locations for delete
to authenticated
using (
    exists (
        select 1 from memberships m
        where m.org_id = locations.org_id
            and m.user_id = (select auth.uid())
            and m.user_permissions = 'admin'
    )
);

-- resources
create policy "Resources are selectable by everyone"
on resources for select
to authenticated, anon
using (true);

create policy "Resources are creatable by authenticated users"
on resources for insert
to authenticated
with check (true);

create policy "Resources are editable by uploader or organization admin"
on resources for update
to authenticated
using (
    (select auth.uid()) = created_by
    or exists (
        select 1 from memberships m
        where m.org_id = resources.org_id
            and m.user_id = (select auth.uid())
            and m.user_permissions = 'admin'
    )
);

create policy "Resources are deletable by uploader or organization admin"
on resources for delete
to authenticated
using (
    (select auth.uid()) = created_by
    or exists (
        select 1 from memberships m
        where m.org_id = resources.org_id
            and m.user_id = (select auth.uid())
            and m.user_permissions = 'admin'
    )
);

-- resource tags
create policy "Resource tags are selectable by everyone"
on resource_tags for select
to authenticated, anon
using (true);

create policy "Resource tags are creatable by uploader or organization admin"
on resource_tags for insert
to authenticated
with check (
    (select auth.uid()) = (
        select r.created_by from resources r
        where r.id = resource_tags.resource_id
    )
    or exists (
        select 1 from memberships m
        join resources r on r.org_id = m.org_id
        where r.id = resource_tags.resource_id
            and m.user_id = (select auth.uid())
            and m.user_permissions = 'admin'
    )
);

create policy "Resource tags are editable by uploader or organization admin"
on resource_tags for update
to authenticated
using (
    (select auth.uid()) = (
        select r.created_by from resources r
        where r.id = resource_tags.resource_id
    )
    or exists (
        select 1 from memberships m
        join resources r on r.org_id = m.org_id
        where r.id = resource_tags.resource_id
            and m.user_id = (select auth.uid())
            and m.user_permissions = 'admin'
    )
);

create policy "Resource tags are deletable by uploader or organization admin"
on resource_tags for delete
to authenticated
using (
    (select auth.uid()) = (
        select r.created_by from resources r
        where r.id = resource_tags.resource_id
    )
    or exists (
        select 1 from memberships m
        join resources r on r.org_id = m.org_id
        where r.id = resource_tags.resource_id
            and m.user_id = (select auth.uid())
            and m.user_permissions = 'admin'
    )
);
