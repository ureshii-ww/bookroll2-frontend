import React, { FC, Fragment } from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { RouteNames } from '../../../routes/route-names.enum';
import './navbar.scss';
import ThemeSwitch from './ThemeSwitch/ThemeSwitch';
import { ReactComponent as ClubSvg } from '../../../assets/svg/navbar-club.svg';
import { ReactComponent as BookSvg } from '../../../assets/svg/navbar-book.svg';
import NavbarProfileButton from './NavbarProfileButton/NavbarProfileButton';
import NavbarLinkMaker from './NavbarLinkMaker/NavbarLinkMaker';

const Navbar: FC = () => {
  const { userData } = useAppSelector(state => state.auth);

  return (
    <nav className='navbar navbar--desktop'>
      <div className='navbar__logo navbar__logo--big'>
        Книжный Клуб.
      </div>
      <div className='navbar__logo navbar__logo--small'>
        КК.
      </div>
      <div className='navbar__menu'>
        <div className='navbar__theme-switch-wrapper'>
          <ThemeSwitch />
        </div>
        <div className='navbar__links'>
          {userData?.club ? (
            <Fragment>
              <NavbarLinkMaker title='Мой клуб' icon={<ClubSvg />}
                               path={`${RouteNames.CLUB_PROFILE_BASE}${userData?.club}`} />
              <NavbarLinkMaker title='Случайная книга' icon={<BookSvg />} path={RouteNames.RANDOM_BOOK} />
            </Fragment>
          ) : (
            <Fragment>
              <NavbarLinkMaker title='Мой клуб' icon={<ClubSvg />} disabled />
              <NavbarLinkMaker title='Искать книгу' icon={<BookSvg />} disabled />
            </Fragment>
          )}
        </div>
        <div className='navbar__profile-wrapper'>
          <NavbarProfileButton
            userEmoji={userData?.emoji || ''}
            userColor={userData?.color || ''}
            userUrl={userData?.url || ''}
          />
        </div>
        {/*<LogoutButton />*/}
      </div>
    </nav>
  );
};

export default Navbar;
