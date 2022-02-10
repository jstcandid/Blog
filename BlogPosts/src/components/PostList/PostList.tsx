import { useEffect, useState } from 'react';
import { Post, IPost } from '../Post/Post';
import styles from './PostList.module.css';

export const PostList = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    fetch('https://studapi.teachmeskills.by/blog/posts/?limit=100')
      .then((response) => response.json())
      .then((res) => {
        const newPosts = res.results.map((post: any) => {
          return {
            id: post.id,
            image: post.image,
            title: post.title,
            text: post.text,
            date: post.date,
          };
        });
        setPosts(newPosts);
      });
  }, []);

  return (
    <div className={`${styles.container}`}>
      {posts.map((item: any) => (
        <Post item={item} />
      ))}
    </div>
  );
};
