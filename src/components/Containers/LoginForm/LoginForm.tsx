import React, { FC } from 'react';
import InputText from '../../UI/InputText/InputText';
import SubmitButton from '../../UI/SubmitButton/SubmitButton';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { useActions } from '../../../hooks/useActions';

type Inputs = {
  email: string;
  password: string;
};

const LoginForm: FC = props => {
  const { login } = useActions();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => login(data.email, data.password);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        defaultValue={''}
        rules={{ required: true }}
        render={({ field }) => <InputText {...field} type="email" />}
      />
      <Controller
        name="password"
        defaultValue={''}
        rules={{ required: true, maxLength: 128 }}
        control={control}
        render={({ field }) => <InputText {...field} type="password" />}
      />
      <SubmitButton>Войти</SubmitButton>
    </form>
  );
};

export default LoginForm;