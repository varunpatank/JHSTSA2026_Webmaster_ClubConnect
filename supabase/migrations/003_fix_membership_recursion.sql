-- Fix recursive RLS on memberships

-- Helper functions (run as definer to avoid recursive RLS evaluation)
create or replace function public.is_org_admin(target_org_id uuid)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.memberships m
    where m.org_id = target_org_id
      and m.user_id = auth.uid()
      and m.user_permissions = 'admin'
  );
$$;

create or replace function public.is_org_officer_or_admin(target_org_id uuid)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.memberships m
    where m.org_id = target_org_id
      and m.user_id = auth.uid()
      and m.user_permissions in ('officer', 'admin')
  );
$$;

revoke all on function public.is_org_admin(uuid) from public;
revoke all on function public.is_org_officer_or_admin(uuid) from public;
grant execute on function public.is_org_admin(uuid) to authenticated;
grant execute on function public.is_org_officer_or_admin(uuid) to authenticated;

-- Drop recursive memberships policies
drop policy if exists "Memberships are viewable by their members" on memberships;
drop policy if exists "Memberships are viewable by club officers and admins" on memberships;
drop policy if exists "Memberships editable by officers (except permissions and position)" on memberships;
drop policy if exists "Memberships editable by admins (including permissions and position)" on memberships;
drop policy if exists "Memberships are deletable by their members" on memberships;
drop policy if exists "Memberships are deletable by club admins" on memberships;

-- Recreate non-recursive memberships policies
create policy "Memberships selectable by self or org officers/admins"
on memberships for select
to authenticated
using (
  auth.uid() = user_id
  or public.is_org_officer_or_admin(org_id)
);

create policy "Memberships updatable by org officers/admins"
on memberships for update
to authenticated
using (public.is_org_officer_or_admin(org_id))
with check (public.is_org_officer_or_admin(org_id));

create policy "Memberships deletable by self or org admins"
on memberships for delete
to authenticated
using (
  auth.uid() = user_id
  or public.is_org_admin(org_id)
);