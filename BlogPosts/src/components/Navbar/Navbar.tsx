import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

interface IProps {
  makeActive: () => void;
}

export const Navbar = ({ makeActive }: IProps) => {
  return (
    <div className={`${styles.header}`}>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.header_img}`}>
          <img
            onClick={makeActive}
            className={`${styles.img}`}
            src='../images/cross_copy.png'
            alt='burgerMenu'
          />
        </div>
        <div className={`${styles.content_wrapper}`}>
          <div className={`${styles.content_navBar}`}>
            <div className={`${styles.content_allPosts}`}>
              <NavLink to='/'>
                <p>All posts</p>
              </NavLink>
            </div>
            <div>
              <NavLink to='/login'>
                <p>Login</p>
              </NavLink>
              <NavLink to='/login'>
                <p>Registration</p>
              </NavLink>
            </div>
          </div>

          <div>
            <img src='../images/tumbler.png' alt='Image' />
          </div>
        </div>
      </div>
    </div>
  );
};
