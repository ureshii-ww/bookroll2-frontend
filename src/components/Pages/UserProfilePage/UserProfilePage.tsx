import React from 'react';
import UserProfileHeader from '../../Containers/UserProfileHeader/UserProfileHeader';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useParams } from 'react-router-dom';

const UserProfilePage = () => {
  const { userUrl } = useParams();
  const isCurrentUser = useAppSelector(state => state.auth.userData?.url === userUrl)

  return (
    <div>
      <UserProfileHeader isCurrentUser={isCurrentUser} userUrl={userUrl}/>
    </div>
  );
};

export default UserProfilePage;