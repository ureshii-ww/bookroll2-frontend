import React from 'react';
import useClubProfileRules from './useClubProfileRules';
import './club-profile-rules.scss';

const ClubProfileRules = () => {
  const { clubRules, isLoading } = useClubProfileRules();

  return (
    <div className="club-profile-rules">
      {!isLoading && clubRules && <p className="club-profile-rules__text">{clubRules}</p>}
      {!isLoading && !clubRules && <div className="club-profile-rules__placeholder">Пусто</div>}
    </div>
  );
};

export default ClubProfileRules;
