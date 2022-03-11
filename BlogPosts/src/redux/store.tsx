import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { IPostsState, PostsReducer } from './reducers/PostsReducer';

import { IAuthState, authReducer } from './reducers/authReducer';

export interface IState {
  PostsReducer: IPostsState;
  authReducer: IAuthState;
}

export const store = createStore(
  combineReducers({ PostsReducer, authReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);
