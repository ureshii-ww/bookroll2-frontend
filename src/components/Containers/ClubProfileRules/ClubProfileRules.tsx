import React from 'react';
import useClubProfileRules from './useClubProfileRules';
import './club-profile-rules.scss';

const ClubProfileRules = () => {
  const { clubRules, isLoading } = useClubProfileRules();

  return !isLoading ? (
    <div className="club-profile-rules">
      {clubRules && <p className="club-profile-rules__text">{clubRules}</p>}
      {!clubRules && <div>Пусто</div>}
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default ClubProfileRules;