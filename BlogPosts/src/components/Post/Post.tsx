import styles from './Post.module.css';

export interface IPost {
  id: number;
  image: string;
  title: string;
  text: string;
  date: string;
}

interface IProps {
  item: IPost;
}

export const Post = ({ item }: IProps) => {
  return (
    <div className={`${styles.card}`}>
      <img className={`${styles.img}`} src={item.image} alt={item.title} />
      <p className={`${styles.title}`}>{item.title}</p>
      <p className={`${styles.text}`}>{item.text}</p>
      <p className={`${styles.data}`}>{item.date}</p>
    </div>
  );
};
