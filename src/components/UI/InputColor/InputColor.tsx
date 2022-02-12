import React, { FC, forwardRef, InputHTMLAttributes } from 'react';

interface InputColorProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputColor = forwardRef<HTMLInputElement, InputColorProps>(({ className, ...rest }, ref) => {
  const classString = className ? `input-color ${className}` : 'input-color';
  return <input {...rest} type="color" className={classString} />;
});

export default InputColor;
