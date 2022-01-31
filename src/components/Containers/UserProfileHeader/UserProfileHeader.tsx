import React, { CSSProperties, FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserProfileInfo } from '../../../models/user-profile-info';
import { useRequest } from '../../../hooks/useRequest';
import UserService from '../../../services/user.service';
import { useAppSelector } from '../../../hooks/useAppSelector';

interface UserProfileHeaderProps {
  isCurrentUser: boolean;
  userUrl: string | undefined;
}

const UserProfileHeader: FC<UserProfileHeaderProps> = ({ userUrl, isCurrentUser, ...rest }) => {
  const location = useLocation();
  const { isLoading } = useAppSelector(state => state.event)
  const [userInfo, setUserInfo] = useState<UserProfileInfo>({
    username: null,
    color: null,
    emoji: null,
    clubname: null,
    clubUrl: null
  });
  const avatarStyles: CSSProperties = {
    backgroundColor: userInfo.color || 'FFF'
  }

  const [fetchInfo, error] = useRequest(async (userUrl: string) => {
    const response = await UserService.getUserProfileInfo(userUrl);
    setUserInfo(response.data);
  })

  useEffect(() => {
    fetchInfo(userUrl);
  }, [])

  return (
    !isLoading ?
      <div>
        <div>
          <div>
            <div style={avatarStyles}>
              <span>{userInfo.emoji}</span>
            </div>
          </div>
          <div>
            <h1>{userInfo.username}</h1>
          </div>
        </div>
        {isCurrentUser && <div>
          <Link to={`${location.pathname}/settings`}>Настройки</Link>
        </div>}
        {isCurrentUser && <div>
          <h3>
            {userInfo.clubname && userInfo.clubUrl ? 'Вы состоите в клубе' : 'Вы не состоите в клубе, но можете'}
          </h3>
          <Link to={`/club/${userInfo.clubUrl}`}>{userInfo.clubname}</Link>
        </div>}
        {!isCurrentUser && <div>
          <h3>
            {userInfo.clubname && userInfo.clubUrl ? 'Состоит в клубе' : 'Не состоит ни в одном клубе'}
          </h3>
          {userInfo.clubname && userInfo.clubUrl && <Link to={`/club/${userInfo.clubUrl}`}/>}
        </div>}
      </div>
      :
      <div>
        LOADING
      </div>
  );
};

export default UserProfileHeader;