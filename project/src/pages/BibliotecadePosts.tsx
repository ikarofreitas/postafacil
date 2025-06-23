import React, { useState } from 'react';
import { Search, Filter, Upload, Image, Video, FileText, Grid, List } from 'lucide-react';
import { MediaFile } from '../types/index';

const mockFiles: MediaFile[] = [
  {
    id: '1',
    name: 'banner-promocional.jpg',
    type: 'image',
    url: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400',
    size: '2.5 MB',
    uploadDate: new Date('2024-01-15')
  },
  {
    id: '2',
    name: 'video-tutorial.mp4',
    type: 'video',
    url: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400',
    size: '15.8 MB',
    uploadDate: new Date('2024-01-14')
  },
  {
    id: '3',
    name: 'texto-blog.txt',
    type: 'text',
    url: '',
    size: '12 KB',
    uploadDate: new Date('2024-01-13')
  },
  {
    id: '4',
    name: 'produto-destaque.png',
    type: 'image',
    url: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400',
    size: '1.8 MB',
    uploadDate: new Date('2024-01-12')
  },
  {
    id: '5',
    name: 'apresentacao.jpg',
    type: 'image',
    url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
    size: '3.2 MB',
    uploadDate: new Date('2024-01-11')
  },
  {
    id: '6',
    name: 'conteudo-script.txt',
    type: 'text',
    url: '',
    size: '8 KB',
    uploadDate: new Date('2024-01-10')
  }
];

export const BibliotecadePosts: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredFiles = mockFiles.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || file.type === selectedType;
    return matchesSearch && matchesType;
  });

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'image':
        return Image;
      case 'video':
        return Video;
      case 'text':
        return FileText;
      default:
        return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'image':
        return 'bg-green-100 text-green-800';
      case 'video':
        return 'bg-blue-100 text-blue-800';
      case 'text':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <h3 className="text-2xl font-bold text-gray-900">Biblioteca de Mídia</h3>
        <button className="flex items-center space-x-2 px-4 py-2 bg-[#FA5E2E] text-white rounded-lg hover:bg-[#e54e1f] transition-colors">
          <Upload className="w-4 h-4" />
          <span>Upload</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar arquivos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FA5E2E] focus:border-transparent"
            />
          </div>

          <div className="flex items-center space-x-4">
            {/* Type Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-600" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#FA5E2E] focus:border-transparent"
              >
                <option value="all">Todos os tipos</option>
                <option value="image">Imagens</option>
                <option value="video">Vídeos</option>
                <option value="text">Textos</option>
              </select>
            </div>

            {/* View Mode */}
            <div className="flex border border-gray-300 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-l-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-[#FA5E2E] text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-r-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-[#FA5E2E] text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Files Grid/List */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        {filteredFiles.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-500">Nenhum arquivo encontrado</p>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredFiles.map((file) => {
              const Icon = getFileIcon(file.type);
              return (
                <div key={file.id} className="group cursor-pointer">
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3 hover:shadow-md transition-shadow">
                    {file.type === 'image' && file.url ? (
                      <img 
                        src={file.url} 
                        alt={file.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    ) : file.type === 'video' && file.url ? (
                      <div className="relative w-full h-full">
                        <img 
                          src={file.url} 
                          alt={file.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                          <Video className="w-12 h-12 text-white" />
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Icon className="w-16 h-16 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium text-gray-900 truncate">{file.name}</h4>
                    <div className="flex items-center justify-between">
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${getTypeColor(file.type)}`}>
                        {file.type}
                      </span>
                      <span className="text-xs text-gray-500">{file.size}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-2">
            {filteredFiles.map((file) => {
              const Icon = getFileIcon(file.type);
              return (
                <div key={file.id} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 truncate">{file.name}</h4>
                    <p className="text-sm text-gray-500">
                      {file.uploadDate.toLocaleDateString('pt-BR')} • {file.size}
                    </p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded ${getTypeColor(file.type)}`}>
                    {file.type}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};