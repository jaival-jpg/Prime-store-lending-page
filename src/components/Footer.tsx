import { Twitter, Github, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 mt-20 relative z-10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="font-bold text-white">P</span>
              </div>
              <span className="font-bold text-xl tracking-tight">Prime Store</span>
            </div>
            <p className="text-slate-400 max-w-md mb-6">
              The premier destination for discovering, downloading, and managing the best applications across all your devices.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 glass-panel rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 glass-panel rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 glass-panel rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 glass-panel rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Platform</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Browse Apps</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Developer Portal</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Categories</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Top Charts</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Prime Store. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span>Made with</span>
            <span className="text-red-500 text-lg leading-none">♥</span>
            <span>for the future.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
