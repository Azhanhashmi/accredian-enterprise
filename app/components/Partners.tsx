const partners = [
  { name: 'IIT Delhi', category: 'IIT', bg: '#1a56db' },
  { name: 'IIT Bombay', category: 'IIT', bg: '#1a56db' },
  { name: 'IIT Kanpur', category: 'IIT', bg: '#1a56db' },
  { name: 'IIT Madras', category: 'IIT', bg: '#1a56db' },
  { name: 'IIT Roorkee', category: 'IIT', bg: '#1a56db' },
  { name: 'IIM Bangalore', category: 'IIM', bg: '#7c3aed' },
  { name: 'IIM Kozhikode', category: 'IIM', bg: '#7c3aed' },
  { name: 'IIM Lucknow', category: 'IIM', bg: '#7c3aed' },
  { name: 'Great Lakes', category: 'Global', bg: '#059669' },
  { name: 'NUS Singapore', category: 'Global', bg: '#059669' },
  { name: 'MIT xPRO', category: 'Global', bg: '#059669' },
  { name: 'Google', category: 'Industry', bg: '#dc2626' },
  { name: 'Microsoft', category: 'Industry', bg: '#0ea5e9' },
  { name: 'Amazon AWS', category: 'Industry', bg: '#f59e0b' },
  { name: 'IBM', category: 'Industry', bg: '#1d4ed8' },
  { name: 'Tableau', category: 'Industry', bg: '#e05a00' },
];

function PartnerBadge({ p }: { p: typeof partners[0] }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-5 py-3 mx-3 shadow-sm">
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-black"
        style={{ background: p.bg }}
      >
        {p.name.slice(0, 3).toUpperCase()}
      </div>
      <div>
        <p className="text-gray-900 font-semibold text-sm">{p.name}</p>
        <p className="text-gray-400 text-xs">{p.category}</p>
      </div>
    </div>
  );
}

export default function Partners() {
  const doubled = [...partners, ...partners];

  return (
    <section id="partners" className="py-24 bg-[#f8faff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
        <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-5">
          Academic & Industry Partners
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
          Built on world-class institutions.
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Our programs are co-designed and certified by India&apos;s most prestigious academic institutions and global technology leaders.
        </p>
      </div>

      {/* Marquee row 1 */}
      <div className="relative mb-4">
        <div className="flex" style={{ animation: 'marquee 35s linear infinite' }}>
          {doubled.map((p, i) => <PartnerBadge key={i} p={p} />)}
        </div>
      </div>
      {/* Marquee row 2 reversed */}
      <div className="relative">
        <div className="flex" style={{ animation: 'marquee 28s linear infinite reverse' }}>
          {[...doubled].reverse().map((p, i) => <PartnerBadge key={i} p={p} />)}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 mt-14 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-2xl font-black text-gray-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
            Academic excellence meets industry relevance.
          </h3>
          <p className="text-gray-500 leading-relaxed">
            Every program on our platform carries the credential of a top-tier institution. No fluff. No self-certification. Real university partnerships, real accreditation.
          </p>
        </div>
        <div className="flex gap-8">
          <div className="text-center">
            <p className="text-4xl font-black text-blue-600">50+</p>
            <p className="text-gray-500 text-sm mt-1">Partner Institutions</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-blue-600">200+</p>
            <p className="text-gray-500 text-sm mt-1">Certified Programs</p>
          </div>
        </div>
      </div>
    </section>
  );
}
