import { IPost } from '../../components/Post/Post';
import { ACTIONS } from '../constants';

export interface IPostsState {
  posts: IPost[];
}

const defaultState: IPostsState = {
  posts: [],
};

export function PostsReducer(state = defaultState, action: any) {
  if (action.type === ACTIONS.ADD_POSTS) {
    const newPosts = [...state.posts, ...action.posts];
    return { posts: newPosts };
  }
  return state;
}
