import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  gutter?: boolean; // Toggles padding
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'auto'; // Controls maxWidth
  style?: React.CSSProperties;
  className?: React.ComponentProps<'div'>['className'];
}

const Container = ({
  children,
  gutter = false,
  maxWidth = 'xl', // Default maxWidth is 'lg'
  style,
  className
}: ContainerProps) => {
  const maxWidthClass = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-7xl',
    full: 'max-w-full',
    auto: 'max-w-auto',
  }[maxWidth];

  return (
    <div
      style={style}
      className={`container relative mx-auto px-4 md:px-0 ${
        gutter ? 'py-4' : ''
      } ${maxWidthClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
