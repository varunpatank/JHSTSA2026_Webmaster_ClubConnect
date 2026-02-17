'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mainNavLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/explore', label: 'Explore' },
    { href: '/my-space', label: 'My Space' },
    { href: '/community', label: 'Community' },
    { href: '/meetings', label: 'Meetings' },
  ];

  const initiationStages = [
    { id: 'ideation', label: 'Ideation & Planning' },
    { id: 'proposal', label: 'Proposal & Approval' },
    { id: 'setup', label: 'Setup & Structure' },
    { id: 'recruitment', label: 'Recruitment & Launch' },
    { id: 'operations', label: 'Operations & Management' },
    { id: 'growth', label: 'Growth & Competitions' },
  ];
  const [showInitiation, setShowInitiation] = useState(false);
  const hideTimeoutRef = useRef<number | null>(null);

  const openInitiation = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    setShowInitiation(true);
  };

  const closeInitiationDelayed = (delay = 250) => {
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = window.setTimeout(() => {
      setShowInitiation(false);
      hideTimeoutRef.current = null;
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  return (
    <header className="bg-primary-500 text-white shadow-lg z-50">
      {/* Top Bar */}
      <div className="bg-primary-700 py-1">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <span className="hidden sm:inline">Welcome to ClubConnect - Your School Club Hub</span>
          <span className="sm:hidden">ClubConnect</span>
          <div className="flex gap-3">
            <Link href="/my-space" className="hover:text-secondary-400 transition-colors">
              My Space
            </Link>
            <span className="text-neutral-400">|</span>
            <Link href="/login" className="hover:text-secondary-400 transition-colors">
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-secondary-500 flex items-center justify-center rounded-xl shadow-md">
              <span className="text-2xl font-bold text-white">CC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold font-heading">ClubConnect</h1>
              <p className="text-xs text-neutral-300">School Club Hub</p>
            </div>
          </Link>

          {/* Desktop Nav - Simple, with Initiation dropdown */}
          <nav className="hidden lg:flex items-center gap-1 relative">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 font-medium hover:bg-primary-600 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Initiation dropdown */}
            <div
              className="relative"
              onMouseEnter={openInitiation}
              onMouseLeave={() => closeInitiationDelayed()}
            >
              <Link
                href="/initiation"
                className="px-4 py-2 font-medium hover:bg-primary-600 rounded-lg transition-colors inline-flex items-center gap-2"
                onFocus={openInitiation}
                onBlur={() => closeInitiationDelayed()}
                aria-haspopup="menu"
                aria-expanded={showInitiation}
              >
                Initiation
                <span className="text-sm">▾</span>
              </Link>

              {showInitiation && (
                <div
                  className="absolute right-0 mt-2 w-64 bg-white text-neutral-800 rounded-lg shadow-lg border z-50"
                  onMouseEnter={openInitiation}
                  onMouseLeave={() => closeInitiationDelayed()}
                >
                  <div className="p-2">
                    {initiationStages.map((s) => (
                      <Link
                        key={s.id}
                        href={`/initiation#${s.id}`}
                        className="block px-3 py-2 rounded hover:bg-neutral-100"
                        onFocus={openInitiation}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
