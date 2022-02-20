import React, { FC } from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import InputText from '../../../UI/InputText/InputText';
import SubmitButton from '../../../UI/SubmitButton/SubmitButton';
import InputColor from '../../../UI/InputColor/InputColor';
import EmojiButton from '../../../UI/EmojiButton/EmojiButton';
import './user-settings-info-form.scss';
import useUserSettingsInfoForm from './useUserSettingsInfoForm';

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
  const {updateInfo, chosenEmoji, setEmoji} = useUserSettingsInfoForm(emoji)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

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
          <EmojiButton emoji={chosenEmoji} setEmoji={setEmoji} />
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
