import React, { FC } from 'react';
import {Link} from 'react-router-dom';
import { RouteNames } from '../../../routes/route-names.enum';
import LoginForm from '../../Containers/LoginForm/LoginForm';

const LoginPage: FC = props => {
  return (
    <div>
      <h1>Войти в аккаунт</h1>
      <LoginForm/>
      <Link to={RouteNames.REGISTER}>Зарегистрироваться</Link>
    </div>
  )
}

export default LoginPage;