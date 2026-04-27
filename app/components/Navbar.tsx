'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = ['Solutions', 'How It Works', 'Programs', 'Testimonials', 'Partners'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className={`font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
          <span className="text-blue-600">Accredian</span>
          <span className={`ml-1 text-sm font-medium ${scrolled ? 'text-gray-500' : 'text-white/70'}`}>Enterprise</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                scrolled ? 'text-gray-700' : 'text-white/80'
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className={`text-sm font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/80 hover:text-white'}`}
          >
            Sign In
          </a>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Get a Demo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-gray-700' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-5 h-0.5 bg-current mb-1.5 transition-all"></div>
          <div className="w-5 h-0.5 bg-current mb-1.5 transition-all"></div>
          <div className="w-5 h-0.5 bg-current transition-all"></div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="block text-sm font-medium text-gray-700 hover:text-blue-600 py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="pt-3 border-t border-gray-100 flex gap-3">
              <a href="#" className="text-sm font-medium text-gray-700">Sign In</a>
              <a href="#contact" className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg">Get a Demo</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
