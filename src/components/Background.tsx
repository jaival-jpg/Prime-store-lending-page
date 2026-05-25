import { motion } from 'motion/react';

export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#020617] pointer-events-none">
      {/* Universal Futuristic Sci-fi Space Hub Backdrop */}
      <div className="absolute inset-0 z-[-2] select-none pointer-events-none opacity-80 sm:opacity-65 lg:opacity-70 transition-opacity duration-500">
        <img 
          src="/hero-background.png" 
          alt="Futuristic Space Hub background" 
          className="w-full h-full object-cover object-[75%_center] sm:object-center scale-105 brightness-[1.25] saturate-[1.15] transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        {/* Advanced overlay gradients for absolute text readability and atmospheric depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/25 via-[#020617]/50 to-[#020617]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/75 via-[#020617]/20 to-[#020617]/35" />
      </div>

      <div className="blob w-[400px] h-[400px] bg-indigo-900/40 top-[-100px] right-[-100px]" />
      <div className="blob w-[500px] h-[500px] bg-purple-900/30 bottom-[-200px] left-[-100px]" />
      <div className="blob w-[350px] h-[350px] bg-blue-900/25 top-[30%] left-[-50px]" />
      <div className="blob w-[450px] h-[450px] bg-indigo-950/30 top-[60%] right-[-140px]" />
      <div className="blob w-[500px] h-[500px] bg-purple-950/20 top-[85%] left-[10%]" />
      
      {/* Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white/10"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            opacity: [0.1, 0.5, 0.1]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}
