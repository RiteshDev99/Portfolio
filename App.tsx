import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        {/*<Stats />x*/}
        {/*<Process />*/}
        {/*<Testimonials />*/}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;