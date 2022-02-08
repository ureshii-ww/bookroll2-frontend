import React, { FC } from 'react';
import AppRouter from './components/AppRouter/AppRouter';
import './index.scss';

const App:FC = () => {
  console.log('biba')
  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}

export default App;
