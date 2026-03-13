-- Migration 005: Avatars bucket policies
-- Allow public read access to objects in the `avatars` bucket,
-- allow authenticated users to INSERT new objects into `avatars`,
-- and allow only the object owner (matching auth.uid()) to UPDATE or DELETE.

BEGIN;

-- Public read: anyone (anon or authenticated) can SELECT objects in the avatars bucket
CREATE POLICY avatars_public_read ON storage.objects
  FOR SELECT
  USING (bucket_id = 'avatars');

-- Authenticated insert: allow inserts when the bucket is 'avatars' and the
-- `owner` column equals the calling user's id (auth.uid())
CREATE POLICY avatars_authenticated_insert ON storage.objects
  FOR INSERT
  WITH CHECK (
    bucket_id = 'avatars'
    AND auth.role() = 'authenticated'
    AND owner = auth.uid()
  );

-- Owner update: only allow updates when the bucket is 'avatars' and the
-- caller is the owner of the object
CREATE POLICY avatars_owner_update ON storage.objects
  FOR UPDATE
  USING (
    bucket_id = 'avatars'
    AND owner = auth.uid()
  );

-- Owner delete: only allow deletes when the bucket is 'avatars' and the
-- caller is the owner of the object
CREATE POLICY avatars_owner_delete ON storage.objects
  FOR DELETE
  USING (
    bucket_id = 'avatars'
    AND owner = auth.uid()
  );

COMMIT;
