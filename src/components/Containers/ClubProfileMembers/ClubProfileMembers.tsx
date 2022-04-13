import React, { FC } from 'react';
import useClubProfileMembers from './useClubProfileMembers';
import MemberCard from '../../UI/MemberCard/MemberCard';
import './club-profile-members.scss';
import { ReactComponent as WorriedFace } from '../../../assets/svg/worried-face.svg';

interface ClubProfileMembersProps {}

const ClubProfileMembers: FC<ClubProfileMembersProps> = () => {
  const { usersInfo, clubUrl, isLoading } = useClubProfileMembers();

  return (
    <div className={usersInfo.length > 0 ? 'club-profile-members' : 'club-profile-members club-profile-members--empty'}>
      {!isLoading &&
        usersInfo.length !== 0 &&
        usersInfo.map((user, index) => (
          <MemberCard
            className="club-profile-members__card"
            key={`members-${clubUrl}-meeting-${index}`}
            userInfo={user}
          />
        ))}
      {!isLoading && usersInfo.length === 0 && (
        <div className="club-profile-members__placeholder">
          <span>
            <WorriedFace />
          </span>
          <span>В клубе нет участников</span>
        </div>
      )}
    </div>
  );
};

export default ClubProfileMembers;
