import React from 'react';
import Redirect from '../app/screens/Redirect';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Redirect />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});