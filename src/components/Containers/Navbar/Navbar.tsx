import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { RouteNames } from '../../../routes/route-names.enum';
import LogoutButton from '../LogoutButton/LogoutButton';
import './navbar.scss';

const Navbar: FC = () => {
  const { userData } = useAppSelector(state => state.auth);

  return (
    <div className="navbar">
      <div>Theme switch</div>
      <div className="navbar__main-buttons">
        <Link to={`${RouteNames.USER_PROFILE_BASE}${userData?.url}`}>My Profile</Link>
        {userData?.club && <Link to={`${RouteNames.CLUB_PROFILE_BASE}${userData?.club}`}>My Club</Link>}
        {userData?.club && <Link to={RouteNames.RANDOM_BOOK}>Random book</Link>}
      </div>
      <LogoutButton />
    </div>
  );
};

export default Navbar;
