import React from 'react';
import { Check } from 'lucide-react';
import Button from './Button';

interface PricingFeature {
  title: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  recommended?: boolean;
  onClick?: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  recommended = false,
  onClick,
}) => {
  return (
    <div 
      className={`relative bg-white rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${
        recommended 
          ? 'border-2 border-primary shadow-xl' 
          : 'border border-gray-200 shadow-md hover:shadow-lg'
      }`}
    >
      {recommended && (
        <div className="absolute top-0 right-0 bg-primary text-white py-1 px-4 text-sm font-medium">
          Recomendado
        </div>
      )}
      <div className="p-6 lg:p-8">
        <h3 className={`text-xl font-bold mb-2 ${recommended ? 'text-primary' : 'text-gray-800'}`}>
          {title}
        </h3>
        <div className="mb-4">
          <span className="text-3xl font-bold">{price}</span>
          {period && <span className="text-gray-500 ml-2">{period}</span>}
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <Button 
          variant={recommended ? 'primary' : 'outline'} 
          full 
          size="lg"
          onClick={onClick}
        >
          {buttonText}
        </Button>
        
        <div className="mt-8">
          <h4 className="font-medium text-gray-800 mb-4">O que está incluído:</h4>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className={`inline-flex mr-2 ${feature.included ? 'text-primary' : 'text-gray-400'}`}>
                  <Check size={18} />
                </span>
                <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                  {feature.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;