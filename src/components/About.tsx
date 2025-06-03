import React from 'react';
import Logo from '../assets/Logo.png';
import { Check, Star } from 'lucide-react';

const About: React.FC = () => {
  const benefits = [
    'Equipe uniformizada e especializada',
    'Soluções inovadoras e tecnologia de ponta',
    'Produtos sustentáveis e equipamentos profissionais',
    'Atendimento ágil, transparente e personalizado',
    'Garantia de segurança, ética e confiabilidade',
    'Resultados superiores, monitoramento e feedback contínuo'
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
                  <p className="font-bold text-lg">Startup em ascensão 🚀</p>
                  <p className="text-sm opacity-80">Reconhecida por inovação no segmento</p>
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
            <p className="text-blue-700 font-semibold mb-2 text-lg uppercase tracking-wide">STARTUP INOVADORA E CONFIÁVEL</p>
            <p className="text-gray-700 text-lg mb-4">
              A CWB Limpeza é uma startup em rápido crescimento, que vem transformando o mercado de limpeza residencial, pós-obra e empresarial em Curitiba e região.
              Com tecnologia, processos inteligentes e uma equipe altamente capacitada, entregamos máxima eficiência, agilidade e sustentabilidade.
            </p>
            <p className="text-gray-600 mb-6">
              Usamos metodologias modernas de controle de qualidade, escutamos nossos clientes e buscamos sempre superar expectativas. Nosso compromisso: ambientes impecáveis e a tranquilidade do cliente em cada etapa.
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
                “A CWB Limpeza superou nossas expectativas trazendo inovação, respeito ao meio ambiente e um atendimento diferenciado. Recomendo de olhos fechados!”
              </p>
              <p className="text-right text-gray-500 font-medium mt-2">– Juliana M., empresária</p>
            </div>
            
            {/* CTA principal */}
            <a 
              href="https://wa.me/5541991491285?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20limpeza." 
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