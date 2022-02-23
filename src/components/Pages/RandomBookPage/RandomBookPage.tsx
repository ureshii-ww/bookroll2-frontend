import React, { useState } from 'react';
import RandomBookContainer from '../../Containers/RandomBookContainer/RandomBookContainer';
import RandomBookPlaceholder from '../../Containers/RandomBookPlaceholder/RandomBookPlaceholder';
import './random-book-page.scss';
import { useAppSelector } from '../../../hooks/useAppSelector';

const RandomBookPage = () => {
  const [isBook, setIsBook] = useState(false);
  const isLoading = useAppSelector(state => state.loadingPage.isLoadingPage);
  const handleSetIsBook = () => {
    setIsBook(true);
  };

  return (
    <div className={isLoading ? 'random-book-page random-book-page--loading' : "random-book-page"}>
      {isBook ? <RandomBookContainer /> : <RandomBookPlaceholder handleClick={handleSetIsBook} />}
    </div>
  );
};

export default RandomBookPage;
