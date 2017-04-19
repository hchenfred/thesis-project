import { addCount } from '../app/actions/counter';
import { saveEvent } from '../app/actions/event';

describe('addCount', () => {
  it('should have a type of "ADD_COUNT"', () => {
    expect(addCount().type).toEqual('ADD_COUNT');
  });
});

describe('saveEvent', () => {
  it('should have a type of "SAVE_EVENT"', () => {
    expect(saveEvent().type).toEqual('SAVE_EVENT');
  });
});
