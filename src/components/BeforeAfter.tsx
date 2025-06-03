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
      title: "Limpeza Pós-Obra",
      beforeImage: "public/assets/pos_obra_sujo.png",
      afterImage: "public/assets/pos_obra_limpo.png",
      description: "Remoção de resíduos de obra e limpeza profunda para deixar o ambiente pronto para uso."
    },
    {
      title: "Limpeza de Escritório",
      beforeImage: "/public/assets/empresarial_sujo.png",
      afterImage: "/public/assets/empresarial_limpo.png",
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
        
        <div className="flex justify-center gap-8 flex-wrap">
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