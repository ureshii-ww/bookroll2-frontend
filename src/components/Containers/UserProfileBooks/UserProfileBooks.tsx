import React, { FC, useEffect, useState } from 'react';
import UserService from '../../../services/user.service';
import { useUserProfileContext } from '../../Pages/UserProfilePage/UserProfilePage';
import { BookData } from '../../../models/book-data';
import BookCard from '../../UI/BookCard/BookCard';
import { useInfiniteScroll } from '../../../hooks/useInfiniteScroll';
import { useRequestTab } from '../../../hooks/useRequestTab';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useParams } from 'react-router-dom';
import { useRequestPage } from '../../../hooks/useRequestPage';
import './user-profile-books.scss';

const UserProfileBooks: FC = props => {
  const { userUrl } = useParams();
  const chunkSize: number = 10;
  const isLoading = useAppSelector(state => state.event.isLoadingTab);
  const [booksArray, setBooksArray] = useState<BookData[]>([]);
  const [isOut, setIsOut] = useState<boolean>(false);
  const { isCurrentUser } = useUserProfileContext();
  const { pageNum, containerRef } = useInfiniteScroll();

  const fetchBooksArray = useRequestTab(async (userUrl: string, pageNum: number, chunkSize: number) => {
    const response = await UserService.getUserBooks(userUrl, pageNum, chunkSize);
    const all: BookData[] = [...booksArray, ...response.data];
    setBooksArray([...all]);
    if (all.length === parseInt(response.headers['x-data-length'])) {
      setIsOut(true);
    }
  });

  const fetchDeleteBook = useRequestPage(async (userUrl: string, index: number) => {
    const response = await UserService.deleteBook(userUrl, index);
    if (response.data === 'Success') {
      //TODO: пофиксить баг с инфинайт скроллом
      const tempArray = [...booksArray];
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
    <div className="user-profile-books">
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
