import * as types from '../actions/types';

const initalState = {
  location: '',
  date: null,
  time: null,
}

export const event = function(state = initalState, action) {
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
