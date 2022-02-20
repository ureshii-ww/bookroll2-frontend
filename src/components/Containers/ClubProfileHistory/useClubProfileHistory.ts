import { useClubProfileContext } from '../../Pages/ClubProfilePage/ClubProfilePage';
import { useEffect, useState } from 'react';
import { useRequestTab } from '../../../hooks/useRequestTab';
import ClubService from '../../../services/club.service';
import { BookData } from '../../../models/book-data';
import { useAppSelector } from '../../../hooks/useAppSelector';

const useClubProfileHistory = () => {
  const [chosenBooksHistory, setChosenBooksHistory] = useState<BookData[]>([]);
  const { isMaster, clubUrl } = useClubProfileContext();
  const isLoading = useAppSelector(state => state.event.isLoadingTab);

  const fetchHistory = useRequestTab(async clubUrl => {
    const response = await ClubService.getChosenBooksHistory(clubUrl);
    setChosenBooksHistory(response.data);
  });

  useEffect(() => {
    fetchHistory(clubUrl);
  }, [clubUrl]);

  return {chosenBooksHistory, isLoading, clubUrl};
};

export default useClubProfileHistory;