
import React from 'react';
import { OFFERINGS } from '../constants';

const Offerings: React.FC = () => {
  return (
    <section id="offerings" className="border-t border-white/5 bg-surface-navy">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {OFFERINGS.map((offering) => (
            <div key={offering.id} className="group">
              <div className="size-12 rounded bg-primary/20 flex items-center justify-center text-primary mb-6 transition-colors group-hover:bg-primary group-hover:text-white duration-300">
                <span className="material-symbols-outlined text-3xl">{offering.icon}</span>
              </div>
              <h3 className="text-white text-2xl font-display font-bold mb-4 tracking-tight">
                {offering.title}
              </h3>
              <p className="text-medium-grey-text leading-relaxed font-sans text-lg">
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
