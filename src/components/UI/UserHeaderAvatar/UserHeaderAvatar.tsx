import React, { CSSProperties, FC } from 'react';

interface UserHeaderAvatarProps {
  emoji: string;
  color: string;
}

const UserHeaderAvatar: FC<UserHeaderAvatarProps> = ({ color, emoji, ...rest }) => {
  const avatarStyles: CSSProperties = {
    backgroundColor: color || 'FFF',
  };

  return (
    <div>
      <div style={avatarStyles}>
        <span>{emoji}</span>
      </div>
    </div>
  );
};

export default UserHeaderAvatar;
