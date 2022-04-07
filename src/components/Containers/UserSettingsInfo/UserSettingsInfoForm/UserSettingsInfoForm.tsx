import React, { FC } from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import InputText from '../../../UI/InputText/InputText';
import SubmitButton from '../../../UI/SubmitButton/SubmitButton';
import InputColor from '../../../UI/InputColor/InputColor';
import EmojiButton from '../../../UI/EmojiButton/EmojiButton';
import './user-settings-info-form.scss';
import useUserSettingsInfoForm from './useUserSettingsInfoForm';
import UserSettingsInfoFormInputs from './types/user-settings-info-form-inputs';

interface UserSettingsInfoFormProps {
  username: string | null;
  emoji: string | null;
  color: string | null;
  userUrl: string;
  disabled: boolean;
}

const UserSettingsInfoForm: FC<UserSettingsInfoFormProps> = (props) => {
  const { username, color, emoji, userUrl, disabled } = props;
  const { updateInfo, chosenEmoji, setEmoji } = useUserSettingsInfoForm(emoji);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSettingsInfoFormInputs>();

  const onSubmit: SubmitHandler<UserSettingsInfoFormInputs> = data =>
    updateInfo({ userUrl, username: data.username, color: data.color, emoji: chosenEmoji });

  return (
    <form className="user-settings-info-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="user-settings-info-form__container">
        <fieldset className="user-settings-info-form__group">
          <label className="user-settings-info-form__label" htmlFor="username">
            Имя
          </label>
          <Controller
            name="username"
            control={control}
            defaultValue={username || 'username'}
            rules={{ required: true }}
            render={({ field }) => <InputText {...field} disabled={disabled} />}
          />
          {errors.username && <div className="user-settings-info-form__error">Введите имя</div>}
        </fieldset>
        <fieldset className="user-settings-info-form__group">
          <span className="user-settings-info-form__label">Эмодзи</span>
          <EmojiButton emoji={chosenEmoji} setEmoji={setEmoji} />
        </fieldset>
        <fieldset className="user-settings-info-form__group">
          <label className="user-settings-info-form__label" htmlFor="color">
            Цвет
          </label>
          <Controller
            name="color"
            control={control}
            defaultValue={color || '#FFF'}
            rules={{ required: true }}
            render={({ field }) => <InputColor {...field} disabled={disabled} />}
          />
        </fieldset>
      </div>
      <div className="user-settings-info-form__button">
        <SubmitButton>Сохранить</SubmitButton>
      </div>
    </form>
  );
};

export default UserSettingsInfoForm;
