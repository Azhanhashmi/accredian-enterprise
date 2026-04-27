export default function CTABanner() {
  return (
    <section className="py-20 bg-blue-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
          Ready to transform your<br className="hidden md:block" /> workforce?
        </h2>
        <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
          Join 500+ enterprises already upskilling their teams with Accredian. Go live in 14 days.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all"
          >
            Schedule a Free Demo →
          </a>
          <a
            href="#solutions"
            className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:border-white hover:bg-white/10 transition-all"
          >
            Explore Platform
          </a>
        </div>
        <p className="text-blue-200/60 text-sm mt-6">No contracts. No setup fees. Cancel anytime.</p>
      </div>
    </section>
  );
}
