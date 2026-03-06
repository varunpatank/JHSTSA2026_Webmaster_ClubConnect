'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  externalResources,
  externalResourceCategories as categories,
  externalResourceTypes as types,
  type ExternalResource,
} from '@/lib/pageData';

export default function ExternalResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [showFreeOnly, setShowFreeOnly] = useState(false);
  const [savedResources, setSavedResources] = useState<string[]>([]);
  const [showSavedOnly, setShowSavedOnly] = useState(false);

  const filteredResources = useMemo(() => {
    return externalResources.filter(resource => {
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matches = resource.title.toLowerCase().includes(query) ||
          resource.description.toLowerCase().includes(query) ||
          resource.tags.some(t => t.toLowerCase().includes(query));
        if (!matches) return false;
      }
      if (selectedCategory && resource.category !== selectedCategory) return false;
      if (selectedType !== 'All' && resource.type !== selectedType) return false;
      if (showFreeOnly && !resource.free) return false;
      if (showSavedOnly && !savedResources.includes(resource.id)) return false;
      return true;
    });
  }, [searchQuery, selectedCategory, selectedType, showFreeOnly, showSavedOnly, savedResources]);

  const featuredResources = externalResources.filter(r => r.featured);

  const toggleSave = (id: string) => {
    if (savedResources.includes(id)) {
      setSavedResources(savedResources.filter(r => r !== id));
    } else {
      setSavedResources([...savedResources, id]);
    }
  };

  const typeColors: Record<string, string> = {
    'Website': 'bg-blue-100 text-blue-700',
    'Tool': 'bg-green-100 text-green-700',
    'Template': 'bg-purple-100 text-purple-700',
    'Video': 'bg-red-100 text-red-700',
    'Course': 'bg-amber-100 text-amber-700',
    'Article': 'bg-teal-100 text-teal-700',
    'Community': 'bg-pink-100 text-pink-700'
  };

  return (
    <div className="bg-neutral-100 min-h-screen">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80"
            alt="Library"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/95 to-teal-600/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <Link href="/hub" className="text-white/80 hover:text-white text-sm mb-4 inline-flex items-center gap-2">
            ← Back to Hub
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-white">
            🌐 External Resources Library
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            {externalResources.length}+ curated links to the best tools, websites, courses, and resources 
            for running successful student organizations.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#resources" className="btn-secondary">
              Browse Resources
            </a>
            <button
              onClick={() => setShowSavedOnly(!showSavedOnly)}
              className={`px-6 py-2.5 font-semibold border-2 transition-all ${
                showSavedOnly 
                  ? 'bg-white text-emerald-600 border-white' 
                  : 'bg-white/20 text-white border-white/50 hover:bg-white hover:text-emerald-600'
              }`}
            >
              ❤️ My Saved ({savedResources.length})
            </button>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-bold text-neutral-700 mb-4">⭐ Featured Resources</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {featuredResources.map(resource => (
              <a
                key={resource.id}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-64 p-4 border border-neutral-200 hover:border-primary-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-0.5 text-xs font-semibold ${typeColors[resource.type]}`}>
                    {resource.type}
                  </span>
                  {resource.free && <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold">FREE</span>}
                </div>
                <h3 className="font-bold text-primary-500 group-hover:text-secondary-500 transition-colors mb-1">
                  {resource.title}
                </h3>
                <p className="text-xs text-neutral-600 line-clamp-2">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section id="resources" className="py-6 bg-neutral-50 border-b border-neutral-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center">
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field max-w-xs"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="select-field"
            >
              <option value="">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="select-field"
            >
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showFreeOnly}
                onChange={(e) => setShowFreeOnly(e.target.checked)}
                className="w-4 h-4"
              />
              <span className="text-sm text-neutral-700">Free only</span>
            </label>
            <span className="text-sm text-neutral-500 ml-auto">
              {filteredResources.length} resources found
            </span>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredResources.map(resource => (
              <div key={resource.id} className="card p-5 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-2 py-0.5 text-xs font-semibold ${typeColors[resource.type]}`}>
                      {resource.type}
                    </span>
                    {resource.free && (
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold">FREE</span>
                    )}
                  </div>
                  <button
                    onClick={() => toggleSave(resource.id)}
                    className={`text-xl transition-transform hover:scale-110 ${
                      savedResources.includes(resource.id) ? 'text-red-500' : 'text-neutral-300 hover:text-red-400'
                    }`}
                  >
                    {savedResources.includes(resource.id) ? '❤️' : '🤍'}
                  </button>
                </div>

                <h3 className="font-bold text-primary-500 font-heading mb-2">{resource.title}</h3>
                <p className="text-sm text-neutral-600 mb-3 flex-grow">{resource.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {resource.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-neutral-100 text-neutral-500 text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-400">{resource.category}</span>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-primary-500 hover:text-secondary-500 flex items-center gap-1"
                  >
                    Visit Site <span>↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-neutral-700 mb-2">No resources found</h3>
              <p className="text-neutral-600 mb-4">Try adjusting your search or filters</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('');
                  setSelectedType('All');
                  setShowFreeOnly(false);
                  setShowSavedOnly(false);
                }}
                className="text-primary-500 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Suggest Resource */}
      <section className="py-12 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold font-heading mb-4">Know a Great Resource?</h2>
          <p className="text-white/90 mb-6">
            Help the community by suggesting tools and resources you&apos;ve found helpful.
          </p>
          <Link href="/hub/request" className="btn-secondary">
            Suggest a Resource
          </Link>
        </div>
      </section>
    </div>
  );
}
