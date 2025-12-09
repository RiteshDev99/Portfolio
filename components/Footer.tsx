import React from 'react';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-[#050505] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <a href="#" className="text-2xl font-bold tracking-tighter mb-4 block">
              <span className="text-gradient">Ritesh</span> Chaudhary
            </a>
              <p className="text-text-secondary max-w-sm">
                  Full-stack developer building scalable apps, intuitive designs, and AI-powered digital products.
              </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-text-secondary">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/RiteshDev99" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Github size={20} />
              </a>
              <a href="https://x.com/RiteshDev99?t=JzKm2Yl9illPym0YY7Tiqg&s=09" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-all">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ritesh-chaudhary-055949272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0077B5] hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-secondary">
            © {new Date().getFullYear()} Ritesh Chaudhary 
          </p>
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Ritesh Chaudhary
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;