import React from 'react';
import { Sparkles } from 'lucide-react';

interface WelcomeProps{
  userName: string;
}

const WelcomeSection: React.FC<WelcomeProps> = ({userName}) => {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? 'Bom dia' : currentHour < 18 ? 'Boa tarde' : 'Boa noite';

  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
      <div className="flex items-center space-x-3 mb-4">
        <Sparkles className="w-8 h-8" />
        <div>
          <h1 className="text-3xl font-bold">{greeting}, {userName}!</h1>
          <p className="text-orange-100 text-lg">Vamos turbinar seu Instagram hoje?</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
          <h3 className="font-semibold mb-2">Posts Agendados</h3>
          <p className="text-2xl font-bold">12</p>
          <p className="text-sm text-orange-100">Esta semana</p>
        </div>
        
        <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
          <h3 className="font-semibold mb-2">Alcance Total</h3>
          <p className="text-2xl font-bold">3.2K</p>
          <p className="text-sm text-orange-100">Últimos 7 dias</p>
        </div>
        
        <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
          <h3 className="font-semibold mb-2">Novos Seguidores</h3>
          <p className="text-2xl font-bold">+172</p>
          <p className="text-sm text-orange-100">Esta semana</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;