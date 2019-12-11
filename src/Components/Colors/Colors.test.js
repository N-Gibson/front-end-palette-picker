import React from 'react';
import { shallow } from 'enzyme';
import Colors from './Colors'

describe('Colors', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Colors 
                        color1={{hex:'2'}}
                        color2={{hex:'2'}}
                        color3={{hex:'2'}}
                        color4={{hex:'2'}}
                        color5={{hex:'2'}}

                />)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  
})