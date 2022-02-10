import styles from './Input.module.css';

import { ChangeEventHandler } from 'react';

interface IProps {
  value: string;
  text: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export function Input({ text, value, onChange }: IProps) {
  return (
    <div className={`${styles.input}`}>
      <p>{text}</p>
      <input
        className={`${styles.input_item}`}
        onChange={onChange}
        type='text'
      />
    </div>
  );
}
