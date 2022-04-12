import React, { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import LogoutButton from '../LogoutButton/LogoutButton';
import { RouteNames } from '../../../../routes/route-names.enum';
import { ReactComponent as ProfileSvg } from '../../../../assets/svg/navbar_profile.svg';
import './navbar-bubble.scss';

interface NavbarBubbleProps {
  userUrl: string;
}

const NavbarBubble: FC<NavbarBubbleProps> = ({ userUrl }) => {
  return (
    <Fragment>
      <Link className="bubble__item" to={`${RouteNames.USER_PROFILE_BASE}${userUrl}`}>
        <ProfileSvg />
        <span>Мой профиль</span>
      </Link>
      <div className="bubble__item navbar-bubble__theme-switch">
        <ThemeSwitch>Сменить тему</ThemeSwitch>
      </div>
      <div className="bubble__item">
        <LogoutButton>Выйти</LogoutButton>
      </div>
    </Fragment>
  );
};

export default NavbarBubble;
