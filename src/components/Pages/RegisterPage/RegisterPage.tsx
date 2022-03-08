import React, { FC } from 'react';
import {Link} from 'react-router-dom';
import { RouteNames } from '../../../routes/route-names.enum';
import RegisterForm from '../../Containers/RegisterForm/RegisterForm';
import './register-page.scss';

const RegisterPage: FC = props => {
  return (
    <div className="register-page">
      <h1 className="register-page__title">Регистрация</h1>
      <RegisterForm/>
      <Link className="register-page__link" to={RouteNames.LOGIN}>Войти в аккаунт</Link>
    </div>
  )
}

export default RegisterPage;