import React, { FC, Fragment, useEffect, useState } from 'react';
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
import useUserProfileBooks from '../../../hooks/useUserProfileBooks';

const UserProfileBooks: FC = props => {
  const { userUrl } = useParams();
  const isLoading = useAppSelector(state => state.event.isLoadingTab);
  const { isCurrentUser } = useUserProfileContext();
  const {booksArray, isOut, containerRef, fetchDeleteBook, fetchBooksArray} = useUserProfileBooks(userUrl || '');

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
