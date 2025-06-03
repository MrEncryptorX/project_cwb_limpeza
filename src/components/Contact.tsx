import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Entre em Contato</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender suas necessidades de limpeza. Entre em contato para um orçamento gratuito.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Por que escolher a CWB Limpeza?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <span className="text-blue-600 text-4xl font-bold mb-2">+100</span>
                  <p className="text-gray-700 text-center">Clientes satisfeitos</p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-green-600 text-4xl font-bold mb-2">1+</span>
                  <p className="text-gray-700 text-center">Ano de experiência</p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-yellow-500 text-4xl font-bold mb-2">98%</span>
                  <p className="text-gray-700 text-center">Avaliação positiva</p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-pink-600 text-4xl font-bold mb-2">100%</span>
                  <p className="text-gray-700 text-center">Equipe treinada e qualificada</p>
                </div>
              </div>
              <div className="text-center mt-4">
                <p className="text-lg text-gray-800 font-medium">Atendimento rápido, seguro e personalizado para sua residência ou empresa!</p>
                <a
                  href="https://wa.me/5541991491285?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20limpeza."
                  className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all"
                  
                  rel="noopener noreferrer"
                >
                  Solicite seu orçamento
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-blue-600 text-white rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone size={20} className="text-blue-300" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Telefone</h4>
                    <p className="mt-1">(41) 99149-1285</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail size={20} className="text-blue-300" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Email</h4>
                    <p className="mt-1">cwblimpeza@cwblimpeza.com.br</p>
                  </div>
                </div>
                {/* <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin size={20} className="text-blue-300" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Endereço</h4>
                    <p className="mt-1">
                      Rua Exemplo, 1234 - Bairro<br />
                      Curitiba - PR, 80000-000
                    </p>
                  </div>
                </div> */}
              </div>
              <div className="mt-10">
                <h4 className="font-medium mb-4">Horário de Atendimento</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="font-medium">Segunda a Sexta</p>
                    <p>8:00 - 18:00</p>
                  </div>
                  <div>
                    <p className="font-medium">Sábado</p>
                    <p>8:00 - 12:00</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <a
                  href="https://wa.me/5541991491285?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20limpeza."
                  
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all text-center"
                >
                  Fale Conosco pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;