import * as types from './types';

export function saveEvent(payload) {
  return {
    type: types.SAVE_EVENT,
    payload,
  };
}

export function saveDate(date) {
  return {
    type: types.SAVE_DATE,
    date,
  };
}

export function saveTime(time) {
  return {
    type: types.SAVE_TIME,
    time,
  };
}
