import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'Apps', href: '#apps' },
  { name: 'Reviews', href: '#reviews' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel border-x-0 border-t-0 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              <span className="font-bold text-xl text-white">P</span>
            </div>
            <span className="font-bold text-2xl tracking-tight">
              Prime Store
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="https://prime-app-store.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button text-white px-6 py-2.5 rounded-full font-semibold flex items-center gap-1.5 transition-all text-sm"
            >
              Open Store <span>&rsaquo;</span>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden glass-panel border-t border-white/10"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://prime-app-store.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 glow-button text-white px-6 py-3 rounded-xl font-semibold"
            >
              Open Store
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
