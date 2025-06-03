import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PricingCard from '../components/PricingCard';
import FAQItem from '../components/FAQItem';
import Button from '../components/Button';

const PricingPage: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const pricingPlans = {
    free: {
      title: 'Grátis',
      price: 'R$0',
      period: 'para sempre',
      description: 'Perfeito para testar o serviço e gerar conteúdos básicos ocasionalmente.',
      features: [
        { title: '5 gerações por mês', included: true },
        { title: 'Posts para redes sociais', included: true },
        { title: 'Legendas básicas', included: true },
        { title: 'Sugestões de hashtags', included: true },
        { title: 'Gerações ilimitadas', included: false },
        { title: 'Personalização de tom', included: false },
        { title: 'Agendamento de posts', included: false },
        { title: 'Biblioteca de conteúdo', included: false },
      ],
      buttonText: 'Começar Grátis',
    },
    pro: {
      monthly: {
        title: 'PRO',
        price: 'R$49,90',
        period: '/mês',
        description: 'Ideal para negócios que postam regularmente e querem automatizar seu marketing.',
        features: [
          { title: 'Gerações ilimitadas', included: true },
          { title: 'Posts para redes sociais', included: true },
          { title: 'Descrições de produtos', included: true },
          { title: 'Campanhas promocionais', included: true },
          { title: 'Personalização de tom', included: true },
          { title: 'Biblioteca de conteúdo', included: true },
          { title: 'Agendamento de posts', included: true },
          { title: 'Atendimento prioritário', included: true },
        ],
        buttonText: 'Começar Agora',
      },
      yearly: {
        title: 'PRO',
        price: 'R$39,90',
        period: '/mês, anual',
        description: 'Ideal para negócios que postam regularmente e querem automatizar seu marketing.',
        features: [
          { title: 'Gerações ilimitadas', included: true },
          { title: 'Posts para redes sociais', included: true },
          { title: 'Descrições de produtos', included: true },
          { title: 'Campanhas promocionais', included: true },
          { title: 'Personalização de tom', included: true },
          { title: 'Biblioteca de conteúdo', included: true },
          { title: 'Agendamento de posts', included: true },
          { title: 'Atendimento prioritário', included: true },
        ],
        buttonText: 'Começar Agora',
        badge: 'Economize 20%'
      }
    }
  };

  const faqs = [
    {
      question: 'Preciso entender de marketing para usar o PostaFácil?',
      answer: 'Não! O PostaFácil foi criado especialmente para quem não tem conhecimento técnico de marketing. Nossa IA cuida de tudo para você, desde a redação até a escolha das melhores hashtags.'
    },
    {
      question: 'Posso personalizar o tom de voz para o meu negócio?',
      answer: 'Sim, no plano PRO você pode personalizar o tom de voz para a comunicação do seu negócio, seja mais formal, descontraído, profissional ou amigável.'
    },
    {
      question: 'O PostaFácil funciona para qualquer tipo de negócio?',
      answer: 'Sim! O PostaFácil foi projetado para atender diversos segmentos como restaurantes, barbearias, salões de beleza, padarias, lojas de roupas, academias e vários outros tipos de pequenos negócios.'
    },
    {
      question: 'Como funciona o período de teste gratuito?',
      answer: 'Ao se cadastrar, você tem acesso a 7 dias de teste do plano PRO sem compromisso. Após esse período, você pode optar por permanecer no plano gratuito ou assinar o plano PRO.'
    },
    {
      question: 'Posso cancelar minha assinatura a qualquer momento?',
      answer: 'Sim, você pode cancelar sua assinatura a qualquer momento. Se cancelar, você terá acesso ao plano PRO até o final do período pago e depois será automaticamente transferido para o plano gratuito.'
    },
    {
      question: 'É possível agendar posts diretamente para minhas redes sociais?',
      answer: 'Sim, o plano PRO permite agendar seus posts diretamente para as principais redes sociais, como Instagram e Facebook, a partir da biblioteca de conteúdo.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-gray-100 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Planos Simples, <span className="text-primary">Resultados Incríveis</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Escolha o plano ideal para as necessidades do seu negócio e comece a transformar seu marketing hoje mesmo.
            </p>
            <div className="inline-flex p-1 bg-gray-100 rounded-lg">
              <button 
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  billingPeriod === 'monthly' 
                    ? 'bg-white shadow-sm text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setBillingPeriod('monthly')}
              >
                Mensal
              </button>
              <button 
                className={`px-6 py-2 rounded-md font-medium transition-colors relative ${
                  billingPeriod === 'yearly' 
                    ? 'bg-white shadow-sm text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setBillingPeriod('yearly')}
              >
                Anual
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                  -20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard 
              title={pricingPlans.free.title}
              price={pricingPlans.free.price}
              period={pricingPlans.free.period}
              description={pricingPlans.free.description}
              features={pricingPlans.free.features}
              buttonText={pricingPlans.free.buttonText}
              onClick={() => {}}
            />
            
            <PricingCard 
              title={pricingPlans.pro[billingPeriod].title}
              price={pricingPlans.pro[billingPeriod].price}
              period={pricingPlans.pro[billingPeriod].period}
              description={pricingPlans.pro[billingPeriod].description}
              features={pricingPlans.pro[billingPeriod].features}
              buttonText={pricingPlans.pro[billingPeriod].buttonText}
              recommended={true}
              onClick={() => {}}
            />
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm flex flex-col items-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Garantia de 7 Dias
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Experimente o PostaFácil PRO sem compromisso. Se não estiver satisfeito, cancele nos primeiros 7 dias e não será cobrado.
            </p>
            <Link to="/cadastro">
              <Button>
                Experimente Sem Risco
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-xl text-gray-600">
                Tire suas dúvidas sobre o PostaFácil
              </p>
            </div>

            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <FAQItem 
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para Transformar seu Marketing?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Junte-se aos milhares de empreendedores que já estão usando o PostaFácil para criar conteúdo profissional.
          </p>
          <Link to="/cadastro">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-black hover:bg-gray-100"
            >
              Começar Agora
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default PricingPage;