import * as types from './types';

export function saveCreatedEvents(events) {
  return {
    type: 'SAVE_CREATED_EVENTS',
    events,
  };
}
