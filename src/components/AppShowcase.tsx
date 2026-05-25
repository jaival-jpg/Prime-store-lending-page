import { motion } from 'motion/react';
import { Star, Download, Sparkles } from 'lucide-react';
import { useRef } from 'react';

const apps = [
  { 
    name: 'Prompt Builder', 
    category: 'AI Productivity', 
    rating: '4.9', 
    installs: '1.8M Installs', 
    imageUrl: 'https://i.ibb.co/s9NpcdFy/45435.jpg', 
    color: 'from-blue-500/20 to-indigo-600/10 border-blue-500/20 shadow-[0_4px_30px_rgba(59,130,246,0.15)]', 
    btnGradient: 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 hover:shadow-md hover:shadow-blue-500/20 border border-blue-400/30 text-white',
    stars: 5 
  },
  { 
    name: 'Master Calculator', 
    category: 'Utilities', 
    rating: '4.8', 
    installs: '3.4M Installs', 
    imageUrl: 'https://i.ibb.co/qLVpBkqd/Gemini-Generated-Image-o5rmhmo5rmhmo5rm.jpg', 
    color: 'from-purple-500/20 to-pink-600/10 border-purple-500/20 shadow-[0_4px_30px_rgba(168,85,247,0.15)]', 
    btnGradient: 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 hover:shadow-md hover:shadow-purple-500/20 border border-purple-400/30 text-white',
    stars: 5 
  },
  { 
    name: 'All Games', 
    category: 'Gaming', 
    rating: '4.9', 
    installs: '5.2M Installs', 
    imageUrl: 'https://i.ibb.co/SXqJcKqp/47565.jpg', 
    color: 'from-amber-500/20 to-orange-600/10 border-amber-500/20 shadow-[0_4px_30px_rgba(245,158,11,0.15)]', 
    btnGradient: 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 hover:shadow-md hover:shadow-amber-500/20 border border-amber-400/30 text-white',
    stars: 5 
  },
  { 
    name: 'Pro Scanner', 
    category: 'Business & Tools', 
    rating: '4.7', 
    installs: '820K Installs', 
    imageUrl: 'https://i.ibb.co/PZW97Bh0/43641.png', 
    color: 'from-emerald-500/20 to-teal-600/10 border-emerald-500/20 shadow-[0_4px_30px_rgba(16,185,129,0.15)]', 
    btnGradient: 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 hover:shadow-md hover:shadow-emerald-500/20 border border-emerald-400/30 text-white',
    stars: 4 
  },
];

export default function AppShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="apps" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Capsule Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={12} /> App Showcase
          </span>
        </div>

        <div className="flex items-end justify-between mb-12">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-poppins text-white tracking-tight mb-2"
            >
              Trending Right Now
            </motion.h2>
          </div>
          
          <div>
            <a 
              href="https://prime-app-store.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 transition-colors text-sm"
            >
              Browse all &rsaquo;
            </a>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex lg:grid lg:grid-cols-4 overflow-x-auto lg:overflow-x-visible gap-5 pb-8 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {apps.map((app, index) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass-panel p-5 rounded-2xl flex flex-col justify-between group hover:border-white/15 transition-all duration-300 flex-shrink-0 w-[260px] sm:w-[280px] lg:w-auto snap-start"
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${app.color} border flex items-center justify-center overflow-hidden shadow-lg mb-5`}>
                  {app.imageUrl ? (
                    <img 
                      src={app.imageUrl} 
                      alt={app.name} 
                      className="w-full h-full object-cover rounded-2xl" 
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <span className="text-2.5xl">📱</span>
                  )}
                </div>
                
                <div>
                  <h3 className="font-bold text-white text-base leading-tight mb-0.5">{app.name}</h3>
                  <p className="text-xs text-slate-400 mb-3">{app.category}</p>
                  
                  <div className="flex items-center gap-1 mb-1 text-xs">
                    <span className="text-yellow-500 tracking-tighter">
                      {'★'.repeat(app.stars) + '☆'.repeat(5 - app.stars)}
                    </span>
                    <span className="text-yellow-500 font-bold ml-1">{app.rating}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mb-6">{app.installs}</p>
                </div>
              </div>
              
              <a 
                href="https://prime-app-store.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-2.5 rounded-xl text-center text-xs font-bold transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-1.5 ${app.btnGradient}`}
              >
                <Download size={13} /> Install
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
