import React, { FC } from 'react';
import TransparentButton from '../../../UI/TransparentButton/TransparentButton';
import NavbarBubble from '../NavbarBubble/NavbarBubble';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { useActions } from '../../../../hooks/useActions';

interface NavbarBubbleButtonProps {
  userUrl: string;
  userEmoji: string;
}

const NavbarBubbleButton: FC<NavbarBubbleButtonProps> = ({ userUrl, userEmoji, children }) => {
  const isBubbleOpened = useAppSelector(state => state.bubble.isShow);
  const {closeBubble, showBubble} = useActions();
  const toggleState = () => {
    if (isBubbleOpened) {
      closeBubble();
    } else {
      showBubble(<NavbarBubble userUrl={userUrl} userEmoji={userEmoji} />, 'navbar-bubble__wrapper');
    }
  };

  return (
    <div className="navbar__bubble-button">
      <TransparentButton className="navbar__button" onClick={toggleState}>
        {children}
      </TransparentButton>
    </div>
  );
};

export default NavbarBubbleButton;
