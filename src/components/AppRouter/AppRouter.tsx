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
import '../../styles/auth-pages.scss';
import '../../styles/main-content.scss';
import WheelPage from '../Pages/WheelPage/WheelPage';
import UserProfileReviews from '../Containers/UserProfileReviews/UserProfileReviews';
import ClubProfileHistory from '../Containers/ClubProfileHistory/ClubProfileHistory';
import ClubProfileMembers from '../Containers/ClubProfileMembers/ClubProfileMembers';
import ClubProfileRules from '../Containers/ClubProfileRules/ClubProfileRules';
import ClubProfileReviews from '../Containers/ClubProfileReviews/ClubProfileReviews';
import Bubble from '../Containers/Bubble/Bubble';
import Footer from '../Containers/Footer/Footer';
import NavbarMobile from '../Containers/Navbar/NavbarMobile';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';

const AppRouter: FC = () => {
  const { isAuth, userData } = useAppSelector(state => state.auth);
  const location = useLocation();
  const cutPath = location.pathname.substring(0, location.pathname.lastIndexOf('/'));

  return (
    <Fragment>
      <RemoveTrailingSlash />
      {isAuth && userData ? (
        <div className="logged-in">
          <Navbar />
          <Bubble />
          <main className="main-content">
            <div className="main-content__pages">
              <Routes>
                <Route path={RouteNames.USER_PROFILE} element={<UserProfilePage key={cutPath} />}>
                  <Route path={RouteNames.USER_PROFILE_BOOKS} element={<UserProfileBooks />} />
                  <Route path={RouteNames.USER_PROFILE_REVIEWS} element={<UserProfileReviews />} />
                  <Route path="*" element={<Navigate to={RouteNames.USER_PROFILE_BOOKS} />} />
                </Route>
                <Route path={RouteNames.CLUB_PROFILE} element={<ClubProfilePage key={cutPath} />}>
                  <Route path={RouteNames.CLUB_PROFILE_BOOKS} element={<ClubProfileBooks />} />
                  <Route path={RouteNames.CLUB_PROFILE_HISTORY} element={<ClubProfileHistory />} />
                  <Route path={RouteNames.CLUB_PROFILE_MEMBERS} element={<ClubProfileMembers />} />
                  <Route path={RouteNames.CLUB_PROFILE_RULES} element={<ClubProfileRules />} />
                  <Route path={RouteNames.CLUB_PROFILE_REVIEWS} element={<ClubProfileReviews />} />
                  <Route path="*" element={<Navigate to={RouteNames.CLUB_PROFILE_BOOKS} />} />
                </Route>
                <Route path={RouteNames.CLUB_WHEEL} element={<WheelPage />} />
                <Route path={RouteNames.RANDOM_BOOK} element={<RandomBookPage />} />
                <Route path="/" element={<Navigate to={`${RouteNames.USER_PROFILE_BASE}${userData.url}/`} />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>
          </main>
          <NavbarMobile />
          <Footer />
        </div>
      ) : (
        <div className="auth-pages">
          <Routes>
            <Route path={RouteNames.LOGIN} element={<LoginPage />} />
            <Route path={RouteNames.REGISTER} element={<RegisterPage />} />
            <Route path="*" element={<Navigate to={RouteNames.REGISTER} />} />
          </Routes>
        </div>
      )}
    </Fragment>
  );
};

export default AppRouter;
