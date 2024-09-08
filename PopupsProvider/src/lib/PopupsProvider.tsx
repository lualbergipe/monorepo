import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PopupButtonProps } from '../types/types';
import usePopup from '@apps/main-app/app/hooks/usePopup/UsePopup';


const PopupButtons = ({ id, title, description, defaultPosition }:PopupButtonProps) => {
  const { addPopup } = usePopup();

  const handleClick = () => {
    addPopup({
      id, title, description, defaultPosition,
      zIndex: 0
    });
  };
  return (
    <button onClick={handleClick}>Abrir {title}</button>
  )
}

export const PopupButtonA = (props: Omit<PopupButtonProps, 'id' >) => <PopupButtons id={uuidv4()}  {...props} />;
export const PopupButtonB = (props: Omit<PopupButtonProps, 'id' >) => <PopupButtons id={uuidv4()}  {...props} />;
