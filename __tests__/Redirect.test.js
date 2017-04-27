import React from 'react';
import Redirect from '../app/screens/Redirect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

// Note: test renderer must be required after react-native.
import configureStore from 'redux-mock-store';

const initialState = {
  event: {name: 'hi'},
  user: {name: 'huan'},
};
const mockStore = configureStore(initialState);
const store = mockStore(initialState);

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}><Redirect /></Provider>
  );
});
