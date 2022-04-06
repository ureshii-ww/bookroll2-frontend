import React, { FC } from 'react';
import useClubProfileMembers from './useClubProfileMembers';
import MemberCard from '../../UI/MemberCard/MemberCard';
import './club-profile-members.scss';

interface ClubProfileMembersProps {}

const ClubProfileMembers: FC<ClubProfileMembersProps> = () => {
  const { usersInfo, clubUrl, isLoading } = useClubProfileMembers();

  return (
    <div className="club-profile-members">
      {!isLoading && usersInfo.length !== 0 &&
        usersInfo.map((user, index) => (
          <MemberCard
            className="club-profile-members__card"
            key={`members-${clubUrl}-meeting-${index}`}
            userInfo={user}
          />
        ))}
      {!isLoading && usersInfo.length === 0 && <div>В клубе нет участников</div>}
    </div>
  );
};

export default ClubProfileMembers;
