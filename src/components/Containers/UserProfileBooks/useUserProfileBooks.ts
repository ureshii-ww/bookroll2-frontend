import { useEffect } from 'react';
import { useInfiniteScroll } from '../../../hooks/useInfiniteScroll';
import { useAppSelector } from '../../../hooks/useAppSelector';
import useAppDispatch from '../../../hooks/useAppDispatch';
import {
  deleteUserProfileBook,
  loadUserProfileBooks,
  resetUserProfileBooks,
} from '../../../store/reducers/user-profile/books';

const useUserProfileBooks = (userUrl: string) => {
  const chunkSize = 10;
  const dispatch = useAppDispatch();
  const userInfoData = useAppSelector(state => state.userProfile.info.data);
  const {
    data: booksArray,
    page,
    length: wholeArrayLength,
    isLoading,
    isOut,
  } = useAppSelector(state => state.userProfile.books);

  const { triggerRef } = useInfiniteScroll(() => {
    dispatch(loadUserProfileBooks({ page: page + 1, userUrl, size: chunkSize }));
  });

  const handleDeleteBook = (index: number) => {
    dispatch(deleteUserProfileBook({index, userUrl}))
  };

  useEffect(() => {
    if (userInfoData !== null) {
      dispatch(resetUserProfileBooks(userUrl));
    }
  }, []);

  return { booksArray, triggerRef, isOut, isLoading, wholeArrayLength, handleDeleteBook };
};

export default useUserProfileBooks;
