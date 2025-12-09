import React from 'react';
import {Mail, Calendar, ArrowRight, ContactRound,} from 'lucide-react';
import { Reveal } from './ui/Reveal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left info */}
          <div className="space-y-8">
             <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Let's Build Something <span className="text-gradient">Incredible.</span>
              </h2>
              <p className="text-xl text-text-secondary mt-4">
                Have an idea? Need a technical co-founder mentality? Let's turn it into a real product.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-col gap-4">
                <a href="mailto:ritesh@example.com" className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-white/5 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Mail />
                  </div>
                  <div>
                    <div className="text-sm text-text-secondary">Email Me</div>
                    <div className="text-lg font-medium text-white">riteshchaudhary63430@gmail.com</div>
                  </div>
                </a>
                
                <a href="#" className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-white/5 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                      <ContactRound />
                  </div>
                  <div>
                    <div className="text-sm text-text-secondary">Contact Me</div>
                    <div className="text-lg font-medium text-white">+91 9555142599</div>
                  </div>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Form */}
          <Reveal delay={0.3} width="100%">
            <form className="glass-card p-8 rounded-2xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-secondary">Name</label>
                  <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-secondary">Email</label>
                  <input type="email" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-text-secondary">Project Type</label>
                <select className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors">
                  <option>Web Application</option>
                  <option>Mobile App</option>
                  <option>AI Integration</option>
                  <option>Consulting</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-text-secondary">Message</label>
                <textarea rows={4} className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Tell me about your project..." />
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-primary to-accent rounded-lg font-bold text-white shadow-lg hover:shadow-primary/25 transition-all hover:opacity-90 flex items-center justify-center gap-2 group">
                Send Message
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;