import React from 'react';
import { Lightbulb, Sparkles, Share2, Phone, FileEdit, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const HowItWorksPage: React.FC = () => {
  const steps = [
    {
      icon: <Lightbulb size={36} />,
      title: "Digite o que deseja criar",
      description: "Apenas escreva o objetivo do seu post ou produto que quer divulgar em linguagem simples.",
      image: "https://images.pexels.com/photos/4050312/pexels-photo-4050312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <Sparkles size={36} />,
      title: "A IA gera o conteúdo completo",
      description: "O PostaFácil cria posts, legendas e hashtags prontos para seu negócio em segundos.",
      image: "https://images.pexels.com/photos/7605913/pexels-photo-7605913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <Share2 size={36} />,
      title: "Compartilhe nas suas redes",
      description: "Copie e cole o conteúdo pronto ou agende diretamente para suas redes sociais.",
      image: "https://images.pexels.com/photos/4549416/pexels-photo-4549416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const examples = [
    {
      business: "Barbearia",
      prompt: "Promoção corte + barba",
      result: {
        post: "🔥 COMBO ESPECIAL DE QUINTA! 🔥\nCorte + Barba por apenas R$50!\nAgende seu horário e saia com visual renovado.",
        hashtags: ["#barbearia", "#promocao", "#barba", "#cortecabelo"]
      }
    },
    {
      business: "Loja de Roupas",
      prompt: "Chegada coleção inverno",
      result: {
        post: "❄️ NOVA COLEÇÃO DE INVERNO ACABA DE CHEGAR! ❄️\nPeças exclusivas, tecidos de qualidade e preços especiais de lançamento!",
        hashtags: ["#modainverno", "#novacoleção", "#promocao", "#moda"]
      }
    },
    {
      business: "Restaurante",
      prompt: "Especial de domingo feijoada",
      result: {
        post: "🍽️ DOMINGO É DIA DE FEIJOADA COMPLETA! 🍽️\nA partir das 11h30, nossa tradicional feijoada com acompanhamentos. Reserva antecipada ganha sobremesa!",
        hashtags: ["#feijoada", "#almoçoespecial", "#domingo", "#gastronomia"]
      }
    }
  ];

  const useCases = [
    {
      icon: <Phone size={28} />,
      title: "Posts para Redes Sociais",
      description: "Crie conteúdo envolvente para Facebook, Instagram e outras plataformas."
    },
    {
      icon: <FileEdit size={28} />,
      title: "Descrições de Produtos",
      description: "Textos persuasivos para seus produtos e serviços que convertem visitantes em clientes."
    },
    {
      icon: <Zap size={28} />,
      title: "Campanhas Promocionais",
      description: "Anúncios de promoções e eventos especiais que capturam a atenção dos clientes."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-gray-100 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Marketing Sem Complicação, <span className="text-primary">Com Resultados</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Descubra como o PostaFácil transforma qualquer empreendedor em um profissional de marketing com apenas alguns cliques.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Funciona em 3 Passos Simples
            </h2>
            <p className="text-xl text-gray-600">
              O processo é tão simples que você consegue criar seu primeiro conteúdo em menos de 1 minuto.
            </p>
          </div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 !== 0 ? 'md:order-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                      {step.icon}
                    </div>
                    <div className="bg-primary/10 text-primary font-medium rounded-full px-4 py-1">
                      Passo {index + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-xl text-gray-600 mb-6">
                    {step.description}
                  </p>
                </div>
                
                <div className={index % 2 !== 0 ? 'md:order-1' : ''}>
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Veja Exemplos Reais
            </h2>
            <p className="text-xl text-gray-600">
              Confira como o PostaFácil transforma ideias simples em conteúdo profissional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {examples.map((example, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
                  <span className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium mb-2">
                    {example.business}
                  </span>
                  <div className="text-gray-500 text-sm">
                    <span className="font-medium">Prompt:</span> "{example.prompt}"
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Post Gerado:</h4>
                    <p className="text-gray-700 whitespace-pre-line">{example.result.post}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Hashtags:</h4>
                    <div className="flex flex-wrap gap-2">
                      {example.result.hashtags.map((tag, i) => (
                        <span key={i} className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ideal para Diversos Tipos de Conteúdo
            </h2>
            <p className="text-xl text-gray-600">
              O PostaFácil ajuda você a criar diferentes tipos de conteúdo para seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {useCases.map((useCase, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 text-primary mb-6">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4 text-center items-center justify-center flex flex-col">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Comece a Criar Conteúdo Profissional Hoje
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experimente o PostaFácil gratuitamente e veja como é simples transformar seu marketing.
          </p>
          <Link to="/cadastro">
            <Button 
            size="lg"
            className=''>
              Experimente Grátis
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HowItWorksPage;