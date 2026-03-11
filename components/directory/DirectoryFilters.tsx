"use client";

import { useMemo, useState } from "react";
import { chapters } from "@/lib/data";
import { getLocationScopeKey, getLocationScopeLabel } from "@/lib/location";
import {
  MEETING_DAY_FILTERS,
  MEETING_TIME_FILTERS,
  SIZE_FILTERS,
  STATUS_FILTERS,
  CATEGORY_TAG_COLORS,
} from "@/lib/directoryConstants";

export interface DirectoryFilterState {
  search: string;
  meetingDay: string;
  meetingTime: string;
  category: string;
  scopeFilter: string;
  size: string;
  status: string;
}

interface DirectoryFiltersProps {
  filters: DirectoryFilterState;
  onFilterChange: (filters: DirectoryFilterState) => void;
  resultCount: number;
  totalCount: number;
}

const categoryTags = Object.entries(CATEGORY_TAG_COLORS).map(
  ([value, color]) => ({ label: value, value, color }),
);

export default function DirectoryFilters({
  filters,
  onFilterChange,
  resultCount,
  totalCount,
}: DirectoryFiltersProps) {
  const [open, setOpen] = useState(false);

  const scopes = useMemo(() => {
    const scopeEntries = new globalThis.Map<string, string>();
    chapters.forEach((chapter) => {
      const key = getLocationScopeKey(chapter.meetingLocation);
      const label = getLocationScopeLabel(chapter.meetingLocation);
      if (!scopeEntries.has(key)) scopeEntries.set(key, label);
    });
    return [
      { key: "Any", label: "Any Location" },
      ...Array.from(scopeEntries.entries()).map(([key, label]) => ({
        key,
        label,
      })),
    ];
  }, []);

  const set = (partial: Partial<DirectoryFilterState>) =>
    onFilterChange({ ...filters, ...partial });

  const clearAll = () =>
    onFilterChange({
      search: "",
      meetingDay: "Any",
      meetingTime: "Any",
      category: "Any",
      scopeFilter: "Any",
      size: "Any",
      status: "Any",
    });

  const hasActiveFilters =
    filters.search ||
    filters.meetingDay !== "Any" ||
    filters.meetingTime !== "Any" ||
    filters.category !== "Any" ||
    filters.scopeFilter !== "Any" ||
    filters.size !== "Any" ||
    filters.status !== "Any";

  return (
    <div className="absolute top-3 left-3 z-20 w-72">
      <div className="bg-white/95 backdrop-blur-sm border border-neutral-200 shadow-lg rounded-xl overflow-hidden">
        {/* Collapsed bar — always visible */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-4 py-2.5"
        >
          <span className="text-sm font-heading font-bold text-primary-700 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            Filters
            <span className="text-xs font-medium text-neutral-500">
              {resultCount}/{totalCount}
            </span>
          </span>
          <span className="flex items-center gap-2">
            {hasActiveFilters && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  clearAll();
                }}
                className="text-[10px] font-semibold text-accent-500 hover:underline cursor-pointer"
              >
                Clear
              </span>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 text-neutral-400 transition-transform ${open ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>

        {/* Expandable panel */}
        {open && (
          <div className="px-4 pb-4 max-h-[60vh] overflow-y-auto border-t border-neutral-100">
            {/* Search */}
            <div className="mt-3 mb-3">
              <label className="block text-sm font-semibold text-neutral-700 mb-1">
                Search
              </label>
              <input
                value={filters.search}
                onChange={(e) => set({ search: e.target.value })}
                placeholder="Name, category, location…"
                className="input-field"
              />
            </div>

            {/* Category Tags */}
            <div className="mb-3">
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Category Tags
              </label>
              <div className="flex flex-wrap gap-1.5">
                {categoryTags.map((tag) => (
                  <button
                    key={tag.value}
                    onClick={() =>
                      set({
                        category:
                          filters.category === tag.value ? "Any" : tag.value,
                      })
                    }
                    className={`px-2.5 py-1 text-xs font-semibold border transition-all rounded-md ${
                      filters.category === tag.value
                        ? tag.color + " border-current"
                        : "bg-neutral-50 text-neutral-500 border-neutral-200 hover:border-neutral-300"
                    }`}
                  >
                    {tag.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Dropdowns */}
            <div className="space-y-2.5">
              <div>
                <label className="block text-xs font-semibold text-neutral-600 mb-1">
                  Meeting Day
                </label>
                <select
                  value={filters.meetingDay}
                  onChange={(e) => set({ meetingDay: e.target.value })}
                  className="select-field text-sm"
                >
                  {MEETING_DAY_FILTERS.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-600 mb-1">
                  Meeting Time
                </label>
                <select
                  value={filters.meetingTime}
                  onChange={(e) => set({ meetingTime: e.target.value })}
                  className="select-field text-sm"
                >
                  {MEETING_TIME_FILTERS.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-600 mb-1">
                  Club Size
                </label>
                <select
                  value={filters.size}
                  onChange={(e) => set({ size: e.target.value })}
                  className="select-field text-sm"
                >
                  {SIZE_FILTERS.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-600 mb-1">
                  Enrollment Status
                </label>
                <select
                  value={filters.status}
                  onChange={(e) => set({ status: e.target.value })}
                  className="select-field text-sm"
                >
                  {STATUS_FILTERS.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-600 mb-1">
                  Building / Location
                </label>
                <select
                  value={filters.scopeFilter}
                  onChange={(e) => set({ scopeFilter: e.target.value })}
                  className="select-field text-sm"
                >
                  {scopes.map((s) => (
                    <option key={s.key} value={s.key}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearAll}
                className="btn-outline w-full mt-3 text-sm"
              >
                Reset Filters
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
