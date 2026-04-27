const footerLinks = {
  Solutions: ['Enterprise Learning', 'Custom Programs', 'Analytics Dashboard', 'HR Integrations', 'Certificates'],
  Programs: ['Data Science & AI', 'Product Management', 'Leadership', 'Business Analytics', 'Cloud Computing'],
  Company: ['About Us', 'Careers', 'Blog', 'Press', 'Contact'],
  Resources: ['Case Studies', 'Whitepapers', 'Webinars', 'L&D Playbook', 'API Docs'],
};

export default function Footer() {
  return (
    <footer className="bg-[#060e1c] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <span className="text-xl font-bold text-white">
                <span className="text-blue-400">Accredian</span>
                <span className="text-white/50 ml-1 text-sm font-medium">Enterprise</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              India&apos;s most trusted enterprise learning platform. Upskill your workforce with programs from IITs, IIMs, and global universities.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {['in', 'tw', 'yt'].map(s => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-blue-600/30 border border-white/10 hover:border-blue-500/40 flex items-center justify-center text-white/40 hover:text-white text-xs font-bold transition-all"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-white font-semibold text-sm mb-5">{group}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © 2026 Accredian. All rights reserved. Accredian is a registered trademark.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <a key={item} href="#" className="text-white/30 hover:text-white text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
