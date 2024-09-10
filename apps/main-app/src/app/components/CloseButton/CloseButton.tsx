import React, { useState } from 'react';
import style from './ClseButton.module.css';
import usePopup from '@lib/PopupsProvider/hooks/usePopup/UsePopup';

const AnimatedButton = () => {
  const [animating, setAnimating] = useState(false);
  const {clearPopups  } = usePopup();

  const handleAnimation = () => {
    setAnimating(true);
    clearPopups()
    setTimeout(() => {
      setAnimating(false);
    }, 500);
  };

  return (
    <button
      onClick={handleAnimation}
      className={`${style.button_del} ${animating ? style.animating : ''}`}
    >
      <span className={style.button_text}></span>
      <span className={style.animation}>
        <span className={style.paper_wrapper}>
          <span className={style.paper}></span>
        </span>
        <span className={style.shredded_wrapper}>
          <span className={style.shredded}></span>
        </span>
        <span className={style.lid}></span>
        <span className={style.can}>
          <span className={style.filler}></span>
        </span>
      </span>
    </button>
  );
};
export default AnimatedButton;
