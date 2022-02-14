import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { RouteNames } from '../../../routes/route-names.enum';
import LogoutButton from '../LogoutButton/LogoutButton';
import './navbar.scss';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import { ReactComponent as ProfileSvg } from '../../../assets/svg/navbar_profile.svg';
import { ReactComponent as ClubSvg } from '../../../assets/svg/navbar-club.svg';
import { ReactComponent as BookSvg } from '../../../assets/svg/navbar-book.svg';

const Navbar: FC = () => {
  const { userData } = useAppSelector(state => state.auth);

  return (
    <div className="navbar">
      <ThemeSwitch />
      <div className="navbar__main-buttons">
        <Link to={`${RouteNames.USER_PROFILE_BASE}${userData?.url}`}>
          <ProfileSvg />
        </Link>
        {userData?.club && (
          <Link to={`${RouteNames.CLUB_PROFILE_BASE}${userData?.club}`}>
            <ClubSvg />
          </Link>
        )}
        {userData?.club && (
          <Link to={RouteNames.RANDOM_BOOK}>
            <BookSvg />
          </Link>
        )}
      </div>
      <LogoutButton />
    </div>
  );
};

export default Navbar;
