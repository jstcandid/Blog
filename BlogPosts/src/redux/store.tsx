import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { IPostsState, PostsReducer } from './reducers/PostsReducer';

export interface IState {
  PostsReducer: IPostsState;
}

export const store = createStore(
  combineReducers({ PostsReducer }),
  composeWithDevTools()
);
