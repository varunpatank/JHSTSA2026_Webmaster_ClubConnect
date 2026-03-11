import Link from "next/link";
import { chapters } from "@/lib/data";

interface DonatePageProps {
  searchParams: Promise<{ club?: string }>;
}

export default async function DonatePage({ searchParams }: DonatePageProps) {
  const { club } = await searchParams;
  const selectedClub = club
    ? chapters.find((item) => item.id === club)
    : undefined;

  return (
    <div className="bg-neutral-100 min-h-screen">
      <section className="bg-primary-500 text-white border-b-4 border-secondary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <h1 className="text-2xl md:text-5xl font-heading font-bold">
            Donations
          </h1>
          <p className="mt-2 text-neutral-100">
            Support club activities through approved external platforms.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-5">
        <div className="card p-6">
          <h2 className="text-xl font-heading font-bold text-primary-600">
            Donation Target
          </h2>
          <p className="mt-2 text-neutral-700">
            {selectedClub
              ? `You are donating to ${selectedClub.name}.`
              : "Select a club page first to prefill the donation target."}
          </p>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-heading font-bold text-primary-600">
            External Handoff
          </h2>
          <p className="mt-2 text-sm text-neutral-700">
            Donations are processed outside ClubConnect through approved
            school-compatible systems.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a
              href="https://stripe.com"
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-center"
            >
              Continue to Stripe
            </a>
            <a
              href="https://hcb.hackclub.com"
              target="_blank"
              rel="noreferrer"
              className="btn-outline text-center"
            >
              Continue to HCB
            </a>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-heading font-bold text-primary-600">
            How Funds Are Used
          </h2>
          <ul className="mt-3 text-sm text-neutral-700 list-disc list-inside space-y-1">
            <li>Competition registration and travel support</li>
            <li>Program materials, supplies, and workshop costs</li>
            <li>Community events and chapter outreach efforts</li>
          </ul>
          <Link
            href="/directory"
            className="text-sm text-primary-600 hover:underline mt-4 inline-block"
          >
            Back to Club Directory
          </Link>
        </div>
      </section>
    </div>
  );
}
