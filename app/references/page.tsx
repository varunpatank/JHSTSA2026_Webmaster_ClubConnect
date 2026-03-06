'use client';

import Image from 'next/image';
import { referenceImageLinks as imageLinks } from '@/lib/exampleData';

// refrences page for clubconnect websuite
export default function ReferencesPage() {

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* hero section */}
      <section className="relative bg-primary-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">References</h1>
          <p className="text-xl text-neutral-200">documentation and citations for clubconnect websuite</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* work log and copyright sectoins */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* work log seciton */}
          <div className="bg-white border border-neutral-200 shadow-card">
            <div className="p-6 border-b border-neutral-200">
              <h2 className="text-2xl font-bold font-heading text-neutral-800">Work Log</h2>
            </div>
            <div className="p-6">
              <div className="border border-neutral-300 bg-neutral-50 h-96 overflow-hidden">
                <Image
                  src="/worklog.png"
                  alt="Technology Student Association Work Log"
                  width={800}
                  height={600}
                  className="w-full h-full object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* copyright checklist pdf seciton */}
          <div className="bg-white border border-neutral-200 shadow-card">
            <div className="p-6 border-b border-neutral-200">
              <h2 className="text-2xl font-bold font-heading text-neutral-800">Copyright Checklist</h2>
            </div>
            <div className="p-6">
              <p className="text-sm text-neutral-600 mb-4">copyright.pdf</p>
              <div className="border border-neutral-300 bg-neutral-50 h-96 overflow-hidden">
                <iframe
                  src="/WhatsApp%20Image%202026-01-21%20at%202.41.55%20PM.pdf"
                  className="w-full h-full"
                  title="Copyright Checklist PDF"
                />
              </div>
            </div>
          </div>
        </div>

        {/* code stack sectoin */}
        <div className="bg-white border border-neutral-200 shadow-card mb-12">
          <div className="p-6 border-b border-neutral-200">
            <h2 className="text-2xl font-bold font-heading text-neutral-800">Code Stack</h2>
          </div>
          <div className="p-6">
            <p className="text-neutral-700 leading-relaxed">
              This website utilizes <span className="font-semibold text-primary-500">Next.js</span>, a modern framework built on top of React optimized for efficiency and fast render times. On top of this, this website utilizes <span className="font-semibold text-primary-500">TailwindCSS</span>, a framework allowing for shorthand CSS to be written directly in components. Non-standard components and the theming of the site are done by the work of our team. This site follows current WCAG accessibility guidelines for color contrast, with small text at a AAA contrast ratio rating, and large text with at least a AA contrast ratio rating. All images used are sourced from Unsplash with proper licensing.
            </p>
          </div>
        </div>

        {/* additional libaries section */}
        <div className="bg-white border border-neutral-200 shadow-card mb-12">
          <div className="p-6 border-b border-neutral-200">
            <h2 className="text-2xl font-bold font-heading text-neutral-800">Additional Libraries Utilized</h2>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-secondary-500 mt-1">•</span>
                  <span><code className="bg-neutral-100 px-2 py-0.5 text-sm">next/image</code> : Optimized image component for Next.js applications.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-500 mt-1">•</span>
                  <span><code className="bg-neutral-100 px-2 py-0.5 text-sm">next/link</code> : Client-side navigation component for Next.js.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-500 mt-1">•</span>
                  <span><code className="bg-neutral-100 px-2 py-0.5 text-sm">react</code> : A library for building user interfaces.</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-secondary-500 mt-1">•</span>
                  <span><code className="bg-neutral-100 px-2 py-0.5 text-sm">typescript</code> : Typed superset of JavaScript for better developerment experience.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-500 mt-1">•</span>
                  <span><code className="bg-neutral-100 px-2 py-0.5 text-sm">tailwindcss</code> : Utility-first CSS framework for rapid UI developement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-500 mt-1">•</span>
                  <span><code className="bg-neutral-100 px-2 py-0.5 text-sm">postcss</code> : Tool for transforming CSS with JavaScript plugins.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* image links sectiion */}
        <div className="bg-white border border-neutral-200 shadow-card">
          <div className="p-6 border-b border-neutral-200">
            <h2 className="text-2xl font-bold font-heading text-neutral-800">Image Links</h2>
          </div>
          <div className="p-6">
            <p className="text-neutral-600 mb-6">
              All images rely on the <a href="https://unsplash.com/license" className="text-primary-500 hover:underline font-semibold">Unsplash License</a>, which allows free use for commercial and non-commercial purposes.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {imageLinks.map((image, index) => (
                <div key={index} className="border border-neutral-200 p-3 bg-neutral-50">
                  <a 
                    href={image.url.split('?')[0]} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:underline text-sm break-all"
                  >
                    {image.url.split('?')[0]}
                  </a>
                  <p className="text-xs text-neutral-500 mt-1">
                    {image.description} - Used on: {image.page}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
