import React from 'react';
import { Link } from 'react-router-dom';
import { Type, Sparkles, Share2, MessageSquare, Brush, BarChart4 } from 'lucide-react';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import ContentGenerator from '../components/ContentGenerator';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Type size={32} />,
      title: "Digite",
      description: "Descreva o que quer divulgar ou criar em linguagem simples."
    },
    {
      icon: <Sparkles size={32} />,
      title: "Gere",
      description: "Nossa IA cria posts, descrições e textos profissionais instantaneamente."
    },
    {
      icon: <Share2 size={32} />,
      title: "Poste",
      description: "Copie o conteúdo pronto ou compartilhe diretamente nas suas redes sociais."
    }
  ];
  
  const testimonials = [
    {
      name: "Maria Silva",
      business: "Salão de Beleza Glamour",
      quote: "O PostaFácil transformou meu marketing! Economizo horas por semana e os clientes adoram meus novos posts.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "João Santos",
      business: "Padaria Sabor do Trigo",
      quote: "Sem conhecimento de marketing, consegui criar promoções que atraíram novos clientes para minha padaria.",
      image: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Ana Oliveira",
      business: "Boutique Moda Flor",
      quote: "Aumentei meu engajamento no Instagram em 3x com os textos gerados pelo PostaFácil. Vale cada centavo!",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];
  
  const advantages = [
    {
      icon: <MessageSquare size={28} />,
      title: "Linguagem Personalizada",
      description: "Textos adaptados para o seu tipo de negócio e público-alvo."
    },
    {
      icon: <Brush size={28} />,
      title: "Diversos Formatos",
      description: "Posts, legendas, descrições de produtos e campanhas de vendas."
    },
    {
      icon: <BarChart4 size={28} />,
      title: "Otimizado para Vendas",
      description: "Conteúdo criado para atrair clientes e aumentar seu faturamento."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-gray-100 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block bg-primary/10 text-primary font-medium rounded-full px-4 py-1 text-sm mb-6">
                Feito para Microempreendedores
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Marketing Profissional com IA. <br />
                <span className="text-primary">Sem complicação.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                Crie posts para Instagram, descrições de produtos e campanhas em segundos. Focado em pequenos negócios, com linguagem simples e personalizada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/cadastro">
                  <Button size="lg">
                    Criar Conteúdo Agora
                  </Button>
                </Link>
                <Link to="/como-funciona">
                  <Button variant="outline" size="lg">
                    Saiba Mais
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Empreendedor usando celular" 
                className="w-full h-auto max-w-md mx-auto rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Generator Demo Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Teste Agora o <span className="text-primary">PostaFácil</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experimente grátis o nosso gerador de conteúdo e veja o poder da IA trabalhando pelo seu negócio.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <ContentGenerator />
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Crie marketing profissional para seu negócio em três passos simples.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Pequenos empreendedores trabalhando" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Criado para o Pequeno Empreendedor
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                O PostaFácil foi desenvolvido pensando nas necessidades específicas de quem tem um pequeno negócio e não tem tempo ou recursos para contratar uma agência de marketing.
              </p>
              
              <div className="space-y-6">
                {advantages.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O Que Dizem Nossos Clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Empreendedores como você já estão transformando seu marketing com o PostaFácil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                business={testimonial.business}
                quote={testimonial.quote}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para Impulsionar seu Negócio?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de empreendedores que já economizam tempo e dinheiro com o PostaFácil.
          </p>
          <div className="flex justify-center">
            <Link to="/cadastro">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-black hover:bg-gray-100 hover:text-white"
              >
                Experimente Grátis por 7 Dias
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;