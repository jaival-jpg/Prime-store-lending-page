import { motion } from 'motion/react';
import { Rocket, Shield, Sparkles, Zap, Lock, Cpu } from 'lucide-react';

const usps = [
  {
    title: '3x Faster than Play Store',
    description: 'Our global edge network has 240 PoPs — average download starts in 180 ms.',
    icon: '⚡',
    glow: 'shadow-[0_0_30px_rgba(234,179,8,0.1)]',
    cardStyle: 'from-amber-500/10 to-transparent'
  },
  {
    title: '100% Verified Apps',
    description: 'Zero malware incidents since launch. Every app is sandboxed before listing.',
    icon: '🔒',
    glow: 'shadow-[0_0_30px_rgba(16,185,129,0.1)]',
    cardStyle: 'from-emerald-500/10 to-transparent'
  },
  {
    title: 'AI-Powered Discovery',
    description: 'Our graph-neural-net recommendation engine surfaces apps you didn\'t know you needed.',
    icon: '🤖',
    glow: 'shadow-[0_0_30px_rgba(168,85,247,0.1)]',
    cardStyle: 'from-purple-500/10 to-transparent'
  }
];

const stats = [
  { value: '240', label: 'PoP Edge Servers' },
  { value: '0', label: 'Malware Incidents' },
  { value: '< 2s', label: 'Avg Download Time' },
  { value: '24/7', label: 'Developer Support' }
];

export default function USP() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-poppins text-white tracking-tight mb-4"
          >
            Why <span className="text-gradient">Prime Store?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            We are not just another app store. We are the operating system for your digital life.
          </motion.p>
        </div>

        {/* 3 Column Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {usps.map((usp, index) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`glass-panel p-8 rounded-3xl bg-gradient-to-b ${usp.cardStyle} border border-white/5 relative overflow-hidden flex flex-col justify-between`}
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-3xl mb-8 ${usp.glow} border border-white/10`}>
                  {usp.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {usp.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {usp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-6 rounded-2xl text-center border border-white/5"
            >
              <h4 className="text-3xl md:text-4xl font-extrabold font-poppins text-white mb-1.5">
                {stat.value}
              </h4>
              <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
