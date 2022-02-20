import React, { FC } from 'react';
import { BasicUserInfo } from '../../../models/basic-user-info';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../../routes/route-names.enum';
import Avatar from '../Avatar/Avatar';
import './member-card.scss';

interface MemberCardProps {
  userInfo: BasicUserInfo;
  className?: string;
}

const MemberCard: FC<MemberCardProps> = ({ userInfo, className, ...rest }) => {
  const { username, url, emoji, color } = userInfo;
  const classString = className ? `member-card ${className}` : 'member-card';

  return (
    <Link to={`${RouteNames.USER_PROFILE_BASE}${url}`} className={classString}>
      <div className="member-card__content">
        <div className="member-card__avatar">
          <Avatar color={color} emoji={emoji} className="avatar--big" />
        </div>
        <span className="member-card__name">{username}</span>
      </div>
    </Link>
  );
};

export default MemberCard;