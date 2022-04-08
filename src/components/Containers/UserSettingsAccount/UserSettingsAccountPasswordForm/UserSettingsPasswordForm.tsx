import React, { FC } from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import InputText from '../../../UI/InputText/InputText';
import SubmitButton from '../../../UI/SubmitButton/SubmitButton';
import './user-settings-password-form.scss';
import authDataLength from '../../../../constants/auth-data-length';
import UserSettingsPasswordInputs from './types/user-settings-password-inputs';
import { useUserSettingsPasswordForm } from './useUserSettingsPasswordForm';

interface UserSettingsPasswordFormProps {
  userUrl: string;
}

const UserSettingsPasswordForm: FC<UserSettingsPasswordFormProps> = ({ userUrl }) => {
  const handleUpdatePassword = useUserSettingsPasswordForm(userUrl);
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    resetField,
  } = useForm<UserSettingsPasswordInputs>();

  const onSubmit: SubmitHandler<UserSettingsPasswordInputs> = async data => {
    await handleUpdatePassword(data.oldPassword, data.newPassword );
    resetField('oldPassword');
    resetField('newPassword');
    resetField('newPasswordRepeat');
  };

  return (
    <form className="user-settings-password-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="user-settings-password-form__inputs-group">
        <Controller
          name="oldPassword"
          control={control}
          defaultValue={''}
          rules={{ required: true }}
          render={({ field }) => (
            <InputText
              {...field}
              className="user-settings-password-form__input"
              placeholder="Старый пароль"
              type="password"
            />
          )}
        />
        {errors.oldPassword?.type === 'required' && <div className="register-form__error">Введите старый пароль</div>}
      </div>
      <div className="user-settings-password-form__inputs-group">
        <Controller
          name="newPassword"
          control={control}
          defaultValue={''}
          rules={{ required: true, minLength: authDataLength.PASSWORD_MIN_LENGTH }}
          render={({ field }) => (
            <InputText
              {...field}
              className="user-settings-password-form__input"
              placeholder="Новый пароль"
              type="password"
            />
          )}
        />
        {errors.newPassword?.type === 'required' && <div className="register-form__error">Введите новый пароль</div>}
        {errors.newPassword?.type === 'minLength' && (
          <div className="register-form__error">
            Пароль должен быть не короче {authDataLength.PASSWORD_MIN_LENGTH} символов
          </div>
        )}
      </div>
      <div className="user-settings-password-form__inputs-group">
        <Controller
          name="newPasswordRepeat"
          control={control}
          defaultValue={''}
          rules={{
            required: true,
            validate: value => value === getValues().newPassword || 'Пароли должны совпадать',
          }}
          render={({ field }) => (
            <InputText
              {...field}
              className="user-settings-password-form__input"
              placeholder="Повторите пароль"
              type="password"
            />
          )}
        />
        {errors.newPasswordRepeat?.type === 'required' && <div className="register-form__error">Повторите пароль</div>}
        {errors.newPasswordRepeat?.type === 'validate' && (
          <div className="register-form__error">Пароли должны совпадать</div>
        )}
      </div>
      <div className="user-settings-password-form__button">
        <SubmitButton>Сменить пароль</SubmitButton>
      </div>
    </form>
  );
};

export default UserSettingsPasswordForm;
