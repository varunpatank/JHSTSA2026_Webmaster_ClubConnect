// -----------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------

export type UserPermissions = 'admin' | 'officer' | 'member'

export interface Profile {
    id: string
    [key: string]: unknown
}

export interface Membership {
    id: string
    org_id: string
    user_id: string
    user_permissions: UserPermissions
    position: string
    [key: string]: unknown
}

export interface Organization {
    id: string
    [key: string]: unknown
}

export interface OrganizationTag {
    id: string
    org_id: string
    [key: string]: unknown
}

export interface Meeting {
    id: string
    org_id: string
    [key: string]: unknown
}

export interface Event {
    id: string
    org_id: string
    [key: string]: unknown
}

export interface EventTag {
    id: string
    event_id: string
    [key: string]: unknown
}

export interface Location {
    id: string
    org_id: string
    [key: string]: unknown
}

export interface Resource {
    id: string
    org_id: string
    created_by: string
    [key: string]: unknown
}

export interface ResourceTag {
    id: string
    resource_id: string
    [key: string]: unknown
}
