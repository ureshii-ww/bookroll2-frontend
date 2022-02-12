import React, { FC } from 'react';
import TransparentButton from '../../UI/TransparentButton/TransparentButton';
import { useActions } from '../../../hooks/useActions';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../../routes/route-names.enum';

interface ClubProfileHeaderButtonsProps {
  isMaster: boolean;
  isInClub: boolean;
  clubUrl: string;
}

const ClubProfileHeaderButtons: FC<ClubProfileHeaderButtonsProps> = ({isInClub, isMaster, clubUrl, ...rest}) => {
  const { joinClub, leaveClub } = useActions();

  return (
    <div>
      {isMaster && <div>Wheel</div>}
      {isMaster && <Link to={`${RouteNames.CLUB_PROFILE_BASE}${clubUrl}/settings`}>Settings</Link>}
      {!isInClub &&
      <TransparentButton onClick={() => joinClub(clubUrl)}>Вступить в клуб</TransparentButton>}
      {isInClub &&
      <TransparentButton onClick={() => leaveClub(clubUrl)}>Выйти из клуба</TransparentButton>}
    </div>
  );
};

export default ClubProfileHeaderButtons;