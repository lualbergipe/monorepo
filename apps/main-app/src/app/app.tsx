// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import {useState, useRef} from 'react';
import style from './app.module.css'
import CloseButton from './components/CloseButton/CloseButton';
import Modal from './components/Modal/Modal';
import ModalForm from './components/Modal/ModalForm';
import { v4 as uuidv4 } from 'uuid';
import { Popup } from '@lib/PopupsProvider/components/Popup/Popup';
import usePopup from '@lib/PopupsProvider/hooks/usePopup/UsePopup';
import useResizeObserver from '@lib/PopupsProvider/hooks/UseResizeObserver/useResizeObserver';
import { PopupButtonA, PopupButtonB } from '@lib/PopupsProvider/lib/PopupsProvider';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


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
    <div className={style.content} >
      <Header/>
      <div className={style.container}>
      <div ref={containerRef} className={style.container__popup}>
        <div className={style.container__btn} style={{flexDirection: containerSize && containerSize.width < 410 ? 'column' : 'row'}}>
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
          <button className={style.btn__popup} onClick={openModal}>Popup personalizado</button>
        </div>
        <Popup containerSize={containerSize}/>
        <Modal isOpen={modalIsOpen} onClose={closeModal}>
          <h1>Crea tu popup personalizada</h1>
          <ModalForm isOpen={modalIsOpen} onClose={closeModal} onSubmit={handleFormSubmit}/>
        </Modal>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
