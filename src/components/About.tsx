import React from 'react';
import Logo from '../assets/Logo.png';
import { Check, Star } from 'lucide-react';

const About: React.FC = () => {
  const benefits = [
    'Equipe especializada em limpeza pós-obra e empresarial',
    'Atendimento ágil, transparente e personalizado',
    'Produtos sustentáveis e equipamentos profissionais',
    'Garantia de segurança, ética e confiabilidade',
    'Resultados superiores e monitoramento de qualidade',
    'Soluções sob medida para cada cliente'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Imagem da logo + selo de confiança */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <div className="relative">
              <img 
                  src={Logo} 
                  alt="Equipe CWB Limpeza" 
                  className="rounded-lg shadow-xl w-full max-w-lg mx-auto"
              />
              <div className="absolute -bottom-8 -right-8 flex items-center gap-3 bg-blue-700 text-white p-4 rounded-xl shadow-lg hidden md:flex">
                <Star className="text-yellow-400" />
                <div>
                  <p className="font-bold text-lg">Especialistas em Limpeza Profissional</p>
                  <p className="text-sm opacity-80">Excelência em pós-obra e ambientes corporativos</p>
                </div>
              </div>
              <div className="absolute -top-6 left-6 bg-green-600 text-white p-2 rounded-lg shadow">★ 98% satisfação</div>
            </div>
          </div>
          
          {/* Bloco descritivo da empresa */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Sobre a CWB Limpeza
            </h2>
            <p className="text-blue-700 font-semibold mb-2 text-lg uppercase tracking-wide">REFERÊNCIA EM LIMPEZA PÓS-OBRA E EMPRESARIAL</p>
            <p className="text-gray-700 text-lg mb-4">
              A CWB Limpeza é especialista em serviços de limpeza pós-obra e empresarial em Curitiba e região. 
              Nossa equipe altamente treinada garante ambientes impecáveis, seguros e prontos para uso, seja após reformas ou para o dia a dia corporativo.
            </p>
            <p className="text-gray-600 mb-6">
              Trabalhamos com processos modernos, produtos sustentáveis e foco total na satisfação do cliente. 
              Nosso compromisso é entregar eficiência, agilidade e confiança em cada projeto.
            </p>
            
            {/* Benefícios */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check size={18} className="text-green-500" />
                  </div>
                  <p className="ml-2 text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>

            {/* Depoimento de cliente destaque */}
            <div className="bg-gray-50 border-l-4 border-blue-600 p-4 mb-8 rounded">
              <p className="italic text-gray-800">
                “Contratei a CWB Limpeza para o pós-obra da minha empresa e fiquei impressionada com o resultado e profissionalismo. Recomendo!”
              </p>
              <p className="text-right text-gray-500 font-medium mt-2">– Juliana M., empresária</p>
            </div>
            
            {/* CTA principal */}
            <a 
              href="https://wa.me/5541991491285?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20limpeza%20pós-obra%20ou%20empresarial." 
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-all shadow-lg text-lg"
            >
              Solicite um orçamento personalizado
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;