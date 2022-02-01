import React, { FC, ReactNode } from 'react';
import { Link, useMatch, useNavigate } from 'react-router-dom';

export interface TabButtonProps{
  name: string;
  path: string;
  counter?: ReactNode;
}

const TabButton: FC<TabButtonProps> = (props) => {
  const match = useMatch(props.path);
  const navigate = useNavigate();

  return (
    <Link
      className={!match? "nav-tab" : "nav-tab nav-tab--active"}
      to={props.path}>
      <span>{props.name}</span>
      {props.counter}
    </Link>
  );
};

export default TabButton;