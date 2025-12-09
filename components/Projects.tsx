import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Github } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
              <p className="text-text-secondary max-w-xl text-lg">
                Selected projects showcasing full-stack capabilities.
              </p>
            </div>
            <a href="https://github.com/RiteshDev99" className="text-primary hover:text-accent flex items-center gap-2 font-medium transition-colors">
              View Github <Github size={18} />
            </a>
          </div>
        </Reveal>

        <div className="space-y-24">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              {/* Image Side */}
              <div className="w-full lg:w-3/5 group">
                <Reveal direction={index % 2 === 1 ? 'left' : 'right'}>
                  <div className="relative rounded-xl overflow-hidden border border-white/10">
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-20 transition-opacity z-10" />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </Reveal>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-2/5">
                <Reveal>
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                       <span className="text-primary font-mono text-sm tracking-wider uppercase">{project.role}</span>
                       <div className="h-[1px] bg-white/10 flex-grow" />
                    </div>
                    
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                    <p className="text-text-secondary leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-text-secondary">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a 
                      href={project.link} 
                      className="inline-flex items-center gap-2 text-white border-b border-primary pb-1 hover:text-primary transition-colors group/link"
                    >
                        Project Link
                      <ArrowUpRight size={16} className="transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;