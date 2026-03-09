"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { addAdminClub, isLoggedIn } from "@/lib/clientState";

export default function StartAClubPage() {
  const router = useRouter();
  const [status, setStatus] = useState<
    "Draft" | "Pending approval" | "Published"
  >("Pending approval");
  const [formData, setFormData] = useState({
    name: "",
    purpose: "",
    category: "",
    meetingSchedule: "",
    location: "",
    advisor: "",
    affiliation: "Juanita High School",
    resources: "",
  });

  const submitProposal = (event: FormEvent) => {
    event.preventDefault();

    if (!isLoggedIn()) {
      router.push("/login?redirect=/start-a-club");
      return;
    }

    const generatedId =
      formData.name
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-") || `club-${Date.now()}`;

    addAdminClub({
      id: generatedId,
      name: formData.name,
      status,
    });

    router.push("/profile?from=start-club");
  };

  return (
    <div className="bg-neutral-100 min-h-screen">
      <section className="bg-primary-500 text-white border-b-4 border-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-4xl font-heading font-bold">Start New Club</h1>
          <p className="mt-2 max-w-3xl text-neutral-100">
            Complete the guided proposal form to create a draft, submit for
            approval, or publish when all requirements are met.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid lg:grid-cols-3 gap-6">
        <form
          onSubmit={submitProposal}
          className="lg:col-span-2 card p-6 space-y-4"
        >
          <h2 className="text-xl font-heading font-bold text-primary-600">
            Club Creation Form
          </h2>
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-1">
              Proposed club name
            </label>
            <input
              className="input-field"
              value={formData.name}
              required
              onChange={(e) =>
                setFormData((old) => ({ ...old, name: e.target.value }))
              }
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-1">
              Mission / purpose
            </label>
            <textarea
              className="input-field min-h-24"
              value={formData.purpose}
              required
              onChange={(e) =>
                setFormData((old) => ({ ...old, purpose: e.target.value }))
              }
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">
                Category / topic
              </label>
              <input
                className="input-field"
                value={formData.category}
                required
                onChange={(e) =>
                  setFormData((old) => ({ ...old, category: e.target.value }))
                }
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">
                Meeting schedule
              </label>
              <input
                className="input-field"
                value={formData.meetingSchedule}
                required
                onChange={(e) =>
                  setFormData((old) => ({
                    ...old,
                    meetingSchedule: e.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">
                Room / location
              </label>
              <input
                className="input-field"
                value={formData.location}
                required
                onChange={(e) =>
                  setFormData((old) => ({ ...old, location: e.target.value }))
                }
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">
                Advisor information
              </label>
              <input
                className="input-field"
                value={formData.advisor}
                required
                onChange={(e) =>
                  setFormData((old) => ({ ...old, advisor: e.target.value }))
                }
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-1">
              Parent organization / school affiliation
            </label>
            <input
              className="input-field"
              value={formData.affiliation}
              onChange={(e) =>
                setFormData((old) => ({ ...old, affiliation: e.target.value }))
              }
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-1">
              Links / planning resources
            </label>
            <textarea
              className="input-field min-h-20"
              value={formData.resources}
              onChange={(e) =>
                setFormData((old) => ({ ...old, resources: e.target.value }))
              }
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-1">
              Submission status
            </label>
            <select
              className="select-field"
              value={status}
              onChange={(e) => setStatus(e.target.value as typeof status)}
            >
              <option>Draft</option>
              <option>Pending approval</option>
              <option>Published</option>
            </select>
          </div>

          <button type="submit" className="btn-primary w-full">
            Submit Club Proposal
          </button>
        </form>

        <aside className="space-y-6">
          <div className="card p-6">
            <h2 className="text-xl font-heading font-bold text-primary-600">
              Initiation Steps
            </h2>
            <ol className="mt-4 list-decimal list-inside text-sm text-neutral-700 space-y-2">
              <li>Define mission and student interest.</li>
              <li>Identify a faculty advisor.</li>
              <li>Prepare schedule, location, and activity plan.</li>
              <li>Submit for school review and approval.</li>
            </ol>
          </div>
          <div className="card p-6">
            <h2 className="text-xl font-heading font-bold text-primary-600">
              Related Resources
            </h2>
            <div className="mt-4 space-y-2">
              <Link
                href="/resources"
                className="block text-sm text-primary-600 hover:underline"
              >
                How to start a club
              </Link>
              <Link
                href="/resources"
                className="block text-sm text-primary-600 hover:underline"
              >
                Faculty advisor requirements
              </Link>
              <Link
                href="/resources"
                className="block text-sm text-primary-600 hover:underline"
              >
                School approval steps
              </Link>
              <Link
                href="/resources"
                className="block text-sm text-primary-600 hover:underline"
              >
                Planning recommendations
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
