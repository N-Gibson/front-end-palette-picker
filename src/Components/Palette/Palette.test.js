import React from 'react';
import { shallow } from 'enzyme';
import Palette from './Palette'

describe('Palette', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Palette currentProject={'current'} />);

    wrapper.setState({
      name: '',
      palettes: [],
      currentProjectId: 0,
      color1: {hex: '#818479', isLocked: false},
      color2: {hex: '#B5CBB7', isLocked: false},
      color3: {hex: '#D2E4C4', isLocked: false},
      color4: {hex: '#E4E9B2', isLocked: false},
      color5: {hex: '#E7E08B', isLocked: false},
      error: '',
    })
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should update name state when handleNameChange is called', () => {
    let mockEventTarget = {
      target: {value: 'new name!'}
    }

    wrapper.instance().handleNameChange(mockEventTarget)

    expect(wrapper.state('name')).toEqual('new name!')
  })

})