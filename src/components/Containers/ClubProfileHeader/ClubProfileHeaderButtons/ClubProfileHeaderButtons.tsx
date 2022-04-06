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
import useAppDispatch from '../../../../hooks/useAppDispatch';
import { openModal } from '../../../../store/reducers/modal';

interface ClubProfileHeaderButtonsProps {
  isMaster: boolean;
  isInClub: boolean;
  clubUrl: string;
}

const ClubProfileHeaderButtons: FC<ClubProfileHeaderButtonsProps> = ({ isInClub, isMaster, clubUrl, ...rest }) => {
  const { joinClub, leaveClub } = useActions();
  const dispatch = useAppDispatch();
  const userClub = useAppSelector(state => state.auth.userData?.club);
  const showSettingsModal = () => {
    dispatch(openModal(<ClubSettingsPage />));
  };

  return (
    <div className="club-profile-header__buttons">
      {isMaster && (
        <Link className="club-profile-header__button" to={`${RouteNames.CLUB_PROFILE_BASE}${clubUrl}/wheel`}>
          <WheelSvg />
          <span>Колесо</span>
        </Link>
      )}
      {isMaster && (
        <TransparentButton className="club-profile-header__button" onClick={showSettingsModal}>
          <SettingsSvg />
          <span>Настройки</span>
        </TransparentButton>
      )}
      {!isInClub && !userClub && (
        <TransparentButton
          className="club-profile-header__button transparent-button--green"
          onClick={() => joinClub(clubUrl)}>
          <JoinSvg />
          <span>Вступить в клуб</span>
        </TransparentButton>
      )}
      {isInClub && (
        <TransparentButton
          className="club-profile-header__button transparent-button--red"
          onClick={() => leaveClub(clubUrl)}>
          <LeaveSvg />
          <span>Выйти из клуба</span>
        </TransparentButton>
      )}
    </div>
  );
};

export default ClubProfileHeaderButtons;
