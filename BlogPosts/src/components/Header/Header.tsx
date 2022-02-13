import { useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import styles from './Header.module.css';

interface IProps {
  username: string;
}

export const Header = ({ username }: IProps) => {
  const [active, setActive] = useState(false);

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
            <img
              onClick={makeActive}
              className={`${styles.img}`}
              src='../images/Menu.png'
              alt='burgerMenu'
            />
            <p>{username}</p>
          </div>
        </div>
      )}
    </div>
  );
};
