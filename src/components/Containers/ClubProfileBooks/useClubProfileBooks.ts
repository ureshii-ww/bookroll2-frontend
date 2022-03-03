import { useEffect, useState } from 'react';
import { ClubBooks } from '../../../models/club-books';
import { useClubProfileContext } from '../../Pages/ClubProfilePage/ClubProfilePage';
import { useRequestTab } from '../../../hooks/useRequestTab';
import ClubService from '../../../services/club.service';
import { useRequestPost } from '../../../hooks/useRequestPost';

const useClubProfileBooks = () => {
  const [booksData, setBooksData] = useState<ClubBooks[]>([]);
  const { isMaster, clubUrl } = useClubProfileContext();
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchBooksData = useRequestTab(async (clubUrl: string) => {
    const response = await ClubService.getClubBooks(clubUrl);
    setBooksData(response.data);
    setIsLoaded(true);
  });

  useEffect(() => {
    fetchBooksData(clubUrl);
  }, [clubUrl]);

  const fetchDeleteBook = useRequestPost(async (clubUrl: string, index: number, userUrl: string) => {
    const response = await ClubService.deleteClubBook(clubUrl, userUrl, index);

    if (response.data === 'Success') {
      const tempArray = booksData;
      const userIndex = tempArray.findIndex(entry => entry.user.url === userUrl);
      tempArray[userIndex].books.splice(index, 1);
      setBooksData([...tempArray]);
    }
  });

  const handleDelete = (index: number, userUrl: string) => {
    fetchDeleteBook(clubUrl, index, userUrl);
  };

  return {booksData, clubUrl, isMaster, handleDelete, isLoaded}
}

export default useClubProfileBooks;