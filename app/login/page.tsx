'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
  const [loginType, setLoginType] = useState<'student' | 'advisor' | 'admin'>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would authenticate
    console.log('Login attempt:', { loginType, email });
    // Redirect based on role
    if (loginType === 'admin') {
      window.location.href = '/admin';
    } else if (loginType === 'advisor') {
      window.location.href = '/officer';
    } else {
      window.location.href = '/student';
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center py-12 px-4">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80"
          alt="Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary-500/80"></div>
      </div>
      <div className="relative max-w-md w-full">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="w-16 h-16 bg-primary-500 flex items-center justify-center">
              <span className="text-3xl font-bold text-white">CC</span>
            </div>
          </Link>
          <h1 className="text-2xl font-bold text-primary-500 mt-4 font-heading">ClubConnect</h1>
          <p className="text-neutral-600">Where School Chapters Thrive</p>
        </div>

        {/* Login Card */}
        <div className="card p-8">
          <h2 className="text-xl font-bold text-primary-500 mb-6 text-center font-heading">Sign In</h2>

          {/* Role Selection */}
          <div className="grid grid-cols-3 gap-2 mb-6">
            {[
              { key: 'student', label: 'Student' },
              { key: 'advisor', label: 'Advisor' },
              { key: 'admin', label: 'Admin' },
            ].map((role) => (
              <button
                key={role.key}
                type="button"
                onClick={() => setLoginType(role.key as typeof loginType)}
                className={`py-2 font-medium text-sm transition-colors ${
                  loginType === role.key
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {role.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                {loginType === 'student' ? 'Student Email' : 'Email Address'}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                placeholder={loginType === 'student' ? 'student@school.edu' : 'email@school.edu'}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
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

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-neutral-600">Remember me</span>
              </label>
              <a href="#" className="text-primary-500 hover:underline">Forgot password?</a>
            </div>

            <button type="submit" className="btn-primary w-full">
              Sign In
            </button>
          </form>

          {/* SSO Option */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-neutral-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-neutral-500">Or continue with</span>
              </div>
            </div>

            <button className="mt-4 w-full py-2 border-2 border-neutral-300 hover:border-primary-500 transition-colors flex items-center justify-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              School Single Sign-On
            </button>
          </div>

          {/* Help Text */}
          <p className="mt-6 text-center text-sm text-neutral-500">
            Need help? Contact the{' '}
            <a href="mailto:activities@school.edu" className="text-primary-500 hover:underline">
              Activities Office
            </a>
          </p>
        </div>

        {/* Back to Home */}
        <p className="mt-6 text-center">
          <Link href="/" className="text-primary-500 hover:underline text-sm">
            ← Back to ClubConnect Home
          </Link>
        </p>
      </div>
    </div>
  );
}
