import React, { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';
import TransparentButton from '../../../UI/TransparentButton/TransparentButton';
import CreateClubForm from '../../CreateClubForm/CreateClubForm';
import './user-header-club.scss';
import { useActions } from '../../../../hooks/useActions';

interface UserHeaderClubProps {
  isCurrentUser: boolean;
  clubname: string | null;
  clubUrl: string | null;
}

const UserHeaderClub: FC<UserHeaderClubProps> = ({ isCurrentUser, clubname, clubUrl, ...rest }) => {
  const {showModal} = useActions();
  const handleShowModal = () => {
    showModal(<CreateClubForm />)
  }

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
              <TransparentButton  onClick={handleShowModal}>
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
    </div>
  );
};

export default UserHeaderClub;
