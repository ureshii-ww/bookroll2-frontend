import React, { FC, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import TransparentButton from '../TransparentButton/TransparentButton';
import Modal from '../Modal/Modal';
import CreateClubForm from '../../Containers/CreateClubForm/CreateClubForm';
import './user-header-club.scss';

interface UserHeaderClubProps {
  isCurrentUser: boolean;
  clubname: string | null;
  clubUrl: string | null;
}

const UserHeaderClub: FC<UserHeaderClubProps> = ({ isCurrentUser, clubname, clubUrl, ...rest }) => {
  const [isShowCreateClubModal, setIsShowCreateClubModal] = useState(false);

  return (
    <div className="user-header-club">
      {isCurrentUser && (
        <Fragment>
          <h3 className="user-header-club__description">
            {clubname && clubUrl ? 'Вы состоите в клубе\u00A0' : 'Вы не состоите в клубе, но можете\u00A0'}
          </h3>
          {clubname && clubUrl ? (
            <Link to={`/club/${clubUrl}`} className="user-header-club__name">
              {clubname}
            </Link>
          ) : (
            <TransparentButton onClick={() => setIsShowCreateClubModal(true)}>создать клуб</TransparentButton>
          )}
        </Fragment>
      )}
      {!isCurrentUser && (
        <Fragment>
          <h3 className="user-header-club__description">
            {clubname && clubUrl ? 'Состоит в клубе\u00A0' : 'Не состоит ни в одном клубе\u00A0'}
          </h3>
          {clubname && clubUrl && (
            <Link to={`/club/${clubUrl}`} className="user-header-club__name">
              {clubname}
            </Link>
          )}
        </Fragment>
      )}
      <Modal isShow={isShowCreateClubModal} onClose={() => setIsShowCreateClubModal(false)}>
        <CreateClubForm onClose={() => setIsShowCreateClubModal(false)} />
      </Modal>
    </div>
  );
};

export default UserHeaderClub;
