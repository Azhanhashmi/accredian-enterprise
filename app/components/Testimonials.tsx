const testimonials = [
  {
    quote: "Accredian Enterprise transformed how we think about talent development. Within 6 months, our data engineering team\'s velocity improved by 40%. The ROI is undeniable.",
    name: 'Priya Sharma',
    role: 'Chief People Officer',
    company: 'Razorpay',
    initials: 'PS',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    quote: "The combination of IIT-quality curriculum and live mentorship is unlike anything else in the market. Our engineers are now capable of leading ML projects independently.",
    name: 'Vikram Nair',
    role: 'VP of Engineering',
    company: 'PhonePe',
    initials: 'VN',
    color: 'from-violet-500 to-purple-600',
  },
  {
    quote: "We onboarded 300 managers across three geographies simultaneously. The enterprise dashboard made tracking trivially easy. Completion rates hit 96% — unprecedented for us.",
    name: 'Ananya Krishnan',
    role: 'Head of Learning & Development',
    company: 'Infosys BPM',
    initials: 'AK',
    color: 'from-emerald-500 to-teal-600',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-5">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
            Trusted by India&apos;s fastest-growing companies.
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            Hear from the L&D leaders and CHROs who transformed their organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-gray-700 leading-relaxed mb-8 text-[15px]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
