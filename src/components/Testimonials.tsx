import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const reviews = [
  {
    name: "Alex Rivera",
    role: "UX Designer",
    content: "Best app marketplace I've ever used. The UI is incredibly smooth, and the download speeds are actually insane compared to default stores.",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    name: "Sarah Chen",
    role: "Mobile Developer",
    content: "As a developer, the upload panel is a breath of fresh air. Deploying updates takes seconds, and the analytics dashboard is beautiful.",
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    name: "Marcus Johnson",
    role: "Tech Enthusiast",
    content: "The AI recommendations are spot on. I've discovered so many indie apps that perfectly fit my workflow. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?img=8"
  }
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Loved by <span className="text-gradient">millions</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-8 text-blue-500/20" size={48} />
              
              <div className="flex gap-1 text-yellow-400 mb-6">
                {'★★★★★'}
              </div>
              
              <p className="text-slate-300 mb-8 relative z-10 leading-relaxed text-lg">
                "{review.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full ring-2 ring-blue-500/30"
                />
                <div>
                  <h4 className="font-semibold text-white">{review.name}</h4>
                  <p className="text-sm text-slate-400">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
