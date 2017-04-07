import * as types from '../actions/types';

export const simpleCounter = function(state = 0, action) {
  switch(action.type) {
    case 'ADD_COUNT':
      return state + 1;
    default: 
      return state;
  }
};

