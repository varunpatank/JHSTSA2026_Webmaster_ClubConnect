'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface FormData {
  chapterName: string;
  missionStatement: string;
  proposedAdvisor: string;
  advisorEmail: string;
  category: string;
  justification: string;
  
  constitutionDraft: string;
  firstYearPlan: string;
  budgetRequirements: string;
  meetingSpaceNeeds: string;
  meetingFrequency: string;
  meetingTime: string;
  
  submitterName: string;
  submitterEmail: string;
  submitterGrade: string;
}

const categories = ['Academic', 'Arts', 'Service', 'Cultural', 'STEM', 'Sports', 'Leadership', 'Media', 'Other'];
const frequencies = ['Daily', 'Weekly', 'Bi-weekly', 'Monthly'];
const meetingTimes = ['Before School', 'Lunch', 'After School', 'Weekends'];
const grades = ['9', '10', '11', '12'];

export default function ProposePage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    chapterName: '',
    missionStatement: '',
    proposedAdvisor: '',
    advisorEmail: '',
    category: '',
    justification: '',
    constitutionDraft: '',
    firstYearPlan: '',
    budgetRequirements: '',
    meetingSpaceNeeds: '',
    meetingFrequency: '',
    meetingTime: '',
    submitterName: '',
    submitterEmail: '',
    submitterGrade: '',
  });

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  if (submitted) {
    return (
      <div className="bg-neutral-100 min-h-screen">
        <section className="bg-primary-500 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="page-title text-white">Proposal Submitted</h1>
          </div>
        </section>
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="card p-8 text-center">
            <div className="w-20 h-20 bg-green-100 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-primary-500 mb-4 font-heading">Thank You!</h2>
            <p className="text-neutral-600 mb-6">
              Your chapter proposal for <strong>{formData.chapterName}</strong> has been submitted successfully.
              The Activities Office will review your proposal and contact you within 5-7 business days.
            </p>
            <div className="bg-neutral-50 p-4 border border-neutral-200 mb-6 text-left">
              <h3 className="font-semibold text-primary-500 mb-2">What Happens Next?</h3>
              <ol className="list-decimal list-inside text-sm text-neutral-600 space-y-1">
                <li>Your proposal will be reviewed by the Activities Office</li>
                <li>Your proposed advisor will be contacted for confirmation</li>
                <li>The review committee will evaluate your proposal</li>
                <li>You&apos;ll receive a decision via email</li>
              </ol>
            </div>
            <div className="flex gap-4 justify-center">
              <Link href="/" className="btn-primary">Return Home</Link>
              <Link href="/directory" className="btn-outline">Browse Chapters</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-100 min-h-screen">
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
            alt="Planning and collaboration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/95 to-primary-500/85"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="page-title text-white">Propose a New Chapter</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Have an idea for a new club or organization? Submit your proposal here.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="card p-6 mb-8">
          <div className="flex items-center justify-between">
            {[
              { num: 1, label: 'Proposal Info' },
              { num: 2, label: 'Planning Details' },
              { num: 3, label: 'Contact & Submit' },
            ].map((s, idx) => (
              <div key={s.num} className="flex items-center">
                <div className={`flex items-center ${idx > 0 ? 'flex-1' : ''}`}>
                  {idx > 0 && (
                    <div className={`h-1 flex-1 mx-2 ${step >= s.num ? 'bg-primary-500' : 'bg-neutral-300'}`} 
                         style={{ width: '60px' }} />
                  )}
                  <div className={`w-10 h-10 flex items-center justify-center font-bold rounded-full ${
                    step >= s.num ? 'bg-primary-500 text-white' : 'bg-neutral-200 text-neutral-500'
                  }`}>
                    {step > s.num ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : s.num}
                  </div>
                </div>
                <span className={`ml-2 text-sm font-medium hidden sm:block ${
                  step >= s.num ? 'text-primary-500' : 'text-neutral-500'
                }`}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="card p-8">
              <h2 className="section-title text-xl mb-6">Chapter Proposal Information</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Chapter Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.chapterName}
                    onChange={(e) => updateField('chapterName', e.target.value)}
                    className="input-field"
                    placeholder="e.g., Environmental Science Club"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => updateField('category', e.target.value)}
                    className="select-field"
                    required
                  >
                    <option value="">Select a category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Mission Statement <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.missionStatement}
                    onChange={(e) => updateField('missionStatement', e.target.value)}
                    className="input-field min-h-[120px]"
                    placeholder="Describe the purpose and goals of your proposed chapter..."
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Proposed Advisor Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.proposedAdvisor}
                      onChange={(e) => updateField('proposedAdvisor', e.target.value)}
                      className="input-field"
                      placeholder="Faculty member name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Advisor Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.advisorEmail}
                      onChange={(e) => updateField('advisorEmail', e.target.value)}
                      className="input-field"
                      placeholder="advisor@school.edu"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Justification <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.justification}
                    onChange={(e) => updateField('justification', e.target.value)}
                    className="input-field min-h-[120px]"
                    placeholder="Why is this chapter needed? How is it different from existing chapters?"
                    required
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button type="button" onClick={nextStep} className="btn-primary">
                  Continue to Planning Details →
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="card p-8">
              <h2 className="section-title text-xl mb-6">Planning Details</h2>
              
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Meeting Frequency <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.meetingFrequency}
                      onChange={(e) => updateField('meetingFrequency', e.target.value)}
                      className="select-field"
                      required
                    >
                      <option value="">Select frequency</option>
                      {frequencies.map(freq => (
                        <option key={freq} value={freq}>{freq}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Preferred Meeting Time <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.meetingTime}
                      onChange={(e) => updateField('meetingTime', e.target.value)}
                      className="select-field"
                      required
                    >
                      <option value="">Select time</option>
                      {meetingTimes.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Meeting Space Needs
                  </label>
                  <input
                    type="text"
                    value={formData.meetingSpaceNeeds}
                    onChange={(e) => updateField('meetingSpaceNeeds', e.target.value)}
                    className="input-field"
                    placeholder="e.g., Regular classroom, Science lab, Auditorium"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    First Year Plan
                  </label>
                  <textarea
                    value={formData.firstYearPlan}
                    onChange={(e) => updateField('firstYearPlan', e.target.value)}
                    className="input-field min-h-[120px]"
                    placeholder="Outline your goals and planned activities for the first year..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Budget Requirements
                  </label>
                  <textarea
                    value={formData.budgetRequirements}
                    onChange={(e) => updateField('budgetRequirements', e.target.value)}
                    className="input-field min-h-[100px]"
                    placeholder="Estimate any costs for materials, events, competitions, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Constitution Draft
                  </label>
                  <textarea
                    value={formData.constitutionDraft}
                    onChange={(e) => updateField('constitutionDraft', e.target.value)}
                    className="input-field min-h-[150px]"
                    placeholder="Paste your constitution draft here, or describe your planned governance structure..."
                  />
                  <p className="text-sm text-neutral-500 mt-1">
                    Need help? Download our <Link href="/resources" className="text-primary-500 hover:underline">constitution template</Link>.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <button type="button" onClick={prevStep} className="btn-outline">
                  ← Back
                </button>
                <button type="button" onClick={nextStep} className="btn-primary">
                  Continue to Submit →
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="card p-8">
              <h2 className="section-title text-xl mb-6">Your Contact Information</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.submitterName}
                    onChange={(e) => updateField('submitterName', e.target.value)}
                    className="input-field"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.submitterEmail}
                      onChange={(e) => updateField('submitterEmail', e.target.value)}
                      className="input-field"
                      placeholder="your.email@student.edu"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Grade Level <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.submitterGrade}
                      onChange={(e) => updateField('submitterGrade', e.target.value)}
                      className="select-field"
                      required
                    >
                      <option value="">Select grade</option>
                      {grades.map(grade => (
                        <option key={grade} value={grade}>Grade {grade}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-neutral-50 border border-neutral-200">
                <h3 className="font-bold text-primary-500 mb-4 font-heading">Review Your Proposal</h3>
                <dl className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="text-neutral-500">Chapter Name</dt>
                    <dd className="font-medium">{formData.chapterName || '-'}</dd>
                  </div>
                  <div>
                    <dt className="text-neutral-500">Category</dt>
                    <dd className="font-medium">{formData.category || '-'}</dd>
                  </div>
                  <div>
                    <dt className="text-neutral-500">Proposed Advisor</dt>
                    <dd className="font-medium">{formData.proposedAdvisor || '-'}</dd>
                  </div>
                  <div>
                    <dt className="text-neutral-500">Meeting Schedule</dt>
                    <dd className="font-medium">{formData.meetingFrequency} - {formData.meetingTime || '-'}</dd>
                  </div>
                </dl>
              </div>

              <div className="mt-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4" required />
                  <span className="text-sm text-neutral-600">
                    I confirm that I have secured a faculty advisor commitment, and I understand that submitting this proposal does not guarantee approval. 
                    The review process may take 2-4 weeks.
                  </span>
                </label>
              </div>

              <div className="mt-8 flex justify-between">
                <button type="button" onClick={prevStep} className="btn-outline">
                  ← Back
                </button>
                <button type="submit" className="btn-primary">
                  Submit Proposal
                </button>
              </div>
            </div>
          )}
        </form>

        <div className="mt-8 card p-6">
          <h3 className="font-bold text-primary-500 mb-2 font-heading">Need Help?</h3>
          <p className="text-neutral-600 text-sm">
            Contact the Activities Office at{' '}
            <a href="mailto:activities@school.edu" className="text-primary-500 hover:underline">
              activities@school.edu
            </a>{' '}
            or visit Room 100 during office hours (Mon-Fri, 7:30 AM - 4:00 PM).
          </p>
        </div>
      </div>
    </div>
  );
}
