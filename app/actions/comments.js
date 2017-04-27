import * as types from './types';

export function getComments(payload) {
  return {
    type: types.GET_COMMENTS,
    payload,
  };
}
