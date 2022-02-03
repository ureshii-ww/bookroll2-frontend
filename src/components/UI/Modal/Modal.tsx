import React, { FC, useState } from 'react';
import TransparentButton from '../TransparentButton/TransparentButton';
import './modal.scss';

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
        <TransparentButton onClick={onClose}>Close</TransparentButton>
        {children}
      </div>
    </div>
  );
};

export default Modal;