import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { AddPost } from '../components/AddPost/AddPost';
import { ConfirmEmail } from '../components/ConfirmEmail/ConfirmEmail';
import { ErrorPage } from '../components/Error/ErrorPage';
import { FullPost } from '../components/FullPost/FullPost';
import { Header } from '../components/Header/Header';
import { Login } from '../components/LogIn/Login';
import { PostList } from '../components/PostList/PostList';
import { init } from '../redux/actions/authActions';
import { IState } from '../redux/store';

export const RootRouter = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: IState) => state.authReducer);

  useEffect(() => {
    dispatch(init());
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/login' component={Login} exact></Route>
        <Route path='/registration' component={Login} exact></Route>
        <Route path='/' component={PostList} exact></Route>
        <Route path='/post/:postId' component={FullPost} exact></Route>
        <Route path='/confirm' component={ConfirmEmail} exact></Route>
        <Route path='/myPost' component={AddPost} exact></Route>
        <Route path='/addpost'>
          {isLoggedIn ? <AddPost /> : <Redirect to={'/login'} />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
