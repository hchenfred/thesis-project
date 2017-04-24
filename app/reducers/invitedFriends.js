import * as types from '../actions/types';

export const invitedFriends = function (state = [], action) {
  switch (action.type) {
    case 'SAVE_FRIEND_TO_INVITATION':
      const temp = state.slice();
      temp.push(action.payload);
      return temp;
    case 'REMOVE_FRIEND_FROM_INVITATION':
      const email = action.email;
      return state.filter(friend => friend.email !== email);
    default:
      return state;
  }
};
