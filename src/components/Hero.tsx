import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen bg-gradient-to-r from-blue-600 to-sky-500 flex items-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=1600")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-sky-800/50"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Sua casa e empresa brilhando como nunca
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Serviços especializados em limpeza residencial, pós-obra e empresarial em Curitiba e região.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center"
            >
              Solicite um Orçamento
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a 
              href="https://wa.me/5541991491285?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20limpeza." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center"
            >
              Fale pelo WhatsApp
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;