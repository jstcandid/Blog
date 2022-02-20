import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

export const Registration = () => {
  return (
    <>
      <Input text='User name' value='input' onChange={() => {}} />
      <Input text='Email' value='input' onChange={() => {}} />
      <Input text='Password' value='input' onChange={() => {}} />
      <Input text='Confirm Password' value='input' onChange={() => {}} />
      <Button text='Login' onClick={() => {}} />
    </>
  );
};
