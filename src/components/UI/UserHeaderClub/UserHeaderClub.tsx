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
          <div className="user-header-club__container user-header-club__description">
            <p>{clubname && clubUrl ? 'Вы состоите в клубе\u00A0' : 'Вы не состоите в клубе, но можете\u00A0'}</p>
          </div>
          {clubname && clubUrl ? (
            <div className="user-header-club__container user-header-club__name">
              <Link to={`/club/${clubUrl}`}>{clubname}</Link>
            </div>
          ) : (
            <div className="user-header-club__container">
              <TransparentButton  onClick={() => setIsShowCreateClubModal(true)}>
                создать клуб
              </TransparentButton>
            </div>

          )}
        </Fragment>
      )}
      {!isCurrentUser && (
        <Fragment>
          <div className="user-header-club__container user-header-club__description">
            <p>{clubname && clubUrl ? 'Состоит в клубе\u00A0' : 'Не состоит ни в одном клубе\u00A0'}</p>
          </div>
          {clubname && clubUrl && (
            <div className="user-header-club__container user-header-club__name">
              <Link to={`/club/${clubUrl}`}>{clubname}</Link>
            </div>
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
