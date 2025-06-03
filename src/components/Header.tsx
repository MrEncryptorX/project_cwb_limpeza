import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a 
        href="/" 
        className="flex items-center space-x-2"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = '/';
        }}
          >
        <h1 className={`text-2xl font-bold ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
          CWB Limpeza
        </h1>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#services" 
            className={`transition-colors hover:text-blue-500 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            Serviços
          </a>
          <a 
            href="#about" 
            className={`transition-colors hover:text-blue-500 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            Sobre
          </a>
          <a 
            href="#testimonials" 
            className={`transition-colors hover:text-blue-500 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            Depoimentos
          </a>
          <a 
            href="#contact" 
            className={`transition-colors hover:text-blue-500 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            Contato
          </a>
          <a 
            href="#contact" 
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            <Phone size={18} className="mr-2" />
            (41) 99149-1285
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={24} className={isScrolled ? 'text-gray-900' : 'text-white'} />
          ) : (
            <Menu size={24} className={isScrolled ? 'text-gray-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-gray-700 hover:text-blue-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Serviços
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-blue-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-700 hover:text-blue-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Depoimentos
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-blue-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </a>
              <a 
                href="#contact" 
                className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Phone size={18} className="mr-2" />
                (41) 99149-1285
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;