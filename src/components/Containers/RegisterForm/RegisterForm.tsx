import React, { FC } from 'react';
import InputText from '../../UI/InputText/InputText';
import SubmitButton from '../../UI/SubmitButton/SubmitButton';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import AuthServices from '../../../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../../routes/route-names.enum';

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
  const onSubmit: SubmitHandler<Inputs> = data => handleRegister(data.username, data.email, data.password);

  const handleRegister = async (username: string, email: string, password: string) => {
    try {
      await AuthServices.register(username, email, password);
      navigate(RouteNames.LOGIN);
    } catch (error: any) {
      console.log(error?.response?.data?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="username"
        control={control}
        defaultValue={''}
        rules={{ required: true, maxLength: 32 }}
        render={({ field }) => <InputText {...field} type="text" />}
      />
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
        rules={{ required: true, minLength: 8, maxLength: 128 }}
        control={control}
        render={({ field }) => <InputText {...field} type="password" />}
      />
      <Controller
        name="passwordRepeat"
        control={control}
        defaultValue={''}
        rules={{
          required: true,
          validate: value => value === getValues().password || 'Пароли должны совпадать',
        }}
        render={({ field }) => <InputText {...field} type="password" />}
      />
      <SubmitButton>Зарегистрироваться</SubmitButton>
    </form>
  );
};

export default RegisterForm;
