import React, { CSSProperties, Component } from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import TransparentButton from '../../UI/TransparentButton/TransparentButton';
import { ReactComponent as CloseSvg } from '../../../assets/svg/close.svg';
import { useActions } from '../../../hooks/useActions';
import './modal.scss';
import Scrollbars from 'react-custom-scrollbars-2';

const Modal = () => {
  const { isShow, reactComponent } = useAppSelector(state => state.modal);
  const { closeModal } = useActions();
  if (!isShow) {
    return null;
  }

  return (
    <div className="modal-bg" onClick={closeModal}>
      <Scrollbars renderView={props => <div {...props} className="modal-container__wrapper" />}>
        <div className="modal-container" onClick={e => e.stopPropagation()}>
          {reactComponent}
          <TransparentButton className="modal-container__close" onClick={closeModal}>
            <CloseSvg />
          </TransparentButton>
        </div>
      </Scrollbars>
    </div>
  );
};

export default Modal;
