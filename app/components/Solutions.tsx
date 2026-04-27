'use client';
import { useState } from 'react';

const features = [
  {
    icon: '🎓',
    tag: 'Popular',
    title: 'World-Class Curriculum',
    desc: 'Programs co-designed with IITs, IIMs, and global universities. Every course is rigorously structured for real-world applicability.',
  },
  {
    icon: '📊',
    tag: '',
    title: 'Enterprise L&D Dashboard',
    desc: 'Real-time analytics on learner progress, engagement metrics, and ROI reporting — all in one command center.',
  },
  {
    icon: '👥',
    tag: '',
    title: 'Expert Mentor Network',
    desc: '1:1 live sessions with industry practitioners. Over 500 mentors across AI/ML, Data Science, Product, and Leadership.',
  },
  {
    icon: '🚀',
    tag: '',
    title: 'Live Cohort Learning',
    desc: 'Structured cohorts foster collaboration, accountability, and peer learning — driving completion rates above 94%.',
  },
  {
    icon: '🎯',
    tag: 'Popular',
    title: 'Custom Learning Paths',
    desc: "Tailor programs to your organization's skill gaps, industry context, and strategic goals. No one-size-fits-all.",
  },
  {
    icon: '🏆',
    tag: '',
    title: 'Accredited Certificates',
    desc: 'Globally recognized credentials from partner institutions. Verifiable, shareable, and career-defining.',
  },
  {
    icon: '🤖',
    tag: '',
    title: 'AI-Powered Personalization',
    desc: 'Adaptive learning engine surfaces the right content at the right time, maximizing engagement and retention.',
  },
  {
    icon: '🔗',
    tag: '',
    title: 'Seamless HR Integration',
    desc: 'Native integrations with Workday, SAP SuccessFactors, and major HRMS platforms for frictionless deployment.',
  },
];

export default function Solutions() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="solutions" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-5">
            Platform Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5" style={{ fontFamily: 'Georgia, serif' }}>
            Everything your L&D team<br className="hidden md:block" /> needs to scale.
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From curriculum design to analytics — Accredian Enterprise is the operating system for ambitious learning organizations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`relative border rounded-2xl p-7 cursor-pointer transition-all duration-300 ${
                hovered === i
                  ? 'border-blue-500 shadow-xl shadow-blue-100 bg-blue-50 -translate-y-1'
                  : 'border-gray-100 bg-gray-50/50 hover:border-gray-200'
              }`}
            >
              {f.tag && (
                <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  {f.tag}
                </span>
              )}
              <span className="text-3xl mb-4 block">{f.icon}</span>
              <h3 className="font-bold text-gray-900 text-lg mb-3 leading-tight">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              <button className={`mt-5 text-sm font-semibold transition-colors ${hovered === i ? 'text-blue-600' : 'text-gray-400'}`}>
                Learn more →
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-blue-200 hover:-translate-y-0.5 inline-block"
          >
            Request a Platform Demo
          </a>
        </div>
      </div>
    </section>
  );
}
