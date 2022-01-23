import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../../routes';
import { RouteNames } from '../../routes/route-names.enum';
import { useAppSelector } from '../../hooks/useAppSelector';

const AppRouter: FC = () => {
  const {isAuth, userData} = useAppSelector(state => state.auth);
  return (
    isAuth && userData ?
      <Switch>
        {privateRoutes.map(route =>
          <Route {...route} key={route.path}/>
        )}
        <Redirect to={`${RouteNames.USER_PROFILE_BASE}${userData.url}`}/>
      </Switch>
      :
      <Switch>
        {publicRoutes.map(route =>
          <Route {...route} key={route.path}/>
        )}
        <Redirect to={RouteNames.REGISTER}/>
      </Switch>
  );
};

export default AppRouter;