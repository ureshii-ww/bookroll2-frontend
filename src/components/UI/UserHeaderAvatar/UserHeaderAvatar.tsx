import React, { CSSProperties, FC } from 'react';
import './user-header-avatar.scss';

interface UserHeaderAvatarProps {
  emoji: string;
  color: string;
}

const UserHeaderAvatar: FC<UserHeaderAvatarProps> = ({ color, emoji, ...rest }) => {
  const avatarStyles: CSSProperties = {
    backgroundColor: color || 'FFF',
  };

  return (
    <div className="user-header-avatar" style={avatarStyles}>
      <span className="user-header-avatar__emoji">{emoji}</span>
    </div>
  );
};

export default UserHeaderAvatar;
