import React, { FC, Fragment } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import ClubProfileBooks from '../Containers/ClubProfileBooks/ClubProfileBooks';
import '../../styles/app-layout.scss';
import UserSettings from '../Pages/UserSettings/UserSettings';
import ClubSettingsPage from '../Pages/ClubSettingsPage/ClubSettingsPage';
import WheelPage from '../Pages/WheelPage/WheelPage';
import Scrollbars from 'react-custom-scrollbars-2';

const AppRouter: FC = () => {
  const { isAuth, userData } = useAppSelector(state => state.auth);
  const location = useLocation();
  return (
    <Fragment>
      <RemoveTrailingSlash />
      {isAuth && userData ? (
        <div className="app-layout">
          <Navbar />
          <div className="app-layout__page">
            <Scrollbars>
              <Routes>
                <Route path={RouteNames.USER_PROFILE} element={<UserProfilePage key={location.pathname} />}>
                  <Route path={RouteNames.USER_PROFILE_BOOKS} element={<UserProfileBooks />} />
                </Route>
                <Route path={RouteNames.USER_SETTINGS} element={<UserSettings />} />
                <Route path={RouteNames.CLUB_PROFILE} element={<ClubProfilePage key={location.pathname} />}>
                  <Route path={RouteNames.CLUB_PROFILE_BOOKS} element={<ClubProfileBooks />} />
                </Route>
                <Route path={RouteNames.CLUB_SETTINGS} element={<ClubSettingsPage />} />
                <Route path={RouteNames.CLUB_WHEEL} element={<WheelPage />} />
                <Route path={RouteNames.RANDOM_BOOK} element={<RandomBookPage />} />
                <Route path="*" element={<Navigate to={`${RouteNames.USER_PROFILE_BASE}${userData.url}/`} />} />
              </Routes>
            </Scrollbars>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path={RouteNames.LOGIN} element={<LoginPage />} />
          <Route path={RouteNames.REGISTER} element={<RegisterPage />} />
          <Route path="*" element={<Navigate to={RouteNames.REGISTER} />} />
        </Routes>
      )}
    </Fragment>
  );
};

export default AppRouter;
