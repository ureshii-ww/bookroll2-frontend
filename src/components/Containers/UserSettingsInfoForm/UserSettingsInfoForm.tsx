import React, { FC, useState } from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import InputText from '../../UI/InputText/InputText';
import SubmitButton from '../../UI/SubmitButton/SubmitButton';
import InputColor from '../../UI/InputColor/InputColor';
import { useRequestPage } from '../../../hooks/useRequestPage';
import UserService from '../../../services/user.service';
import { useActions } from '../../../hooks/useActions';
import EmojiButton from '../../UI/EmojiButton/EmojiButton';
import { useNotification } from '../../../hooks/useNotification';

interface UserSettingsInfoFormProps {
  username: string | null;
  emoji: string | null;
  color: string | null;
  userUrl: string;
}

interface Inputs {
  username: string;
  color: string;
  emoji: string;
}

const UserSettingsInfoForm: FC<UserSettingsInfoFormProps> = ({ username, color, emoji, userUrl, ...rest }) => {
  const { setUserData } = useActions();
  const [chosenEmoji, setChosenEmoji] = useState<string>(emoji || '😎');
  const addNotification = useNotification();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const updateInfo = useRequestPage(async (userUrl: string, username: string, color: string, emoji: string) => {
    const response = await UserService.updateInfo(userUrl, username, color, emoji);
    await addNotification('Настройки успешно обновлены', 'success');
    localStorage.setItem('userData', JSON.stringify(response.data));
    setUserData(response.data);
  });

  const onSubmit: SubmitHandler<Inputs> = data => updateInfo(userUrl, data.username, data.color, chosenEmoji);

  return (
    //TODO Сделать валидацию
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="username"
        control={control}
        defaultValue={username || 'username'}
        rules={{ required: true }}
        render={({ field }) => <InputText {...field} />}
      />
      <Controller
        name="color"
        control={control}
        defaultValue={color || '#FFF'}
        rules={{ required: true }}
        render={({ field }) => <InputColor {...field} />}
      />
      <EmojiButton emoji={chosenEmoji} setEmoji={(emoji: string) => setChosenEmoji(emoji)} />
      <SubmitButton>Сохранить</SubmitButton>
    </form>
  );
};

export default UserSettingsInfoForm;
