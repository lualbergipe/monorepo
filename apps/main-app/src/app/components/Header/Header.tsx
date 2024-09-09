import React from 'react'
import CloseButton from '../CloseButton/CloseButton';
import style from './Header.module.css'
const Header = () => {
  return (
    <div className={style.header}>
    <h1>Gestión de Tareas</h1>
    <CloseButton/>
  </div>
  )
}

export default Header
