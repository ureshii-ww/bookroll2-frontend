import React, { Fragment } from 'react';
import RandomBookContainer from '../../Containers/RandomBookContainer/RandomBookContainer';
import './random-book-page.scss';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { Helmet } from 'react-helmet';

const RandomBookPage = () => {
  const isLoading = useAppSelector(state => state.randomBook.isLoading);

  return (
    <Fragment>
      <Helmet>
        <title>Случайная книга</title>
      </Helmet>
      <div className={isLoading ? 'random-book-page random-book-page--loading' : "random-book-page"}>
        <RandomBookContainer />
      </div>
    </Fragment>
  );
};

export default RandomBookPage;
