import * as types from '../actions/types';

let initialState = [];

export const activities = function(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_ACTIVITIES':
      return action.payload;
    default:
      return state;
  }
};
