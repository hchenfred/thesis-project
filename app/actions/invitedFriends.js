import * as types from './types';

export function saveFriendToInvitationList(payload) {
  return {
    type: types.SAVE_FRIEND_TO_INVITATION,
    payload,
  };
}

export function removeFriendFromInvitationList(email) {
  return {
    type: types.REMOVE_FRIEND_FROM_INVITATION,
    email,
  };
}

