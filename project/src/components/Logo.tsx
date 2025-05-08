import React from 'react';
import { MessageSquareText } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'w-8 h-8' }) => {
  return (
    <div className={`text-primary ${className}`}>
      <MessageSquareText strokeWidth={2} />
    </div>
  );
};

export default Logo;