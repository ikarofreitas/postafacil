import React from 'react';
import { Lightbulb, ArrowRight } from 'lucide-react';

const ContentSuggestion: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
          <Lightbulb className="w-5 h-5 text-yellow-600" />
        </div>
        <h2 className="text-xl font-bold text-gray-800">Sugestão de Conteúdo do Dia</h2>
      </div>
      
      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 mb-4">
        <p className="text-gray-700 leading-relaxed">
          Baseado no seu nicho de <span className="font-semibold text-orange-600">moda</span>, 
          que tal um post sobre <span className="font-semibold">"5 Tendências Outono 2025 que Você Precisa Conhecer"</span>?
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <button className="
          flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg 
          font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 
          transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2
        ">
          <span>Gerar Agora</span>
          <ArrowRight className="w-5 h-5" />
        </button>
        
        <button className="
          px-6 py-3 border border-gray-200 text-gray-600 rounded-lg font-medium
          hover:bg-gray-50 hover:border-gray-300 transition-all duration-200
        ">
          Ver Mais Sugestões
        </button>
      </div>
    </div>
  );
};

export default ContentSuggestion;