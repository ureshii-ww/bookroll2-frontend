import React, { FC, Fragment } from 'react';
import AppRouter from './components/AppRouter/AppRouter';
import './index.scss';
import NotificationsContainer from './components/Containers/NotificationsContainer/NotificationsContainer';
import Modal from './components/Containers/Modal/Modal';

const App: FC = () => {
  return (
    <Fragment>
      <AppRouter />
      <NotificationsContainer />
      <Modal />
    </Fragment>
  );
};

export default App;
