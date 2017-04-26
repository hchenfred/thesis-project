import * as types from '../actions/types';

const initState = [{name: 'asdfadf', body: 'asdfasdfaf'}, {name: 'aaa', body: 'awhutaf'}, {name: 'adddddf', body: 'adsfklf'}];

export const comments = function(state = initState, action) {
  switch (action.type) {
    case 'GET_COMMENTS':
      return action.payload;
    default:
      return state;
  }
};