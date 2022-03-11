import styles from './Button.module.css';
import { useContext } from 'react';
import { Context } from '../../App';
interface IProps {
  text: string;
  fontSize?: string;
  width?: string;
  height?: string;
  title?: string;
  borderRadius?: string;
  onClick: () => void;
}

export function Button({
  title,
  width,
  height,
  fontSize,
  text,
  onClick,
}: IProps) {
  const { theme } = useContext(Context);
  return (
    <div>
      <p style={{ color: theme.titleColor }}>{title}</p>
      <button
        style={{
          color: theme.colorButton,
          background: theme.backgroundButton,
          width: width,
          height: height,
          fontSize: fontSize,
        }}
        onClick={onClick}
        type='button'
        className={`${styles.button}`}
      >
        {text}
      </button>
    </div>
  );
}
