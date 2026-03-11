"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/directory", label: "Browse Clubs" },
    { href: "/start-a-club", label: "Start New Club" },
    { href: "/events", label: "Events" },
    { href: "/resources", label: "Resources" },
    { href: "/profile", label: "Profile" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-primary-600 bg-primary-700 text-white">
      <div className="h-1 w-full bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-3 gap-4">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="ClubConnect home"
          >
            <div className="w-10 h-10 rounded-xl bg-secondary-500 text-white flex items-center justify-center shadow-sm">
              <span className="text-base font-bold">CC</span>
            </div>
            <div>
              <p className="text-base font-bold text-white leading-tight">
                ClubConnect
              </p>
              <p className="text-xs text-primary-100">School Resource Hub</p>
            </div>
          </Link>

          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-primary-100 rounded-lg hover:text-white hover:bg-primary-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-lg border border-primary-500 p-2 text-white hover:bg-primary-600"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav
            id="mobile-nav"
            className="md:hidden pb-4 pt-2 space-y-2"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg border border-primary-600 px-3 py-2 text-sm font-medium text-primary-100 hover:bg-primary-600 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
