import React, { ButtonHTMLAttributes, FC } from 'react';
import './settings-tab-button.scss';

export interface SettingsTabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

const SettingsTabButton: FC<SettingsTabButtonProps> = ({ name, className, ...rest }) => {
  const classString = className ? `settings-tab-button ${className}` : 'settings-tab-button';

  return (
    <button className={classString} type="button" {...rest}>
      <span>{name}</span>
    </button>
  );
};

export default SettingsTabButton;
