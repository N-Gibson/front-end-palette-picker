import React from 'react';
import { shallow } from 'enzyme';
import Project from './project'

describe('Project', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Project />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})