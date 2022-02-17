import React, { useState } from 'react';
import RandomBookContainer from '../../Containers/RandomBookContainer/RandomBookContainer';
import RandomBookPlaceholder from '../../Containers/RandomBookPlaceholder/RandomBookPlaceholder';
import './random-book-page.scss';

const RandomBookPage = () => {
  const [isBook, setIsBook] = useState(false);
  const handleSetIsBook = () => {
    setIsBook(true);
  };

  return <div className="random-book-page">{isBook ? <RandomBookContainer /> : <RandomBookPlaceholder handleClick={handleSetIsBook} />}</div>;
};

export default RandomBookPage;