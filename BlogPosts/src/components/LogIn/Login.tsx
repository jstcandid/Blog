import styles from './Login.module.css';
import { useEffect, useState } from 'react';
import { Registration } from '../Registration/Registration';
import { LoginTab } from '../LoginTab/LoginTab';
import { Link, useLocation } from 'react-router-dom';

interface IProps {
  login: boolean;
  username: string;
}

export const Login = ({ login, username }: IProps) => {
  const location = useLocation();
  const [mode, setMode] = useState(location.pathname.includes('login'));

  useEffect(() => {
    setMode(location.pathname.includes('login'));
  }, [location.pathname]);

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.login}`}>
        <div className={`${styles.header}`}>
          <Link style={{ textDecoration: 'none' }} to='/login'>
            <pre className={mode ? `${styles.onChange}` : ''}>Login</pre>
          </Link>

          <pre> | </pre>

          <Link style={{ textDecoration: 'none' }} to='/registration'>
            <pre className={mode ? `` : `${styles.onChange}`}>
              {' '}
              Registration
            </pre>
          </Link>
        </div>
        {mode ? <LoginTab /> : <Registration />}
      </div>
    </div>
  );
};
