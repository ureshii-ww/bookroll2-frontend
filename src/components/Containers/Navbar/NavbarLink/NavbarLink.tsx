import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar-link.scss';

interface NavbarLinkProps {
  path: string;
  disabled?: boolean;
  className?: string;
}

const NavbarLink: FC<NavbarLinkProps> = ({ path, disabled, className, children }) => {
  const mainClass = 'navbar-link';
  const mainClassActive = `${mainClass}--active`;
  type ClassStringType = (props: { isActive: boolean }) => string;
  let classString: ClassStringType = ({ isActive }) => (isActive ? `${mainClass} ${mainClassActive}` : mainClass);

  if (className) {
    classString = ({ isActive }) =>
      isActive ? `${mainClass} ${mainClassActive} ${className}` : `${mainClass} ${className}`;
  }

  return (
    <NavLink className={classString} to={path}>
      {children}
    </NavLink>
  );
};

export default NavbarLink;
