import React from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import TransparentButton from '../../UI/TransparentButton/TransparentButton';
import { ReactComponent as CloseSvg } from '../../../assets/svg/close.svg';
import { useActions } from '../../../hooks/useActions';
import './modal.scss';
import { modifyDomForModal } from '../../../helpers/modifyDomForModal';

const Modal = () => {
  const { isShow, reactComponent } = useAppSelector(state => state.modal);
  const { closeModal } = useActions();
  const { addModal, removeModal } = modifyDomForModal();

  if (!isShow) {
    removeModal();
    return null;
  }

  addModal();
  return (
    <div className="modal-bg" onClick={closeModal}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        {reactComponent}
        <TransparentButton className="modal-container__close" onClick={closeModal}>
          <CloseSvg />
        </TransparentButton>
      </div>
    </div>
  );
};

export default Modal;
