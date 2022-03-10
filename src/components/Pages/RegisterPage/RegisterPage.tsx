import React, { FC, Fragment } from 'react';
import {Link} from 'react-router-dom';
import { RouteNames } from '../../../routes/route-names.enum';
import RegisterForm from '../../Containers/RegisterForm/RegisterForm';
import './register-page.scss';
import { Helmet } from 'react-helmet';

const RegisterPage: FC = props => {
  return (
    <Fragment>
      <Helmet>
        <title>Регистрация</title>
      </Helmet>
      <div className="register-page">
        <h1 className="register-page__title">Регистрация</h1>
        <RegisterForm/>
        <Link className="register-page__link" to={RouteNames.LOGIN}>Войти в аккаунт</Link>
      </div>
    </Fragment>

  )
}

export default RegisterPage;