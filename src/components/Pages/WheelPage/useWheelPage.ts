import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ClubBooks } from '../../../models/club-books';
import { useRequestPage } from '../../../hooks/useRequestPage';
import ClubService from '../../../services/club.service';

const useWheelPage = () => {
  const { clubUrl } = useParams();
  const [clubBooks, setClubBooks] = useState<ClubBooks[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [booksKey, setBooksKey] = useState('');
  const getClubBooks = useRequestPage(async () => {
    const response = await ClubService.getClubBooks(clubUrl || '');
    setClubBooks(response.data);
    setIsLoaded(true);
  });

  const displayWinner = (userIndex: number, bookIndex: number) => {
    setClubBooks(clubBooks => {
      clubBooks[userIndex].books[bookIndex].isDisabled = true;
      return [...clubBooks];
    });
  };

  useEffect(() => {
    getClubBooks();
  }, []);

  const handleSetBooksKey = (rollsCount: number) => {
    setBooksKey(rollsCount.toString());
  }

  return { clubBooks, isLoaded, displayWinner, booksKey, handleSetBooksKey };
};

export default useWheelPage;