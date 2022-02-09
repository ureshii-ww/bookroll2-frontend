import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import TransparentButton from '../TransparentButton/TransparentButton';
import Modal from '../Modal/Modal';
import CreateClubForm from '../../Containers/CreateClubForm/CreateClubForm';

interface UserHeaderClubProps {
  isCurrentUser: boolean;
  clubname: string | null;
  clubUrl: string | null;
}

const UserHeaderClub: FC<UserHeaderClubProps> = ({isCurrentUser, clubname, clubUrl, ...rest}) => {
  const [isShowCreateClubModal, setIsShowCreateClubModal] = useState(false);

  return (
    <div>
      {isCurrentUser && <div>
        <h3>
          {clubname && clubUrl ? 'Вы состоите в клубе' : 'Вы не состоите в клубе, но можете'}
        </h3>
        {clubname && clubUrl
          ?
          <Link to={`/club/${clubUrl}`}>{clubname}</Link>
          :
          <TransparentButton onClick={() => setIsShowCreateClubModal(true)}>создать клуб</TransparentButton>}
      </div>}
      {!isCurrentUser && <div>
        <h3>
          {clubname && clubUrl ? 'Состоит в клубе' : 'Не состоит ни в одном клубе'}
        </h3>
        {clubname && clubUrl && <Link to={`/club/${clubUrl}`}/>}
      </div>}
      <Modal isShow={isShowCreateClubModal} onClose={() => setIsShowCreateClubModal(false)}>
        <CreateClubForm onClose={() => setIsShowCreateClubModal(false)}/>
      </Modal>
    </div>
  );
};

export default UserHeaderClub;