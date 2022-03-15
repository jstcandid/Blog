import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Context } from '../../App';
import { cleanPostState, fetchPost } from '../../redux/actions/PostsActions';
import { IState } from '../../redux/store';
import { useHistory } from 'react-router-dom';
import styles from './FullPost.module.css';

type Params = {
  postId: string;
};

export const FullPost = () => {
  const { theme, isDark } = useContext(Context);
  const params: Params = useParams();

  const post = useSelector((state: IState) => state.PostsReducer.post);
  const dispatch = useDispatch();

  const history = useHistory();
  useEffect(() => {
    getPostInfo();
    return () => {
      dispatch(cleanPostState());
    };
  }, []);

  const getPostInfo = async () => {
    dispatch(fetchPost(params.postId));
  };

  return post.title ? (
    <div className={`${styles.wrapper}`}>
      <p style={{ color: theme.color }} className={`${styles.header}`}>
        {' '}
        Selected Post
      </p>
      <div
        style={{ background: theme.postBackground }}
        className={`${styles.card}`}
      >
        <img className={`${styles.img}`} src={post.image} alt={post.title} />
        <p style={{ color: theme.titleColor }} className={`${styles.title}`}>
          {post.title}
        </p>
        <p style={{ color: theme.textColor }} className={`${styles.text}`}>
          {post.text}
        </p>
        <p style={{ color: theme.dateColor }} className={`${styles.data}`}>
          {post.date}
        </p>
      </div>
      <svg
        className={`${styles.arrow}`}
        onClick={history.goBack}
        xmlns='http://www.w3.org/2000/svg'
        fill-rule='evenodd'
        clip-rule='evenodd'
        width='33'
        height='33'
      >
        <path
          d='M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm3 5.753l-6.44 5.247 6.44 5.263-.678.737-7.322-6 7.335-6 .665.753z'
          fill={isDark ? '#FFFFFF' : '#016efc'}
        />
      </svg>
    </div>
  ) : null;
};
