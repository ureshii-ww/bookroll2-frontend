import React, { FC } from 'react';
import InputText from '../../UI/InputText/InputText';
import SubmitButton from '../../UI/SubmitButton/SubmitButton';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import './login-form.scss';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { login } from '../../../store/reducers/auth';

type Inputs = {
  email: string;
  password: string;
};

const LoginForm: FC = props => {
  const dispatch = useAppDispatch()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async data => {
    dispatch(login(data))
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
