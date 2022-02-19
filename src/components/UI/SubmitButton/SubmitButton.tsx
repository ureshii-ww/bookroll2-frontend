import React, { FC, ButtonHTMLAttributes } from 'react';
import './submit-button.scss';

export interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SubmitButton: FC<SubmitButtonProps> = props => {
  const { className, children, ...rest } = props;
  return (
    <button type="submit" {...rest} className={`${className ? 'submit-button ' + className : 'submit-button'}`}>
      {children}
    </button>
  );
};

export default SubmitButton;