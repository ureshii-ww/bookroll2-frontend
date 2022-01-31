import React, { FC } from 'react';
import MainButton from '../../UI/MainButton/MainButton';

interface RandomBookPlaceholderProps {
  handleClick: () => void
}

const RandomBookPlaceholder: FC<RandomBookPlaceholderProps> = ({handleClick}) => {
  return (
    <div>
      <MainButton onClick={() => handleClick()}>Искать книги</MainButton>
    </div>
  );
};

export default RandomBookPlaceholder;