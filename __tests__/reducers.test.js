import * as eventReducer from '../app/reducers/event';

describe('eventReducers', () => {
  it('should save date', () => {
     expect(
      eventReducer.event({},  { type: 'SAVE_DATE', date: '2017-4-18' })
    ).toEqual(
      {
        date: '2017-4-18',
      }
    )
  });

});