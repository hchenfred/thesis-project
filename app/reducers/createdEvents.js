import * as types from '../actions/types';

export const createdEvents = function (state = [], action) {
  switch (action.type) {
    case 'SAVE_CREATED_EVENTS':
      return action.events;
    default:
      return state;
  }
};
