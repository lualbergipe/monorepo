// Modal.tsx
import React from 'react';
import style from './Modal.module.css'
import { ModalProps } from '@apps/main-app/types/types';




const Modal = ({ isOpen, onClose, children }:ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={style.modal__container}>
      <div className={style.content__modal}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
