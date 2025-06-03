import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  imageUrl: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, content, rating, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all hover:shadow-xl">
      <div className="flex items-center mb-4">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-14 h-14 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i}
            size={16} 
            className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
          />
        ))}
      </div>
      
      <p className="text-gray-600 italic">"{content}"</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      role: "Cliente Residencial",
      content: "Serviço de excelente qualidade. A equipe foi pontual, organizada e transformou completamente minha casa. Recomendo!",
      rating: 5,
      imageUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      name: "Carlos Mendes",
      role: "Empresa de Construção",
      content: "Contratamos para limpeza pós-obra e o resultado superou nossas expectativas. Profissionais dedicados e atenciosos aos detalhes.",
      rating: 5,
      imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      name: "Patrícia Oliveira",
      role: "Gerente de Escritório",
      content: "Nossa empresa contrata mensalmente e sempre ficamos satisfeitos. O ambiente fica impecável e a equipe é muito profissional.",
      rating: 4,
      imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">O Que Dizem Nossos Clientes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação de nossos clientes é nossa melhor recomendação. Veja o que eles têm a dizer sobre nossos serviços.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              rating={testimonial.rating}
              imageUrl={testimonial.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;