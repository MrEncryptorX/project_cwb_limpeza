import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import BeforeAfter from './components/BeforeAfter';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  React.useEffect(() => {
    document.title = 'CWB Limpeza - Serviços de Limpeza em Curitiba';
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Services />
      <About />
      <BeforeAfter />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;