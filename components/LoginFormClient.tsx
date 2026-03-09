"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { addJoinedClub, isLoggedIn, loginUser } from "@/lib/clientState";
import { chapters } from "@/lib/data";

interface LoginFormClientProps {
  redirect: string;
  action?: string;
  clubId?: string;
}

export default function LoginFormClient({
  redirect,
  action,
  clubId,
}: LoginFormClientProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("Student User");
  const router = useRouter();

  if (typeof window !== "undefined" && isLoggedIn()) {
    return (
      <div className="min-h-screen bg-neutral-100 flex items-center justify-center px-4">
        <div className="card p-8 text-center max-w-lg w-full">
          <h1 className="text-2xl font-heading font-bold text-primary-600">
            You are already signed in
          </h1>
          <p className="text-neutral-700 mt-2">
            Continue to your profile or return to browsing clubs.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/profile" className="btn-primary">
              Go to Profile
            </Link>
            <Link href="/directory" className="btn-outline">
              Browse Clubs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!email || !password) return;

    loginUser(name || "Student User", email);

    if (action === "join" && clubId) {
      const chapter = chapters.find((item) => item.id === clubId);
      if (chapter) {
        addJoinedClub({
          id: chapter.id,
          name: chapter.name,
          status:
            chapter.membershipStatus === "Open Enrollment"
              ? "member"
              : "pending",
        });
        router.push("/profile?from=join");
        return;
      }
    }

    router.push(redirect);
  };

  return (
    <div className="min-h-screen bg-neutral-100 py-10 px-4">
      <div className="max-w-xl mx-auto card p-8">
        <h1 className="text-3xl font-heading font-bold text-primary-600">
          Login
        </h1>
        <p className="text-neutral-700 mt-2">
          Sign in with email and password to request membership, create a club,
          and manage admin actions.
        </p>

        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-1">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="student@jhstsa.edu"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder="••••••••"
              required
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            Sign In
          </button>
        </form>

        <div className="mt-6 border-t border-neutral-200 pt-4 text-sm text-neutral-600">
          <p>
            OAuth providers (Google, GitHub, and more) are planned for a future
            release.
          </p>
          <p className="mt-3">
            <Link href="/" className="text-primary-600 hover:underline">
              ← Back to Homepage
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
