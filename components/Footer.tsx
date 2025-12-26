
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-footer-dark">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-xl font-display uppercase tracking-widest">J. Doe</span>
            <span className="text-slate-700 mx-2">|</span>
            <span className="text-slate-500 text-sm font-sans">© 2024 Cinematic Storytelling</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="text-slate-400 hover:text-primary transition-all group flex items-center gap-2">
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">mail</span>
              <span className="text-xs font-bold uppercase tracking-widest hidden sm:inline">Mail</span>
            </a>
            <a href="#" className="text-slate-400 hover:text-primary transition-all group flex items-center gap-2">
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">photo_camera</span>
              <span className="text-xs font-bold uppercase tracking-widest hidden sm:inline">Instagram</span>
            </a>
            <a href="#" className="text-slate-400 hover:text-primary transition-all group flex items-center gap-2">
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">smart_display</span>
              <span className="text-xs font-bold uppercase tracking-widest hidden sm:inline">Vimeo</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
