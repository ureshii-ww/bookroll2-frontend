import React, { FC, Fragment, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarMainButtonProps {
  path?: string;
  disabled?: boolean;
}

const NavbarMainButton: FC<NavbarMainButtonProps> = ({ path, disabled, children }) => {
  const location = useLocation();
  let isActive = false;
  if (path) {
    isActive = location.pathname.includes(path);
  }

  return (
    <Fragment>
      {disabled && <div className="navbar__button navbar__button--disabled">{children}</div>}
      {isActive && <div className="navbar__button navbar__button--active">{children}</div>}
      {!isActive && !disabled && path && (
        <Link className="navbar__button" to={path}>
          {children}
        </Link>
      )}
    </Fragment>
  );
};

export default NavbarMainButton;