import * as types from './types';

export function saveSuggestedActivity(payload) {
  return {
    type: types.SAVE_SUGGESTED_ACTIVITY,
    payload,
  };
}

export function isSuggestedActivity(payload) {
  return {
    type: types.IS_SUGGESTED_ACTIVITY,
    payload,
  };
}

