import React, { FC } from 'react';
import './error-container.scss';

interface ErrorContainerProps {
  errorCode: string | number;
  errorMessage: string;
}

const ErrorContainer: FC<ErrorContainerProps> = ({errorCode, errorMessage}) => {
  return (
    <div className="error-container">
      <div className="error-container__code">{errorCode}</div>
      <div className="error-container__message">{errorMessage}</div>
    </div>
  );
};

export default ErrorContainer;