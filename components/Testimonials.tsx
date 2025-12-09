import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-3xl font-bold text-center">Trusted by Innovators</h2>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex gap-8 whitespace-nowrap py-4">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <div 
              key={`${t.id}-${i}`}
              className="w-[400px] glass-card p-8 rounded-2xl flex-shrink-0 whitespace-normal border border-white/5"
            >
              <Quote className="text-primary mb-4 opacity-50" size={24} />
              <p className="text-lg text-text-primary mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all" />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-sm text-text-secondary">{t.role} @ {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;