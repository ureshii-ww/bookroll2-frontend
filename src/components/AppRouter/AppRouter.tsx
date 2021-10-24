import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../../routes';
import { RouteNames } from '../../routes/route-names.enum';

const AppRouter: FC = () => {
  const auth = false;
  return (
    auth ?
      <Switch>
        {privateRoutes.map(route =>
          <Route {...route} key={route.path}/>
        )}
      </Switch>
      :
      <Switch>
        {publicRoutes.map(route =>
          <Route {...route} key={route.path}/>
        )}
        <Redirect to={RouteNames.LOGIN}/>
      </Switch>
  );
};

export default AppRouter;