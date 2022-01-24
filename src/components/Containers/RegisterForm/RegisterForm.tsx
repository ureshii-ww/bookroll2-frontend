import React, { FC, useState, } from 'react';
import InputText from '../../UI/Input/InputText';
import SubmitButton from '../../UI/SubmitButton/SubmitButton';
import { SubmitHandler, useForm, Controller, useWatch } from 'react-hook-form';
import AuthServices from '../../../services/auth.service';
import { Navigate } from 'react-router-dom';
import { RouteNames } from '../../../routes/route-names.enum';

type Inputs = {
  username: string,
  email: string,
  password: string,
  passwordRepeat: string
}

const RegisterForm: FC = props => {
  const [isRegistered, setIsRegistered] = useState(false);
  const { control, handleSubmit, formState: { errors }, getValues } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => handleRegister(data.username, data.email, data.password);

  const handleRegister = async (username: string, email: string, password: string) => {
    try {
      await AuthServices.register(username, email, password);
      setIsRegistered(true);
    } catch (error: any) {
      console.log(error?.response?.data?.message);
    }
  }
  if (isRegistered) return <Navigate to={RouteNames.LOGIN}/>

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller name="username"
                  control={control}
                  defaultValue={''}
                  rules={{ required: true, maxLength: 32 }}
                  render={({ field }) => <InputText {...field} type="text"/>}/>
      <Controller name="email"
                  control={control}
                  defaultValue={''}
                  rules={{ required: true }}
                  render={({ field }) => <InputText {...field} type="email"/>}/>
      <Controller name="password"
                  defaultValue={''}
                  rules={{ required: true, minLength: 8, maxLength: 128 }}
                  control={control}
                  render={({ field }) => <InputText {...field} type="password"/>}/>
      <Controller name="passwordRepeat"
                  control={control}
                  defaultValue={''}
                  rules={{
                    required: true,
                    validate: value => value === getValues().password || 'Пароли должны совпадать'
                  }}
                  render={({ field }) => <InputText {...field} type="password"/>}/>
      <SubmitButton innerText={'Зарегистрироваться'}/>
    </form>
  )
};

export default RegisterForm;