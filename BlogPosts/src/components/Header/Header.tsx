import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { Context } from '../../App';
import { IState } from '../../redux/store';
import { Navbar } from '../Navbar/Navbar';
import styles from './Header.module.css';

export const Header = () => {
  const { theme } = useContext(Context);
  const [active, setActive] = useState(false);
  const { isLoggedIn, username } = useSelector(
    (state: IState) => state.authReducer
  );

  const makeActive = () => {
    setActive(!active);
  };

  return (
    <div>
      {active ? (
        <Navbar makeActive={makeActive} />
      ) : (
        <div className={`${styles.wrapper}`}>
          <div className={`${styles.header}`}>
            <svg
              width='27'
              height='18'
              viewBox='0 0 27 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              onClick={makeActive}
              className={`${styles.img}`}
            >
              <rect
                x='27'
                y='18'
                width='27'
                height='4'
                rx='2'
                transform='rotate(180 27 18)'
                fill={theme.burger}
              />
              <rect
                x='27'
                y='11'
                width='27'
                height='4'
                rx='2'
                transform='rotate(180 27 11)'
                fill={theme.burger}
              />
              <rect
                x='18'
                y='4'
                width='18'
                height='4'
                rx='2'
                transform='rotate(180 18 4)'
                fill={theme.burger}
              />
            </svg>

            {isLoggedIn ? (
              <p style={theme} className={`${styles.username}`}>
                {username}
              </p>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};
