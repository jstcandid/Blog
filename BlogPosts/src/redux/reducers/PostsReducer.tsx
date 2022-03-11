import { ACTIONS } from '../constants';

export interface IPost {
  id: number;
  image: string;
  title: string;
  text: string;
  date: string;
  author: string;
  lesson_num: string;
}
export interface IPostsState {
  posts: IPost[];
  post: IPost;
}

const defaultState: IPostsState = {
  posts: [],
  post: {
    id: 0,
    image: '',
    title: '',
    text: '',
    date: '',
    author: '',
    lesson_num: '',
  },
};

export function PostsReducer(state = defaultState, action: any) {
  if (action.type === ACTIONS.ADD_POSTS) {
    return { ...state, posts: action.posts };
  }
  if (action.type === ACTIONS.ADD_POST) {
    const post = action.post;
    return { ...state, post: post };
  }
  if (action.type === ACTIONS.CLEAN_POST_STATE) {
    const post = action.post;
    return { ...state, post: post };
  }
  if (action.type === ACTIONS.SEARCH_TEXT) {
    return { ...state, posts: action.posts };
  }
  return state;
}
