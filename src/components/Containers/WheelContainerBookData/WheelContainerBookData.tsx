import React, { FC, useEffect, useState } from 'react';
import BookService from '../../../services/book.service';
import { BookData } from '../../../models/book-data';
import { WheelWinnerInfo } from '../../../models/wheel-winner-info';
import { useRequestTab } from '../../../hooks/useRequestTab';

interface WheelContainerBookInfoProps {
  winnerInfo: WheelWinnerInfo;
}

const WheelContainerBookData: FC<WheelContainerBookInfoProps> = ({ winnerInfo, ...rest }) => {
  const [bookData, setBookData] = useState<BookData>();
  const [isLoaded, setIsLoaded] = useState(false);
  const getBookData = useRequestTab(async () => {
    const response = await BookService.getBookData(winnerInfo.book.id);
    setBookData(response.data);
    setIsLoaded(true);
  });

  useEffect(() => {
    getBookData();
  }, []);

  return isLoaded ? (
    <div>
      <div>{winnerInfo.user.username}</div>
      <div>{JSON.stringify(bookData)}</div>
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default WheelContainerBookData;