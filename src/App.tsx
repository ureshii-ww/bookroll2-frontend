import React, { FC } from 'react';
import AppRouter from './components/AppRouter/AppRouter';
import './index.scss';
import NotificationsContainer from './components/Containers/NotificationsContainer/NotificationsContainer';

const App: FC = () => {
  return (
    <div className="App">
      <AppRouter />
      <NotificationsContainer />
    </div>
  );
};

export default App;
