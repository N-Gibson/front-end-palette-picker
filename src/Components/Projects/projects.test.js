import React from 'react';
import { shallow } from 'enzyme';
import Projects from './projects'

describe('Projects', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Projects />);

    wrapper.setState({
      projectName: '',
      revisedName: '',
      projects: [],
      error: '',
      palettes: []
    })
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should update state when handleChange is called', () => {
   let mockEventTarget = {
     target: {name: 'whatever', value: 'whatever also'}
   }
    wrapper.instance().handleChange(mockEventTarget)
  })
  
})