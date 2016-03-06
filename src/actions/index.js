import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=dkdalkfjdfjdleiekfinb';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}


// Import any rest api call library here: like axios, superagent
// create a function for each Action.
// Action is Object with 2 properties: type, and payload
// type value: for example: FETCH_POSTS
//   should create a constant and export it out because it need to match in reducer_post
// payload value: is the result of the action
// Need to export the function out.


export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);
  return {
    type: CREATE_POST,
    payload: request
  };
}
