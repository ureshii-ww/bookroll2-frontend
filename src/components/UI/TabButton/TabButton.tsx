import React, { FC, ReactNode } from 'react';
import { Link, useMatch } from 'react-router-dom';
import './tab-button.scss';

export interface TabButtonProps {
  name: string;
  path: string;
  counter?: ReactNode;
}

const TabButton: FC<TabButtonProps> = props => {
  const match = useMatch(props.path);

  return (
    <div className={`tab-button${match ? ' tab-button--active' : ''}`}>
      <Link to={props.path}>
        <span>{props.name}</span>
        {props.counter}
      </Link>
    </div>
  );
};

export default TabButton;