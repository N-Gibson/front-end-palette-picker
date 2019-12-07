import React, { Component } from 'react';
import './project.scss';

class Project extends Component {
  constructor() {
    super();
    this.state = {
      projectName: '',
      project1: '',
      project2: '',
      project3: '',
      project4: '',
      project5: '',
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClick = () => {
    // Change the inner text of the project to the value of state.
      // Identify which one to change & select that one.
    this.setState({ projectName: ''})
  }

  render() {   
    console.log(this.state.projectName)
    return(
      <main>
        <h1>Palette Picker</h1>
        <div className='project-inputs'>
          <input 
            className='project-input' 
            type='text' 
            placeholder='New Project Name' 
            name='projectName' 
            value={this.state.projectName} 
            onChange={this.handleChange}>
          </input>
          <button 
            className='project-button' 
            type='button'
            onClick={this.handleClick}>
            Save
          </button>
        </div>
        <div className='project-display'>
          <p className='project-prompt'>Select a project to view palettes</p>
          <section 
            className='project' 
            id='project_1'>
            Project 1
          </section>
          <section 
            className='project' 
            id='project_2'>
            Project 2
          </section>
          <section 
            className='project' 
            id='project_3'>
            Project 3
          </section>
          <section 
            className='project' 
            id='project_4'>
            Project 4
          </section>
          <section 
            className='project' 
            id='project_5'>
            Project 5
          </section>
          <section 
            className='project' 
            id='project_6'>
            Project 6
          </section>
        </div>
      </main>
    )
  }
}

export default Project