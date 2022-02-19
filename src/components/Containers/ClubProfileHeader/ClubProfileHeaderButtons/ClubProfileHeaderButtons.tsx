import React, { FC } from 'react';
import TransparentButton from '../../../UI/TransparentButton/TransparentButton';
import { useActions } from '../../../../hooks/useActions';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../../../routes/route-names.enum';
import './club-profile-header-buttons.scss';
import { ReactComponent as WheelSvg } from '../../../../assets/svg/wheel.svg';
import { ReactComponent as SettingsSvg } from '../../../../assets/svg/settings.svg';
import { ReactComponent as LeaveSvg } from '../../../../assets/svg/leave-club.svg';
import { ReactComponent as JoinSvg } from '../../../../assets/svg/join-club.svg';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import ClubSettingsPage from '../../../Pages/ClubSettingsPage/ClubSettingsPage';

interface ClubProfileHeaderButtonsProps {
  isMaster: boolean;
  isInClub: boolean;
  clubUrl: string;
}

const ClubProfileHeaderButtons: FC<ClubProfileHeaderButtonsProps> = ({ isInClub, isMaster, clubUrl, ...rest }) => {
  const { joinClub, leaveClub, showModal } = useActions();
  const userClub = useAppSelector(state => state.auth.userData?.club);
  const showSettingsModal = () => {
    showModal(<ClubSettingsPage />);
  };

  return (
    <div className="club-profile-header__buttons">
      {isMaster && (
        <Link className="club-profile-header__button" to={`${RouteNames.CLUB_PROFILE_BASE}${clubUrl}/wheel`}>
          <WheelSvg />
          Колесо
        </Link>
      )}
      {isMaster && (
        <TransparentButton className="club-profile-header__button" onClick={showSettingsModal}>
          <SettingsSvg />
          Настройки
        </TransparentButton>
      )}
      {!isInClub && !userClub && (
        <TransparentButton
          className="club-profile-header__button transparent-button--green"
          onClick={() => joinClub(clubUrl)}>
          <JoinSvg />
          Вступить в клуб
        </TransparentButton>
      )}
      {isInClub && (
        <TransparentButton
          className="club-profile-header__button transparent-button--red"
          onClick={() => leaveClub(clubUrl)}>
          <LeaveSvg />
          Выйти из клуба
        </TransparentButton>
      )}
    </div>
  );
};

export default ClubProfileHeaderButtons;
