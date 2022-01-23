import React, { FC } from 'react';
import {Link} from 'react-router-dom';
import { RouteNames } from '../../../routes/route-names.enum';
import RegisterForm from '../../Containers/RegisterForm/RegisterForm';

const RegisterPage: FC = props => {
  return (
    <div>
      <h1>Зарегистрироваться</h1>
      <RegisterForm/>
      <Link to={RouteNames.LOGIN}>Войти в аккаунт</Link>
    </div>
  )
}

export default RegisterPage;