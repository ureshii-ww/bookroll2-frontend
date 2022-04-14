import { useEffect } from 'react';
import { useClubProfileContext } from '../../Pages/ClubProfilePage/ClubProfilePage';
import { useAppSelector } from '../../../hooks/useAppSelector';
import useAppDispatch from '../../../hooks/useAppDispatch';
import {
  deleteClubProfileBook,
  loadClubProfileBooks,
  resetClubProfileBooks,
} from '../../../store/reducers/club-profile/books';

const useClubProfileBooks = () => {
  const { clubUrl } = useClubProfileContext();
  const dispatch = useAppDispatch();
  const { isLoading, data: booksData } = useAppSelector(state => state.clubProfile.books);
  const clubData = useAppSelector(state => state.clubProfile.info.data);
  const isMaster = useAppSelector(state => state.clubProfile.info.data?.isMaster || false);

  useEffect(() => {
    if (clubData) {
      dispatch(loadClubProfileBooks(clubUrl));
    }

    return () => {
      dispatch(resetClubProfileBooks());
    }
  }, [clubUrl]);

  const handleDelete = (index: number, userUrl: string) => {
    dispatch(deleteClubProfileBook({ clubUrl, userUrl, index }));
  };

  return { booksData, clubUrl, isMaster, isLoading, handleDelete };
};

export default useClubProfileBooks;
