import React, { ButtonHTMLAttributes, FC } from 'react';
import './transparent-button.scss';

interface TransparentButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const TransparentButton: FC<TransparentButtonProps> = ({ className, children, ...rest }) => {
  return (
    <button {...rest} className={`${className ? `transparent-button ${className}` : 'transparent-button'}`}>
      {children}
    </button>
  );
};

export default TransparentButton;