import * as types from '../actions/types';

export const event = function(state = {}, action) {
  switch (action.type) {
    case 'SAVE_EVENT':
      return action.payload;
    case 'SAVE_TIME':
      return Object.assign({}, state, {
        time: action.time,
      });
    case 'SAVE_DATE':
      return Object.assign({}, state, {
        date: action.date,
      });
    default:
      return state;
  }
};
