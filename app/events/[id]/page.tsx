import { events } from '@/lib/data';
import Link from 'next/link';

export default function EventDetail({ params }: { params: { id: string } }) {
  const event = events.find((e) => e.id === params.id);
  if (!event) return (
    <div className="min-h-screen flex items-center justify-center">Event not found</div>
  );

  return (
    <div className="min-h-screen bg-neutral-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/events" className="text-sm text-primary-500 hover:underline">← Back to Events</Link>
        <div className="card p-8 mt-4">
          <h1 className="text-2xl font-bold text-primary-600 mb-2">{event.title}</h1>
          <p className="text-sm text-neutral-500 mb-4">{event.chapterName} — {event.location} — {event.date}</p>
          <p className="text-neutral-700 mb-6">{event.description}</p>
          <div className="flex gap-4">
            <span className={`badge ${event.isPublic ? 'badge-primary' : 'badge-outline'}`}>
              {event.isPublic ? 'Open Event' : 'Members Only'}
            </span>
            {event.requiresRSVP && <button className="btn-secondary">RSVP</button>}
          </div>
        </div>
      </div>
    </div>
  );
}
