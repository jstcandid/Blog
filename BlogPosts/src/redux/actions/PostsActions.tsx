import { Dispatch } from 'redux';
import { ACTIONS } from '../constants';
import { IPost } from '../reducers/PostsReducer';

export const addPosts = (posts: IPost[]) => {
  return {
    type: ACTIONS.ADD_POSTS,
    posts: posts,
  };
};

export function fetchPosts() {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      `https://studapi.teachmeskills.by/blog/posts/?limit=100`
    );
    const result = await response.json();
    dispatch({ type: 'ADD_POSTS', posts: result.results });
  };
}

export function fetchPost(id: string) {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      `https://studapi.teachmeskills.by/blog/posts/` + id
    );
    const result = await response.json();
    dispatch({ type: 'ADD_POST', post: result });
  };
}

export function cleanPostState() {
  return async (dispatch: Dispatch) => {
    const cleanPost = {
      id: 0,
      image: '',
      title: '',
      text: '',
      date: '',
      author: '',
      lesson_num: '',
    };
    dispatch({ type: 'CLEAN_POST_STATE', post: cleanPost });
  };
}

export function searchPosts(search: string) {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      `https://studapi.teachmeskills.by/blog/posts/?search=${search}&limit=100`
    );
    const result = await response.json();
    dispatch({ type: 'SEARCH_TEXT', posts: result.results });
  };
}
