import React, { useState } from 'react';
import { Wand2, Copy, Download, RefreshCw } from 'lucide-react';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardLayout from '../components/DashboardLayout';

export const EscritorIA: React.FC = () => {
  const [title, setTitle] = useState('');
  const [prompt, setPrompt] = useState('');
  const [generatedText, setGeneratedText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
  
    setIsGenerating(true);
    setGeneratedText('');
  
    try {
      const response = await fetch('http://localhost:3000/users/escritor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic: prompt }),
      });
  
      if (!response.ok) {
        throw new Error('Erro ao gerar texto com IA');
      }
  
      const data = await response.json();
      setGeneratedText(data.post);
      toast.success('Texto gerado com sucesso!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        transition: Bounce,
      });
    } catch (error) {
      console.error('Erro ao gerar texto:', error);
      toast.error('Houve um erro ao gerar o texto. Verifique o backend.', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        transition: Bounce,
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedText);
    toast.success('Texto copiado para a área de transferência!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      transition: Bounce,
    });
  };

  const downloadText = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${title || 'texto-gerado'}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success('Texto baixado com sucesso!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      transition: Bounce,
    });
  };

  return (
    <DashboardLayout>
      <div className="p-4 lg:p-6 space-y-6">
        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      {/* Header */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Escritor IA</h3>
        <p className="text-gray-600">
          Use inteligência artificial para criar conteúdos envolventes para suas redes sociais
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Configurações do Post</h4>
            
            {/* Title Input */}
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Título do Post (opcional)
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ex: Dicas de Marketing Digital"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FA5E2E] focus:border-transparent"
              />
            </div>

            {/* Prompt Input */}
            <div className="mb-6">
              <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
                Prompt para IA *
              </label>
              <textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Descreva o que você quer que a IA escreva. Ex: Escreva um post sobre as 5 principais tendências de marketing digital para 2024, focando em pequenas empresas..."
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FA5E2E] focus:border-transparent resize-none"
              />
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={!prompt.trim() || isGenerating}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-[#FA5E2E] text-white rounded-lg hover:bg-[#e54e1f] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Gerando...</span>
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4" />
                  <span>Gerar Texto</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Templates */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Templates Rápidos</h4>
            <div className="space-y-2">
              {[
                'Post promocional para produto',
                'Dicas e tutoriais',
                'Conteúdo motivacional',
                'Anúncio de novidades',
                'Post de engajamento'
              ].map((template, index) => (
                <button
                  key={index}
                  onClick={() => setPrompt(`Escreva um ${template.toLowerCase()} para redes sociais...`)}
                  className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {template}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-gray-900">Texto Gerado</h4>
            {generatedText && (
              <div className="flex space-x-2">
                <button
                  onClick={copyToClipboard}
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Copiar texto"
                >
                  <Copy className="w-4 h-4" />
                </button>
                <button
                  onClick={downloadText}
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Baixar texto"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          <div className="min-h-[400px] bg-gray-50 rounded-lg p-4">
            {generatedText ? (
              <div className="prose prose-sm max-w-none">
                <pre className="whitespace-pre-wrap font-sans text-gray-800 leading-relaxed">
                  {generatedText}
                </pre>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                  <Wand2 className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500 mb-2">Nenhum texto gerado ainda</p>
                <p className="text-sm text-gray-400">
                  Preencha o prompt e clique em "Gerar Texto" para começar
                </p>
              </div>
            )}
          </div>

          {generatedText && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                <button className="px-3 py-1 text-sm bg-[#FA5E2E] text-white rounded-lg hover:bg-[#e54e1f] transition-colors">
                  Usar este texto
                </button>
                <button 
                  onClick={handleGenerate}
                  className="px-3 py-1 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Gerar nova versão
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
    </DashboardLayout>
  );
};