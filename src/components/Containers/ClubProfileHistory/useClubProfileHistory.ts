import { useClubProfileContext } from '../../Pages/ClubProfilePage/ClubProfilePage';
import { useEffect, useState } from 'react';
import { useRequestTab } from '../../../hooks/useRequestTab';
import ClubService from '../../../services/club.service';
import { BookData } from '../../../models/book-data';

const useClubProfileHistory = () => {
  const [chosenBooksHistory, setChosenBooksHistory] = useState<BookData[]>([]);
  const { clubUrl } = useClubProfileContext();
  const [isLoaded, setIsLoaded] = useState(false)

  const fetchHistory = useRequestTab(async clubUrl => {
    const response = await ClubService.getChosenBooksHistory(clubUrl);
    setChosenBooksHistory(response.data);
    setIsLoaded(true)
  });

  useEffect(() => {
    fetchHistory(clubUrl);
  }, [clubUrl]);

  return {chosenBooksHistory, isLoaded, clubUrl};
};

export default useClubProfileHistory;