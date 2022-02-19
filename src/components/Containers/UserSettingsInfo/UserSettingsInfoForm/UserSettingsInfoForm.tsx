import React, { FC, useState } from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import InputText from '../../../UI/InputText/InputText';
import SubmitButton from '../../../UI/SubmitButton/SubmitButton';
import InputColor from '../../../UI/InputColor/InputColor';
import { useRequestPage } from '../../../../hooks/useRequestPage';
import UserService from '../../../../services/user.service';
import { useActions } from '../../../../hooks/useActions';
import EmojiButton from '../../../UI/EmojiButton/EmojiButton';
import './user-settings-info-form.scss';

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
  const { setUserData, closeModal } = useActions();
  const [chosenEmoji, setChosenEmoji] = useState<string>(emoji || '😎');
  const { addNotification } = useActions();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const updateInfo = useRequestPage(async (userUrl: string, username: string, color: string, emoji: string) => {
    const response = await UserService.updateInfo(userUrl, username, color, emoji);
    addNotification('Настройки успешно обновлены', 'success');
    localStorage.setItem('userData', JSON.stringify(response.data));
    setUserData(response.data);
    closeModal();
  });

  const onSubmit: SubmitHandler<Inputs> = data => updateInfo(userUrl, data.username, data.color, chosenEmoji);

  return (
    //TODO Сделать валидацию
    <form className="user-settings-info-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="user-settings-info-form__container">
        <div className="user-settings-info-form__group">
          <label className="user-settings-info-form__label" htmlFor="username">
            Имя
          </label>
          <Controller
            name="username"
            control={control}
            defaultValue={username || 'username'}
            rules={{ required: true }}
            render={({ field }) => <InputText {...field} />}
          />
        </div>
        <div className="user-settings-info-form__group">
          <span className="user-settings-info-form__label">Эмодзи</span>
          <EmojiButton emoji={chosenEmoji} setEmoji={(emoji: string) => setChosenEmoji(emoji)} />
        </div>
        <div className="user-settings-info-form__group">
          <label className="user-settings-info-form__label" htmlFor="color">
            Цвет
          </label>
          <Controller
            name="color"
            control={control}
            defaultValue={color || '#FFF'}
            rules={{ required: true }}
            render={({ field }) => <InputColor {...field} />}
          />
        </div>
      </div>
      <div className="user-settings-info-form__button">
        <SubmitButton>Сохранить</SubmitButton>
      </div>
    </form>
  );
};

export default UserSettingsInfoForm;
