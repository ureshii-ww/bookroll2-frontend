import React, { FC } from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { RouteNames } from '../../../routes/route-names.enum';
import LogoutButton from './LogoutButton/LogoutButton';
import './navbar.scss';
import ThemeSwitch from './ThemeSwitch/ThemeSwitch';
import { ReactComponent as ProfileSvg } from '../../../assets/svg/navbar_profile.svg';
import { ReactComponent as ClubSvg } from '../../../assets/svg/navbar-club.svg';
import { ReactComponent as BookSvg } from '../../../assets/svg/navbar-book.svg';
import NavbarMainButton from './NavbarMainButton/NavbarMainButton';
import NavbarBubbleButton from './NavbarBubbleButton/NavbarBubbleButton';

const Navbar: FC = () => {
  const { userData } = useAppSelector(state => state.auth);

  const profileMainButton = () => (
    <NavbarMainButton className="navbar__profile" path={`${RouteNames.USER_PROFILE_BASE}${userData?.url}`}>
      <ProfileSvg />
    </NavbarMainButton>
  );

  const profileBubbleButton = () => (
    <NavbarBubbleButton userUrl={userData?.url || ''} userEmoji={userData?.emoji || ''}>
      <ProfileSvg />
    </NavbarBubbleButton>
  );

  const clubMainButton = () => (
    <NavbarMainButton path={`${RouteNames.CLUB_PROFILE_BASE}${userData?.club}`}>
      <ClubSvg />
    </NavbarMainButton>
  );

  const clubMainButtonDisabled = () => (
    <NavbarMainButton disabled>
      <ClubSvg />
    </NavbarMainButton>
  );

  const randomBookMainButton = () => (
    <NavbarMainButton path={RouteNames.RANDOM_BOOK}>
      <BookSvg />
    </NavbarMainButton>
  );

  const randomBookMainButtonDisabled = () => (
    <NavbarMainButton disabled>
      <BookSvg />
    </NavbarMainButton>
  );

  return (
    <nav className="navbar">
      <ThemeSwitch />
      <div className="navbar__main-buttons">
        {profileMainButton()}
        {profileBubbleButton()}
        {userData?.club ? clubMainButton() : clubMainButtonDisabled()}
        {userData?.club ? randomBookMainButton() : randomBookMainButtonDisabled()}
      </div>
      <LogoutButton />
    </nav>
  );
};

export default Navbar;
