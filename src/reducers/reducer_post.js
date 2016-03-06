import { FETCH_POSTS } from '../actions/index';

const INITIAL_STATE = {all:[], post: null};

export default function(state=INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {...state, all: action.payload.data};
      break;
    default:
      return state;
  }
}

/*
  Reducers is a function that take 2 argument: state and action
  and return a value of the application

  Need to export the reducer and include in the combineReducers

*/
