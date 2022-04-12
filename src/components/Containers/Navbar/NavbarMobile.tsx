import React, { Fragment } from 'react';
import NavbarLinkMaker from './NavbarLinkMaker/NavbarLinkMaker';
import { ReactComponent as ClubSvg } from '../../../assets/svg/navbar-club.svg';
import { RouteNames } from '../../../routes/route-names.enum';
import { ReactComponent as BookSvg } from '../../../assets/svg/navbar-book.svg';
import NavbarProfileButton from './NavbarProfileButton/NavbarProfileButton';
import { useAppSelector } from '../../../hooks/useAppSelector';
import './navbar-mobile.scss';

const NavbarMobile = () => {
  const { userData } = useAppSelector(state => state.auth);

  return (
    <nav className='navbar navbar--mobile'>
      {userData?.club ? (
        <Fragment>
          <NavbarLinkMaker title="Мой клуб" icon={<ClubSvg/>} path={`${RouteNames.CLUB_PROFILE_BASE}${userData?.club}`}/>
          <NavbarLinkMaker title="Случайная книга" icon={<BookSvg />} path={RouteNames.RANDOM_BOOK} />
        </Fragment>
      ) : (
        <Fragment>
          <NavbarLinkMaker title="Мой клуб" icon={<ClubSvg/>} disabled />
          <NavbarLinkMaker title="Искать книгу" icon={<BookSvg />} disabled />
        </Fragment>
      )}
      <div className="navbar__profile-wrapper">
        <NavbarProfileButton
          userEmoji={userData?.emoji || ''}
          userColor={userData?.color || ''}
          userUrl={userData?.url || ''}
        />
      </div>
    </nav>
  );
};

export default NavbarMobile;