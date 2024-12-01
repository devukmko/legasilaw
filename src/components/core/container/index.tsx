import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  gutter?: boolean; // Toggles padding
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'auto'; // Controls maxWidth
}

const Container = ({
  children,
  gutter = false,
  maxWidth = 'auto', // Default maxWidth is 'lg'
}: ContainerProps) => {
  const maxWidthClass = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full',
    auto: 'max-w-auto',
  }[maxWidth];

  return (
    <div
      className={`container mx-auto ${
        gutter ? 'px-4 py-6' : ''
      } ${maxWidthClass}`}
    >
      {children}
    </div>
  );
};

export default Container;