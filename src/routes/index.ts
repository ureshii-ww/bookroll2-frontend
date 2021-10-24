import { Route } from './route.interface';
import { RouteNames } from './route-names.enum';

export const publicRoutes: Route[] = [
  {path: RouteNames.LOGIN, exact: true }
]

export const privateRoutes: Route[] = [
  {path: RouteNames.USER_PROFILE, exact: true}
]