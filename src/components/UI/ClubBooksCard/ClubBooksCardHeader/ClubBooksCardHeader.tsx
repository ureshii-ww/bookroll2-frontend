import React, { CSSProperties, FC } from 'react';
import { BasicUserInfo } from '../../../../models/basic-user-info';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../../../routes/route-names.enum';
import TransparentButton from '../../TransparentButton/TransparentButton';
import { ReactComponent as DropdownSvg } from '../../../../assets/svg/dropdown.svg';
import Avatar from '../../Avatar/Avatar';

interface ClubBooksCardHeaderProps {
  user: BasicUserInfo;
  toggleOpen: () => void;
}

const ClubBooksCardHeader: FC<ClubBooksCardHeaderProps> = ({user, toggleOpen, ...rest}) => {
  const avatarStyles: CSSProperties = {
    backgroundColor: user.color || 'FFF',
  };

  return (
    <div className="club-books-card__head">
      <Link className="club-books-card__user" to={`${RouteNames.USER_PROFILE_BASE}${user.url}`}>
        <div className="club-books-card__avatar">
          <Avatar color={user.color} emoji={user.emoji}/>
        </div>
        <span className="club-books-card__username">{user.username}</span>
      </Link>
      <TransparentButton className="club-books-card__button" onClick={toggleOpen}>
        <DropdownSvg />
      </TransparentButton>
    </div>
  );
};

export default ClubBooksCardHeader;