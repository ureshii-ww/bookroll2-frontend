import React, { FC, Fragment } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { RouteNames } from '../../routes/route-names.enum';
import { useAppSelector } from '../../hooks/useAppSelector';
import UserProfilePage from '../Pages/UserProfilePage/UserProfilePage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import RegisterPage from '../Pages/RegisterPage/RegisterPage';
import RemoveTrailingSlash from './RemoveTrailingSlash';
import Navbar from '../Containers/Navbar/Navbar';
import RandomBookPage from '../Pages/RandomBookPage/RandomBookPage';
import ClubProfilePage from '../Pages/ClubProfilePage/ClubProfilePage';
import UserProfileBooks from '../Containers/UserProfileBooks/UserProfileBooks';

const AppRouter: FC = () => {
  const { isAuth, userData } = useAppSelector(state => state.auth);
  return (
    <Fragment>
      <RemoveTrailingSlash/>
      {isAuth && userData ?
        <Fragment>
          <Navbar/>
          <Routes>
            {/*{privateRoutes.map(route =>*/}
            {/*  <Route {...route} key={route.path}/>*/}
            {/*)}*/}
            <Route path={RouteNames.USER_PROFILE} element={<UserProfilePage/>}>
              <Route path={RouteNames.USER_PROFILE_BOOKS} element={<UserProfileBooks/>}/>
            </Route>
            <Route path={RouteNames.CLUB_PROFILE} element={<ClubProfilePage/>}/>
            <Route path={RouteNames.RANDOM_BOOK} element={<RandomBookPage/>}/>
            <Route path="*" element={<Navigate to={`${RouteNames.USER_PROFILE_BASE}${userData.url}/`}/>}/>
          </Routes>
        </Fragment>
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