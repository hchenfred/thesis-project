import * as types from './types';

export function saveComments(payload) {
  return {
    type: types.SAVE_COMMENTS,
    payload,
  };
}
