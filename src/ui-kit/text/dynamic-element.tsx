import React from 'react';
interface DynamicTextProps {
  elementType?: string;
  children?: React.ReactNode;
  className?: string;
  style?: object | undefined;
  onClick?: () => void | undefined;
}
export const DynamicText: React.FC<DynamicTextProps> = ({
  elementType = 'p',
  children,
  className,
  style,
  onClick,
  ...rest
}) => {
  const Element = React.createElement(
    elementType,
    { className, style, onClick, ...rest },
    children
  );

  return Element;
};
