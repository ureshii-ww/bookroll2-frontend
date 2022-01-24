import React, { FC, Fragment } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../../routes';
import { RouteNames } from '../../routes/route-names.enum';
import { useAppSelector } from '../../hooks/useAppSelector';

const AppRouter: FC = () => {
  const {isAuth, userData} = useAppSelector(state => state.auth);
  return (
    isAuth && userData ?
      <Fragment>
        <Routes>
          {privateRoutes.map(route =>
            <Route {...route} key={route.path}/>
          )}
          <Route path="*" element={<Navigate to={`${RouteNames.USER_PROFILE_BASE}${userData.url}`}/>}/>
        </Routes>
      </Fragment>
      :
      <Routes>
        {publicRoutes.map(route =>
          <Route {...route} key={route.path}/>
        )}
        <Route path="*" element={<Navigate to={RouteNames.REGISTER}/>}/>
      </Routes>
  );
};

export default AppRouter;