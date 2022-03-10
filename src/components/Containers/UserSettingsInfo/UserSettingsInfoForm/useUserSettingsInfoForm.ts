import { useActions } from '../../../../hooks/useActions';
import { useState } from 'react';
import useRequest from '../../../../hooks/useRequest';
import UserService from '../../../../services/user.service';
import UpdateInfoArgs from './types/update-info-args';

const useUserSettingsInfoForm = (emoji: string | null) => {
  const { setUserData, closeModal } = useActions();
  const [chosenEmoji, setChosenEmoji] = useState<string>(emoji || '😎');
  const { addNotification } = useActions();

  const updateInfo = useRequest<UpdateInfoArgs>('Page', async (args) => {
    const {userUrl, username, color, emoji} = args;
    const response = await UserService.updateInfo(userUrl, username, color, emoji);
    addNotification('Настройки успешно обновлены', 'success');
    localStorage.setItem('userData', JSON.stringify(response.data));
    setUserData(response.data);
    closeModal();
  });

  const setEmoji = (emoji: string) => {
    setChosenEmoji(emoji);
  };

  return { updateInfo, chosenEmoji, setEmoji };
};

export default useUserSettingsInfoForm;