import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PopupButtonProps } from '../types/types';
import usePopup from '@lib/PopupsProvider/hooks/usePopup/UsePopup';
import style from './PopupsProvider.module.css'
const PopupButtons = ({ id, title, description, defaultPosition }:PopupButtonProps) => {

  const { addPopup } = usePopup();

  const handleClick = () => {
    addPopup({
      id, title, description, defaultPosition,
      zIndex: 0
    });
  };
  return (
    <button className={style.btn__popup} onClick={handleClick}>Abrir {title}</button>
  )
}
export const PopupButtonA = (props: Omit<PopupButtonProps, 'id' >) => <PopupButtons id={uuidv4()}  {...props} />;
export const PopupButtonB = (props: Omit<PopupButtonProps, 'id' >) => <PopupButtons id={uuidv4()}  {...props} />;
