import React from 'react';
import useClubProfileRules from './useClubProfileRules';
import './club-profile-rules.scss';
import {ReactComponent as NeutralFace} from '../../../assets/svg/neutral-face.svg';

const ClubProfileRules = () => {
  const { clubRules, isLoading } = useClubProfileRules();

  return (
    <div className="club-profile-rules">
      {!isLoading && clubRules && <p className="club-profile-rules__text">{clubRules}</p>}
      {!isLoading && !clubRules && <div className="club-profile-rules__placeholder">
        <span className="club-profile-rules__placeholder-emoji"><NeutralFace /></span>
        <span className="club-profile-rules__placeholder-text">Описания нет</span>
      </div>}
    </div>
  );
};

export default ClubProfileRules;
