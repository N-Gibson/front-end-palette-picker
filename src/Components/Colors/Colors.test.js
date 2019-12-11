import React from 'react';
import { shallow } from 'enzyme';
import Colors from './Colors'

describe('Colors', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Colors props={{color1:{hex:'1'}, color2:{hex:'2'}, color3: {hex:'3'}, color4: {hex: '4'}, color5: {hex: '5'}} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})