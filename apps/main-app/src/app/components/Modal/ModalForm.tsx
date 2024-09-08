import React, {useState, FormEvent} from 'react'
import style from './Modal.module.css'
import { ModalFormProps } from '@apps/main-app/types/types';


const ModalForm = ({ isOpen, onClose, onSubmit }:ModalFormProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [width, setWidth] = useState(100); // Valor inicial predeterminado para el ancho
  const [height, setHeight] = useState(100);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Validar que todos los campos estén llenos
    if (!title.trim() || !description.trim() || x <= 0 || y <= 0 || width <= 0 || height <= 0) {
      alert("Todos los campos deben ser completados correctamente.");
      return;
    }
    onSubmit(title, description, { x, y, width, height });
    onClose();
  }
  return (
    <div className={style.modal__overlay}>
    <form onSubmit={handleSubmit} className={`${style.modal_content} ${style.modal_form}`}>
      <label>
        Título:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Contenido:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
          X (posición):
          <input type="range" min="0" max={window.innerWidth} value={x} onChange={(e) => setX(Number(e.target.value))} />
          <span>{x}px</span>
        </label>
        <label>
          Y (posición):
          <input type="range" min="0" max={window.innerHeight} value={y} onChange={(e) => setY(Number(e.target.value))} />
          <span>{y}px</span>
        </label>
        <label>
          Ancho:
          <input type="range" min="100" max="1000" value={width} onChange={(e) => setWidth(Number(e.target.value))} />
          <span>{width}px</span>
        </label>
        <label>
          Altura:
          <input type="range" min="100" max="800" value={height} onChange={(e) => setHeight(Number(e.target.value))} />
          <span>{height}px</span>
        </label>
      <button type="submit">Guardar</button>
      <button type="button" onClick={onClose} style={{ marginLeft: '10px' }}>Cerrar</button>
    </form>
  </div>
  )
}

export default ModalForm
