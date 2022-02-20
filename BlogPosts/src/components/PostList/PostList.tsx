import { useCallback, useEffect, useState } from 'react';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Context } from '../../App';
import { IState } from '../../redux/store';
import { Post, IPost } from '../Post/Post';
import styles from './PostList.module.css';

const LIMIT = 5;

export const PostList = () => {
  const posts = useSelector((state: IState) => state.PostsReducer.posts);
  const dispatch = useDispatch();
  const { theme } = useContext(Context);
  const [offset, setOffset] = useState(0);

  const loadMore = useCallback(() => {
    setOffset(posts.length);
  }, [posts]);

  useEffect(() => {
    fetch(
      `https://studapi.teachmeskills.by/blog/posts/?limit=${LIMIT}&offset=${offset}`
    )
      .then((response) => response.json())
      .then((res) => {
        dispatch({ type: 'ADD_POSTS', posts: res.results });
      });
  }, [offset]);

  return (
    <>
      <div className={`${styles.container}`}>
        {posts.map((item: IPost) => (
          <Post
            key={item.id}
            id={item.id}
            title={item.title}
            text={item.text}
            image={item.image}
            date={item.date}
          />
        ))}
        <div className={`${styles.a}`}>
          <a style={{ color: theme.textColor }} onClick={loadMore}>
            More...
          </a>
        </div>
      </div>
    </>
  );
};
