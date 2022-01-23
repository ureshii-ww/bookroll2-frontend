import { Route } from './route.interface';
import { RouteNames } from './route-names.enum';
import RegisterPage from '../components/Pages/RegisterPage/RegisterPage';
import LoginPage from '../components/Pages/LoginPage/LoginPage';

export const publicRoutes: Route[] = [
  {path: RouteNames.REGISTER, exact: true, component: RegisterPage },
  {path: RouteNames.LOGIN, exact: true, component: LoginPage}
]

export const privateRoutes: Route[] = [
  {path: RouteNames.USER_PROFILE, exact: true}
]