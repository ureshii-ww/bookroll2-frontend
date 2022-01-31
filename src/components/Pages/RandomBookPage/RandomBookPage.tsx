import React, { useState } from 'react';
import RandomBookInfo from '../../Containers/RandomBookInfo/RandomBookInfo';
import RandomBookPlaceholder from '../../Containers/RandomBookPlaceholder/RandomBookPlaceholder';

const RandomBookPage = () => {
  const [isBook, setIsBook] = useState(false)
  const handleSetIsBook = () => {
    setIsBook(true);
  }

  return (
    <div>
      {isBook ? <RandomBookInfo/> : <RandomBookPlaceholder handleClick={handleSetIsBook}/>}
    </div>
  );
};

export default RandomBookPage;