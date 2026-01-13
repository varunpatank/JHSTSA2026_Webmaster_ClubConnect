import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { chapters } from '@/lib/data';

interface ChapterPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { id } = await params;
  const chapter = chapters.find((c) => c.id === id);

  if (!chapter) {
    notFound();
  }

  return (
    <div className="bg-neutral-100 min-h-screen">
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1920&q=80"
            alt="Chapter community"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/95 to-primary-500/85"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-white/70 mb-4">
            <Link href="/directory" className="hover:text-white transition-colors">Directory</Link>
            <span>/</span>
            <span className="text-white">{chapter.name}</span>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-24 h-24 bg-secondary-500 flex items-center justify-center flex-shrink-0 rounded-xl shadow-lg">
              <span className="text-4xl font-bold text-white font-heading">
                {chapter.name.split(' ').map(w => w[0]).join('').slice(0, 3)}
              </span>
            </div>
            <div className="flex-grow">
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="badge badge-secondary">{chapter.category}</span>
                <span className="badge bg-white/20 text-white">{chapter.membershipStatus}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold font-heading mb-2 text-white">{chapter.name}</h1>
              <p className="text-white/80">{chapter.description}</p>
            </div>
            <div className="flex-shrink-0">
              <button className="btn-secondary">
                Request to Join
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <div className="card p-6">
              <h2 className="section-title text-xl mb-4">About This Chapter</h2>
              <p className="text-neutral-700">{chapter.description}</p>
              
              <div className="grid sm:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-semibold text-primary-500 mb-2">Meeting Schedule</h3>
                  <p className="text-neutral-600">{chapter.meetingSchedule}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary-500 mb-2">Location</h3>
                  <p className="text-neutral-600">{chapter.meetingLocation}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary-500 mb-2">Grade Level</h3>
                  <p className="text-neutral-600">{chapter.gradeLevel}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary-500 mb-2">Founded</h3>
                  <p className="text-neutral-600">{chapter.foundedYear}</p>
                </div>
              </div>
            </div>

            {/* Membership Info */}
            <div className="card p-6">
              <h2 className="section-title text-xl mb-4">Membership Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-primary-500 mb-2">Requirements</h3>
                  <p className="text-neutral-600">{chapter.membershipRequirements}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary-500 mb-2">Dues</h3>
                  <p className="text-neutral-600">{chapter.dues}</p>
                </div>
              </div>
            </div>

            {/* Officers */}
            <div className="card p-6">
              <h2 className="section-title text-xl mb-4">Chapter Officers</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {chapter.officers.map((officer, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-neutral-50 border border-neutral-200">
                    <div className="w-14 h-14 bg-primary-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-white">
                        {officer.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-primary-500">{officer.name}</p>
                      <p className="text-sm text-secondary-500 font-medium">{officer.position}</p>
                      <p className="text-sm text-neutral-500">Grade {officer.grade}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            {chapter.achievements.length > 0 && (
              <div className="card p-6">
                <h2 className="section-title text-xl mb-4">Achievements & Highlights</h2>
                <ul className="space-y-3">
                  {chapter.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-secondary-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="square" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-neutral-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="card p-6">
              <h3 className="font-bold text-lg text-primary-500 mb-4 font-heading">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-neutral-200">
                  <span className="text-neutral-600">Members</span>
                  <span className="font-bold text-primary-500">{chapter.memberCount}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-neutral-200">
                  <span className="text-neutral-600">Meeting Frequency</span>
                  <span className="font-bold text-primary-500">{chapter.meetingFrequency}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-neutral-200">
                  <span className="text-neutral-600">Meeting Time</span>
                  <span className="font-bold text-primary-500">{chapter.meetingTime}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">Status</span>
                  <span className="badge badge-primary">Active</span>
                </div>
              </div>
            </div>

            {/* Advisor */}
            <div className="card p-6">
              <h3 className="font-bold text-lg text-primary-500 mb-4 font-heading">Faculty Advisor</h3>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-neutral-200 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-neutral-500">
                    {chapter.advisor.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-primary-500">{chapter.advisor.name}</p>
                  <p className="text-sm text-neutral-500">{chapter.advisor.department}</p>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <a 
                  href={`mailto:${chapter.advisor.email}`} 
                  className="flex items-center gap-2 text-primary-500 hover:underline"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {chapter.advisor.email}
                </a>
                {chapter.advisor.phone && (
                  <p className="flex items-center gap-2 text-neutral-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {chapter.advisor.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Social Links */}
            {(chapter.socialLinks.website || chapter.socialLinks.instagram || chapter.socialLinks.twitter || chapter.socialLinks.discord) && (
              <div className="card p-6">
                <h3 className="font-bold text-lg text-primary-500 mb-4 font-heading">Connect With Us</h3>
                <div className="space-y-3">
                  {chapter.socialLinks.website && (
                    <a 
                      href={chapter.socialLinks.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-neutral-600 hover:text-primary-500 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="square" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      Website
                    </a>
                  )}
                  {chapter.socialLinks.instagram && (
                    <a 
                      href={`https://instagram.com/${chapter.socialLinks.instagram.replace('@', '')}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-neutral-600 hover:text-primary-500 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      {chapter.socialLinks.instagram}
                    </a>
                  )}
                  {chapter.socialLinks.discord && (
                    <span className="flex items-center gap-3 text-neutral-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                      </svg>
                      {chapter.socialLinks.discord}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Join CTA */}
            <div className="card p-6 bg-primary-500 text-white">
              <h3 className="font-bold text-lg mb-2 font-heading">Interested in Joining?</h3>
              <p className="text-neutral-200 text-sm mb-4">
                Click below to send a join request to the chapter advisor.
              </p>
              <button className="btn-secondary w-full">
                Request to Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return chapters.map((chapter) => ({
    id: chapter.id,
  }));
}
