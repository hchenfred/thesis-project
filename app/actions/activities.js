import * as types from './types';

export function saveActivities(payload) {
  return {
    type: types.SAVE_ACTIVITIES,
    payload,
  };
}