import React from 'react';
import Loader from '../loader/Loader';
import './page-loader.scss';

const PageLoader = () => {
  return (
    <div className="page-loader">
      <Loader/>
    </div>
  );
};

export default PageLoader;