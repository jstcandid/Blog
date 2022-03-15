import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Context } from '../../App';
import { IState } from '../../redux/store';
import { Toggler } from '../Toggler/Toggler';
import styles from './Navbar.module.css';

interface IProps {
  makeActive: () => void;
}

export const Navbar = ({ makeActive }: IProps) => {
  const { isDark, changeIsDark, theme } = useContext(Context);
  const { isLoggedIn } = useSelector((state: IState) => state.authReducer);

  return (
    <div style={theme} className={`${styles.header}`}>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.header_img}`}>
          <svg
            className={`${styles.img}`}
            onClick={makeActive}
            width='33'
            height='33'
            viewBox='0 0 33 33'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M17.5704 16.355L32.4584 1.46706C32.7939 1.13147 32.7939 0.587383 32.4584 0.251797C32.1227 -0.0837891 31.5787 -0.0837891 31.243 0.251797L16.3551 15.1396L1.46714 0.251689C1.13155 -0.0838965 0.587463 -0.0838965 0.251877 0.251689C-0.083816 0.587275 -0.083816 1.13137 0.251877 1.46695L15.1397 16.355L0.25177 31.2429C-0.0839233 31.5786 -0.0839233 32.1226 0.25177 32.4583C0.419563 32.6261 0.639455 32.71 0.859455 32.71C1.07946 32.71 1.29935 32.6261 1.46714 32.4583L16.3551 17.5704L31.243 32.4583C31.4109 32.6261 31.6307 32.71 31.8507 32.71C32.0707 32.71 32.2906 32.6261 32.4584 32.4583C32.7939 32.1226 32.7939 31.5786 32.4584 31.2429L17.5704 16.355Z'
              fill={isDark ? '#FFFFFF' : '#016efc'}
            />
          </svg>
        </div>

        <div className={`${styles.content_wrapper}`}>
          <div className={`${styles.content_navBar}`}>
            <div className={`${styles.content_allPosts}`}>
              <Link style={{ textDecoration: 'none' }} to='/'>
                <p style={theme}>All posts</p>
              </Link>
            </div>
            <div>
              {isLoggedIn ? (
                <Link style={{ textDecoration: 'none' }} to='/myPost'>
                  <p style={theme}>My Post</p>
                </Link>
              ) : (
                <Link style={{ textDecoration: 'none' }} to='/login'>
                  <p style={theme}>Login</p>
                </Link>
              )}
              {isLoggedIn ? (
                <Link style={{ textDecoration: 'none' }} to='/addPost'>
                  <p style={theme}>Add Post</p>
                </Link>
              ) : (
                <Link style={{ textDecoration: 'none' }} to='/registration'>
                  <p style={theme}>Registration</p>
                </Link>
              )}
            </div>
          </div>

          <div>
            <Toggler onClick={changeIsDark} />
          </div>
        </div>
      </div>
    </div>
  );
};
