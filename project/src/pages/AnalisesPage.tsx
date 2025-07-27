import React from 'react';
import { BarChart3, TrendingUp, Users, Eye } from 'lucide-react';

const AnalisesPage: React.FC = () => {
  const stats = [
    {
      title: 'Posts Publicados',
      value: '24',
      change: '+12%',
      icon: BarChart3,
      color: 'text-blue-600'
    },
    {
      title: 'Engajamento',
      value: '1.2k',
      change: '+8%',
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      title: 'Novos Seguidores',
      value: '156',
      change: '+23%',
      icon: Users,
      color: 'text-purple-600'
    },
    {
      title: 'Visualizações',
      value: '8.9k',
      change: '+15%',
      icon: Eye,
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Análises</h1>
            <p className="text-gray-600 mt-2">Acompanhe o desempenho do seu conteúdo</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-50 ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-sm font-medium text-green-600">{stat.change}</span>
                  <span className="text-sm text-gray-600 ml-1">vs mês anterior</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Placeholder for charts */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Desempenho ao Longo do Tempo</h2>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Gráficos de análise serão exibidos aqui</p>
          </div>
        </div>

        {/* Content Performance */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Melhores Posts</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">Promoção de Verão</h3>
                <p className="text-sm text-gray-600">Publicado em 15/01/2025</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">2.4k visualizações</p>
                <p className="text-sm text-green-600">+45% engajamento</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">Dica do Dia</h3>
                <p className="text-sm text-gray-600">Publicado em 12/01/2025</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">1.8k visualizações</p>
                <p className="text-sm text-green-600">+32% engajamento</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalisesPage; 