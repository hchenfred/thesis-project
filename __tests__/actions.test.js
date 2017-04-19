import { addCount } from '../app/actions/counter';

describe('changeLocation', () => {
  it('should have a type of "ADD_COUNT"', () => {
    expect(addCount().type).toEqual('ADD_COUNT');
  });
});