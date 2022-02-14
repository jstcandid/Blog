import { useContext } from 'react';
import styles from './Button.module.css';
import { Context } from '../../App';
interface IProps {
  text: string;
  onClick: () => void;
}

export function Button({ text, onClick }: IProps) {
  const contextValue = useContext(Context);
  return (
    <div>
      <button onClick={onClick} type='button' className={`${styles.button}`}>
        {text}
      </button>
    </div>
  );
}
