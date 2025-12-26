
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded bg-primary flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-[20px]">movie_edit</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-white font-display">J. Doe</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium text-medium-grey-text hover:text-primary transition-colors" href="#journey">Journey</a>
            <a className="text-sm font-medium text-medium-grey-text hover:text-primary transition-colors" href="#about">About</a>
            <a className="text-sm font-medium text-medium-grey-text hover:text-primary transition-colors" href="#offerings">Offerings</a>
          </div>
          <div>
            <button className="flex items-center justify-center rounded-full h-9 px-5 bg-white/10 text-white text-sm font-medium hover:bg-primary transition-all duration-300">
              <span>Contact</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
