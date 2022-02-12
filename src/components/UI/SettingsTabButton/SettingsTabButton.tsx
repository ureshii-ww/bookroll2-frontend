import React, { ButtonHTMLAttributes, FC } from 'react';

export interface SettingsTabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  name: string;
}

const SettingsTabButton: FC<SettingsTabButtonProps> = ({ name, ...rest }) => {
  return (
    <button type="button" {...rest}>
      {name}
    </button>
  );
};

export default SettingsTabButton;