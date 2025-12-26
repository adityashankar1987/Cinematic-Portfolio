
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="w-full relative overflow-hidden bg-background-dark py-24 md:py-32 border-t border-white/5">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#b38827_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="relative w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Ready to script your next visual masterpiece?</h2>
        <p className="text-medium-grey-text mb-10 max-w-xl mx-auto text-lg font-sans">
          I'm currently seeking collaborators for projects that dare to tell a story with impact and artistry. Let's create cinematic history together.
        </p>
        <button className="inline-flex items-center justify-center h-14 px-10 rounded-lg bg-primary text-white font-bold text-lg hover:bg-opacity-80 transition-all shadow-xl shadow-black/40 hover:scale-105 active:scale-95">
          Begin the Dialogue
        </button>
      </div>
    </section>
  );
};

export default CTA;
