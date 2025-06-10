import React from 'react';
import { 
  LayoutDashboard, 
  Calendar,
  FolderOpen,
  PenTool,
  Bot,
  BarChart3,
  Plus,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: Calendar, label: 'Calendário de Posts', active: false },
    { icon: FolderOpen, label: 'Biblioteca', active: false },
    { icon: PenTool, label: 'Escritor IA', active: false },
    { icon: Bot, label: 'Assistente IA', active: false },
    { icon: BarChart3, label: 'Análises', active: false }
  ];

  return (
    <div className={`
      fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      lg:translate-x-0 lg:static lg:shadow-none
    `}>
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">PF</span>
          </div>
          <h1 className="text-xl font-bold text-gray-800">PostaFácil</h1>
        </div>
        <button 
          onClick={onClose}
          className="lg:hidden p-1 hover:bg-gray-100 rounded-md transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="px-4 py-6 space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              className={`
                w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200
                ${item.active 
                  ? 'bg-orange-50 text-orange-600 border-r-4 border-orange-500' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                }
              `}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* CTA Button */}
      <div className="px-4 mt-8">
        <button className="
          w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-3 rounded-lg 
          font-semibold flex items-center justify-center space-x-2 
          hover:from-orange-600 hover:to-red-600 transition-all duration-200 
          transform hover:scale-105 shadow-lg hover:shadow-xl
        ">
          <Plus className="w-5 h-5" />
          <span>Agendar Post</span>
        </button>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
        <div className="text-xs text-gray-500 text-center">
          © 2025 PostaFácil
        </div>
      </div>
    </div>
  );
};

export default Sidebar;