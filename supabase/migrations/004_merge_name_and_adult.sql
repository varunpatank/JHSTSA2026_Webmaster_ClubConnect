-- Migration 004
-- - Merge first_name + last_name into `name`
-- - Convert `grade` to text
-- - Add `is_adult` boolean, mark existing rows as adult
-- - Enforce: if not adult, `grade` and `school` must be present

begin;

-- 1) Add `name` column and populate from first_name + last_name
alter table if exists public.profiles
  add column if not exists name varchar(512);

update public.profiles
set name = trim(concat_ws(' ', first_name, last_name));

-- 2) Add `is_adult` flag (default false for new rows), mark existing rows as adult
alter table if exists public.profiles
  add column if not exists is_adult boolean not null default false;

update public.profiles set is_adult = true where is_adult is distinct from true;

-- 3) Convert `grade` from smallint to text so it can hold non-numeric entries
alter table if exists public.profiles
  alter column grade type text using grade::text;

-- 4) Add a check constraint: if NOT adult then both grade and school must be present
alter table if exists public.profiles
  add constraint profiles_adult_grade_school_check check (
    is_adult
    or (grade is not null and school is not null)
  );

-- 5) Drop legacy name parts
alter table if exists public.profiles
  drop column if exists first_name,
  drop column if exists last_name;

commit;
