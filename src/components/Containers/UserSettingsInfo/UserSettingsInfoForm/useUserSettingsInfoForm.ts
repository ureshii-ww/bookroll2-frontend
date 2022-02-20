import { useActions } from '../../../../hooks/useActions';
import { useState } from 'react';
import { useRequestPage } from '../../../../hooks/useRequestPage';
import UserService from '../../../../services/user.service';

const useUserSettingsInfoForm = (emoji: string | null) => {
  const { setUserData, closeModal } = useActions();
  const [chosenEmoji, setChosenEmoji] = useState<string>(emoji || '😎');
  const { addNotification } = useActions();

  const updateInfo = useRequestPage(async (userUrl: string, username: string, color: string, emoji: string) => {
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