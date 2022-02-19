import React, { InputHTMLAttributes, forwardRef } from 'react';
import './input-text.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputText = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input {...props} ref={ref} className={`${props.className ? 'input-text ' + props.className : 'input-text'}`} />
  );
});

export default InputText;