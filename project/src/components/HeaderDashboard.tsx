import React from 'react';
import { Bell, Menu, Crown, User } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="container mx-auto">
        <div className="px-4 py-4 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Pesquisar conteúdos..."
                className="w-full pl-4 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Notifications */}
            <button className="relative p-2 hover:bg-gray-100 rounded-md transition-colors">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            {/* Plan Status */}
            <div className="hidden sm:flex items-center space-x-2 px-3 py-1 bg-gray-100 rounded-full">
              <Crown className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600 font-medium">Gratuito</span>
            </div>

            {/* Upgrade Button */}
            <button className="hidden sm:flex bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg 
              font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 
              transform hover:scale-105 shadow-md hover:shadow-lg whitespace-nowrap">
              Upgrade
            </button>

            {/* Profile */}
            <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 rounded-lg p-2 transition-colors">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-gray-800">Maria Silva</p>
                <p className="text-xs text-gray-500">@maria_style</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;