import React, { FC, Fragment } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../../routes';
import { RouteNames } from '../../routes/route-names.enum';
import { useAppSelector } from '../../hooks/useAppSelector';
import UserProfilePage from '../Pages/UserProfilePage/UserProfilePage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import RegisterPage from '../Pages/RegisterPage/RegisterPage';
import RemoveTrailingSlash from './RemoveTrailingSlash';

const AppRouter: FC = () => {
  const { isAuth, userData } = useAppSelector(state => state.auth);
  return (
    <Fragment>
      <RemoveTrailingSlash/>
      {isAuth && userData ?
        <Routes>
          {/*{privateRoutes.map(route =>*/}
          {/*  <Route {...route} key={route.path}/>*/}
          {/*)}*/}
          <Route path={RouteNames.USER_PROFILE} element={<UserProfilePage/>}/>
          <Route path="*" element={<Navigate to={`${RouteNames.USER_PROFILE_BASE}${userData.url}/`}/>}/>
        </Routes>
        :
        <Routes>
          {/*{publicRoutes.map(route =>*/}
          {/*  <Route {...route} key={route.path}/>*/}
          {/*)}*/}
          <Route path={RouteNames.LOGIN} element={<LoginPage/>}/>
          <Route path={RouteNames.REGISTER} element={<RegisterPage/>}/>
          <Route path="*" element={<Navigate to={RouteNames.REGISTER}/>}/>
        </Routes>}
    </Fragment>
  );
}

export default AppRouter;