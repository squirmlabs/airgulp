import React from 'react';
import { AudioAnaylzer } from '../AudioAnaylzer';
import { shallow } from 'enzyme';

describe('AudioAnaylzer', () => {
  test('renders AudioAnaylzer component correctly', () => {
    const wrapper = shallow(<AudioAnaylzer id="HAuXJVI_bUs" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders null if id in AudioAnaylzer component not specified', () => {
    const wrapper = shallow(<AudioAnaylzer />);
    expect(wrapper).toMatchSnapshot();
  });
});
