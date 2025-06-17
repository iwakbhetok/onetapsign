// components/ui/Button.tsx
import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'secondary' | 'primary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`rounded px-4 py-2 text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
