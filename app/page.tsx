import Link from 'next/link';
import Image from 'next/image';
import { stats, events, announcements, chapters } from '@/lib/data';

export default function HomePage() {
  const upcomingEvents = events.slice(0, 4);
  const featuredChapters = chapters.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1920&q=80"
            alt="Students collaborating"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/95 via-primary-500/80 to-primary-500/60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-secondary-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                 Your School Community Hub
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-white">
                Welcome to ClubConnect
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Your central hub for school clubs, chapters, and student organizations. 
                Discover, connect, and thrive with fellow students who share your passions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/directory" className="btn-secondary">
                  Browse Clubs
                </Link>
                <Link href="/propose" className="bg-white/20 backdrop-blur text-white px-6 py-2.5 font-semibold border-2 border-white/50 hover:bg-white hover:text-primary-500 transition-all rounded-lg">
                  Start a New Club
                </Link>
              </div>
            </div>
            
            <div className="hidden md:grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
                <div className="text-5xl font-bold text-secondary-400 font-heading">{stats.activeChapters}</div>
                <div className="text-white/80 mt-2">Active Clubs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
                <div className="text-5xl font-bold text-secondary-400 font-heading">{stats.totalMembers.toLocaleString()}</div>
                <div className="text-white/80 mt-2">Student Members</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
                <div className="text-5xl font-bold text-secondary-400 font-heading">{stats.upcomingEvents}</div>
                <div className="text-white/80 mt-2">Upcoming Events</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
                <div className="text-5xl font-bold text-secondary-400 font-heading">+{stats.newMembersThisMonth}</div>
                <div className="text-white/80 mt-2">New This Month</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Stats */}
      <section className="md:hidden bg-gradient-to-b from-neutral-100 to-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="stat-card">
              <div className="stat-number">{stats.activeChapters}</div>
              <div className="stat-label">Active Clubs</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.totalMembers.toLocaleString()}</div>
              <div className="stat-label">Members</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.upcomingEvents}</div>
              <div className="stat-label">Upcoming Events</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.newMembersThisMonth}</div>
              <div className="stat-label">New This Month</div>
            </div>
          </div>
        </div>
      </section>

      {/* Announcement Banner */}
      <section className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4">
            <span className="bg-white text-secondary-500 px-3 py-1 font-bold text-sm rounded-full">
               NEW
            </span>
            <p className="font-medium">{announcements[0].title}</p>
            <Link href="/announcements" className="ml-auto text-sm underline hover:no-underline whitespace-nowrap">
              View All 
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Navigation - 6 Main Sections */}
      <section className="py-16 bg-gradient-to-b from-neutral-100 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-500 mb-4">
              Explore ClubConnect
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Everything you need to discover, join, and lead student organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/directory" className="group bg-white border-2 border-neutral-200 p-8 hover:border-primary-500 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-3xl text-white shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                  
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 font-heading text-primary-500">Club Directory</h3>
                  <p className="text-neutral-600 text-sm">Browse all {stats.activeChapters} active clubs and find the perfect fit for your interests.</p>
                </div>
              </div>
            </Link>

            <Link href="/events" className="group bg-white border-2 border-neutral-200 p-8 hover:border-secondary-500 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center text-3xl text-white shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                  
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 font-heading text-primary-500">Events Calendar</h3>
                  <p className="text-neutral-600 text-sm">Stay updated with {stats.upcomingEvents} upcoming meetings, competitions, and activities.</p>
                </div>
              </div>
            </Link>

            <Link href="/resources" className="group bg-white border-2 border-neutral-200 p-8 hover:border-purple-500 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-3xl text-white shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                  
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 font-heading text-primary-500">Resources</h3>
                  <p className="text-neutral-600 text-sm">Templates, guides, training materials, and tools for club success.</p>
                </div>
              </div>
            </Link>

            <Link href="/community" className="group bg-white border-2 border-neutral-200 p-8 hover:border-green-500 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-3xl text-white shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                  
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 font-heading text-primary-500">Community</h3>
                  <p className="text-neutral-600 text-sm">Discussions, success stories, spotlights, and alumni connections.</p>
                </div>
              </div>
            </Link>

            <Link href="/my-space" className="group bg-white border-2 border-neutral-200 p-8 hover:border-accent-500 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center text-3xl text-white shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                  
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 font-heading text-primary-500">My Space</h3>
                  <p className="text-neutral-600 text-sm">Your personal dashboard, goals, collections, and club management.</p>
                </div>
              </div>
            </Link>

            <Link href="/propose" className="group bg-white border-2 border-neutral-200 p-8 hover:border-yellow-500 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center text-3xl text-white shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                  
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 font-heading text-primary-500">Start a Club</h3>
                  <p className="text-neutral-600 text-sm">Have an idea? Submit a proposal to start your own student organization.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Events & Quick Actions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="section-title flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center rounded-xl shadow-md">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                Upcoming Events
              </h2>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="card p-5 flex flex-col md:flex-row gap-4 hover:shadow-lg transition-shadow">
                    <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-4 text-center min-w-[80px] rounded-xl shadow-md">
                      <div className="text-2xl font-bold">{new Date(event.date).getDate()}</div>
                      <div className="text-sm opacity-90">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-lg text-primary-500">{event.title}</h3>
                      <p className="text-neutral-600 text-sm mb-2">{event.chapterName}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {event.startTime} - {event.endTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {event.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className={`badge ${event.isPublic ? 'badge-primary' : 'badge-outline'}`}>
                        {event.isPublic ? 'Open Event' : 'Members Only'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/events" className="btn-outline inline-flex items-center gap-2">
                  View Full Calendar
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="font-bold text-lg text-primary-500 mb-4 font-heading">Quick Tools</h3>
                <div className="space-y-3">
                  <Link href="/hub/quiz" className="flex items-center gap-3 p-3 border border-neutral-200 hover:border-primary-400 hover:bg-neutral-50 transition-colors">
                    <span className="text-2xl"></span>
                    <div>
                      <div className="font-medium text-primary-600">Club Finder Quiz</div>
                      <div className="text-xs text-neutral-500">Find your perfect club match</div>
                    </div>
                  </Link>
                  <Link href="/hub/compare" className="flex items-center gap-3 p-3 border border-neutral-200 hover:border-primary-400 hover:bg-neutral-50 transition-colors">
                    <span className="text-2xl"></span>
                    <div>
                      <div className="font-medium text-primary-600">Compare Clubs</div>
                      <div className="text-xs text-neutral-500">Side-by-side comparison</div>
                    </div>
                  </Link>
                  <Link href="/hub/health" className="flex items-center gap-3 p-3 border border-neutral-200 hover:border-primary-400 hover:bg-neutral-50 transition-colors">
                    <span className="text-2xl"></span>
                    <div>
                      <div className="font-medium text-primary-600">Club Health Check</div>
                      <div className="text-xs text-neutral-500">Diagnose & improve your club</div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="font-bold text-lg text-primary-500 mb-4 font-heading">Announcements</h3>
                <div className="space-y-4">
                  {announcements.map((announcement) => (
                    <div key={announcement.id} className="border-l-4 border-secondary-500 pl-4">
                      <p className="font-semibold text-sm">{announcement.title}</p>
                      <p className="text-xs text-neutral-500 mt-1">{announcement.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Clubs */}
      <section className="py-16 bg-gradient-to-b from-neutral-100 to-neutral-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title inline-block">Featured Clubs</h2>
            <p className="text-neutral-600 mt-2 max-w-2xl mx-auto">Discover some of our most active and impactful student organizations</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredChapters.map((chapter, index) => {
              const images = [
                'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&q=80',
                'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80',
                'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&q=80',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
              ];
              return (
                <Link key={chapter.id} href={`/directory/${chapter.id}`} className="card-hover block group overflow-hidden">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={images[index % images.length]}
                      alt={chapter.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <span className="absolute bottom-3 left-3 badge badge-secondary text-xs">{chapter.category}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-primary-500 text-lg">{chapter.name}</h3>
                    <p className="text-sm text-neutral-600 mt-1 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {chapter.memberCount} members
                    </p>
                    <p className="text-sm text-neutral-500 mt-3 line-clamp-2">{chapter.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link href="/directory" className="btn-primary inline-flex items-center gap-2">
              View All Clubs
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Resource Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title inline-block">Resources & Tools</h2>
            <p className="text-neutral-600 mt-2 max-w-2xl mx-auto">Everything you need to succeed as a club member or leader</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/hub" className="card p-6 hover:shadow-lg transition-all group">
              <div className="text-4xl mb-4"></div>
              <h3 className="font-bold text-primary-500 mb-2">Starter Guides</h3>
              <p className="text-sm text-neutral-600">Step-by-step guides to start and run clubs successfully.</p>
            </Link>
            <Link href="/hub/competitions" className="card p-6 hover:shadow-lg transition-all group">
              <div className="text-4xl mb-4"></div>
              <h3 className="font-bold text-primary-500 mb-2">Competitions</h3>
              <p className="text-sm text-neutral-600">Find and track student competitions nationwide.</p>
            </Link>
            <Link href="/hub/mentors" className="card p-6 hover:shadow-lg transition-all group">
              <div className="text-4xl mb-4"></div>
              <h3 className="font-bold text-primary-500 mb-2">Mentorship</h3>
              <p className="text-sm text-neutral-600">Connect with alumni and advisors for guidance.</p>
            </Link>
            <Link href="/hub/external" className="card p-6 hover:shadow-lg transition-all group">
              <div className="text-4xl mb-4"></div>
              <h3 className="font-bold text-primary-500 mb-2">External Resources</h3>
              <p className="text-sm text-neutral-600">100+ curated links to helpful external resources.</p>
            </Link>
          </div>
          <div className="mt-10 text-center">
            <Link href="/resources" className="btn-outline inline-flex items-center gap-2">
              View All Resources
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80"
            alt="Students celebrating"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary-500/90"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">Have an Idea for a New Club?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for new student organizations. If you have a passion and want to share it with others,
            submit a proposal to start your own club.
          </p>
          <Link href="/propose" className="btn-secondary inline-flex items-center gap-2">
            Submit a Proposal
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
