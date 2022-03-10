import React, { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../../routes/route-names.enum';
import { Helmet } from 'react-helmet';
import LoginForm from '../../Containers/LoginForm/LoginForm';
import './login-page.scss';

const LoginPage: FC = props => {
  return (
    <Fragment>
      <Helmet>
        <title>Вход</title>
      </Helmet>
      <div className="login-page">
        <h1 className="login-page__title">Войти в аккаунт</h1>
        <LoginForm />
        <Link className="login-page__link" to={RouteNames.REGISTER}>
          Зарегистрироваться
        </Link>
      </div>
    </Fragment>
  );
};

export default LoginPage;
