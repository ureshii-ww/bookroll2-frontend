import React, { FC, ButtonHTMLAttributes } from 'react';

export interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  innerText: string
}

const SubmitButton: FC<SubmitButtonProps> = (props) => {
  const { innerText, ...rest } = props;
  return (
    <button {...rest} className={`${rest.className ? 'submit-button ' + props.className : 'submit-button'}`}>
      {innerText}
    </button>
  );
}

export default SubmitButton;