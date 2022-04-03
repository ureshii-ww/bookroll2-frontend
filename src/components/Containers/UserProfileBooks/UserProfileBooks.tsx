import React, { FC, Fragment } from 'react';
import { useUserProfileContext } from '../../Pages/UserProfilePage/UserProfilePage';
import BookCard from '../../UI/BookCard/BookCard';
import './user-profile-books.scss';
import useUserProfileBooks from './useUserProfileBooks';

const UserProfileBooks: FC = () => {
  const { isCurrentUser, userUrl } = useUserProfileContext();
  const { booksArray, isOut, isLoading, triggerRef, wholeArrayLength, handleDeleteBook } = useUserProfileBooks(userUrl);

  return (
    <div className="user-profile-books">
      {wholeArrayLength > 0 && (
        <Fragment>
          {booksArray.map((book, index) => (
            <BookCard
              key={`${userUrl}-${book.title}-${book.authors.join(', ')}`}
              isClubHistory={false}
              isOwner={isCurrentUser}
              handleDelete={() => handleDeleteBook(index)}
              bookData={{ ...book }}
            />
          ))}
        </Fragment>
      )}
      {!isLoading && wholeArrayLength === 0 && <div>Книги не выбраны</div>}
      {!isOut && !isLoading && <div ref={triggerRef} />}
      {isLoading && <div>Loader...</div>}
    </div>
  );
};

export default UserProfileBooks;
