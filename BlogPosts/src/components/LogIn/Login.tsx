import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import styles from './Login.module.css';
import { useState } from 'react';

interface IProps {
  login: boolean;
  username: string;
}

export const Login = ({ login, username }: IProps) => {
  const [mode, setMode] = useState(true);

  const switchTo = (val: boolean) => {
    setMode(val);
  };

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.login}`}>
        <div className={`${styles.header}`}>
          <pre
            className={mode ? `${styles.onChange}` : ''}
            onClick={() => switchTo(true)}
          >
            Login
          </pre>
          <pre> | </pre>
          <pre
            className={mode ? `` : `${styles.onChange}`}
            onClick={() => switchTo(false)}
          >
            {' '}
            Registration
          </pre>
        </div>
        {mode ? (
          <>
            <Input text='Email' value='input' onChange={() => {}} />
            <Input text='Password' value='input' onChange={() => {}} />
            <Button text='Login' onClick={() => {}} />
          </>
        ) : (
          <>
            <Input text='User name' value='input' onChange={() => {}} />
            <Input text='Email' value='input' onChange={() => {}} />
            <Input text='Password' value='input' onChange={() => {}} />
            <Input text='Confirm Password' value='input' onChange={() => {}} />
            <Button text='Login' onClick={() => {}} />
          </>
        )}
      </div>
    </div>
  );
};
