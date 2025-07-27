import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, PhoneCall } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <Logo className="h-8 w-auto text-white" />
              <span className="ml-2 font-bold text-xl">PostaFácil</span>
            </div>
            <p className="text-gray-400 mb-6">
              Sua agência de marketing automática. Criamos conteúdo profissional para seu negócio em segundos.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/como-funciona" className="text-gray-400 hover:text-primary transition-colors">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link to="/precos" className="text-gray-400 hover:text-primary transition-colors">
                  Preços
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/termos" className="text-gray-400 hover:text-primary transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-gray-400 hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-400 hover:text-primary transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={16} className="text-gray-400 mr-2" />
                <a href="mailto:contato@postafacil.com" className="text-gray-400 hover:text-primary transition-colors">
                  contato@postafacil.com
                </a>
              </li>
              <li className="flex items-center">
                <PhoneCall size={16} className="text-gray-400 mr-2" />
                <a href="tel:+551199999999" className="text-gray-400 hover:text-primary transition-colors">
                  (11) 9999-9999
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-500 text-center">
          <p>&copy; {new Date().getFullYear()} PostaFácil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;