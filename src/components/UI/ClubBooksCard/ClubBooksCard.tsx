import React, { CSSProperties, FC, Fragment, useState } from 'react';
import { BasicUserInfo } from '../../../models/basic-user-info';
import { BasicBookInfo } from '../../../models/basic-book-info';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../../routes/route-names.enum';
import TransparentButton from '../TransparentButton/TransparentButton';
import { ReactComponent as DropdownSvg } from '../../../assets/svg/dropdown.svg';
import './club-books-card.scss';
import Modal from '../Modal/Modal';
import BookDataContainer from '../../Containers/BookDataContainer/BookDataContainer';
import ClubBooksCardFooter from './ClubBooksCardFooter/ClubBooksCardFooter';
import ClubBooksCardHeader from './ClubBooksCardHeader/ClubBooksCardHeader';

interface ClubBooksCardProps {
  user: BasicUserInfo;
  books: BasicBookInfo[];
  isMaster: boolean;
  handleDelete: (index: number, userUrl: string) => void;
}

const ClubBooksCard: FC<ClubBooksCardProps> = ({ user, books, isMaster, handleDelete, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(value => !value);
  };

  const [isShowModal, setIsShowModal] = useState(false);
  const [modalBookId, setModalBookId] = useState(books[0].id);
  const showModal = (id: string) => {
    setModalBookId(id);
    setIsShowModal(true);
  };

  return (
    <Fragment>
      <div className={isOpen ? 'club-books-card club-books-card--open' : 'club-books-card'}>
        <ClubBooksCardHeader user={user} toggleOpen={toggleOpen} />
        <ClubBooksCardFooter
          books={books}
          user={user}
          isMaster={isMaster}
          showModal={showModal}
          handleDelete={handleDelete}
        />
      </div>
      <Modal isShow={isShowModal} onClose={() => setIsShowModal(false)}>
        <BookDataContainer bookId={modalBookId} />
      </Modal>
    </Fragment>
  );
};

export default ClubBooksCard;
