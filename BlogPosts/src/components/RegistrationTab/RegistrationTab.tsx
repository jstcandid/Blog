import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { register } from '../../redux/actions/authActions';
import { IState } from '../../redux/store';
import { validationService } from '../../services/validation';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

export const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector((state: IState) => state.authReducer.error);
  const emailState = useSelector((state: IState) => state.authReducer.email);
  const history = useHistory();

  useEffect(() => {
    if (emailState) {
      history.push('/confirm');
    }
  }, [emailState]);

  const onChangeUsername = useCallback(
    (event) => {
      setUsername(event.target.value);
    },
    [username]
  );
  const onChangeEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
      const error = validationService.validateEmail(event.target.value);
      setErrors((errors) => ({ ...errors, email: error }));
    },
    [email]
  );
  const onChangePassword = useCallback(
    (event) => {
      setPassword(event.target.value);
      const error = validationService.validatePassword(event.target.value);
      setErrors((errors) => ({ ...errors, password: error }));
    },
    [password]
  );
  const onChangeConfPassword = useCallback(
    (event) => {
      setConfPassword(event.target.value);
    },
    [confPassword]
  );

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confPassword: '',
  });

  const onClick = () => {
    const errors = {
      username: validationService.validateName(username),
      email: validationService.validateEmail(email),
      password: validationService.validatePassword(password),
      confPassword: validationService.validateRepeatedPassword(
        password,
        confPassword
      ),
    };
    setErrors(errors);

    const values = Object.values(errors);
    const isValid = values.every((value) => value === '');

    if (isValid) {
      dispatch(register({ username, email, password }));
    }
  };
  const errorValues = error ? Object.values(error).flat() : '';
  console.log(errorValues);
  return (
    <>
      <Input
        value={username}
        text='User name'
        label='input'
        onChange={onChangeUsername}
        error={errors.username}
      />
      <Input
        value={email}
        text='Email'
        label='input'
        onChange={onChangeEmail}
        error={errors.email}
      />
      <Input
        type='password'
        value={password}
        text='Password'
        label='input'
        onChange={onChangePassword}
        error={errors.password}
      />
      <Input
        type='password'
        value={confPassword}
        text='Confirm Password'
        label='input'
        onChange={onChangeConfPassword}
        error={errors.confPassword}
      />
      <Button text='Login' onClick={onClick} />
    </>
  );
};
