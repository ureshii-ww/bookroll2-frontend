import React, { FC } from 'react';
import Avatar from '../../../UI/Avatar/Avatar';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import NavbarBubble from '../NavbarBubble/NavbarBubble';
import './navbar-profile-button.scss';
import useAppDispatch from '../../../../hooks/useAppDispatch';
import { closeBubble, showBubble } from '../../../../store/reducers/bubble';

interface NavbarProfileButtonProps {
  userEmoji: string;
  userColor: string;
  userUrl: string;
}

const NavbarProfileButton: FC<NavbarProfileButtonProps> = ({ userColor, userEmoji, userUrl }) => {
  const dispatch = useAppDispatch();
  const isBubbleOpened = useAppSelector(state => state.bubble.isShow);
  const toggleState = () => {
    if (isBubbleOpened) {
      dispatch(closeBubble());
    } else {
      dispatch(
        showBubble({
          reactComponent: <NavbarBubble userUrl={userUrl} />,
          wrapperClass: 'navbar-bubble__wrapper',
        })
      );
    }
  };
  const classString = isBubbleOpened ? 'navbar-profile-button navbar-profile-button--opened' : 'navbar-profile-button';

  return (
    <div onClick={toggleState} className={classString}>
      <Avatar emoji={userEmoji} color={userColor} className="avatar--navbar" />
    </div>
  );
};

export default NavbarProfileButton;