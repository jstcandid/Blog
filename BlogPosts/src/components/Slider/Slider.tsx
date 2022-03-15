import { useState } from 'react';
import { useStore } from 'react-redux';
import styles from './Slider.module.css';

export const Slider = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className={`${styles.container}`}>
        <div
          className={`${styles.inner_container}`}
          style={{
            width: 130 * 7,
            transform: `translateX(${-index * (130 * 2)}px)`,
            transition: 'all 3s linear ',
          }}
        >
          <div className={`${styles.card}`}>1</div>
          <div className={`${styles.card}`}>2</div>
          <div className={`${styles.card}`}>3</div>
          <div className={`${styles.card}`}>4</div>
          <div className={`${styles.card}`}>5</div>
          <div className={`${styles.card}`}>6</div>
          <div className={`${styles.card}`}>7</div>
          <div className={`${styles.card}`}>8</div>
        </div>
      </div>
      <button onClick={() => setIndex((prev) => prev - 1)}>{'<'}</button>
      <button onClick={() => setIndex((prev) => prev + 1)}>{'>'}</button>
    </>
  );
};
