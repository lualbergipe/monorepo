import React, {memo, Suspense, useCallback, useEffect} from 'react';
import Draggable, {DraggableEventHandler} from 'react-draggable';
import style from './Popup.module.css'
import { IoClose } from "react-icons/io5";
import { PopupProps } from '../../types/types';
import usePopup from '@lib/PopupsProvider/hooks/usePopup/UsePopup';

export const Popup = memo(({ containerSize }: PopupProps) => {

  const {bringToFront, movePopup, removePopup, popups } = usePopup();

  useEffect(() => {
    popups.forEach(popup => {
      const newPos = { ...popup.defaultPosition };
      let updated = false;
      if (newPos.x + newPos.width > containerSize.width && containerSize.width > newPos.width) {
        newPos.x = containerSize.width - newPos.width -1;
        updated = true;
      }
      if (newPos.y + newPos.height > containerSize.height) {
        newPos.y = containerSize.height - newPos.height -1;
        updated = true;
      }
      if (updated) {
        movePopup(popup.id, { x: newPos.x, y: newPos.y });
      }
    });
  }, [containerSize, movePopup]);
  /**
   * Con esta funcion lo que hago es validar si el popup realmente tiene algun cambio para ser renderizado, de esta manera
   * Evitamos re-renderizados innecesarios
   **/
  const handleDragStop: DraggableEventHandler = useCallback((e, data) => {
    const id = data.node.getAttribute('data-id');
    const gridSize = 10;
    if (id) {
      const snapX = Math.round(data.x / gridSize) * gridSize;
      const snapY = Math.round(data.y / gridSize) * gridSize;
      movePopup(id, { x: snapX, y: snapY });
    }
  }, [movePopup]);
  return (
    <Suspense fallback={<div>Cargando popup...</div>}>
      {popups.map(popup => (
        <Draggable
          key={popup.id}
          defaultPosition={{ x: popup.defaultPosition.x, y: popup.defaultPosition.y }}
          position={{ x: popup.defaultPosition.x, y: popup.defaultPosition.y }}
          onStop={handleDragStop}
          bounds="parent"
        >
          <div
           data-id={popup.id}
          className={style.content__popup}
          style={{
            position: 'absolute',
            width: popup.defaultPosition.width,
            height: popup.defaultPosition.height,
            zIndex:popup.zIndex }}
            onClick={() => bringToFront(popup.id)}>
            <div className={style.header__popup}>
              <h2>{popup.title}</h2>
              <IoClose
                color='#fff'
                onClick={() => removePopup(popup.id)}/>
            </div>
            <div className={style.description__popup}>
            <span>{popup.description}</span>
            </div>
          </div>
        </Draggable>
      ))}
      </Suspense>
  );
}) ;
export default { Popup };
