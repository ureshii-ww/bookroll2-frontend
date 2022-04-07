import { useActions } from '../../../../hooks/useActions';
import { useState } from 'react';
import useRequest from '../../../../hooks/useRequest';
import UserService from '../../../../services/user.service';
import UpdateInfoArgs from './types/update-info-args';
import useAppDispatch from '../../../../hooks/useAppDispatch';
import { closeModal } from '../../../../store/reducers/modal';
import { setUserData } from '../../../../store/reducers/auth';

const useUserSettingsInfoForm = (emoji: string | null) => {
  const dispatch = useAppDispatch();
  const [chosenEmoji, setChosenEmoji] = useState<string>(emoji || '😎');
  const { addNotification } = useActions();

  const updateInfo = useRequest<UpdateInfoArgs>('Page', async (args) => {
    const {userUrl, username, color, emoji} = args;
    const response = await UserService.updateInfo(userUrl, username, color, emoji);
    addNotification('Настройки успешно обновлены', 'success');
    localStorage.setItem('userData', JSON.stringify(response.data));
    dispatch(setUserData(response.data));
    dispatch(closeModal());
  });

  const setEmoji = (emoji: string) => {
    setChosenEmoji(emoji);
  };

  return { updateInfo, chosenEmoji, setEmoji };
};

export default useUserSettingsInfoForm;