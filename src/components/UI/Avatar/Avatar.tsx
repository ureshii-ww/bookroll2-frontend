import React, { CSSProperties, FC } from 'react';
import './avatar.scss';

interface AvatarProps {
  emoji: string | null;
  color: string | null;
  className?: string;
}

const UserHeaderAvatar: FC<AvatarProps> = ({ color, emoji, className, ...rest }) => {
  const avatarStyles: CSSProperties = {
    backgroundColor: color || 'FFF',
  };
  const classString = className ? `avatar ${className}` : 'avatar';

  return (
    <figure className={classString}>
      <div className="avatar__background" style={avatarStyles}>
        <span className="avatar__emoji">{emoji}</span>
      </div>
    </figure>
  );
};

export default UserHeaderAvatar;
