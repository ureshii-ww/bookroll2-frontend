import React from 'react';
import useClubProfileRules from './useClubProfileRules';
import './club-profile-rules.scss';

const ClubProfileRules = () => {
  const { clubRules, isLoaded } = useClubProfileRules();

  return (
    <div className="club-profile-rules">
      {isLoaded && clubRules && <p className="club-profile-rules__text">{clubRules}</p>}
      {isLoaded && !clubRules && <div>Пусто</div>}
    </div>
  );
};

export default ClubProfileRules;
