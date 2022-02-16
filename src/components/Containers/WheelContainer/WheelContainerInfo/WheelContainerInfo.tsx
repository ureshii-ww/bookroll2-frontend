import React, { FC, useState } from 'react';
import { WheelWinnerInfo } from '../../../../models/wheel-winner-info';
import { BookData } from '../../../../models/book-data';
import { useRequestTab } from '../../../../hooks/useRequestTab';
import BookService from '../../../../services/book.service';
import WheelContainerBookData from '../WheelContainerBookData/WheelContainerBookData';
import SubmitButton from '../../../UI/SubmitButton/SubmitButton';

interface WheelContainerInfoProps {
  readonly winnerInfo: WheelWinnerInfo;
  readonly startRoll: () => void;
}

const WheelContainerInfo: FC<WheelContainerInfoProps> = ({ winnerInfo, startRoll, ...rest }) => {
  return (
    <div>
      <WheelContainerBookData winnerInfo={winnerInfo}/>
      <SubmitButton onClick={startRoll}>Крутить</SubmitButton>
    </div>
  )
};

export default WheelContainerInfo;