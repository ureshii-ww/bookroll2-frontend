import React, { FC, Fragment } from 'react';
import { useUserProfileContext } from '../../Pages/UserProfilePage/UserProfilePage';
import BookCard from '../../UI/BookCard/BookCard';
import './user-profile-books.scss';
import useUserProfileBooks from './useUserProfileBooks';
import { ReactComponent as ConfusedFace } from '../../../assets/svg/confused-face.svg';

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
      {!isLoading && wholeArrayLength === 0 && (
        <div className="user-profile-books__placeholder">
          <span>
            <ConfusedFace />
          </span>
          <span>Книги не выбраны</span>
        </div>
      )}
      {!isOut && !isLoading && <div ref={triggerRef} />}
    </div>
  );
};

export default UserProfileBooks;
