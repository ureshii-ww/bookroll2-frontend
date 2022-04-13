import React, { FC } from 'react';
import './club-profile-reviews.scss';
import { ReactComponent as HammerWrench } from '../../../assets/svg/hammer-wrench.svg';

interface ClubProfileReviewsProps {}

const ClubProfileReviews: FC<ClubProfileReviewsProps> = () => {
  return (
    <div className="club-profile-reviews">
      <div className="club-profile-reviews__placeholder">
        <span>
          <HammerWrench />
        </span>
        <span>Рецензии в разработке</span>
      </div>
    </div>
  );
};

export default ClubProfileReviews;