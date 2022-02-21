import React from 'react';
import WheelContainer from '../../Containers/WheelContainer/WheelContainer';
import WheelPageClubBooks from '../../Containers/WheelPageClubBooks/WheelPageClubBooks';
import useWheelPage from './useWheelPage';
import './wheel-page.scss';

const WheelPage = () => {
  const { clubBooks, isLoaded, displayWinner, handleSetBooksKey, booksKey } = useWheelPage();

  return isLoaded ? (
    <div className="wheel-page">
      <WheelContainer clubBooks={clubBooks} handleSetBooksKey={handleSetBooksKey} displayWinner={displayWinner} />
      <WheelPageClubBooks clubBooks={clubBooks} booksKey={booksKey} />
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default WheelPage;
