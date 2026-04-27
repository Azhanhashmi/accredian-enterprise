'use client';
import { useState } from 'react';

const steps = [
  {
    num: '01',
    title: 'Needs Assessment',
    short: 'We start with a deep-dive audit of your team\'s skill gaps and strategic objectives.',
    detail: 'Our L&D consultants conduct structured interviews, skills benchmarking, and role-based gap analysis to map a precise learning agenda for your organization.',
  },
  {
    num: '02',
    title: 'Program Design',
    short: 'Custom learning paths are architected with your domain, culture, and timelines in mind.',
    detail: 'From curriculum selection to cohort composition and mentor matching — every program is built to your specifications, not off-the-shelf.',
  },
  {
    num: '03',
    title: 'Deployment & Onboarding',
    short: "Seamless rollout with zero disruption to your team's workflow.",
    detail: 'White-glove onboarding, SSO integration, HRMS sync, and dedicated account management ensure a day-one-ready launch.',
  },
  {
    num: '04',
    title: 'Track & Optimize',
    short: 'Live dashboards surface progress, risks, and ROI in real time.',
    detail: 'Monthly business reviews, completion nudges, and adaptive content recommendations keep engagement high and learning sticky long after program end.',
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section id="how-it-works" className="py-28 bg-[#f8faff]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-5">
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Live in 14 days. Measurable ROI in 90.
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Our structured four-step methodology takes you from assessment to measurable outcomes without disrupting your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Steps list */}
          <div className="space-y-3">
            {steps.map((s, i) => (
              <button
                key={s.num}
                onClick={() => setActive(i)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                  active === i
                    ? 'bg-[#0a1628] text-white shadow-2xl shadow-blue-900/20'
                    : 'bg-white border border-gray-100 hover:border-blue-200 text-gray-700'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-3xl font-black font-mono ${active === i ? 'text-blue-400' : 'text-gray-200'}`}>
                    {s.num}
                  </span>
                  <div>
                    <h3 className={`font-bold text-lg ${active === i ? 'text-white' : 'text-gray-900'}`}>{s.title}</h3>
                    <p className={`text-sm mt-1 ${active === i ? 'text-blue-200/70' : 'text-gray-500'}`}>{s.short}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-xl">
            <div className="text-6xl font-black text-blue-50 font-mono mb-6">{steps[active].num}</div>
            <h3 className="text-2xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              {steps[active].title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">{steps[active].detail}</p>

            <div className="flex gap-2">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? 'bg-blue-600 w-8' : 'bg-gray-200 w-4'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
