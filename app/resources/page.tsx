import Link from "next/link";

const resources = [
  {
    title: "How to Start a Club",
    details:
      "Step-by-step process from idea validation to first meeting launch.",
  },
  {
    title: "Faculty Advisor Requirements",
    details: "Checklist for advisor confirmation and school policy alignment.",
  },
  {
    title: "School Approval Steps",
    details:
      "Submission sequence, review expectations, and publication conditions.",
  },
  {
    title: "Planning Recommendations",
    details:
      "Meeting cadence, recruitment plan, and first semester milestones.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-neutral-100 min-h-screen">
      <section className="bg-primary-500 text-white border-b-4 border-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <h1 className="text-2xl md:text-5xl font-heading font-bold">
            Start-Club Resources
          </h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-8 grid md:grid-cols-2 gap-5">
        {resources.map((item) => (
          <article key={item.title} className="card p-6">
            <h2 className="text-xl font-heading font-bold text-primary-600">
              {item.title}
            </h2>
            <p className="mt-2 text-sm text-neutral-700">{item.details}</p>
            <button type="button" className="btn-outline mt-4 text-sm">
              Open Resource
            </button>
          </article>
        ))}
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-10">
        <div className="card p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl font-heading font-bold text-primary-600">
              Ready to submit?
            </h2>
            <p className="text-sm text-neutral-700">
              Start your proposal when your mission, advisor, and schedule are
              ready.
            </p>
          </div>
          <Link href="/start-a-club" className="btn-primary text-center">
            Go to Start New Club
          </Link>
        </div>
      </section>
    </div>
  );
}
