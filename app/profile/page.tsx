"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getAdminClubs, getJoinedClubs } from "@/lib/clientState";
import { supabase, authApi, profilesApi } from "@/lib/api";
import AvatarUploader from "@/components/AvatarUploader";

export default function ProfilePage() {
  const [ready, setReady] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("Student User");
  const [email, setEmail] = useState("student@jhstsa.edu");
  const [userId, setUserId] = useState<string | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [joinedClubs, setJoinedClubs] = useState(getJoinedClubs());
  const [adminClubs, setAdminClubs] = useState(getAdminClubs());
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const signedIn = await authApi.isLoggedIn();
        setLoggedIn(signedIn);
        if (signedIn) {
          const { data } = await supabase.auth.getUser();
          const user = data.user;
          if (user?.id) {
              setUserId(user.id);
            const profileRes = await profilesApi.getById(user.id);
            const profile = profileRes.data as any;
            if (profile) {
              setName(`${profile.name}` || "Student User");
              setEmail(profile.email ?? user.email ?? "student@jhstsa.edu");
              setAvatarUrl(profile.avatar_url ?? null);
            } else {
              setName(user.user_metadata?.full_name || "Student User");
              setEmail(user.email ?? "student@jhstsa.edu");
            }
          }

          setJoinedClubs(getJoinedClubs());
          setAdminClubs(getAdminClubs());
        }
      } catch (e) {
        // ignore and fall back to defaults
      } finally {
        setReady(true);
      }
    })();
  }, []);

  const notifications = useMemo(() => {
    const joinNotifications = joinedClubs.map((club) =>
      club.status === "pending"
        ? `${club.name}: join request is pending approval.`
        : `${club.name}: membership confirmed.`,
    );

    const adminNotifications = adminClubs.map(
      (club) => `${club.name}: status is ${club.status}.`,
    );

    return [...joinNotifications, ...adminNotifications].slice(0, 6);
  }, [joinedClubs, adminClubs]);

  if (!ready) {
    return <div className="min-h-screen bg-neutral-100" />;
  }

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-neutral-100 flex items-center justify-center px-4">
        <div className="card p-8 max-w-xl w-full text-center">
          <h1 className="text-2xl font-heading font-bold text-primary-600">
            Please Sign In
          </h1>
          <p className="mt-2 text-neutral-700">
            Your profile dashboard is available after login.
          </p>
          <Link
            href="/login?redirect=/profile"
            className="btn-primary inline-block mt-5"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-100 min-h-screen">
      <section className="bg-primary-500 text-white border-b-4 border-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-heading font-bold">
              Profile Dashboard
            </h1>
            <p className="mt-2 text-neutral-100">
              Manage your account, club memberships, and admin clubs.
            </p>
          </div>
          <button
            className="btn-outline border-white text-white hover:bg-white hover:text-primary-500"
            onClick={async () => {
              await authApi.signOut();
              router.push("/");
            }}
          >
            Log Out
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid lg:grid-cols-3 gap-6">
        <div className="card p-6">
          <h2 className="text-xl font-heading font-bold text-primary-600">
            Account Details
          </h2>
          <div className="mt-4">
            {userId && (
              <AvatarUploader
                userId={userId}
                currentUrl={avatarUrl}
                onUpdate={(url) => setAvatarUrl(url)}
              />
            )}
          </div>
          <div className="mt-4 space-y-3">
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">
                Phone
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="input-field"
                placeholder="Optional"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">
                Date of Birth
              </label>
              <input
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                type="date"
                className="input-field"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-heading font-bold text-primary-600">
                Your Clubs
              </h2>
              <Link
                href="/directory"
                className="text-sm font-semibold text-primary-600 hover:underline"
              >
                Browse More Clubs
              </Link>
            </div>
            <div className="mt-4 space-y-3">
              {joinedClubs.length === 0 && (
                <p className="text-sm text-neutral-600">No clubs joined yet.</p>
              )}
              {joinedClubs.map((club) => (
                <div
                  key={club.id}
                  className="border border-neutral-200 p-4 flex items-center justify-between gap-3"
                >
                  <div>
                    <p className="font-semibold text-primary-600">
                      {club.name}
                    </p>
                    <p className="text-xs text-neutral-600">
                      Membership status
                    </p>
                  </div>
                  <span
                    className={`badge ${club.status === "member" ? "badge-primary" : "badge-outline"}`}
                  >
                    {club.status === "member" ? "Member" : "Pending"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-heading font-bold text-primary-600">
                Admin Clubs
              </h2>
              <Link
                href="/start-a-club"
                className="text-sm font-semibold text-primary-600 hover:underline"
              >
                Start New Club
              </Link>
            </div>
            <div className="mt-4 space-y-3">
              {adminClubs.length === 0 && (
                <p className="text-sm text-neutral-600">No admin clubs yet.</p>
              )}
              {adminClubs.map((club) => (
                <div
                  key={club.id}
                  className="border border-neutral-200 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                >
                  <div>
                    <p className="font-semibold text-primary-600">
                      {club.name}
                    </p>
                    <p className="text-xs text-neutral-600">
                      Status: {club.status}
                    </p>
                  </div>
                  <Link
                    href={`/events/new?club=${club.id}`}
                    className="btn-outline text-sm text-center"
                  >
                    Add Event
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-xl font-heading font-bold text-primary-600">
              Notifications / Announcements
            </h2>
            <ul className="mt-4 text-sm text-neutral-700 space-y-2 list-disc list-inside">
              {notifications.length === 0 && <li>No notifications yet.</li>}
              {notifications.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
