import React from 'react';
import './bubble.scss';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useActions } from '../../../hooks/useActions';

const Bubble = () => {
  const { isShow, reactComponent, wrapperClass } = useAppSelector(state => state.bubble);
  const { closeBubble } = useActions();
  const classString = wrapperClass ? `bubble ${wrapperClass}` : 'bubble';

  if (!isShow) {
    return null;
  }

  return (
    <div className="bubble__background" onClick={closeBubble}>
      <div className={classString}>
        {reactComponent}
      </div>
    </div>
  );
};

export default Bubble;
