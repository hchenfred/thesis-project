import 'react-native';
import React from 'react';
import Index from '../index.android.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

const initialState = {event: {name: 'hi'}};
const mockStore = configureStore();
let store;
let container;

it('renders correctly', () => {
  store = mockStore(initialState);
  const tree = renderer.create(
    <Index store={store}/>
  );
});
