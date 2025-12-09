import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { Reveal } from './ui/Reveal';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How I Work</h2>
            <p className="text-text-secondary text-lg">Linear progress. Exponential results.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step, index) => (
            <div key={index} className="group p-6 glass border border-white/5 rounded-xl hover:bg-white/5 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl font-bold text-white/10 group-hover:text-primary/20 transition-colors">
                  0{index + 1}
                </span>
                <div className="h-[2px] w-12 bg-white/10 group-hover:bg-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-text-secondary text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;