import styles from './Input.module.css';
import { KeyboardEventHandler, useContext } from 'react';
import { Context } from '../../App';
import { ChangeEventHandler } from 'react';

interface IProps {
  width?: string;
  height?: string;
  value: string;
  label: string;
  text: string;
  error?: string;
  type?: string;
  borderRadius?: string;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export function Input({
  width,
  height,
  error,
  value,
  text,
  label,
  type,
  borderRadius,
  onKeyDown,
  onChange,
}: IProps) {
  const { theme } = useContext(Context);
  return (
    <div className={`${styles.input}`}>
      <p style={{ color: theme.titleColor }}>{text}</p>
      <input
        style={{ width: width, height: height, borderRadius: borderRadius }}
        className={`${styles.input_item} ${error ? styles.error : ''}`}
        onChange={onChange}
        onKeyDown={onKeyDown}
        type={type ? type : 'text'}
      />
      {error ? <p className={`${styles.p_error}`}>{error}</p> : null}
    </div>
  );
}
