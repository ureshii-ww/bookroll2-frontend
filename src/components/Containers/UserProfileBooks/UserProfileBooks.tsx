import React, { FC, Fragment } from 'react';
import { useUserProfileContext } from '../../Pages/UserProfilePage/UserProfilePage';
import BookCard from '../../UI/BookCard/BookCard';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useParams } from 'react-router-dom';
import './user-profile-books.scss';
import useUserProfileBooks from './useUserProfileBooks';

const UserProfileBooks: FC = props => {
  const { userUrl } = useParams();
  const isLoading = useAppSelector(state => state.event.isLoadingTab);
  const { isCurrentUser } = useUserProfileContext();
  const { booksArray, isOut, containerRef, fetchDeleteBook } = useUserProfileBooks(userUrl || '');

  const handleDeleteBook = (index: number) => {
    fetchDeleteBook(userUrl, index);
  };

  return (
    <div className="user-profile-books">
      {booksArray.length > 0 &&
        booksArray.map((book, index) => {
          return index === booksArray.length - 1 && !isLoading && !isOut ? (
            <Fragment key={`${userUrl}-${book.title}-${book.authors.join(', ')}`}>
              <BookCard
                isClubHistory={false}
                isOwner={isCurrentUser}
                handleDelete={() => handleDeleteBook(index)}
                bookData={{ ...book }}
              />
              <div ref={containerRef}>Biba</div>
            </Fragment>
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
