import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import UserService from '../../../services/user.service';
import { useUserProfileContext } from '../../Pages/UserProfilePage/UserProfilePage';
import { RandomBookData } from '../../../models/random-book-data';
import BookCard from '../../UI/BookCard/BookCard';
import { useInfiniteScroll } from '../../../hooks/useInfiniteScroll';
import { useRequestTab } from '../../../hooks/useRequestTab';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useParams } from 'react-router-dom';

const UserProfileBooks: FC = props => {
  const { userUrl } = useParams();
  const chunkSize: number = 10;
  const isLoading = useAppSelector(state => state.event.isLoadingTab);
  const [booksArray, setBooksArray] = useState<RandomBookData[]>([]);
  const [isOut, setIsOut] = useState<boolean>(false);
  const { isCurrentUser } = useUserProfileContext();
  const { pageNum, containerRef } = useInfiniteScroll();

  const [fetchBooksArray, booksArrayError] = useRequestTab(
    async (userUrl: string, pageNum: number, chunkSize: number) => {
      const response = await UserService.getUserBooks(userUrl, pageNum, chunkSize);
      const all: RandomBookData[] = [...booksArray, ...response.data];
      setBooksArray([...all]);
      if (all.length === parseInt(response.headers['x-data-length'])) {
        setIsOut(true);
      }
    }
  );

  const [fetchDeleteBook, deleteBookError] = useRequestTab(async (userUrl: string, index: number) => {
    const response = await UserService.deleteBook(userUrl, index);
    if (response.data === 'Success') {
      const tempArray = booksArray;
      tempArray.splice(index, 1);
      setBooksArray(tempArray);
    }
  });

  useEffect(() => {
    if (!isOut) {
      fetchBooksArray(userUrl, pageNum, chunkSize);
    }
  }, [pageNum]);

  const handleDeleteBook = (index: number) => {
    fetchDeleteBook(userUrl, index);
  };

  return (
    <div>
      {booksArray.length > 0 &&
        booksArray.map((book, index) => {
          return index === booksArray.length - 1 && !isLoading && !isOut ? (
            <div key={`${userUrl}-${book.title}-${book.authors.join(', ')}`} ref={containerRef}>
              <BookCard
                isClubHistory={false}
                isOwner={isCurrentUser}
                handleDelete={() => handleDeleteBook(index)}
                bookData={{ ...book }}
              />
            </div>
          ) : (
            <BookCard
              key={`${userUrl}-${book.title}-${book.authors.join(', ')}`}
              isClubHistory={false}
              isOwner={isCurrentUser}
              handleDelete={() => handleDeleteBook(index)}
              bookData={{ ...book }}
            />
          );
        })}
      {!isLoading && booksArray.length === 0 && <div>Книги не выбраны</div>}
      {isLoading && <div>Loader...</div>}
    </div>
  );
};

export default UserProfileBooks;
