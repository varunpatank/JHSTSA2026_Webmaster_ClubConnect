import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-neutral-200 bg-gradient-to-b from-white via-primary-50/20 to-secondary-50/20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="rounded-2xl border border-primary-100 bg-gradient-to-r from-primary-600 to-primary-500 p-6 md:p-8 text-white shadow-card">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <p className="text-sm uppercase tracking-wide text-primary-100">
                Join the community
              </p>
              <h3 className="text-2xl font-bold mt-1">
                Ready to get involved in a club?
              </h3>
            </div>
            <Link
              href="/directory"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-white text-primary-700 font-semibold hover:bg-primary-50"
            >
              Browse Chapters
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div>
            <h3 className="text-lg font-bold font-heading mb-4 text-secondary-700">
              ClubConnect
            </h3>
            <p className="text-neutral-600 text-sm">
              Juanita High School community resource hub for discovering clubs,
              joining chapters, and starting new organizations.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold font-heading mb-4 text-secondary-700">
              Main Flows
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/directory"
                  className="text-neutral-600 hover:text-primary-700"
                >
                  Browse Clubs
                </Link>
              </li>
              <li>
                <Link
                  href="/start-a-club"
                  className="text-neutral-600 hover:text-primary-700"
                >
                  Start New Club
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="text-neutral-600 hover:text-primary-700"
                >
                  Profile Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-neutral-600 hover:text-primary-700"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold font-heading mb-4 text-secondary-700">
              School Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/resources"
                  className="text-neutral-600 hover:text-primary-700"
                >
                  Start-Club Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="text-neutral-600 hover:text-primary-700"
                >
                  Donations
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-neutral-600 hover:text-primary-700"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
          <p>© {currentYear} ClubConnect. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary-700">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary-700">
              Terms of Use
            </Link>
            <Link href="/accessibility" className="hover:text-primary-700">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
