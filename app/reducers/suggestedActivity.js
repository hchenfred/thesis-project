import * as types from '../actions/types';

const initialState = {
  isSuggestedActivity: false,
  name: '',
  location: '',
  event_id: null,
};

export const suggestedActivity = function (state = initialState, action) {
  switch (action.type) {
    case 'SAVE_SUGGESTED_ACTIVITY':
      return Object.assign({}, state, {
        name: action.payload.name,
        location: action.payload.location,
        event_id: action.payload.event_id,
      });
    case 'IS_SUGGESTED_ACTIVITY':
      return Object.assign({}, state, {
        isSuggestedActivity: action.payload,
      });
    case 'SAVE_SUGGESTED_ACTIVITY_NAME':
      return Object.assign({}, state, {
        name: action.payload,
      });
    case 'SAVE_SUGGESTED_ACTIVITY_LOCATION':
      return Object.assign({}, state, {
        location: action.payload,
      });
    default:
      return state;
  }
};
