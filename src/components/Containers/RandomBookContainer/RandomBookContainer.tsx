import React, { Fragment } from 'react';
import MainButton from '../../UI/MainButton/MainButton';
import BookDataView from '../../UI/BookDataView/BookDataView';
import './random-book-container.scss';
import useRandomBookContainer from './useRandomBookContainer';
import PageLoader from '../../UI/PageLoader/PageLoader';

const RandomBookContainer = () => {
  const { bookData, confirmBook, getBook, isLoading, isConfirming } = useRandomBookContainer();

  return !isLoading && bookData ? (
    <Fragment>
      <div className="random-book__view">
        <BookDataView book={bookData} />
      </div>
      <div className="random-book__buttons">
        <MainButton className="main-button--green" onClick={() => confirmBook()}>
          Подтвердить
        </MainButton>
        <MainButton className="main-button--red" onClick={() => getBook()}>
          Искать ещё
        </MainButton>
      </div>
    </Fragment>
  ) : (
    <div className="random-book__loader">
      <PageLoader/>
    </div>
  );
};

export default RandomBookContainer;
