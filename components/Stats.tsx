import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 flex justify-center items-baseline">
                {stat.value}
                <span className="text-primary text-2xl md:text-3xl ml-1">{stat.suffix}</span>
              </div>
              <div className="text-sm font-medium text-text-secondary uppercase tracking-widest group-hover:text-primary transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;