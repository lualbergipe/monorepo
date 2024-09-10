import React from 'react'
import style from './Footer.module.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
   <footer>
    <section>
      <ul className={style.social}>
        <li>
          <a href="https://github.com/lualbergipe/monorepo" target='__blank'><FaGithub color='#fff' /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/luis-giraldo-08668a73/" target='__blank'><FaLinkedin color='#fff' /></a>
        </li>
      </ul>
      <p className={style.legal}>Luis Alberto Giraldo</p>
    </section>
   </footer>
  )
}

export default Footer
