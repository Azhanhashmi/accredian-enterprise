const programs = [
  {
    domain: 'Data Science & AI',
    emoji: '🤖',
    color: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    courses: ['Executive PG in Data Science', 'AI & Machine Learning', 'Deep Learning & NLP', 'Business Analytics'],
    duration: '6–12 months',
    partners: 'IIT Delhi, IIT Bombay',
  },
  {
    domain: 'Product Management',
    emoji: '🚀',
    color: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
    courses: ['Product Strategy', 'Growth & Analytics', 'Technical PM', 'PM Leadership'],
    duration: '4–6 months',
    partners: 'IIM Bangalore, Great Lakes',
  },
  {
    domain: 'Leadership & Strategy',
    emoji: '🏆',
    color: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    courses: ['CXO Program', 'Strategic Management', 'Executive Leadership', 'Business Finance'],
    duration: '6–18 months',
    partners: 'IIM Kozhikode, IIM Lucknow',
  },
  {
    domain: 'Cloud & DevOps',
    emoji: '☁️',
    color: 'from-emerald-500 to-teal-500',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    courses: ['AWS Certification Track', 'Azure Architecture', 'Kubernetes & Docker', 'Site Reliability'],
    duration: '3–6 months',
    partners: 'Amazon AWS, Microsoft',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-5">
            Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Domain expertise at enterprise scale.
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Curated programs across the most in-demand domains, co-designed with India&apos;s top institutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p) => (
            <div
              key={p.domain}
              className={`${p.bg} border ${p.border} rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-2xl mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                {p.emoji}
              </div>
              <h3 className="font-black text-gray-900 text-lg mb-4">{p.domain}</h3>
              <ul className="space-y-2 mb-6">
                {p.courses.map(c => (
                  <li key={c} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
              <div className="border-t border-black/5 pt-4 space-y-1">
                <p className="text-xs text-gray-400"><span className="font-semibold text-gray-600">Duration:</span> {p.duration}</p>
                <p className="text-xs text-gray-400"><span className="font-semibold text-gray-600">Partners:</span> {p.partners}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3.5 rounded-xl transition-all inline-block">
            Explore All Programs →
          </a>
        </div>
      </div>
    </section>
  );
}
