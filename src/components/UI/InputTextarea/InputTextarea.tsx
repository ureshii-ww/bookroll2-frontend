import React, { TextareaHTMLAttributes, forwardRef } from 'react';
import './input-textarea.scss';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const InputTextarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  return (
    <textarea {...props} ref={ref} className={`${props.className ? 'input-textarea ' + props.className : 'input-textarea'}`} />
  );
});

export default InputTextarea;