// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import {useState, useRef} from 'react';
import style from './app.module.css'
import CloseButton from './components/CloseButton';
import { PopupButtonA, PopupButtonB } from '../../../../PopupsProvider/src/lib/PopupsProvider';
import Modal from './components/Modal/Modal';
import ModalForm from './components/Modal/ModalForm';
import { v4 as uuidv4 } from 'uuid';
import useResizeObserver from './hooks/UseResizeObserver/useResizeObserver';
import { Popup } from '@lib/PopupsProvider/components/Popup/Popup';
import usePopup from './hooks/usePopup/UsePopup';


export function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerSize = useResizeObserver(containerRef);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const {addPopup  } = usePopup();



  const handleFormSubmit = (title: string, description: string, dimensions: { x: number, y: number, width: number, height: number }) => {
    addPopup({
      id:uuidv4(), title, description, defaultPosition:dimensions,
      zIndex: 1
    });
  };

  return (
    <div>
      <div className={style.header}>
      <h1>Gestión de Tareas</h1>
      <CloseButton/>
      </div>
      <div ref={containerRef} className={style.container__popup}>
        <PopupButtonA
            title="Popup A"
            description="Tarea del boton A"
            defaultPosition={{ x: 50, y: 50, width: 200, height: 150 }}
          />
        <PopupButtonB
            title="Popup B"
             description="Tarea del boton B"
            defaultPosition={{ x: 100, y: 100, width: 350, height: 200 }}
          />
        <Popup containerSize={containerSize}/>
        <button onClick={openModal}>Abrir Popup A</button>
      <Modal isOpen={modalIsOpen} onClose={closeModal}>
        <h1>Crea tu popup personalizada</h1>
        <ModalForm isOpen={modalIsOpen} onClose={closeModal} onSubmit={handleFormSubmit}/>
      </Modal>
      </div>
    </div>
  );
}

export default App;
