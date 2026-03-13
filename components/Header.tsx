"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react";
import { supabase, profilesApi, storageApi } from "../lib/api";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/directory", label: "Browse Clubs" },
    { href: "/start-a-club", label: "Start New Club" },
    { href: "/events", label: "Events" },
    { href: "/resources", label: "Resources" },
  ];

  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;

    const loadUser = async () => {
      try {
        const { data } = await supabase.auth.getUser();
        const user = data.user;
        if (!mounted) return;
        
        if (!user) {
          setIsLoggedIn(false);
          setAvatarUrl(null);
          return;
        }

        setIsLoggedIn(true);

        const profileRes: any = await profilesApi.getById(user.id);
        if (!mounted) return;

        if (!profileRes.error && profileRes.data && profileRes.data.avatar_url) {
          const avatarValue: string = profileRes.data.avatar_url;
          // `avatar_url` may already be a full public URL (AvatarUploader saves the public URL),
          // otherwise treat it as a storage path and build a public URL from it.
          const publicUrl = avatarValue.startsWith('http')
            ? avatarValue
            : storageApi.getAvatarPublicUrl(avatarValue);
          setAvatarUrl(publicUrl ?? null);
        } else {
          setAvatarUrl(null);
        }
      } catch (e) {
        setIsLoggedIn(false);
        setAvatarUrl(null);
      }
    };

    loadUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(() => {
      loadUser();
    });

    return () => {
      mounted = false;
      // unsubscribe if present
      if (authListener && (authListener as any).subscription && typeof (authListener as any).subscription.unsubscribe === 'function') {
        ;(authListener as any).subscription.unsubscribe();
      }
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-primary-600 bg-primary-700 text-white">
      <div className="h-1 w-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between py-3 gap-4">
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
              <p className="text-xs text-primary-100">Juanita HS Chapter Hub</p>
            </div>
          </Link>

          <div className="flex items-center gap-4">
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

            {isLoggedIn ? (
              <Link href="/profile" className="ml-2">
                <div className="w-9 h-9 rounded-full bg-primary-600 text-white flex items-center justify-center overflow-hidden border border-primary-500">
                  {avatarUrl ? (
                    // show uploaded avatar
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={avatarUrl} alt="Profile avatar" className="w-full h-full object-cover" />
                  ) : (
                    <User size={18} />
                  )}
                </div>
              </Link>
            ) : (
              <Link
                href="/login"
                className="ml-2 px-3 py-2 text-sm font-medium text-primary-100 rounded-lg hover:text-white hover:bg-primary-600"
              >
                Log in
              </Link>
            )}
          </div>
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
