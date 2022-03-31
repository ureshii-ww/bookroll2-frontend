import React, { FC } from 'react';
import Avatar from '../../../UI/Avatar/Avatar';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { useActions } from '../../../../hooks/useActions';
import NavbarBubble from '../NavbarBubble/NavbarBubble';
import './navbar-profile-button.scss';

interface NavbarProfileButtonProps {
  userEmoji: string;
  userColor: string;
  userUrl: string;
}

const NavbarProfileButton: FC<NavbarProfileButtonProps> = ({userColor, userEmoji, userUrl}) => {
  const isBubbleOpened = useAppSelector(state => state.bubble.isShow);
  const {closeBubble, showBubble} = useActions();
  const toggleState = () => {
    if (isBubbleOpened) {
      closeBubble();
    } else {
      showBubble(<NavbarBubble userUrl={userUrl}/>, 'navbar-bubble__wrapper');
    }
  };
  const classString = isBubbleOpened ? 'navbar-profile-button navbar-profile-button--opened' : 'navbar-profile-button'

  return (
    <div onClick={toggleState} className={classString}>
      <Avatar emoji={userEmoji} color={userColor} className="avatar--navbar"/>
    </div>
  );
};

export default NavbarProfileButton;