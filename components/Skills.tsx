import React from 'react';
import { SKILLS } from '../constants';
import { Reveal } from './ui/Reveal';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Ecosystem</h2>
            <p className="text-text-secondary max-w-xl text-lg">
              A comprehensive stack designed for speed, scalability, and intelligence.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]">
          {SKILLS.map((skill, index) => {
            const isWide = index === 0 || index === 3;
            const isTall = index === 2;
            
            let gridClass = "";
            if (isWide) gridClass = "md:col-span-2";
            if (isTall) gridClass = "lg:row-span-2";

            return (
              <div 
                key={skill.name} 
                className={`glass-card p-6 rounded-2xl hover:border-primary/50 transition-all group relative overflow-hidden flex flex-col justify-between ${gridClass}`}
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <skill.icon size={isWide ? 80 : 40} />
                </div>
                
                <div className="z-10">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                    <skill.icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-white">{skill.name}</h3>
                  <p className="text-sm text-text-secondary">{skill.description}</p>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;