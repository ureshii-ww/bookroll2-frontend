import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import UserService from '../../../services/user.service';
import { useUserProfileContext } from '../../Pages/UserProfilePage/UserProfilePage';
import { BookData } from '../../../models/book-data';
import BookCard from '../../UI/BookCard/BookCard';
import { useInfiniteScroll } from '../../../hooks/useInfiniteScroll';

const UserProfileBooks: FC = (props) => {
  const chunkSize: number = 10;
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [booksArray, setBooksArray] = useState<BookData[]>([])
  const [allBooksLength, setAllBooksLength] = useState<number>(11)
  const { isCurrentUser, userUrl } = useUserProfileContext();

  const { pageNum, containerRef } = useInfiniteScroll();

  const getBooksArray = async () => {
    setIsLoading(true);
    try {
      const response = await UserService.getUserBooks(userUrl, pageNum, chunkSize);
      const all: BookData[] = [...booksArray, ...response.data];
      setBooksArray([...all]);
      setAllBooksLength(parseInt(response.headers['x-data-length']));
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (booksArray.length < allBooksLength) {
      getBooksArray();
    }
  }, [pageNum])

  const handleDeleteBook = (index: number) => {

  }

  return (
    <div>
      {booksArray.length > 0 && booksArray.map((book, index) => {
        return index === booksArray.length - 1 && !isLoading && booksArray.length < allBooksLength
          ?
          <div key={`${userUrl}-${book.title}-${book.authors.join(', ')}`}
               ref={containerRef}>
            <BookCard isClubHistory={false}
                      isOwner={isCurrentUser}
                      handleDelete={() => handleDeleteBook(index)}
                      bookData={{ ...book }}/>
          </div>
          :
          <BookCard key={`${userUrl}-${book.title}-${book.authors.join(', ')}`}
                    isClubHistory={false}
                    isOwner={isCurrentUser}
                    handleDelete={() => handleDeleteBook(index)}
                    bookData={{ ...book }}/>
      })}
      {!isLoading && booksArray.length === 0 && <div>Книги не выбраны</div>}
      {isLoading && <div>Loader...</div>}
    </div>
  );
};

export default UserProfileBooks;