import React from 'react';
import { Calendar, Clock, MoreHorizontal } from 'lucide-react';

const UpcomingPosts: React.FC = () => {
  const upcomingPosts = [
    {
      id: 1,
      date: '13/05',
      time: '14:00',
      title: 'Dica de Estilo #3',
      type: 'Post',
      status: 'Agendado'
    },
    {
      id: 2,
      date: '14/05',
      time: '18:30',
      title: 'Look do Dia - Casual Chic',
      type: 'Carrossel',
      status: 'Agendado'
    },
    {
      id: 3,
      date: '15/05',
      time: '12:00',
      title: 'Tendências Verão 2025',
      type: 'Reels',
      status: 'Rascunho'
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Calendar className="w-5 h-5 text-blue-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Próximos Posts Agendados</h2>
        </div>
        <button className="text-orange-600 hover:text-orange-700 font-medium text-sm">
          Ver Todos
        </button>
      </div>
      
      <div className="space-y-4">
        {upcomingPosts.map((post) => (
          <div key={post.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            <div className="flex items-center space-x-4">
              <div className=" xl:flex items-center space-x-2 text-gray-500 sm:flex sm:flex-row ">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">{post.date}</span>
                <Clock className="w-4 h-4 ml-2" />
                <span className="text-sm">{post.time}</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{post.title}</h3>
                <p className="text-sm text-gray-500">{post.type}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className={`
                px-3 py-1 rounded-full text-xs font-medium
                ${post.status === 'Agendado' 
                  ? 'bg-green-100 text-green-600' 
                  : 'bg-yellow-100 text-yellow-600'
                }
              `}>
                {post.status}
              </span>
              <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                <MoreHorizontal className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingPosts;