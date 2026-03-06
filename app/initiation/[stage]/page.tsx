'use server';

import Link from 'next/link';
import { initiationStageDetails as stages } from '@/lib/exampleData';

export default async function StagePage({ params }: { params: { stage: string } }) {
  const stageId = params.stage;
  const idx = stages.findIndex((s) => s.id === stageId);
  const stage = stages[idx] || stages[0];
  const next = stages[idx + 1];

  return (
    <div className="min-h-screen bg-neutral-100">
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">{stage.title}</h1>
          <p className="text-neutral-200">{stage.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {stage.tools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="bg-white border p-6 rounded-lg hover:shadow-md">
              <div className="font-medium text-primary-700">{tool.name}</div>
              <div className="text-xs text-neutral-500 mt-2">Open tool →</div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-between">
          <Link href="/initiation" className="px-4 py-2 bg-white border rounded-lg">
            Back to Initiation
          </Link>
          {next ? (
            <Link href={`/initiation/${next.id}`} className="px-4 py-2 bg-secondary-500 text-white rounded-lg">
              Next: {next.title} →
            </Link>
          ) : (
            <Link href="/propose" className="px-4 py-2 bg-secondary-500 text-white rounded-lg">
              Finish & Propose →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
