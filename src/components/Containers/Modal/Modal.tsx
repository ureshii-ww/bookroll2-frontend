import React from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import TransparentButton from '../../UI/TransparentButton/TransparentButton';
import { ReactComponent as CloseSvg } from '../../../assets/svg/close.svg';
import './modal.scss';
import { modifyDomForModal } from '../../../helpers/modifyDomForModal';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { closeModal } from '../../../store/reducers/modal';

const Modal = () => {
  const { isShow, reactComponent } = useAppSelector(state => state.modal);
  const dispatch = useAppDispatch();
  const { addModal, removeModal } = modifyDomForModal();

  const handleCloseModal = () => {
    dispatch(closeModal());
  }

  if (!isShow) {
    removeModal();
    return null;
  }

  addModal();
  return (
    <div className="modal-bg" onClick={handleCloseModal}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        {reactComponent}
        <TransparentButton className="modal-container__close" onClick={handleCloseModal}>
          <CloseSvg />
        </TransparentButton>
      </div>
    </div>
  );
};

export default Modal;
