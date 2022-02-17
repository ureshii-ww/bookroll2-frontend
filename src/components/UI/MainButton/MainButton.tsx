import React, { ButtonHTMLAttributes, FC } from 'react';
import './main-button.scss';

interface MainButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{

}

const MainButton: FC<MainButtonProps> = ({className, children, ...rest}) => {
  return (
    <button {...rest} className={`${className ? `main-button ${className}` : 'main-button'}`}>
      {children}
    </button>
  );
};

export default MainButton;