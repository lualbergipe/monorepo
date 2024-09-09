// Modal.tsx
import React from 'react';
import style from './Modal.module.css'
import { ModalProps } from '@apps/main-app/types/types';
import { IoClose } from "react-icons/io5";




const Modal = ({ isOpen, onClose, children }:ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={style.modal__container}>
      <div className={style.content__modal}>
        <div className={style.header__modal}>
          <h2>Crea tu popup personalizada</h2>
          <IoClose onClick={onClose}/>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
