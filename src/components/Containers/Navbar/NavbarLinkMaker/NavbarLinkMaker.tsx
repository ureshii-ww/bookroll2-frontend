import React, { FC } from 'react';
import NavbarLink from '../NavbarLink/NavbarLink';

interface NavbarLinkMakerProps {
  disabled?: boolean;
  path?: string;
  title: string;
  icon: JSX.Element;
}

const NavbarLinkMaker: FC<NavbarLinkMakerProps> = ({ disabled, title, path, icon }) => {
  const mainClass = 'navbar-link';

  if (disabled) {
    return (
      <div className={`${mainClass} ${mainClass}--disabled`}>
        <div className={`${mainClass}__icon`}>{icon}</div>
        <span className={`${mainClass}__title`}>{title}</span>
      </div>
    );
  }

  return (
    <NavbarLink path={path || ''}>
      <div className={`${mainClass}__icon`}>{icon}</div>
      <span className={`${mainClass}__title`}>{title}</span>
    </NavbarLink>
  );
};

export default NavbarLinkMaker;
