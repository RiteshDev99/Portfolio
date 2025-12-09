import React from 'react';
import { ArrowRight, Code2, Database, Cpu } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 bg-[length:400%_400%] animate-gradient-slow -z-20" />

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6 relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-primary font-mono mb-2">
              <span>Full-Stack Developer & Product Builder</span>
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              I Build Software <br />
              That <span className="text-gradient">Thinks.</span>
            </h1>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="text-lg text-text-secondary max-w-lg leading-relaxed">
              I design and develop intelligent, scalable digital products using modern web technologies and emerging AI systems.
            </p>
          </Reveal>
          
          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-4 mt-2">
              <a 
                href="#contact" 
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
              >
                Hire Me
              </a>
              <a 
                href="#projects" 
                className="px-8 py-3.5 rounded-full bg-transparent border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
              >
                View Projects
              </a>
            </div>
          </Reveal>
          
          {/*<Reveal delay={0.4}>*/}
          {/*  <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/5">*/}
          {/*    <span className="text-sm text-text-secondary">Collaborated with:</span>*/}
          {/*    <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">*/}
          {/*      /!* Tech Logos Placeholders *!/*/}
          {/*      <div className="font-bold text-white text-lg">Next.js</div>*/}
          {/*      <div className="font-bold text-white text-lg">Stripe</div>*/}
          {/*      <div className="font-bold text-white text-lg">OpenAI</div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</Reveal>*/}
        </div>

        {/* Right Visuals */}
        <div className="hidden lg:block relative h-[600px] w-full">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Main Gradient Orb */}
            <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-primary via-accent to-pink opacity-20 blur-3xl animate-float" />
            
            {/* Floating Cards */}
            <div className="absolute top-1/4 right-10 p-4 glass-card rounded-2xl animate-float" style={{ animationDelay: '1s' }}>
              <Code2 className="text-primary mb-2" size={32} />
              <div className="h-2 w-24 bg-white/20 rounded mb-2"></div>
              <div className="h-2 w-16 bg-white/10 rounded"></div>
            </div>

            <div className="absolute bottom-1/3 left-10 p-4 glass-card rounded-2xl animate-float" style={{ animationDelay: '2s' }}>
              <Database className="text-accent mb-2" size={32} />
              <div className="h-2 w-20 bg-white/20 rounded mb-2"></div>
              <div className="h-2 w-12 bg-white/10 rounded"></div>
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 glass-card rounded-2xl border-t border-white/20 shadow-2xl animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-2 font-mono text-xs text-text-secondary">
                <div className="flex">
                  <span className="text-pink mr-2">const</span>
                  <span className="text-blue-400">future</span>
                  <span className="text-white mx-2">=</span>
                  <span className="text-green-400">await</span>
                  <span className="ml-2">build(AI);</span>
                </div>
                <div>console.log(<span className="text-yellow-300">"Deployed"</span>);</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;