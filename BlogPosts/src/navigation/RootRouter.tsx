import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AddPost } from '../components/AddPost/AddPost';
import { ConfirmEmail } from '../components/ConfirmEmail/ConfirmEmail';
import { FullPost } from '../components/FullPost/FullPost';
import { Header } from '../components/Header/Header';
import { Login } from '../components/LogIn/Login';
import { PostList } from '../components/PostList/PostList';

export const RootRouter = () => {
  return (
    <BrowserRouter>
      <Header username='' />
      <Switch>
        <Route path='/login' component={Login} exact></Route>
        <Route path='/registration' component={Login} exact></Route>
        <Route path='/' component={PostList} exact></Route>
        <Route path='/post/:postId' component={FullPost} exact></Route>
        <Route path='/confirm' component={ConfirmEmail} exact></Route>
        <Route path='/add' component={AddPost} exact></Route>
      </Switch>
    </BrowserRouter>
  );
};
