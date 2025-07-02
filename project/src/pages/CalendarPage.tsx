import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const months = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

interface PostEvent {
  id: string;
  title: string;
  time: string;
  platform: string;
}

const mockPosts: { [key: string]: PostEvent[] } = {
  '2024-01-15': [
    { id: '1', title: 'Post sobre marketing digital', time: '14:00', platform: 'Instagram' },
    { id: '2', title: 'Dicas de produtividade', time: '18:00', platform: 'LinkedIn' }
  ],
  '2024-01-22': [
    { id: '3', title: 'Novo produto em destaque', time: '10:00', platform: 'Facebook' }
  ]
};

export const CalendarPage: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const getDateKey = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className="p-4 mt-12 lg:p-6 space-y-6">
      {/* Calendar Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={() => navigateMonth('prev')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h3 className="sm:text-2xl text-base font-bold text-gray-900">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          <button
            onClick={() => navigateMonth('next')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-[#FA5E2E] text-white rounded-lg hover:bg-[#e54e1f] transition-colors">
          <Plus className="w-4 h-4" />
          <span>Novo Post</span>
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {/* Days of week header */}
        <div className="grid grid-cols-7 border-b border-gray-200">
          {daysOfWeek.map((day) => (
            <div key={day} className="p-4 text-center font-semibold text-gray-700 bg-gray-50">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7">
          {days.map((day, index) => {
            if (!day) {
              return <div key={index} className="h-24 border-b border-r border-gray-200"></div>;
            }

            const dateKey = getDateKey(day);
            const posts = mockPosts[dateKey] || [];
            const isToday = day.toDateString() === new Date().toDateString();
            const isSelected = selectedDate && day.toDateString() === selectedDate.toDateString();

            return (
              <div
                key={day.toDateString()}
                className={`h-24 border-b border-r border-gray-200 p-2 cursor-pointer hover:bg-gray-50 transition-colors ${
                  isSelected ? 'bg-blue-50' : ''
                }`}
                onClick={() => setSelectedDate(day)}
              >
                <div className={`text-sm font-medium mb-1 ${
                  isToday ? 'text-[#FA5E2E] font-bold' : 'text-gray-900'
                }`}>
                  {day.getDate()}
                </div>
                <div className="space-y-1">
                  {posts.slice(0, 2).map((post) => (
                    <div
                      key={post.id}
                      className="text-xs bg-[#FA5E2E] text-white px-2 py-1 rounded truncate"
                    >
                      {post.time} - {post.title}
                    </div>
                  ))}
                  {posts.length > 2 && (
                    <div className="text-xs text-gray-500">
                      +{posts.length - 2} mais
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Date Details */}
      {selectedDate && (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Posts para {selectedDate.toLocaleDateString('pt-BR')}
          </h4>
          {mockPosts[getDateKey(selectedDate)]?.length > 0 ? (
            <div className="space-y-3">
              {mockPosts[getDateKey(selectedDate)].map((post) => (
                <div key={post.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h5 className="font-medium text-gray-900">{post.title}</h5>
                    <p className="text-sm text-gray-600">{post.time} - {post.platform}</p>
                  </div>
                  <button className="px-3 py-1 text-sm text-[#FA5E2E] hover:bg-[#FA5E2E] hover:text-white border border-[#FA5E2E] rounded transition-colors">
                    Editar
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Nenhum post agendado para esta data.</p>
          )}
        </div>
      )}
    </div>
  );
};