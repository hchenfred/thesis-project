import * as types from './types';

export function saveActiveEvent(payload) {
  return {
    type: types.SAVE_ACTIVE_EVENT,
    payload,
  };
}

