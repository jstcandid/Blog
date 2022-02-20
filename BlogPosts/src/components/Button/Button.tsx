import styles from './Button.module.css';
import { useContext } from 'react';
import { Context } from '../../App';
interface IProps {
  text: string;
  onClick: () => void;
}

export function Button({ text, onClick }: IProps) {
  const { theme } = useContext(Context);
  return (
    <div>
      <button
        style={{ color: theme.colorButton, background: theme.backgroundButton }}
        onClick={onClick}
        type='button'
        className={`${styles.button}`}
      >
        {text}
      </button>
    </div>
  );
}
