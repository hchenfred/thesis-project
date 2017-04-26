import * as types from '../actions/types';

const initState = [];

export const comments = function(state = initState, action) {
  switch (action.type) {
    case 'GET_COMMENTS':
      return action.payload;
    default:
      return state;
  }
};