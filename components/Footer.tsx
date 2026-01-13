import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-500 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold font-heading mb-4 text-secondary-400">ClubConnect</h3>
            <p className="text-neutral-300 text-sm">
              A centralized platform for managing school clubs, chapters, and student organizations with tools for administration, collaboration, and visibility.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold font-heading mb-4 text-secondary-400">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/directory" className="text-neutral-300 hover:text-white transition-colors">
                  Chapter Directory
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-neutral-300 hover:text-white transition-colors">
                  Events Calendar
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-neutral-300 hover:text-white transition-colors">
                  Resource Library
                </Link>
              </li>
              <li>
                <Link href="/propose" className="text-neutral-300 hover:text-white transition-colors">
                  Propose a Chapter
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold font-heading mb-4 text-secondary-400">For Students</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/student" className="text-neutral-300 hover:text-white transition-colors">
                  Student Portal
                </Link>
              </li>
              <li>
                <Link href="/spotlight" className="text-neutral-300 hover:text-white transition-colors">
                  Featured Chapters
                </Link>
              </li>
              <li>
                <Link href="/alumni" className="text-neutral-300 hover:text-white transition-colors">
                  Alumni Network
                </Link>
              </li>
              <li>
                <Link href="/funding" className="text-neutral-300 hover:text-white transition-colors">
                  Funding Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold font-heading mb-4 text-secondary-400">Contact</h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <strong>Activities Office</strong>
              </li>
              <li>Room 100, Main Building</li>
              <li>activities@school.edu</li>
              <li>(555) 123-4567</li>
              <li className="pt-2">
                <strong>Office Hours:</strong><br />
                Mon-Fri: 7:30 AM - 4:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-400 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-300">
          <p>© {currentYear} ClubConnect. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
