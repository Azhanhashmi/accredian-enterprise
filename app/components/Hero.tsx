'use client';
import { useEffect, useState } from 'react';

const stats = [
  { label: 'Active Learners', value: '2,847', change: '+12%' },
  { label: 'Avg. Score', value: '91.4', change: '+5.2' },
  { label: 'Completion', value: '96%', change: '+8%' },
];

const courses = [
  { name: 'Data Science & AI', pct: 89 },
  { name: 'Product Management', pct: 76 },
  { name: 'Leadership & Strategy', pct: 92 },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a1628]">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f2040] to-[#0a1628]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
        {/* Grid dots */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left: Text */}
        <div>
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
              Trusted by 500+ Enterprise Organizations
            </div>
          </div>

          <h1 className={`text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] mb-6 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ fontFamily: 'Georgia, serif' }}>
            Build the Skills<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Your Enterprise
            </span><br />
            Needs to Win.
          </h1>

          <p className={`text-lg text-blue-100/70 leading-relaxed mb-10 max-w-lg transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            India&apos;s most trusted enterprise learning platform. Partner with IITs, IIMs, and global universities to upskill your teams at scale — with measurable outcomes.
          </p>

          <div className={`flex flex-wrap gap-4 mb-14 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a href="#contact"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5">
              Schedule a Free Demo →
            </a>
            <a href="#solutions"
              className="border border-white/20 hover:border-white/40 text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:bg-white/5">
              See Platform Tour
            </a>
          </div>

          <div className={`flex flex-wrap gap-6 transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {['🎓 IIT & IIM certified', '⚡ Go live in 2 weeks', '📊 Real-time analytics'].map(b => (
              <span key={b} className="text-sm text-blue-200/70 font-medium">{b}</span>
            ))}
          </div>
        </div>

        {/* Right: Dashboard card */}
        <div className={`transition-all duration-900 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-xs text-blue-300/60 font-medium uppercase tracking-wider">Enterprise Dashboard</p>
                <p className="text-white font-bold text-lg">Q4 Learning Report</p>
              </div>
              <span className="bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1.5 rounded-full">↑ 34% YoY</span>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              {stats.map(s => (
                <div key={s.label} className="bg-white/5 rounded-xl p-4 text-center">
                  <p className="text-white font-bold text-xl">{s.value}</p>
                  <p className="text-green-400 text-xs font-semibold">{s.change}</p>
                  <p className="text-blue-300/50 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {courses.map(c => (
                <div key={c.name}>
                  <div className="flex justify-between text-xs text-blue-200/70 mb-1.5">
                    <span>{c.name}</span>
                    <span className="font-semibold text-white">{c.pct}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-1000"
                      style={{ width: visible ? `${c.pct}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-blue-300/60 text-xs">+2,842 learners enrolled this month</span>
              <span className="bg-blue-600/30 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full">🎓 IIT Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
