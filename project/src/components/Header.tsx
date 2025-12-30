import React, { useState, useEffect } from 'react';
import { Menu, X, LogOut, LayoutDashboard } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [bodyScroll, setBodyScroll] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

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

  useEffect(() => {
    // Verificar se o usuário está logado
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    
    if (token && user) {
      setIsLoggedIn(true);
      try {
        const userData = JSON.parse(user);
        setUserName(userData.name || '');
      } catch (e) {
        console.error('Erro ao parsear dados do usuário:', e);
      }
    } else {
      setIsLoggedIn(false);
      setUserName('');
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserName('');
    navigate('/');
    setIsOpen(false);
  };

  const toggleMenu = () => {
    document.body.style.overflow = `${bodyScroll ? 'hidden' : 'scroll'}`
    setBodyScroll(!bodyScroll)
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="mx-auto px-4 flex justify-between items-center">
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
          {!isLoggedIn ? (
            <>
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
            </>
          ) : (
            <>
              <Link 
                to="/dashboard" 
                className={`font-medium transition-colors flex items-center space-x-1 ${
                  isScrolled ? 'text-gray-700 hover:text-primary' : 'text-gray-800 hover:text-primary'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Dashboard</span>
              </Link>
              {userName && (
                <span className={`font-medium ${
                  isScrolled ? 'text-gray-700' : 'text-gray-800'
                }`}>
                  Olá, {userName.split(' ')[0]}
                </span>
              )}
              <button
                onClick={handleLogout}
                className={`font-medium transition-colors flex items-center space-x-1 ${
                  isScrolled ? 'text-gray-700 hover:text-red-600' : 'text-gray-800 hover:text-red-600'
                }`}
              >
                <LogOut className="w-4 h-4" />
                <span>Sair</span>
              </button>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none z-10"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-white transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden pt-20`}
      >
        <nav className="container mx-auto px-6 flex flex-col space-y-6 py-8">
          {!isLoggedIn ? (
            <>
              <Link 
                to="/como-funciona" 
                className="text-gray-800 text-lg font-medium border-b border-gray-200 pb-2"
                onClick={toggleMenu}
              >
                Como Funciona
              </Link>
              <Link 
                to="/precos" 
                className="text-gray-800 text-lg font-medium border-b border-gray-200 pb-2"
                onClick={toggleMenu}
              >
                Preços
              </Link>
              <Link 
                to="/login" 
                className="text-gray-800 text-lg font-medium border-b border-gray-200 pb-2"
                onClick={toggleMenu}
              >
                Login
              </Link>
              <Link 
                to="/cadastro" 
                className="bg-primary text-white px-5 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors duration-300 text-center shadow-md"
                onClick={toggleMenu}  
              >
                Experimente Grátis
              </Link>
            </>
          ) : (
            <>
              <Link 
                to="/dashboard" 
                className="text-gray-800 text-lg font-medium border-b border-gray-200 pb-2 flex items-center space-x-2"
                onClick={toggleMenu}
              >
                <LayoutDashboard className="w-5 h-5" />
                <span>Dashboard</span>
              </Link>
              {userName && (
                <div className="text-gray-800 text-lg font-medium border-b border-gray-200 pb-2">
                  Olá, {userName.split(' ')[0]}
                </div>
              )}
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="text-gray-800 text-lg font-medium border-b border-gray-200 pb-2 flex items-center space-x-2 hover:text-red-600 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Sair</span>
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;