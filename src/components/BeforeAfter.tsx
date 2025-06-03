import React from 'react';

interface BeforeAfterCardProps {
  title: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

const BeforeAfterCard: React.FC<BeforeAfterCardProps> = ({ 
  title, 
  beforeImage, 
  afterImage, 
  description 
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="grid grid-cols-2 gap-2">
        <div className="relative">
          <img 
            src={beforeImage} 
            alt="Antes" 
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            ANTES
          </div>
        </div>
        <div className="relative">
          <img 
            src={afterImage} 
            alt="Depois" 
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            DEPOIS
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const BeforeAfter: React.FC = () => {
  const transformations = [
    {
      title: "Limpeza Residencial Completa",
      beforeImage: "https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=1600",
      afterImage: "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Transformação completa da sala de estar, removendo poeira e organizando o ambiente."
    },
    {
      title: "Limpeza Pós-Obra",
      beforeImage: "https://images.pexels.com/photos/5582597/pexels-photo-5582597.jpeg?auto=compress&cs=tinysrgb&w=1600",
      afterImage: "https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Remoção de resíduos de obra e limpeza profunda para deixar o ambiente pronto para uso."
    },
    {
      title: "Limpeza de Escritório",
      beforeImage: "https://images.pexels.com/photos/3742763/pexels-photo-3742763.jpeg?auto=compress&cs=tinysrgb&w=1600",
      afterImage: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Higienização completa do ambiente corporativo, garantindo um espaço saudável e produtivo."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Transformações Reais</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja a diferença que nossos serviços podem fazer. Antes e depois de nossa equipe entrar em ação.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((transformation, index) => (
            <BeforeAfterCard 
              key={index}
              title={transformation.title}
              beforeImage={transformation.beforeImage}
              afterImage={transformation.afterImage}
              description={transformation.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;