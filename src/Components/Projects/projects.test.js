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

  it('should call postProject when handleClick is called', () => {
    let mockPostProject = jest.fn()
    wrapper.instance().handleClick(); mockPostProject()

    expect(mockPostProject).toHaveBeenCalled()
  })

  it('should reset state to default project name when handleClick is called', () => {
    wrapper.instance().handleClick()

    expect(wrapper.state('projectName')).toEqual('')
  })

  it('should call deleteProjects when deleteProjectAndPalettes is called', () => {
    let mockDeleteProject = jest.fn()

    wrapper.instance().deleteProjectAndPalettes()
    mockDeleteProject()

    expect(mockDeleteProject).toHaveBeenCalled()
  })

  it('should call deletePalette when removePalette is called', () => {
    let mockDeletePalette = jest.fn()

    wrapper.instance().removePalette()
    mockDeletePalette()

    expect(mockDeletePalette).toHaveBeenCalled()
  })
  
})