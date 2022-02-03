import React, { FC } from 'react';
import AppRouter from './components/AppRouter/AppRouter';
import './index.scss';

const App:FC = () => {
  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}

export default App;
