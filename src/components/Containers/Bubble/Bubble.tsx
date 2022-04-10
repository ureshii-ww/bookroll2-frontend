import React from 'react';
import './bubble.scss';
import { useAppSelector } from '../../../hooks/useAppSelector';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { closeBubble } from '../../../store/reducers/bubble';

const Bubble = () => {
  const dispatch = useAppDispatch();
  const { isShow, reactComponent, wrapperClass } = useAppSelector(state => state.bubble);
  const classString = wrapperClass ? `bubble ${wrapperClass}` : 'bubble';
  const handleCloseBubble = () => {
    dispatch(closeBubble());
  }

  if (!isShow) {
    return null;
  }

  return (
    <div onClick={handleCloseBubble} className={classString}>
      {reactComponent}
    </div>
  );
};

export default Bubble;
