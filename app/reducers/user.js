import * as types from '../actions/types';

export const user = function(state = {}, action) {
  switch (action.type) {
    case 'GET_USER_PROFILE':
      return action.payload;
    default:
      return state;
  }
};
