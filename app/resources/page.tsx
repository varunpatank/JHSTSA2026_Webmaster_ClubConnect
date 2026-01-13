'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { resources } from '@/lib/data';
import { ResourceCategory } from '@/types';

const categories: ResourceCategory[] = ['Templates', 'Training Materials', 'Forms', 'Guides', 'Handbooks'];

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      if (selectedCategory && resource.category !== selectedCategory) return false;
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          resource.title.toLowerCase().includes(query) ||
          resource.description.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  const getFileIcon = (fileType: string) => {
    switch (fileType.toUpperCase()) {
      case 'PDF':
        return (
          <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M10.92,12.31C10.68,11.54 10.15,9.08 11.55,9.04C12.95,9 12.03,12.16 12.03,12.16C12.42,13.65 14.05,14.72 14.05,14.72C14.55,14.57 17.4,14.24 17,15.72C16.57,17.2 13.5,15.81 13.5,15.81C11.55,15.95 10.09,16.47 10.09,16.47C8.96,18.58 7.64,19.5 7.1,18.61C6.43,17.5 9.23,16.07 9.23,16.07C10.68,13.72 10.9,12.35 10.92,12.31Z" />
          </svg>
        );
      case 'DOCX':
      case 'DOC':
        return (
          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M15.2,20H13.8L12,13.2L10.2,20H8.8L6.6,11H8.1L9.5,17.8L11.3,11H12.6L14.4,17.8L15.8,11H17.3L15.2,20M13,9V3.5L18.5,9H13Z" />
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
    }
  };

  return (
    <div className="bg-neutral-100 min-h-screen">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80"
            alt="Library and resources"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/95 to-primary-500/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="page-title text-white">Resource Library</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Templates, forms, guides, and training materials for chapter leaders and members.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="card p-6 mb-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-12"
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="square" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="select-field"
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory('')}
            className={`px-4 py-2 font-medium transition-colors ${
              selectedCategory === '' 
                ? 'bg-primary-500 text-white' 
                : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-300'
            }`}
          >
            All Resources
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 font-medium transition-colors ${
                selectedCategory === cat 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-neutral-600">
            Showing <strong>{filteredResources.length}</strong> resources
          </p>
        </div>

        {/* Resources Grid */}
        {filteredResources.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="card p-6 flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-neutral-100 flex items-center justify-center">
                    {getFileIcon(resource.fileType)}
                  </div>
                  <div className="flex-grow">
                    <span className="badge badge-secondary text-xs mb-1">{resource.category}</span>
                    <h3 className="font-bold text-primary-500 font-heading">{resource.title}</h3>
                  </div>
                </div>
                <p className="text-neutral-600 text-sm flex-grow">{resource.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-neutral-400">
                    Added: {new Date(resource.dateAdded).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="badge badge-outline text-xs">{resource.fileType}</span>
                    <a
                      href={resource.downloadUrl}
                      className="btn-primary text-sm px-3 py-1 flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="square" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="card p-12 text-center">
            <svg className="w-16 h-16 mx-auto text-neutral-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-xl font-bold text-neutral-500 mb-2">No resources found</h3>
            <p className="text-neutral-400">Try adjusting your search or filters.</p>
          </div>
        )}

        {/* Request Resource Section */}
        <div className="mt-12 card p-8 bg-primary-500 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold font-heading mb-4">Need a Resource We Don&apos;t Have?</h2>
            <p className="text-neutral-200 mb-6">
              If you need a template, form, or guide that isn&apos;t listed here, let us know! 
              We&apos;re always looking to expand our resource library.
            </p>
            <a href="mailto:activities@school.edu" className="btn-secondary inline-block">
              Request a Resource
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
