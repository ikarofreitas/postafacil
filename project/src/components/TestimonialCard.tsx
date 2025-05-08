import React from 'react';

interface TestimonialProps {
  name: string;
  business: string;
  quote: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, business, quote, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-primary"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-gray-600">{business}</p>
        </div>
      </div>
      <div className="relative">
        <span className="absolute -top-5 -left-2 text-6xl text-primary opacity-20">"</span>
        <p className="text-gray-700 relative z-10">{quote}</p>
        <span className="absolute -bottom-10 -right-2 text-6xl text-primary opacity-20">"</span>
      </div>
    </div>
  );
};

export default TestimonialCard;