import React, { FC } from 'react';
import useClubProfileMembers from './useClubProfileMembers';
import MemberCard from '../../UI/MemberCard/MemberCard';
import './club-profile-members.scss';

interface ClubProfileMembersProps {}

const ClubProfileMembers: FC<ClubProfileMembersProps> = () => {
  const { usersInfo, clubUrl, isLoading } = useClubProfileMembers();

  return !isLoading ? (
    <div className="club-profile-members">
      {usersInfo.length !== 0 &&
        usersInfo.map((user, index) => (
          <MemberCard
            className="club-profile-members__card"
            key={`members-${clubUrl}-meeting-${index}`}
            userInfo={user}
          />
        ))}
      {usersInfo.length === 0 && <div>В клубе нет участников</div>}
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default ClubProfileMembers;
