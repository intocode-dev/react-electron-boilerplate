import React from 'react';
import App from '../app';

test('render app', () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toMatchSnapshot();
});
