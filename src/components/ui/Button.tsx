// components/ui/Button.tsx
import React from 'react';
// components/ui/Button.tsx
export const Button = ({ children, className, ...props }) => {
    return (
      <button
        className={`rounded px-4 py-2 text-white ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };
  