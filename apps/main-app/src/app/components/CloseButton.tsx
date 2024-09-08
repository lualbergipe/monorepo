import React from 'react';
import usePopup from '../hooks/usePopup/UsePopup';

const CloseButton = () => {
  const { clearPopups } = usePopup();

  return (
    <button onClick={clearPopups}>Cerrar Todos los Popups</button>
  )
}

export default CloseButton
