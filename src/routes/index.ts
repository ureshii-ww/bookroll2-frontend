import { Route } from './route.interface';
import { RouteNames } from './route-names.enum';
import RegisterPage from '../components/Pages/RegisterPage/RegisterPage';
import LoginPage from '../components/Pages/LoginPage/LoginPage';
import UserProfilePage from '../components/Pages/UserProfilePage/UserProfilePage';

export const publicRoutes: Route[] = [
  { path: RouteNames.REGISTER, exact: true, element: RegisterPage },
  { path: RouteNames.LOGIN, exact: true, element: LoginPage }
]

export const privateRoutes: Route[] = [
  { path: RouteNames.USER_PROFILE, exact: true, element: UserProfilePage }
]