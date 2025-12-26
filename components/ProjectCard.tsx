
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] group overflow-hidden mb-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url("${project.imageUrl}")` }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
      
      {/* Play Button Overlay (Optional) */}
      {project.hasPlayButton && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="size-20 md:size-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white cursor-pointer hover:bg-white/20 transition-all">
             <span className="material-symbols-outlined text-5xl translate-x-1">play_arrow</span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
        <p className="text-primary text-sm font-medium mb-3 uppercase tracking-[0.2em] font-sans">
          {project.category}
        </p>
        <h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
          {project.title}
        </h3>
        <p className="text-medium-grey-text text-base md:text-lg max-w-2xl font-sans leading-relaxed opacity-90">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
