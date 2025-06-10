import React from 'react';
import { TrendingUp, Eye, MousePointer, Users } from 'lucide-react';

const WeeklyPerformance: React.FC = () => {
  const metrics = [
    {
      icon: Eye,
      label: 'Alcance Total',
      value: '3.200',
      change: '+12%',
      changeType: 'positive' as const
    },
    {
      icon: MousePointer,
      label: 'Cliques',
      value: '980',
      change: '+8%',
      changeType: 'positive' as const
    },
    {
      icon: Users,
      label: 'Novos Seguidores',
      value: '172',
      change: '+24%',
      changeType: 'positive' as const
    },
    {
      icon: TrendingUp,
      label: 'Engajamento',
      value: '4.2%',
      change: '-2%',
      changeType: 'negative' as const
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-green-600" />
        </div>
        <h2 className="text-xl font-bold text-gray-800">Desempenho da Semana</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <div className="flex items-center space-x-3 mb-2">
                <Icon className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-600 font-medium">{metric.label}</span>
              </div>
              
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold text-gray-800">{metric.value}</span>
                <span className={`
                  text-sm font-medium px-2 py-1 rounded-full
                  ${metric.changeType === 'positive' 
                    ? 'text-green-600 bg-green-100' 
                    : 'text-red-600 bg-red-100'
                  }
                `}>
                  {metric.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-100">
        <button className="w-full text-orange-600 hover:text-orange-700 font-medium text-sm py-2 hover:bg-orange-50 rounded-lg transition-all duration-200">
          Ver Relatório Completo
        </button>
      </div>
    </div>
  );
};

export default WeeklyPerformance;