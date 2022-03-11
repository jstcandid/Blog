import { useCallback, useEffect, useState } from 'react';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Context } from '../../App';
import { fetchPosts, searchPosts } from '../../redux/actions/PostsActions';
import { IPost } from '../../redux/reducers/PostsReducer';
import { IState } from '../../redux/store';
import { Input } from '../Input/Input';
import { Post } from '../Post/Post';
import styles from './PostList.module.css';

const LIMIT = 5;

export const PostList = () => {
  const posts = useSelector((state: IState) => state.PostsReducer.posts);
  const dispatch = useDispatch();
  const { theme } = useContext(Context);
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState('');

  const loadMore = useCallback(() => {
    setOffset(posts.length);
  }, [posts]);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [offset]);

  const onChange = useCallback(
    (event) => {
      setSearch(event.target.value);
      dispatch(searchPosts(search));
    },
    [search]
  );

  const onKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        dispatch(searchPosts(search));
      }
    },
    [search]
  );

  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.post_header}`}>
          <h1 style={{ color: theme.dateColor }}>All Posts</h1>
          <div className={`${styles.post_search}`}>
            <h1 style={{ color: theme.dateColor }}>Search</h1>
            <Input
              width='260px'
              height='44px'
              text=''
              label='input'
              value={search}
              onChange={onChange}
              onKeyDown={onKeyDown}
            />
          </div>
        </div>
        <div className={`${styles.wrapper}`}>
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
      </div>
    </>
  );
};
