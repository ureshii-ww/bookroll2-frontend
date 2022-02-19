import React, { forwardRef, SelectHTMLAttributes } from 'react';
import './input-select.scss';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

const InputSelect = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const {children, className, ...rest} = props;

  return (
    <select {...rest} ref={ref} className={`${className ? 'input-select ' + className : 'input-select'}`}>
      {children}
    </select>
  );
});

export default InputSelect;