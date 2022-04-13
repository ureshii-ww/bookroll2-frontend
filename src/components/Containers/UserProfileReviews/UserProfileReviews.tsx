import React from 'react';
import { ReactComponent as HammerWrench } from '../../../assets/svg/hammer-wrench.svg';
import './user-profile-reviews.scss';

const UserProfileReviews = () => {
  return (
    <div className="user-profile-reviews">
      <div className="user-profile-reviews__placeholder">
        <span>
          <HammerWrench />
        </span>
        <span>Рецензии в разработке</span>
      </div>
    </div>
  );
};

export default UserProfileReviews;