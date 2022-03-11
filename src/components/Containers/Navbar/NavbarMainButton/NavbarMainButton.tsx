import React, { FC, Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarMainButtonProps {
  path?: string;
  disabled?: boolean;
  className?: string;
}

const NavbarMainButton: FC<NavbarMainButtonProps> = ({ path, disabled, className, children }) => {
  const classString = className ? ` ${className}` : '';

  const location = useLocation();
  let isActive = false;
  if (path) {
    isActive = location.pathname.includes(path);
  }

  return (
    <Fragment>
      {disabled && <div className={'navbar__button navbar__button--disabled' + classString}>{children}</div>}
      {isActive && <div className={'navbar__button navbar__button--active' + classString}>{children}</div>}
      {!isActive && !disabled && path && (
        <Link className={'navbar__button' + classString} to={path}>
          {children}
        </Link>
      )}
    </Fragment>
  );
};

export default NavbarMainButton;
