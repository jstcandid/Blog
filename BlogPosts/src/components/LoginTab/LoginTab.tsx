import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login, register } from '../../redux/actions/authActions';
import { IState } from '../../redux/store';
import { validationService } from '../../services/validation';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

export const LoginTab = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const error = useSelector((state: IState) => state.authReducer.error);

  const isLoggedIn = useSelector(
    (state: IState) => state.authReducer.isLoggedIn
  );

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  // const emailState = useSelector((state: IState) => state.authReducer.email);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/');
    }
  }, [isLoggedIn]);

  const onChangeEmail = useCallback((event) => {
    const value = event.target.value;
    setEmail(value);
    const error = validationService.validateEmail(value);

    setErrors((errors) => ({ ...errors, email: error }));
  }, []);
  const onChangePassword = useCallback((event) => {
    setPassword(event.target.value);
  }, []);

  const onClick = () => {
    const errors = {
      email: validationService.validateEmail(email),
      password: validationService.validatePassword(password),
    };
    setErrors(errors);

    const values = Object.values(errors);
    const isValid = values.every((value) => value === '');

    if (isValid) {
      dispatch(login(email, password));
    }
  };
  const errorValues = error ? Object.values(error).flat() : '';

  return (
    <>
      <Input
        text='Email'
        value=''
        label='input'
        onChange={onChangeEmail}
        error={errors.email}
      />
      <Input
        value=''
        text='Password'
        label='input'
        onChange={onChangePassword}
        error={errors.password}
        type='password'
      />
      <p>{errorValues}</p>
      <Button text='Login' onClick={onClick} />
    </>
  );
};
