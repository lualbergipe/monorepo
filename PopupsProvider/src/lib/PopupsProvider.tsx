import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PopupButtonProps } from '../types/types';
import usePopup from '@lib/PopupsProvider/hooks/usePopup/UsePopup';
import style from './PopupsProvider.module.css'
const PopupButtons = ({ id, defaultPosition, children }:PopupButtonProps & { children: React.ReactNode }) => {

  const { addPopup } = usePopup();


  const handleClick = () => {
    addPopup({
      id,
      title: "Popup",
      description: "Popup description",
      defaultPosition,
      zIndex: 0,
    });
  };
  return (
    <button className={style.btn__popup} onClick={handleClick}>{children}</button>
  )
}
export const PopupButtonA = (props: Omit<PopupButtonProps, 'id'> & { children: React.ReactNode }) => (
  <PopupButtons id={uuidv4()} {...props}>
    {props.children}
  </PopupButtons>
);

export const PopupButtonB = (props: Omit<PopupButtonProps, 'id'> & { children: React.ReactNode }) => (
  <PopupButtons id={uuidv4()} {...props}>
    {props.children}
  </PopupButtons>
);
