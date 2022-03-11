import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../../App';
import styles from './Post.module.css';

interface IProps {
  id: number;
  image: string;
  title: string;
  text: string;
  date: string;
}

export const Post = ({ id, image, title, text, date }: IProps) => {
  const history = useHistory();

  const { theme } = useContext(Context);

  return (
    <div
      style={{ background: theme.postBackground }}
      className={`${styles.card}`}
      onClick={() => {
        history.push('/post/' + id);
      }}
    >
      <img className={`${styles.img}`} src={image} alt={title} />
      <p style={{ color: theme.titleColor }} className={`${styles.title}`}>
        {title}
      </p>
      <p style={{ color: theme.textColor }} className={`${styles.text}`}>
        {text}
      </p>
      <p style={{ color: theme.dateColor }} className={`${styles.data}`}>
        {date}
      </p>
    </div>
  );
};
