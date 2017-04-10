import * as types from './types';

export function getUserProfile(payload) {
  return {
    type: types.GET_USER_PROFILE,
    payload,
  };
}

