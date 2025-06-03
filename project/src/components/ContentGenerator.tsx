import React, { useState } from 'react';
import { MessageSquare, Image, Hash, RefreshCw } from 'lucide-react';
import Button from './Button';

const ContentGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<{
    post: string;
    caption: string;
    hashtags: string[];
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      const fakeContent = {
        post: "✨ SUPER PROMOÇÃO NA PADARIA AROMA CASEIRO! ✨\n\nPão Caseiro Especial por apenas R$6,99! Feito com ingredientes selecionados e muito amor. Promoção por tempo limitado!",
        caption: "Nosso pão caseiro especial está em promoção! Feito com a receita tradicional da família, é perfeito para o café da manhã ou lanche da tarde. Venha experimentar enquanto dura o estoque! Entregamos também! #padariaAromaCaseiro",
        hashtags: [
          "#pãocaseiro", 
          "#promoção", 
          "#padaria", 
          "#cafédamanhã", 
          "#feitocomamor", 
          "#gastronomia", 
          "#comidacaseira"
        ]
      };
      
      setGeneratedContent(fakeContent);
      setIsGenerating(false);
    }, 1500);
  };

  const handleReset = () => {
    setPrompt('');
    setGeneratedContent(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 cursor-default">Gere seu conteúdo</h3>
        <p className="text-gray-600 cursor-default">
          Descreva brevemente o que você quer divulgar para o seu negócio
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="prompt" className="sr-only">
            Descreva seu produto ou promoção
          </label>
          <input
            id="prompt"
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ex: promoção pão caseiro na padaria"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            disabled={isGenerating}
          />
        </div>
        
        <div className="flex gap-3">
          <Button 
            type="submit" 
            disabled={!prompt.trim() || isGenerating}
            full
          >
            {isGenerating ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Gerando...
              </>
            ) : (
              'Gerar Conteúdo'
            )}
          </Button>
          
          {generatedContent && (
            <Button 
              variant="outline" 
              onClick={handleReset}
            >
              Limpar
            </Button>
          )}
        </div>
      </form>

      {generatedContent && (
        <div className="mt-8 space-y-6">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center mb-2 text-gray-700">
              <MessageSquare className="mr-2 h-5 w-5 text-primary" />
              <h4 className="font-medium">Post</h4>
            </div>
            <p className="whitespace-pre-line">{generatedContent.post}</p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center mb-2 text-gray-700">
              <Image className="mr-2 h-5 w-5 text-primary" />
              <h4 className="font-medium">Legenda</h4>
            </div>
            <p>{generatedContent.caption}</p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center mb-2 text-gray-700">
              <Hash className="mr-2 h-5 w-5 text-primary" />
              <h4 className="font-medium">Hashtags</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {generatedContent.hashtags.map((tag, index) => (
                <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button>Copiar Tudo</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentGenerator;