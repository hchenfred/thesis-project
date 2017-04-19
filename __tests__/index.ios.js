import 'react-native';
import React from 'react';
import Event from '../app/screens/Event';
import { Provider } from 'react-redux';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

const initialState = {event: {name: 'hi'}};
const mockStore = configureStore(initialState);
const store = mockStore(initialState);

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}><Event /></Provider>
  );
});
