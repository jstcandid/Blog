import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Context } from '../../App';
import { cleanPostState, fetchPost } from '../../redux/actions/PostsActions';
import { IState } from '../../redux/store';
import { useHistory } from 'react-router-dom';
import styles from './AddPost.module.css';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

type Params = {
  postId: string;
};

export const AddPost = () => {
  const history = useHistory();
  const { theme, isDark, changeIsDark } = useContext(Context);
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
        </div>
      </div>
      <div className={`${styles.wrapper_button}`}>
        <Button text='Add' width='372px' height='69px' onClick={() => {}} />
      </div>
    </div>
  );
};
