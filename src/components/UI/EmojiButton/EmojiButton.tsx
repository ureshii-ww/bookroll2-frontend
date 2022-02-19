import React, { FC, Fragment, useState } from 'react';
import TransparentButton from '../TransparentButton/TransparentButton';
import { BaseEmoji, Picker, PickerProps } from 'emoji-mart-virtualized';
import './emoji-button.scss';
import { useAppSelector } from '../../../hooks/useAppSelector';

interface EmojiButtonProps {
  emoji: string;
  setEmoji: (emoji: string) => void;
}

const EmojiButton: FC<EmojiButtonProps> = ({ emoji, setEmoji, ...rest }) => {
  const currentTheme = useAppSelector(state => state.theme.themeStyle)
  const [isShowPicker, setIsShowPicker] = useState<boolean>(false);
  const selectEmoji = (emoji: BaseEmoji) => {
    setIsShowPicker(false);
    setEmoji(emoji.native);
  };

  const pickerOptions: PickerProps = {
    native: true,
    onSelect: selectEmoji,
    exclude: ['flags', 'custom', 'recent'],
    theme: currentTheme,
    showPreview: false,
    showSkinTones: false,
    color: 'var(--accent-color)',
    perLine: 7,
  }

  return (
    <Fragment>
      <div className="emoji-button">
        <TransparentButton className="emoji-button__button" type="button" onClick={() => setIsShowPicker(value => !value)}>
          {emoji}
        </TransparentButton>
        <div className={isShowPicker ? "picker-container" : "hidden"}>
          <Picker {...pickerOptions}/>
        </div>
      </div>
      {isShowPicker && <div className="emoji-button__bg" onClick={() => setIsShowPicker(false)}/>}
    </Fragment>

  );
};

export default EmojiButton;
