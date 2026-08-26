import React from 'react';

interface LogoProps {
  isScrolled?: boolean;
  isLight?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isScrolled = false, isLight = false }) => {
  // Determine text color based on props
  const textColor = isLight 
    ? 'text-white' 
    : (isScrolled ? 'text-secondary' : 'text-white');

  return (
    <div className="flex items-center">
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 40 40" 
        className="mr-2"
      >
        {/* Simple leaf logo - this is a placeholder, you would use the actual Vipas logo */}
        <path 
          d="M20 3C13 3 7.5 10 7.5 17.5C7.5 25 13 35 20 37C27 35 32.5 25 32.5 17.5C32.5 10 27 3 20 3Z" 
          fill={isLight ? "#1ABC9C" : "#1ABC9C"} 
        />
        <path 
          d="M20 7C15 7 11.5 12 11.5 17.5C11.5 23 15 31 20 33C25 31 28.5 23 28.5 17.5C28.5 12 25 7 20 7Z" 
          fill={isLight ? "#003F5C" : "#003F5C"} 
        />
      </svg>
      <div className={`font-montserrat font-bold text-xl ${textColor}`}>
        Vipas Energy
      </div>
    </div>
  );
};

export default Logo;