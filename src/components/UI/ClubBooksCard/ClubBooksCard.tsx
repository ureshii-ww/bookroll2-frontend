import React, { FC, Fragment, useState } from 'react';
import { BasicUserInfo } from '../../../models/basic-user-info';
import { BasicBookInfo } from '../../../models/basic-book-info';
import './club-books-card.scss';
import BookDataContainer from '../../Containers/BookDataContainer/BookDataContainer';
import ClubBooksCardFooter from './ClubBooksCardFooter/ClubBooksCardFooter';
import ClubBooksCardHeader from './ClubBooksCardHeader/ClubBooksCardHeader';
import { useActions } from '../../../hooks/useActions';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { openModal } from '../../../store/reducers/modal';

interface ClubBooksCardProps {
  user: BasicUserInfo;
  books: BasicBookInfo[];
  isMaster?: boolean;
  handleDelete?: (index: number, userUrl: string) => void;
  booksKey?: string;
}

const ClubBooksCard: FC<ClubBooksCardProps> = ({ user, books, isMaster, handleDelete, booksKey, ...rest }) => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(value => !value);
  };

  const handleOpenModal = (id: string) => {
    dispatch(openModal(<BookDataContainer bookId={id} />));
  };

  return (
    <Fragment>
      <div className={isOpen ? 'club-books-card club-books-card--open' : 'club-books-card'}>
        <ClubBooksCardHeader user={user} toggleOpen={toggleOpen} />
        <ClubBooksCardFooter
          books={books}
          user={user}
          isMaster={isMaster}
          showModal={handleOpenModal}
          handleDelete={handleDelete}
          booksKey={booksKey}
        />
      </div>
    </Fragment>
  );
};

export default ClubBooksCard;
