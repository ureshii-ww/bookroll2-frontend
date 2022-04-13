import React, { FC, Fragment, useEffect } from 'react';
import AppRouter from './components/AppRouter/AppRouter';
import './index.scss';
import SystemNotificationsContainer from './components/Containers/SystemNotificationsContainer/SystemNotificationsContainer';
import Modal from './components/Containers/Modal/Modal';

const App: FC = () => {
  useEffect(() => {
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      let vw = window.innerWidth * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      document.documentElement.style.setProperty('--vw', `${vw}px`);
    });
  }, []);

  return (
    <Fragment>
      <AppRouter />
      <SystemNotificationsContainer />
      <Modal />
    </Fragment>
  );
};

export default App;
