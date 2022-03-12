import React, { FC } from 'react';
import InputText from '../../UI/InputText/InputText';
import SubmitButton from '../../UI/SubmitButton/SubmitButton';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { useActions } from '../../../hooks/useActions';
import authDataLength from '../../../constants/auth-data-length';
import './login-form.scss';

type Inputs = {
  email: string;
  password: string;
};

const LoginForm: FC = props => {
  const { login, addNotification } = useActions();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      await login(data.email, data.password);
    } catch (error: any) {
      addNotification(error.response?.data?.message || 'Непредвиденная ошибка', 'error');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="login-form__input-group">
        <Controller
          name="email"
          control={control}
          defaultValue={''}
          rules={{ required: true }}
          render={({ field }) => (
            <InputText placeholder="Почта" className="login-form__input" {...field} type="email" />
          )}
        />
        {errors.email && <div className="login-form__error">Введите email</div>}
      </div>
      <div className="login-form__input-group">
        <Controller
          name="password"
          defaultValue={''}
          rules={{ required: true }}
          control={control}
          render={({ field }) => (
            <InputText placeholder="Пароль" className="login-form__input" {...field} type="password" />
          )}
        />
        {errors.password?.type === 'required' && <div className="login-form__error">Введите пароль</div>}
      </div>
      <SubmitButton>Войти</SubmitButton>
    </form>
  );
};

export default LoginForm;
