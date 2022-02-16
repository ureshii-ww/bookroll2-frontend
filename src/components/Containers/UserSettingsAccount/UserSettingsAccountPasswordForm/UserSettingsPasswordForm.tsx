import React, { FC } from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import InputText from '../../../UI/InputText/InputText';
import SubmitButton from '../../../UI/SubmitButton/SubmitButton';
import { useRequestPage } from '../../../../hooks/useRequestPage';
import UserService from '../../../../services/user.service';
import { useActions } from '../../../../hooks/useActions';

interface UserSettingsPasswordFormProps {
  userUrl: string;
}

interface Inputs {
  oldPassword: string;
  newPassword: string;
  newPasswordRepeat: string;
}

const UserSettingsPasswordForm: FC<UserSettingsPasswordFormProps> = ({ userUrl, ...rest }) => {
  const {addNotification} = useActions();
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    resetField
  } = useForm<Inputs>();
  const updatePassword = useRequestPage(async (userUrl: string, oldPassword: string, newPassword: string) => {
    const response = await UserService.updatePassword(userUrl, oldPassword, newPassword);
    if (response.data === 'Success') {
      addNotification('Пароль успешно обновлён', 'success');
    }
  });

  const onSubmit: SubmitHandler<Inputs> = async data => {
    await updatePassword(userUrl, data.oldPassword, data.newPassword);
    resetField('oldPassword');
    resetField('newPassword');
    resetField('newPasswordRepeat');
  };

  return (
    //TODO добавить валидацию
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="oldPassword"
        control={control}
        defaultValue={''}
        rules={{ required: true }}
        render={({ field }) => <InputText {...field} type="password" />}
      />
      <Controller
        name="newPassword"
        control={control}
        defaultValue={''}
        rules={{ required: true }}
        render={({ field }) => <InputText {...field} type="password" />}
      />
      <Controller
        name="newPasswordRepeat"
        control={control}
        defaultValue={''}
        rules={{
          required: true,
          validate: value => value === getValues().newPassword || 'Пароли должны совпадать',
        }}
        render={({ field }) => <InputText {...field} type="password" />}
      />
      <SubmitButton>Сменить пароль</SubmitButton>
    </form>
  );
};

export default UserSettingsPasswordForm;
