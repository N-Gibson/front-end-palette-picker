import React from 'react';
import { shallow } from 'enzyme';
import AllPalettes from './AllPalettes'

describe('All Palettes', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AllPalettes palettes={[{hex:'#333', id:1}, {hex: '#444'}]} />);

  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})