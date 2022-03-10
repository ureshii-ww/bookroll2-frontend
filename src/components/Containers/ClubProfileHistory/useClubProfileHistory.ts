import { useClubProfileContext } from '../../Pages/ClubProfilePage/ClubProfilePage';
import { useEffect, useState } from 'react';
import useRequest from '../../../hooks/useRequest';
import ClubService from '../../../services/club.service';
import { BookData } from '../../../models/book-data';

const useClubProfileHistory = () => {
  const [chosenBooksHistory, setChosenBooksHistory] = useState<BookData[]>([]);
  const { clubUrl } = useClubProfileContext();
  const [isLoaded, setIsLoaded] = useState(false)

  const fetchHistory = useRequest('Tab', async () => {
    const response = await ClubService.getChosenBooksHistory(clubUrl);
    setChosenBooksHistory(response.data);
    setIsLoaded(true)
  });

  useEffect(() => {
    fetchHistory({});
  }, [clubUrl]);

  return {chosenBooksHistory, isLoaded, clubUrl};
};

export default useClubProfileHistory;