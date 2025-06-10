import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';

const RecentContent: React.FC = () => {
  const recentContent = [
    {
      id: 1,
      title: 'Como Combinar Cores no Outono',
      type: 'Post Instagram',
      createdAt: '2 horas atrás',
      status: 'Gerado por IA'
    },
    {
      id: 2,
      title: 'Acessórios que Fazem a Diferença',
      type: 'Carrossel',
      createdAt: '1 dia atrás',
      status: 'Gerado por IA'
    },
    {
      id: 3,
      title: 'Dicas de Maquiagem Natural',
      type: 'Reels Script',
      createdAt: '2 dias atrás',
      status: 'Gerado por IA'
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <FileText className="w-5 h-5 text-purple-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Meus Conteúdos Recentes</h2>
        </div>
      </div>
      
      <div className="space-y-4 mb-6">
        {recentContent.map((content) => (
          <div key={content.id} className="p-4 border border-gray-100 rounded-lg hover:border-orange-200 hover:bg-orange-50 transition-all duration-200 cursor-pointer">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-gray-800 flex-1">{content.title}</h3>
              <span className="px-2 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full ml-2">
                {content.status}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{content.type}</span>
              <span>{content.createdAt}</span>
            </div>
          </div>
        ))}
      </div>
      
      <button className="
        w-full flex items-center justify-center space-x-2 py-3 border-2 border-dashed border-orange-300 
        text-orange-600 rounded-lg hover:border-orange-400 hover:bg-orange-50 transition-all duration-200
      ">
        <span className="font-medium">Gerar Mais Conteúdo</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default RecentContent;