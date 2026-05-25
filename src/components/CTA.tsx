import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600/10 blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden"
        >
          {/* Animated glow background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-square bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-[80px] rounded-full animate-pulse" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Start Exploring Apps Today
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Join millions of users downloading high-quality, verified apps every day. Your next favorite app is waiting.
            </p>
            
            <a 
              href="https://prime-app-store.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 glow-button text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300"
            >
              👉 Open Prime Store
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
