import styles from './Input.module.css';
import { useContext } from 'react';
import { Context } from '../../App';
import { ChangeEventHandler } from 'react';

interface IProps {
  value: string;
  text: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export function Input({ text, value, onChange }: IProps) {
  const { theme } = useContext(Context);
  return (
    <div className={`${styles.input}`}>
      <p style={{ color: theme.titleColor }}>{text}</p>
      <input
        className={`${styles.input_item}`}
        onChange={onChange}
        type='text'
      />
    </div>
  );
}
