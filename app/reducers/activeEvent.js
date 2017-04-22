import * as types from '../actions/types';

export const activeEvent = function(state = {}, action) {
  switch (action.type) {
    case 'SAVE_ACTIVE_EVENT':
      return action.payload;
    default:
      return state;
  }
};

