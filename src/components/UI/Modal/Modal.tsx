import React, { FC } from 'react';
import TransparentButton from '../TransparentButton/TransparentButton';
import './modal.scss';
import { ReactComponent as CloseSvg } from '../../../assets/svg/close.svg';

export interface ModalProps {
  isShow: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isShow, onClose, children }) => {
  if (!isShow) {
    return null;
  }

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <TransparentButton className="modal-container__close" onClick={onClose}>
          <CloseSvg />
        </TransparentButton>
        {children}
      </div>
    </div>
  );
};

export default Modal;
