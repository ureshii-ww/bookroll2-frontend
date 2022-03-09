import React, { FC } from 'react';
import InputText from '../../UI/InputText/InputText';
import SubmitButton from '../../UI/SubmitButton/SubmitButton';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import AuthServices from '../../../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../../routes/route-names.enum';
import './register-form.scss';
import { useRequestPost } from '../../../hooks/useRequestPost';
import authDataLength from '../../../constants/auth-data-length';

type Inputs = {
  username: string;
  email: string;
  password: string;
  passwordRepeat: string;
};

const RegisterForm: FC = props => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => fetchRegister(data.username, data.email, data.password);
  const fetchRegister = useRequestPost(async (username: string, email: string, password: string) => {
    await AuthServices.register(username, email, password);
    navigate(RouteNames.LOGIN);
  });

  return (
    <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="register-form__input-group">
        <Controller
          name="username"
          control={control}
          defaultValue={''}
          rules={{
            required: true,
            minLength: authDataLength.USERNAME_MIN_LENGTH,
            maxLength: authDataLength.USERNAME_MAX_LENGTH,
          }}
          render={({ field }) => (
            <InputText placeholder="Имя" className="register-form__input" {...field} type="text" />
          )}
        />
        {errors.username?.type === 'required' && <div className="register-form__error">Введите имя</div>}
        {errors.username?.type === 'minLength' && (
          <div className="register-form__error">
            Имя должно быть длиннее {authDataLength.USERNAME_MIN_LENGTH} символов
          </div>
        )}
        {errors.username?.type === 'maxLength' && (
          <div className="register-form__error">
            Имя должно быть короче {authDataLength.USERNAME_MAX_LENGTH} символов
          </div>
        )}
      </div>
      <div className="register-form__input-group">
        <Controller
          name="email"
          control={control}
          defaultValue={''}
          rules={{ required: true }}
          render={({ field }) => (
            <InputText placeholder="Почта" className="register-form__input" {...field} type="email" />
          )}
        />
        {errors.email && <div className="register-form__error">Введите почту</div>}
      </div>
      <div className="register-form__input-group">
        <Controller
          name="password"
          defaultValue={''}
          rules={{ required: true, minLength: 8 }}
          control={control}
          render={({ field }) => (
            <InputText placeholder="Пароль" className="register-form__input" {...field} type="password" />
          )}
        />
        {errors.password?.type === 'required' && <div className="register-form__error">Введите пароль</div>}
        {errors.password?.type === 'minLength' && (
          <div className="register-form__error">
            Пароль должен быть длиннее {authDataLength.USERNAME_MIN_LENGTH} символов
          </div>
        )}
      </div>
      <div className="register-form__input-group">
        <Controller
          name="passwordRepeat"
          control={control}
          defaultValue={''}
          rules={{
            required: true,
            validate: value => value === getValues().password,
          }}
          render={({ field }) => (
            <InputText placeholder="Повторите пароль" className="register-form__input" {...field} type="password" />
          )}
        />
        {errors.passwordRepeat?.type === 'required' && <div className="register-form__error">Повторите пароль</div>}
        {errors.passwordRepeat?.type === 'validate' && (
          <div className="register-form__error">Пароли должны совпадать</div>
        )}
      </div>
      <SubmitButton className="register-form__button">Зарегистрироваться</SubmitButton>
    </form>
  );
};

export default RegisterForm;
