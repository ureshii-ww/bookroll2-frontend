import React, { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import LogoutButton from '../LogoutButton/LogoutButton';
import { RouteNames } from '../../../../routes/route-names.enum';
import './navbar-bubble.scss';

interface NavbarBubbleProps {
  userUrl: string;
  userEmoji: string;
}

const NavbarBubble: FC<NavbarBubbleProps> = ({ userUrl, userEmoji, ...rest }) => {
  return (
    <Fragment>
      <Link className="bubble__item" to={`${RouteNames.USER_PROFILE_BASE}${userUrl}`}>
        <span className="bubble__emoji">{userEmoji}</span>
        <span>Профиль</span>
      </Link>
      <div className="bubble__item">
        <ThemeSwitch>Сменить тему</ThemeSwitch>
      </div>
      <div className="bubble__item">
        <LogoutButton>Выйти</LogoutButton>
      </div>
    </Fragment>
  );
};

export default NavbarBubble;
