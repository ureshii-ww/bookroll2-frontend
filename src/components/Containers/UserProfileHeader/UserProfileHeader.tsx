import React, { FC, Fragment } from 'react';
import ProfileTitle from '../../UI/ProfileTitle/ProfileTitle';
import UserHeaderButtons from './UserHeaderButtons/UserHeaderButtons';
import UserHeaderClub from './UserHeaderClub/UserHeaderClub';
import './user-profile-header.scss';
import Avatar from '../../UI/Avatar/Avatar';
import { Helmet } from 'react-helmet';
import { useAppSelector } from '../../../hooks/useAppSelector';

interface UserProfileHeaderProps {
  isCurrentUser: boolean;
}

const UserProfileHeader: FC<UserProfileHeaderProps> = ({ isCurrentUser }) => {
  const userInfo = useAppSelector(state => state.userProfile.info.data);

  return (
    <Fragment>
      <Helmet>
        <title>Профиль {userInfo?.username || ''}</title>
      </Helmet>
      <section className="user-profile-header">
        <div className="user-profile-header__title-container">
          <div className="user-profile-header__avatar">
            <Avatar emoji={userInfo?.emoji || ''} color={userInfo?.color || 'FFF'} className="avatar--big" />
          </div>
          <ProfileTitle title={userInfo?.username || ''} />
        </div>
        <UserHeaderButtons isCurrentUser={isCurrentUser} />
        <UserHeaderClub
          clubUrl={userInfo?.clubUrl || ''}
          clubname={userInfo?.clubname || ''}
          isCurrentUser={isCurrentUser}
        />
      </section>
    </Fragment>
  );
};

export default UserProfileHeader;
