'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const mainNavLinks = [
    { href: '/', label: 'Home' },
    { href: '/directory', label: 'Chapter Directory' },
    { href: '/events', label: 'Events' },
    { href: '/resources', label: 'Resources' },
    { href: '/spotlight', label: 'Spotlight' },
    { href: '/references', label: 'References' },
  ];

  const moreLinks = [
    { href: '/propose', label: 'Propose a Chapter' },
    { href: '/funding', label: 'Funding Center' },
    { href: '/alumni', label: 'Alumni Network' },
    { href: '/announcements', label: 'Announcements' },
  ];

  const allMobileLinks = [...mainNavLinks, ...moreLinks];

  return (
    <header className="bg-primary-500 text-white shadow-lg">
      <div className="bg-primary-700 py-1">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <span className="hidden sm:inline">Welcome to ClubConnect</span>
          <span className="sm:hidden">ClubConnect</span>
          <div className="flex gap-2 sm:gap-4">
            <Link href="/student" className="hover:text-secondary-400 transition-colors">
              Student Portal
            </Link>
            <span className="text-neutral-400">|</span>
            <Link href="/officer" className="hover:text-secondary-400 transition-colors">
              Officer Portal
            </Link>
            <span className="text-neutral-400 hidden sm:inline">|</span>
            <Link href="/admin" className="hover:text-secondary-400 transition-colors hidden sm:inline">
              Admin
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-secondary-500 flex items-center justify-center rounded-xl shadow-md">
              <span className="text-2xl font-bold text-white">CC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold font-heading">ClubConnect</h1>
              <p className="text-xs text-neutral-300">Where School Chapters Thrive</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </Link>
            ))}
            <div className="relative">
              <button
                onClick={() => setShowMoreMenu(!showMoreMenu)}
                className="nav-link flex items-center gap-1"
              >
                More
                <svg className={`w-4 h-4 transition-transform ${showMoreMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showMoreMenu && (
                <div className="absolute right-0 top-full mt-2 bg-white text-neutral-800 min-w-48 py-2 shadow-xl rounded-xl z-50 border border-neutral-200">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 hover:bg-neutral-100 transition-colors"
                      onClick={() => setShowMoreMenu(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <button
            className="lg:hidden p-2 hover:bg-primary-600 transition-colors rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-primary-400">
            {allMobileLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 px-4 hover:bg-primary-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-primary-400 mt-2 pt-2">
              <Link
                href="/student"
                className="block py-3 px-4 hover:bg-primary-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Student Portal
              </Link>
              <Link
                href="/officer"
                className="block py-3 px-4 hover:bg-primary-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Officer Portal
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
