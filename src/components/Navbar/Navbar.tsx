import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import { RouteNames } from '../../routes/route-names.enum';

const Navbar:FC = () => {
  const {userData} = useAppSelector(state => state.auth);

  return (
    <div>
      <div>Theme switch</div>
      <div>
        <Link to={`${RouteNames.USER_PROFILE_BASE}${userData?.url}`}>My Profile</Link>
        <Link to={`${RouteNames.CLUB_PROFILE_BASE}${userData?.club}`}>My Club</Link>
        <Link to={RouteNames.RANDOM_BOOK}>Random book</Link>
      </div>
      <div>Logout</div>
    </div>
  );
};

export default Navbar;