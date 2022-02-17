import React, { FC } from 'react';
import AppRouter from './components/AppRouter/AppRouter';
import './index.scss';
import NotificationsContainer from './components/Containers/NotificationsContainer/NotificationsContainer';
import Modal from './components/Containers/Modal/Modal';

const App: FC = () => {
  return (
    <div className="App">
      <AppRouter />
      <NotificationsContainer />
      <Modal />
    </div>
  );
};

export default App;
