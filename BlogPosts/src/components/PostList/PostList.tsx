import { useCallback, useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { Post, IPost } from '../Post/Post';
import styles from './PostList.module.css';

const LIMIT = 5;

export const PostList = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

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
        setPosts([...posts, ...res.results]);
      });
  }, [offset]);

  return (
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
      <Button text='More...' onClick={loadMore} />
    </div>
  );
};
