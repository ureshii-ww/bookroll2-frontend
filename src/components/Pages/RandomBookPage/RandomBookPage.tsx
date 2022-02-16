import React, { useState } from 'react';
import RandomBookContainer from '../../Containers/RandomBookContainer/RandomBookContainer';
import RandomBookPlaceholder from '../../Containers/RandomBookPlaceholder/RandomBookPlaceholder';

const RandomBookPage = () => {
  const [isBook, setIsBook] = useState(false)
  const handleSetIsBook = () => {
    setIsBook(true);
  }

  return (
    <div>
      {isBook ? <RandomBookContainer/> : <RandomBookPlaceholder handleClick={handleSetIsBook}/>}
    </div>
  );
};

export default RandomBookPage;