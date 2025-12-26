
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="journey" className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight tracking-tighter mb-6 text-white">
          Unfolding narratives through <span className="text-primary">light</span> and <span className="text-primary">shadow</span>.
        </h1>
        <p className="text-lg md:text-xl text-medium-grey-text max-w-2xl leading-relaxed font-sans">
          I am a video storyteller, crafting immersive cinematic journeys that resonate deeply. Every frame tells a tale, every cut builds emotion.
        </p>
      </div>
    </section>
  );
};

export default Hero;
