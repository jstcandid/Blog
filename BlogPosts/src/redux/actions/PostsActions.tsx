import { IPost } from '../../components/Post/Post';
import { ACTIONS } from '../constants';

export const addPosts = (posts: IPost[]) => {
  return {
    type: ACTIONS.ADD_POSTS,
    posts: posts,
  };
};
