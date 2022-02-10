import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Login } from '../components/LogIn/Login';
import { PostList } from '../components/PostList/PostList';

export const RootRouter = () => {
  return (
    <BrowserRouter>
      <Header username='' />
      <Switch>
        <Route path='/login' component={Login} exact></Route>
        <Route path='/' component={PostList}></Route>
      </Switch>
    </BrowserRouter>
  );
};
