import React, { FC } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';

export interface TabButtonProps {
  name: string;
  path: string;
  counter?: number;
}

const TabButton: FC<TabButtonProps> = (props) => {
  const match = useMatch(props.path);
  const navigate = useNavigate();

  return (
    <div
      className={!match? "nav-tab" : "nav-tab nav-tab--active"}
      onClick={() => navigate(props.path)}
    >
      <span>{props.name}</span>
    </div>
  );
};

export default TabButton;