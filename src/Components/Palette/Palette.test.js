import React from 'react';
import { shallow } from 'enzyme';
import Palette from './Palette';
import '../src/apiCalls'

jest.mock('../../apiCalls')

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

  it('should call generateColor when generate button is clicked', () => {
    let mockGenerateColor = jest.fn()

    wrapper.find('.nav__button--generate').simulate('click'); mockGenerateColor();
    expect(mockGenerateColor).toHaveBeenCalled()
  })

  it('should call generateRandomColor when generateColor is called', () => {
    let mockGenerateRandomColor = jest.fn()
    mockGenerateRandomColor()

    wrapper.instance().generateColor()
    expect(mockGenerateRandomColor).toHaveBeenCalled()
  })

  it('should update and toggle state when lockColor is called', () => {
    expect(wrapper.state('color1')).toEqual({hex: '#818479', isLocked: false })
    wrapper.instance().lockColor()
    expect(wrapper.state('color1')).toEqual({ hex: '#818479', isLocked: true })

    expect(wrapper.state('color1')).toEqual({hex: '#818479', isLocked: true })
    wrapper.instance().lockColor()
    expect(wrapper.state('color1')).toEqual({ hex: '#818479', isLocked: false })
  })

  it('should call postPalette when savePalette is called', () => {
    wrapper.instance().savePalette(postPalette())

    expect(postPalette).toHaveBeenCalled()
  })

  it('should reset state of name after savePalette is called', () => {
    wrapper.instance().savePalette()

    expect(wrapper.state('name')).toEqual('')
  })

})
