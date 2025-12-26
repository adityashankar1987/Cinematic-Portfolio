
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import Offerings from './components/Offerings';
import NarrativeGenerator from './components/NarrativeGenerator';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { PROJECTS } from './constants';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Projects Feed */}
        <section className="w-full pb-20">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          
          <div className="mt-12 flex justify-center">
            <button className="flex items-center gap-3 text-medium-grey-text hover:text-primary transition-all font-medium font-sans group">
              <span className="tracking-widest uppercase text-sm">Explore Full Archives</span>
              <span className="material-symbols-outlined text-sm group-hover:translate-y-1 transition-transform">arrow_downward</span>
            </button>
          </div>
        </section>

        <Offerings />
        
        {/* AI Integration Section */}
        <NarrativeGenerator />

        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
