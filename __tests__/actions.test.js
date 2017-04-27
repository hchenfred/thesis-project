import { addCount } from '../app/actions/counter';
import { saveEvent, saveStartTime } from '../app/actions/event';
import { getUserProfile } from '../app/actions/user';

describe('addCount', () => {
  it('should have a type of "ADD_COUNT"', () => {
    expect(addCount().type).toEqual('ADD_COUNT');
  });
});

describe('Event actions', () => {
  it('should create an action to save event', () => {
    const payload = {
      date: '2017-5-10',
      name: 'LA trip',
    };
    const expectedAction = {
      type: 'SAVE_EVENT',
      payload,
    }
    expect(saveEvent(payload)).toEqual(expectedAction);
  });

  it('should create an action to save event start time', () => {
    const time = '08-57-00';
    const expectedAction = {
      type: 'SAVE_START_TIME',
      time,
    }
    expect(saveStartTime(time)).toEqual(expectedAction);
  }); 
});

describe('User actions', () => {
  it('should create an action to save a uses', () => {
    const payload = {
      name: 'Huan',
      email: 'huan@gmail.com',
    };
    const expectedAction = {
      type: 'GET_USER_PROFILE',
      payload,
    }
    expect(getUserProfile(payload)).toEqual(expectedAction);
  });
});
