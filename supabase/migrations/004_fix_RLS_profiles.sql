-- new people can't create profiles. whoopsies!

create policy "Profiles are viewable by everyone"
on profiles for select
to authenticated, anon
using (true);