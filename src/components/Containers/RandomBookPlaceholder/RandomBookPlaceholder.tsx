import React, { FC } from 'react';
import MainButton from '../../UI/MainButton/MainButton';
import './random-book-placeholder.scss';

interface RandomBookPlaceholderProps {
  handleClick: () => void;
}

const RandomBookPlaceholder: FC<RandomBookPlaceholderProps> = ({ handleClick }) => {
  return (
    <div className="random-book-placeholder">
      <MainButton className="main-button--big" onClick={() => handleClick()}>Искать книги</MainButton>
    </div>
  );
};

export default RandomBookPlaceholder;