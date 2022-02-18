import React, { FC, ButtonHTMLAttributes } from 'react';

export interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const SubmitButton: FC<SubmitButtonProps> = (props) => {
  const { className, children, ...rest } = props;
  return (
    <button type="button" {...rest} className={`${className ? 'submit-button ' + className : 'submit-button'}`}>
      {children}
    </button>
  );
}

export default SubmitButton;