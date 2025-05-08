import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo className={`h-10 w-auto ${isScrolled ? 'text-primary' : 'text-primary'}`} />
          <span className={`ml-2 font-bold text-xl ${
            isScrolled ? 'text-gray-800' : 'text-gray-800'
          }`}>
            PostaFácil
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/como-funciona" 
            className={`font-medium transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-primary' : 'text-gray-800 hover:text-primary'
            }`}
          >
            Como Funciona
          </Link>
          <Link 
            to="/precos" 
            className={`font-medium transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-primary' : 'text-gray-800 hover:text-primary'
            }`}
          >
            Preços
          </Link>
          <Link 
            to="/login" 
            className={`font-medium transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-primary' : 'text-gray-800 hover:text-primary'
            }`}
          >
            Login
          </Link>
          <Link 
            to="/cadastro" 
            className="bg-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Experimente Grátis
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden pt-20`}
      >
        <nav className="container mx-auto px-6 flex flex-col space-y-6 py-8">
          <Link 
            to="/como-funciona" 
            className="text-gray-800 text-lg font-medium border-b border-gray-200 pb-2"
          >
            Como Funciona
          </Link>
          <Link 
            to="/precos" 
            className="text-gray-800 text-lg font-medium border-b border-gray-200 pb-2"
          >
            Preços
          </Link>
          <Link 
            to="/login" 
            className="text-gray-800 text-lg font-medium border-b border-gray-200 pb-2"
          >
            Login
          </Link>
          <Link 
            to="/cadastro" 
            className="bg-primary text-white px-5 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors duration-300 text-center shadow-md"
          >
            Experimente Grátis
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;