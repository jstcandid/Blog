import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../App';
import { IPost } from '../Post/Post';

import styles from './FullPost.module.css';

type Params = {
  postId: string;
};

export const FullPost = () => {
  const { theme } = useContext(Context);
  const params: Params = useParams();
  const [post, setPost] = useState<IPost>();

  useEffect(() => {
    getPostInfo();
  }, []);

  const getPostInfo = async () => {
    const res = await fetch(
      'https://studapi.teachmeskills.by/blog/posts/' + params.postId
    );
    const post = await res.json();

    setPost(post);
  };

  return post ? (
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
    </div>
  ) : null;
};
