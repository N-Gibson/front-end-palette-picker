import React from 'react';
import { shallow } from 'enzyme';
import App from './App'

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);

    wrapper.setState({
      error: '',
      paletteInfo: [],
      currentProject: ''
    })
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update the palette information', () => {
    expect(wrapper.state('paletteInfo')).toEqual([])
    wrapper.instance().handleInfo([
      {hex: '#fff', name: 'dog'},
      {hex: '#000', name: 'bob'},
      {hex: '#fff', name: 'fred'}
    ])
    expect(wrapper.state('paletteInfo')).toEqual([
      {hex: '#fff', name: 'dog'},
      {hex: '#000', name: 'bob'},
      {hex: '#fff', name: 'fred'}
    ])
  });

  it('should update state when handleProject is called', () => {
    expect(wrapper.state('currentProject')).toEqual('')

    wrapper.instance().handleProject('a new project')

    expect(wrapper.state('currentProject')).toEqual('a new project')
  })
});