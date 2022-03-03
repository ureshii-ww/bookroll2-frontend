import React, { FC } from 'react';
import { ReactComponent as ArrowSvg } from '../../../assets/svg/dropdown.svg';
import './scroll-button.scss';

export enum ScrollDirection {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

interface ScrollButtonProps {
  direction: ScrollDirection;
  element: Element;
}

const ScrollButton: FC<ScrollButtonProps> = ({ direction, element, ...rest }) => {
  const classString =
    direction === ScrollDirection.RIGHT ? 'scroll-button scroll-button--right' : 'scroll-button scroll-button--left';
  const scrollRight = () => (element.scrollLeft -= 20);
  const scrollLeft = () => (element.scrollLeft += 20);

  return (
    <div className={classString}>
      <ArrowSvg />
    </div>
  );
};

export default ScrollButton;