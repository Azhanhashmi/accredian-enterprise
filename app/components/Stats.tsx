'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 500, suffix: '+', label: 'Enterprise Clients', sub: 'Organizations trust Accredian' },
  { value: 50, suffix: 'K+', label: 'Learners Upskilled', sub: 'Professionals transformed' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate', sub: 'Learner satisfaction score' },
  { value: 500, suffix: '+', label: 'Curated Programs', sub: 'Across 15+ domains' },
  { value: 96, suffix: '%', label: 'Completion Rate', sub: 'Industry-leading outcome' },
  { value: 50, suffix: '+', label: 'University Partners', sub: 'IITs, IIMs & global institutions' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = target / 60;
          const timer = setInterval(() => {
            start = Math.min(start + step, target);
            setCount(Math.round(start));
            if (start >= target) clearInterval(timer);
          }, 20);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-24 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">By the Numbers</p>
          <h2 className="text-4xl font-black text-white" style={{ fontFamily: 'Georgia, serif' }}>
            The platform enterprises trust
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/8 hover:border-blue-500/30 transition-all">
              <p className="text-4xl md:text-5xl font-black text-white mb-2">
                <Counter target={s.value} suffix={s.suffix} />
              </p>
              <p className="text-blue-300 font-semibold text-lg mb-1">{s.label}</p>
              <p className="text-blue-300/50 text-sm">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
