import { useContext, useState } from 'react';
import { Context } from '../../App';
import { useHistory } from 'react-router-dom';
import styles from './AddPost.module.css';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

export const AddPost = () => {
  const [image, setImage] = useState('');

  const history = useHistory();
  const { theme } = useContext(Context);

  const onLoad = (event: any) => {
    setImage(event.target.files[0]);
  };

  const onClick = (event: any) => {};

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.header_wrapper}`}>
        <p
          style={{ color: theme.color }}
          className={`${styles.header_back}`}
          onClick={history.goBack}
        >
          Back
        </p>
        <p style={{ color: theme.color }} className={`${styles.header}`}>
          {' '}
          Add new post
        </p>
      </div>
      <div className={`${styles.wrapper_body}`}>
        <div>
          <Input
            text='Title'
            value='input'
            label='label'
            width='372px'
            height='66px'
            onChange={() => {}}
          />
          <Input
            text='Lesson number'
            value='input'
            label='label'
            width='372px'
            height='66px'
            onChange={() => {}}
          />
          <Input
            text='Text'
            value='input'
            label='label'
            width='372px'
            height='273px'
            borderRadius='60px'
            onChange={() => {}}
          />
        </div>
        <div>
          <Button
            text='Add'
            title='Image'
            width='143px'
            height='66px'
            onClick={() => {}}
          />
          <input
            type='file'
            accept='image/*'
            onChange={onLoad}
            onClick={() => {}}
          />
        </div>
      </div>
      <div className={`${styles.wrapper_button}`}>
        <Button text='Add' width='372px' height='69px' onClick={() => {}} />
      </div>
    </div>
  );
};
