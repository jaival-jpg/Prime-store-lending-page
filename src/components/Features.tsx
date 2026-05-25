import { motion } from 'motion/react';
import { Zap, Shield, BrainCircuit, LineChart, UploadCloud, Smartphone } from 'lucide-react';

const features = [
  {
    title: 'Fast Downloads',
    description: 'Edge-CDN delivery puts any app in your hands in under 2 seconds.',
    icon: Zap,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/25',
    borderColor: 'group-hover:border-amber-400/50',
    glow: 'shadow-[0_0_20px_rgba(245,158,11,0.08)] hover:shadow-[0_0_35px_rgba(245,158,11,0.3)]',
    shading: 'from-amber-500/5 to-transparent'
  },
  {
    title: 'Verified & Secure',
    description: 'Every build passes automated threat scanning and a human code review.',
    icon: Shield,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/25',
    borderColor: 'group-hover:border-emerald-400/50',
    glow: 'shadow-[0_0_20px_rgba(16,185,129,0.08)] hover:shadow-[0_0_35px_rgba(16,185,129,0.3)]',
    shading: 'from-emerald-500/5 to-transparent'
  },
  {
    title: 'AI Recommendations',
    description: 'A personalised engine with 94% satisfaction — beats Netflix.',
    icon: BrainCircuit,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/25',
    borderColor: 'group-hover:border-purple-400/50',
    glow: 'shadow-[0_0_20px_rgba(168,85,247,0.08)] hover:shadow-[0_0_35px_rgba(168,85,247,0.3)]',
    shading: 'from-purple-500/5 to-transparent'
  },
  {
    title: 'App Analytics',
    description: 'Track installs, retention, and revenue in one real-time dashboard.',
    icon: LineChart,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/25',
    borderColor: 'group-hover:border-blue-400/50',
    glow: 'shadow-[0_0_20px_rgba(59,130,246,0.08)] hover:shadow-[0_0_35px_rgba(59,130,246,0.3)]',
    shading: 'from-blue-500/5 to-transparent'
  },
  {
    title: 'Developer Upload Panel',
    description: 'Ship your app to 10M users in minutes via our streamlined dev portal.',
    icon: UploadCloud,
    color: 'text-rose-400',
    bg: 'bg-rose-500/10 border-rose-500/25',
    borderColor: 'group-hover:border-rose-400/50',
    glow: 'shadow-[0_0_20px_rgba(244,63,94,0.08)] hover:shadow-[0_0_35px_rgba(244,63,94,0.3)]',
    shading: 'from-rose-500/5 to-transparent'
  },
  {
    title: 'Multi-device Sync',
    description: 'One account. Phone, tablet, desktop. All apps in perfect sync.',
    icon: Smartphone,
    color: 'text-teal-400',
    bg: 'bg-teal-500/10 border-teal-500/25',
    borderColor: 'group-hover:border-teal-400/50',
    glow: 'shadow-[0_0_20px_rgba(20,184,166,0.08)] hover:shadow-[0_0_35px_rgba(20,184,166,0.3)]',
    shading: 'from-teal-500/5 to-transparent'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-poppins text-white tracking-tight mb-4"
          >
            Built for Power Users
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            From discovery to analytics — Prime Store is the only marketplace your team will ever need.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={feature.title} style={{ perspective: 1000 }} className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 4.5 + (index % 3) * 0.5,
                    ease: "easeInOut",
                    delay: index * 0.35,
                  },
                  opacity: {
                    duration: 0.6,
                    delay: index * 0.1,
                  }
                }}
                whileHover={{ 
                  scale: 1.04, 
                  rotateY: index % 2 === 0 ? 8 : -8, 
                  rotateX: 6,
                  z: 30,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className={`glass-panel p-8 rounded-2xl group border border-white/5 ${feature.borderColor} ${feature.glow} transition-all duration-500 relative overflow-hidden flex flex-col justify-between h-full bg-gradient-to-b ${feature.shading}`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${feature.bg} border mb-6 transition-transform group-hover:scale-110 duration-300`}>
                    <feature.icon size={22} className={feature.color} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white tracking-tight group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
                
                {/* 3D background light reflex flare */}
                <div className="absolute -inset-px bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

