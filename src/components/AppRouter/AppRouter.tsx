import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../../routes';
import { RouteNames } from '../../routes/route-names.enum';
import { useAppSelector } from '../../hooks/useAppSelector';

const AppRouter: FC = () => {
  const {isAuth, userData} = useAppSelector(state => state.auth);
  return (
    isAuth && userData ?
      <Routes>
        {privateRoutes.map(route =>
          <Route {...route} key={route.path}/>
        )}
        <Navigate to={`${RouteNames.USER_PROFILE_BASE}${userData.url}`}/>
      </Routes>
      :
      <Routes>
        {publicRoutes.map(route =>
          <Route {...route} key={route.path}/>
        )}
        <Navigate to={RouteNames.REGISTER}/>
      </Routes>
  );
};

export default AppRouter;