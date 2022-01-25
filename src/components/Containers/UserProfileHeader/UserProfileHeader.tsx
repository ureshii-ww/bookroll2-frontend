import React, { CSSProperties, FC } from 'react';
import {Link, useLocation} from 'react-router-dom';

export interface UserProfileHeaderProps {
  username: string;
  color: string;
  emoji: string;
  clubname?: string;
  clubUrl?: string;
  isCurrentUser: boolean;
}

const UserProfileHeader:FC<UserProfileHeaderProps> = (props) => {
  const location = useLocation();

  const avatarStyles:CSSProperties = {
    backgroundColor: props.color
  }

  return (
    <div>
      <div>
        <div>
          <div style={avatarStyles}>
            <span>{props.emoji}</span>
          </div>
        </div>
        <div>
          <h1>{props.username}</h1>
        </div>
      </div>
      {props.isCurrentUser && <div>
        <Link to={`${location.pathname}/settings`}/>
      </div>}
      {props.isCurrentUser && <div>
        <h3>
          {props.clubname && props.clubUrl ? 'Вы состоите в клубе' : 'Вы не состоите в клубе, но можете'}
        </h3>
        <Link to={`/club/${props.clubUrl}`} />
      </div>}
      {props.isCurrentUser && <div>
        <h3>
          {props.clubname && props.clubUrl ? 'Состоит в клубе' : 'Не состоит ни в одном клубе'}
        </h3>
        {props.clubname && props.clubUrl && <Link to={`/club/${props.clubUrl}`}/>}
      </div>}
    </div>
  );
};

export default UserProfileHeader;