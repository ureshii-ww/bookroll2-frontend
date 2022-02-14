import React, { FC, useEffect, useState } from 'react';
import { WheelWinnerInfo } from '../../../models/wheel-winner-info';
import WheelContainerBookData from '../WheelContainerBookData/WheelContainerBookData';
import { useNavigate, useParams } from 'react-router-dom';
import { useRequestPage } from '../../../hooks/useRequestPage';
import ClubService from '../../../services/club.service';
import { useNotification } from '../../../hooks/useNotification';
import { RouteNames } from '../../../routes/route-names.enum';
import SubmitButton from '../../UI/SubmitButton/SubmitButton';

interface WheelContainerFinishProps {
  readonly winnerInfo: WheelWinnerInfo;
}

const WheelContainerFinish: FC<WheelContainerFinishProps> = ({winnerInfo, ...rest}) => {
  const {clubUrl} = useParams();
  const navigate = useNavigate();
  const addNotification = useNotification();
  const confirmBook = useRequestPage(async () => {
    const response = await ClubService.confirmBook(clubUrl || '', winnerInfo.book.id);
    if (response.data === 'Success') {
      await addNotification('Книга успешно выбрана', 'success');
      navigate(`${RouteNames.CLUB_PROFILE_BASE}${clubUrl}`)
    }
  })

  return (
    <div>
      <WheelContainerBookData winnerInfo={winnerInfo} />
      <SubmitButton onClick={confirmBook}>Подтвердить книгу</SubmitButton>
    </div>
  );
};

export default WheelContainerFinish;