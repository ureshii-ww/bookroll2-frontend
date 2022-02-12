import React, { FC, Fragment, useState, MouseEvent } from 'react';
import TransparentButton from '../TransparentButton/TransparentButton';
import Picker, { IEmojiData } from 'emoji-picker-react';

interface EmojiButtonProps {
  emoji: string;
  setEmoji: (emoji: string) => void;
}

const EmojiButton: FC<EmojiButtonProps> = ({ emoji, setEmoji, ...rest }) => {
  const [isShowPicker, setIsShowPicker] = useState<boolean>(false);
  const onEmojiClick = (event: MouseEvent, emojiObject: IEmojiData) => {
    setIsShowPicker(false);
    setEmoji(emojiObject.emoji);
  };

  return (
    <Fragment>
      <TransparentButton type="button" onClick={() => setIsShowPicker(value => !value)}>
        {emoji}
      </TransparentButton>
      {isShowPicker && <Picker native onEmojiClick={onEmojiClick} />}
    </Fragment>
  );
};

export default EmojiButton;
