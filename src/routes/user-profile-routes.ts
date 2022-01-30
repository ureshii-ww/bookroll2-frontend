import { Route } from './route.interface';
import { RouteNames } from './route-names.enum';

export const userProfileRoutes: Route[] = [
  {path: RouteNames.USER_PROFILE_BOOKS},
  {path: RouteNames.USER_PROFILE_REVIEWS}
]