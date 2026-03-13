"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authApi } from "@/lib/api";

interface LoginFormClientProps {
  redirect: string;
}

export default function LoginFormClient({
  redirect,
}: LoginFormClientProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const loggedIn = await authApi.isLoggedIn();
        if (mounted && loggedIn) router.replace('/profile');
      } catch (e) {
        // ignore errors and continue to show the form
      } finally {
        if (mounted) setCheckingAuth(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [router]);
  

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    if (!email || !password) return;
    setSubmitting(true);

    (async () => {
      try {
        const res = await authApi.signInWithEmail(email, password);
        if (res.error) {
          setError(res.error.message || "Sign in failed");
          setSubmitting(false);
          return;
        }
        router.push(redirect);
      } catch (e: any) {
        setError(e?.message || "Sign in failed");
      } finally {
        setSubmitting(false);
      }
    })();
  };
  
  if (checkingAuth) return null;
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
          {error && <p className="text-sm text-red-600">{error}</p>}
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
            {submitting ? "Signing in..." : "Sign In"}
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
