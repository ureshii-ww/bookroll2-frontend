import React from 'react';
import WheelContainer from '../../Containers/WheelContainer/WheelContainer';
import WheelPageClubBooks from '../../Containers/WheelPageClubBooks/WheelPageClubBooks';
import useWheelPage from './useWheelPage';
import './wheel-page.scss';
import { Link, useParams } from 'react-router-dom';
import { RouteNames } from '../../../routes/route-names.enum';
import { ReactComponent as BackSvg } from '../../../assets/svg/back.svg';

const WheelPage = () => {
  const { clubUrl } = useParams();
  const { clubBooks, isLoaded, displayWinner, handleSetBooksKey, booksKey } = useWheelPage();

  return isLoaded ? (
    <div className="wheel-page">
      <div className="wheel-page__back-wrapper">
        <Link className="wheel-page__back" to={`${RouteNames.CLUB_PROFILE_BASE}${clubUrl}`}>
          <BackSvg />
          Назад
        </Link>
      </div>
      <WheelContainer clubBooks={clubBooks} handleSetBooksKey={handleSetBooksKey} displayWinner={displayWinner} />
      <WheelPageClubBooks clubBooks={clubBooks} booksKey={booksKey} />
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default WheelPage;
