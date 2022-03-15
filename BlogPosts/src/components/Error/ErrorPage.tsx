import { useContext } from 'react';
import { Context } from '../../App';
import styles from './ErrorPage.module.css';

export const ErrorPage = () => {
  const { theme } = useContext(Context);
  return (
    <div className={`${styles.wrapper}`}>
      <p style={{ color: theme.color }} className={`${styles.header}`}>
        {' '}
        Error
      </p>
    </div>
  );
};
