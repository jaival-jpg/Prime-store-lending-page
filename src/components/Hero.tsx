import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen pt-20 flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Multi-directional gradients for deep immersion and extreme text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/90 via-[#020617]/25 to-transparent hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-transparent to-[#020617] md:hidden" />
        <div className="absolute inset-3/4 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-blue-400 text-sm font-medium border-blue-500/20">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              v2.0 is now live
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Discover. <br />
              <span className="text-gradient">Download.</span> <br />
              Dominate.
            </h1>
            
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Your ultimate app marketplace to explore, install and manage apps effortlessly. Experience the next generation of seamless software delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="https://prime-app-store.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 glow-button text-white px-8 py-4 rounded-xl font-bold text-lg transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  Open Prime Store <ArrowRight size={20} />
                </span>
                <div className="absolute -inset-1 bg-blue-600 blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
              </a>
              
              <a 
                href="#apps"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-panel hover:bg-white/10 text-white font-bold text-lg transition-colors"
              >
                Explore Apps
              </a>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                    alt="User" 
                    className="w-12 h-12 rounded-full border-2 border-slate-900"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-yellow-400">
                  {'★★★★★'}
                </div>
                <div className="text-slate-400">
                  <span className="text-white font-semibold">2M+</span> installs
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            style={{ y, opacity }}
            className="relative lg:h-[600px] flex items-center justify-center perspective-[1000px]"
          >
            {/* 3D Composition Placeholder with glass blocks */}
            <div className="relative w-full max-w-md aspect-square">
              {/* Central Block */}
              <motion.div 
                animate={{ 
                  rotateY: [0, 10, -10, 0],
                  rotateX: [0, -5, 5, 0],
                  y: [0, -20, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 m-auto w-64 h-64 glass-panel rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-white/20 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.3)] transform-style-3d"
              >
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl flex items-center justify-center">
                   <Download size={48} className="text-white" />
                </div>
              </motion.div>

              {/* Floating App Cards */}
              {[
                { top: '10%', left: '-10%', delay: 0, icon: '🎨' },
                { top: '60%', left: '80%', delay: 1, icon: '🎮' },
                { top: '-5%', left: '70%', delay: 2, icon: '📈' },
                { top: '70%', left: '5%', delay: 1.5, icon: '🎵' },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, delay: card.delay, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-16 h-16 glass-panel rounded-xl flex items-center justify-center text-3xl shadow-xl"
                  style={{ top: card.top, left: card.left }}
                >
                  {card.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
