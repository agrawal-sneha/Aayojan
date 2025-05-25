import React from 'react';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ 
  to, 
  children, 
  className = '',
  onClick
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) onClick();
    // In a real app, you would use a router here
    console.log(`Navigating to: ${to}`);
  };

  return (
    <a 
      href={to} 
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};