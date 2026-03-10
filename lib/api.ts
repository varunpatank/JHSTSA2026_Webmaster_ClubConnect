import { createClient, SupabaseClient } from '@supabase/supabase-js'
import type { Profile, Membership, Organization, OrganizationTag, Meeting, Event, EventTag, Location, Resource, ResourceTag } from './apiTypes'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY

if (!supabaseUrl || !supabasePublishableKey) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY in environment')
}

export const supabase: SupabaseClient = createClient(supabaseUrl, supabasePublishableKey, {
    auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
    },
})

export const authApi = {
    /** Email + password sign in (native) */
    signInWithEmail: (email: string, password: string) =>
        supabase.auth.signInWithPassword({ email, password }),

    /** Sign in using an OIDC id_token (provider like "google", "azure", etc.) */
    signInWithIdToken: (provider: string, idToken: string) =>
        supabase.auth.signInWithIdToken({ provider: provider as any, token : idToken }),

    /** OAuth / social login (redirect-based) */
    signInWithOAuth: (provider: string, options?: { redirectTo?: string }) =>
        supabase.auth.signInWithOAuth({ provider: provider as any, options }),

    /**
     * SSO helper: uses idToken when available (OIDC) otherwise falls back to OAuth redirect.
     * provider examples: "google", "github", custom OIDC provider id.
     */
    signInWithSSO: (provider: string, idToken?: string, options?: { redirectTo?: string }) =>
        idToken
            ? supabase.auth.signInWithIdToken({ provider: provider as any, token : idToken })
            : supabase.auth.signInWithOAuth({ provider: provider as any, options }),

    /** Sign out current session */
    signOut: () => supabase.auth.signOut(),
}

// -----------------------------------------------------------------------
// Profiles
// Policy: viewable by everyone; updatable by the profile owner
// -----------------------------------------------------------------------

export const profilesApi = {
    /** Viewable by everyone (authenticated + anon) */
    getAll: () =>
        supabase.from('profiles').select('*'),

    getById: (id: string) =>
        supabase.from('profiles').select('*').eq('id', id).single(),

    /** Only the authenticated user can update their own profile */
    update: (id: string, data: Partial<Profile>) =>
        supabase.from('profiles').update(data).eq('id', id),
}

// -----------------------------------------------------------------------
// Memberships
// Policy: members see own rows; officers/admins see org rows;
//         officers can update non-permission/position fields;
//         admins can update all fields;
//         members can delete own; admins can delete any in their org
// -----------------------------------------------------------------------

export const membershipsApi = {
    /** Returns all memberships visible to the current user (RLS filters automatically) */
    getForCurrentUser: () =>
        supabase.from('memberships').select('*'),

    /** All memberships for a given org (RLS ensures only officers/admins see them) */
    getByOrg: (orgId: string) =>
        supabase.from('memberships').select('*').eq('org_id', orgId),

    getById: (id: string) =>
        supabase.from('memberships').select('*').eq('id', id).single(),

    /**
     * Officers: update fields other than user_permissions and position.
     * Admins: update any field including user_permissions and position.
     * RLS enforces the distinction — pass only the fields you are allowed to change.
     */
    update: (id: string, data: Partial<Membership>) =>
        supabase.from('memberships').update(data).eq('id', id),

    /** Members delete their own; admins delete any in their org (RLS enforced) */
    delete: (id: string) =>
        supabase.from('memberships').delete().eq('id', id),
}

// -----------------------------------------------------------------------
// Organizations
// Policy: selectable by everyone; creatable by authenticated users;
//         updatable/deletable by admins
// -----------------------------------------------------------------------

export const organizationsApi = {
    /** Selectable by everyone */
    getAll: () =>
        supabase.from('organizations').select('*'),

    getById: (id: string) =>
        supabase.from('organizations').select('*').eq('id', id).single(),

    /** Creatable by any authenticated user */
    create: (data: Partial<Organization>) =>
        supabase.from('organizations').insert(data).select().single(),

    /** Only admins of the org can update (RLS enforced) */
    update: (id: string, data: Partial<Organization>) =>
        supabase.from('organizations').update(data).eq('id', id),

    /** Only admins of the org can delete (RLS enforced) */
    delete: (id: string) =>
        supabase.from('organizations').delete().eq('id', id),
}

// -----------------------------------------------------------------------
// Organization Tags
// Policy: selectable by everyone; insert/update/delete by org admins
// -----------------------------------------------------------------------

export const organizationTagsApi = {
    getAll: () =>
        supabase.from('organizations_tags').select('*'),

    getByOrg: (orgId: string) =>
        supabase.from('organizations_tags').select('*').eq('org_id', orgId),

    /** Only org admins can create (RLS enforced) */
    create: (data: Partial<OrganizationTag>) =>
        supabase.from('organizations_tags').insert(data).select().single(),

    /** Only org admins can update (RLS enforced) */
    update: (id: string, data: Partial<OrganizationTag>) =>
        supabase.from('organizations_tags').update(data).eq('id', id),

    /** Only org admins can delete (RLS enforced) */
    delete: (id: string) =>
        supabase.from('organizations_tags').delete().eq('id', id),
}

// -----------------------------------------------------------------------
// Meetings
// Policy: selectable by everyone; insert/update/delete by org admins
// -----------------------------------------------------------------------

export const meetingsApi = {
    getAll: () =>
        supabase.from('meetings').select('*'),

    getByOrg: (orgId: string) =>
        supabase.from('meetings').select('*').eq('org_id', orgId),

    getById: (id: string) =>
        supabase.from('meetings').select('*').eq('id', id).single(),

    /** Only org admins can create (RLS enforced) */
    create: (data: Partial<Meeting>) =>
        supabase.from('meetings').insert(data).select().single(),

    /** Only org admins can update (RLS enforced) */
    update: (id: string, data: Partial<Meeting>) =>
        supabase.from('meetings').update(data).eq('id', id),

    /** Only org admins can delete (RLS enforced) */
    delete: (id: string) =>
        supabase.from('meetings').delete().eq('id', id),
}

// -----------------------------------------------------------------------
// Events
// Policy: selectable by everyone; insert/update/delete by org admins
// -----------------------------------------------------------------------

export const eventsApi = {
    getAll: () =>
        supabase.from('events').select('*'),

    getByOrg: (orgId: string) =>
        supabase.from('events').select('*').eq('org_id', orgId),

    getById: (id: string) =>
        supabase.from('events').select('*').eq('id', id).single(),

    /** Only org admins can create (RLS enforced) */
    create: (data: Partial<Event>) =>
        supabase.from('events').insert(data).select().single(),

    /** Only org admins can update (RLS enforced) */
    update: (id: string, data: Partial<Event>) =>
        supabase.from('events').update(data).eq('id', id),

    /** Only org admins can delete (RLS enforced) */
    delete: (id: string) =>
        supabase.from('events').delete().eq('id', id),
}

// -----------------------------------------------------------------------
// Event Tags
// Policy: selectable by everyone; insert/update/delete by org admins
//         (via join on events → memberships)
// -----------------------------------------------------------------------

export const eventTagsApi = {
    getAll: () =>
        supabase.from('event_tags').select('*'),

    getByEvent: (eventId: string) =>
        supabase.from('event_tags').select('*').eq('event_id', eventId),

    /** Only org admins of the related event's org can create (RLS enforced) */
    create: (data: Partial<EventTag>) =>
        supabase.from('event_tags').insert(data).select().single(),

    /** Only org admins of the related event's org can update (RLS enforced) */
    update: (id: string, data: Partial<EventTag>) =>
        supabase.from('event_tags').update(data).eq('id', id),

    /** Only org admins of the related event's org can delete (RLS enforced) */
    delete: (id: string) =>
        supabase.from('event_tags').delete().eq('id', id),
}

// -----------------------------------------------------------------------
// Locations
// Policy: selectable by everyone; insert/update/delete by org admins
// -----------------------------------------------------------------------

export const locationsApi = {
    getAll: () =>
        supabase.from('locations').select('*'),

    getByOrg: (orgId: string) =>
        supabase.from('locations').select('*').eq('org_id', orgId),

    getById: (id: string) =>
        supabase.from('locations').select('*').eq('id', id).single(),

    /** Only org admins can create (RLS enforced) */
    create: (data: Partial<Location>) =>
        supabase.from('locations').insert(data).select().single(),

    /** Only org admins can update (RLS enforced) */
    update: (id: string, data: Partial<Location>) =>
        supabase.from('locations').update(data).eq('id', id),

    /** Only org admins can delete (RLS enforced) */
    delete: (id: string) =>
        supabase.from('locations').delete().eq('id', id),
}

// -----------------------------------------------------------------------
// Resources
// Policy: selectable by everyone; creatable by authenticated users;
//         update/delete by uploader OR org admin
// -----------------------------------------------------------------------

export const resourcesApi = {
    getAll: () =>
        supabase.from('resources').select('*'),

    getByOrg: (orgId: string) =>
        supabase.from('resources').select('*').eq('org_id', orgId),

    getById: (id: string) =>
        supabase.from('resources').select('*').eq('id', id).single(),

    /** Any authenticated user can create a resource */
    create: (data: Partial<Resource>) =>
        supabase.from('resources').insert(data).select().single(),

    /** Uploader or org admin can update (RLS enforced) */
    update: (id: string, data: Partial<Resource>) =>
        supabase.from('resources').update(data).eq('id', id),

    /** Uploader or org admin can delete (RLS enforced) */
    delete: (id: string) =>
        supabase.from('resources').delete().eq('id', id),
}

// -----------------------------------------------------------------------
// Resource Tags
// Policy: selectable by everyone;
//         insert/update/delete by uploader OR org admin
// -----------------------------------------------------------------------

export const resourceTagsApi = {
    getAll: () =>
        supabase.from('resource_tags').select('*'),

    getByResource: (resourceId: string) =>
        supabase.from('resource_tags').select('*').eq('resource_id', resourceId),

    /** Uploader of the resource or org admin can create (RLS enforced) */
    create: (data: Partial<ResourceTag>) =>
        supabase.from('resource_tags').insert(data).select().single(),

    /** Uploader of the resource or org admin can update (RLS enforced) */
    update: (id: string, data: Partial<ResourceTag>) =>
        supabase.from('resource_tags').update(data).eq('id', id),

    /** Uploader of the resource or org admin can delete (RLS enforced) */
    delete: (id: string) =>
        supabase.from('resource_tags').delete().eq('id', id),
}