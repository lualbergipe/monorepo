import usePopup from '@lib/PopupsProvider/hooks/usePopup/UsePopup';
import React from 'react';

const CloseButton = () => {
  const { clearPopups } = usePopup();

  return (
    <button onClick={clearPopups}>Cerrar Todos los Popups</button>
  )
}

export default CloseButton
