import React from 'react';
import ErrorContainer from '../../UI/ErrorContainer/ErrorContainer';
import './not-found-page.scss';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <ErrorContainer errorCode={404} errorMessage="Такой страницы не существует" />
    </div>
  );
};

export default NotFoundPage;