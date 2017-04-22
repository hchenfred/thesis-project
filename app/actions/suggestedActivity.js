import * as types from './types';

export function saveSuggestedActivity(payload) {
  return {
    type: types.SAVE_SUGGESTED_ACTIVITY,
    payload,
  };
}

export function saveSuggestedActivityName(payload) {
  return {
    type: types.SAVE_SUGGESTED_ACTIVITY_NAME,
    payload,
  };
}

export function saveSuggestedActivityLocation(payload) {
  return {
    type: types.SAVE_SUGGESTED_ACTIVITY_LOCATION,
    payload,
  };
}

export function isSuggestedActivity(payload) {
  return {
    type: types.IS_SUGGESTED_ACTIVITY,
    payload,
  };
}

