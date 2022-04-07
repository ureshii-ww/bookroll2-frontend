import React, { FC } from 'react';
import ClubSettingsInfoForm from './ClubSettingsForm/ClubSettingsInfoForm';
import { useClubSettingsInfoContainer } from './useClubSettingsInfoContainer';

interface ClubSettingsInfoProps {
  clubUrl: string;
}

const ClubSettingsInfoContainer: FC<ClubSettingsInfoProps> = ({ clubUrl }) => {
  const { clubSettingsInfo, isLoading } = useClubSettingsInfoContainer(clubUrl);

  return (
    <ClubSettingsInfoForm key={`${clubSettingsInfo.clubname.length}-info-from`} clubSettingsInfo={clubSettingsInfo} disabled={isLoading} clubUrl={clubUrl} />
  );
};

export default ClubSettingsInfoContainer;