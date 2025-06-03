import React from 'react';
import { Home, Building, Hammer } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl transform hover:-translate-y-1">
      <div 
        className="h-48 bg-cover bg-center" 
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-blue-100 rounded-full mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas de limpeza para atender às suas necessidades específicas, sempre com qualidade e profissionalismo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Limpeza Residencial" 
            description="Limpeza completa para casas e apartamentos, incluindo áreas comuns em condomínios. Deixamos sua casa impecável e aconchegante."
            icon={<Home size={24} className="text-blue-600" />}
            imageUrl="https://images.pexels.com/photos/4108771/pexels-photo-4108771.jpeg?auto=compress&cs=tinysrgb&w=1600"
          />
          <ServiceCard 
            title="Limpeza Pós-Obra" 
            description="Remoção de resíduos de construção, limpeza profunda e preparação do ambiente após reformas ou construções."
            icon={<Hammer size={24} className="text-blue-600" />}
            imageUrl="https://images.pexels.com/photos/713297/pexels-photo-713297.jpeg?auto=compress&cs=tinysrgb&w=1600"
          />
          <ServiceCard 
            title="Limpeza Empresarial" 
            description="Serviços especializados para escritórios, lojas, clínicas e empresas, garantindo um ambiente de trabalho limpo e saudável."
            icon={<Building size={24} className="text-blue-600" />}
            imageUrl="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600"
          />
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all"
          >
            Ver Todos os Serviços
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;