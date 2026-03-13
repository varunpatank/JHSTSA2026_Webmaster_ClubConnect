"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authApi } from "@/lib/api";

interface SignupFormClientProps {
  redirect?: string;
}

export default function SignupFormClient({ redirect = "/profile" }: SignupFormClientProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isAdult, setIsAdult] = useState(false);
  const [grade, setGrade] = useState("");
  const [bio, setBio] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [missing, setMissing] = useState<Record<string, boolean>>({});
  const router = useRouter();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    const required = {
      name: !name,
      grade: !isAdult && !grade,
      school: !isAdult && !school,
      email: !email,
      password: !password,
      confirmedPassword: !confirmedPassword,
    };

    const missingKeys = Object.keys(required).filter((k) => (required as any)[k]);
    console.log(missingKeys);
    if (missingKeys.length > 0) {
      setMissing(required);
      // TODO: make this dynamic with missing fields
      setError(isAdult ? "Please fill required fields: name, email, password": "Please fill required fields: name, email, password, school, grade.");
      return;
    }

    if (password !== confirmedPassword) {
      setMissing({ password: true, confirmedPassword: true });
      setError("Please ensure that the password and the confirmed password are the same.");
      return;
    }

    setLoading(true);
    try {
      const res = await authApi.createUser({
        name,
        email,
        password,
        grade,
        bio: bio || undefined,
        phone_number: phone || undefined,
        school: school || undefined,
        is_adult: isAdult,
      });

      if (res.auth?.error) {
        setError(res.auth.error.message || "Sign up failed");
        setLoading(false);
        return;
      }

      if (res.profile?.error) {
        setError((res.profile.error as any)?.message || "Profile creation failed");
        setLoading(false);
        return;
      }

          setMissing({});

      router.push(redirect);
    } catch (err: any) {
      setError(err?.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100 py-10 px-4">
      <div className="max-w-xl mx-auto card p-8">
        <h1 className="text-3xl font-heading font-bold text-primary-600">Create account</h1>
        <p className="text-neutral-700 mt-2">Sign up to request membership, create clubs, and manage admin actions.</p>
        {error && <p className="text-sm text-red-600">{error}</p>}

        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-1">Full name</label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (missing.name) setMissing((p) => ({ ...p, name: false }));
              }}
              className={`input-field ${missing.name ? 'border-red-500 ring-1 ring-red-300' : ''}`}
              required
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              id="isAdult"
              type="checkbox"
              checked={isAdult}
              onChange={(e) => {
                const v = e.target.checked;
                setIsAdult(v);
                if (v) setMissing((p) => ({ ...p, grade: false, school: false }));
              }}
              className="h-4 w-4"
            />
            <label htmlFor="isAdult" className="text-sm text-neutral-700">I'm an adult (staff/parent) — grade and school optional</label>
          </div>
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (missing.email) setMissing((p) => ({ ...p, email: false }));
              }}
              className={`input-field ${missing.email ? 'border-red-500 ring-1 ring-red-300' : ''}`}
              placeholder="student@school.edu"
              required
            />
          </div>
            <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-1">Phone (optional)</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} className="input-field" />
          </div>
            <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-1">School</label>
            <input
              value={school}
              onChange={(e) => {
                setSchool(e.target.value);
                if (missing.school) setMissing((p) => ({ ...p, school: false }));
              }}
              className={`input-field ${missing.school ? 'border-red-500 ring-1 ring-red-300' : ''}`}
              required={!isAdult}
            />
          </div>
            <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-1">Grade</label>
            <input
              value={grade}
              onChange={(e) => {
                setGrade(e.target.value);
                if (missing.grade) setMissing((p) => ({ ...p, grade: false }));
              }}
              className={`input-field ${missing.grade ? 'border-red-500 ring-1 ring-red-300' : ''}`}
              placeholder="eg. 10"
              required={!isAdult}
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-semibold text-neutral-700 mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (missing.password) setMissing((p) => ({ ...p, password: false }));
              }}
              className={`input-field pr-16 ${missing.password ? 'border-red-500 ring-1 ring-red-300' : ''}`}
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              aria-pressed={showPassword}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 text-sm text-neutral-500 hover:text-neutral-700"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-1">Confirm Password</label>
            <input
              type={"password"}
              value={confirmedPassword}
              onChange={(e) => {
                setConfirmedPassword(e.target.value);
                if (missing.confirmedPassword) setMissing((p) => ({ ...p, confirmedPassword: false }));
              }}
              className={`input-field pr-16 ${missing.confirmedPassword ? 'border-red-500 ring-1 ring-red-300' : ''}`}
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-1">Bio (optional)</label>
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} className="input-field h-24" />
          </div>

          <button type="submit" className="btn-primary w-full" disabled={loading} onClick={onSubmit}>
            {loading ? "Creating account…" : "Create account"}
          </button>
        </form>

        <div className="mt-6 border-t border-neutral-200 pt-4 text-sm text-neutral-600">
          <p>
            Already have an account? <Link href="/login" className="text-primary-600 hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
