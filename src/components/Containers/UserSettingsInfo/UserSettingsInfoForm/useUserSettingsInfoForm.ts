import { useState } from 'react';
import useAppDispatch from '../../../../hooks/useAppDispatch';
import { updateUserSettingsInfo } from '../../../../store/reducers/user-settings/info';

const useUserSettingsInfoForm = (emoji: string | null) => {
  const dispatch = useAppDispatch();
  const [chosenEmoji, setChosenEmoji] = useState<string>(emoji || '😎');

  const updateInfo = (userUrl: string, username: string, color: string, emoji: string) => {
    dispatch(updateUserSettingsInfo({userUrl, username, color, emoji}));
  }

  const setEmoji = (emoji: string) => {
    setChosenEmoji(emoji);
  };

  return { updateInfo, chosenEmoji, setEmoji };
};

export default useUserSettingsInfoForm;