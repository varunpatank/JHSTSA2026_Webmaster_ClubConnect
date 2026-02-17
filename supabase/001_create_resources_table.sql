-- Create resources table for ClubConnect
-- Run this in Supabase SQL editor or with psql using your DB URL

CREATE TABLE IF NOT EXISTS public.resources (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT,
  file_type TEXT,
  download_url TEXT,
  date_added DATE,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- (Optional) Index to speed up text searches
CREATE INDEX IF NOT EXISTS resources_title_idx ON public.resources USING gin (to_tsvector('english', coalesce(title,'') || ' ' || coalesce(description,'')));
