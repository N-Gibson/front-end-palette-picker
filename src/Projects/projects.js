import React, { Component } from 'react';
import { getProjects, postProject } from '../apiCalls';
import Project from '../Project/project';
import './projects.scss';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: '',
      projects: [],
    }
  }

  async componentDidMount() {
    try {
      const projects = await getProjects();
      this.setState({ projects: projects })
    } catch (error) {
      this.setState({ error: error })
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClick = async () => {
    if(this.state.projectName) {
      postProject(this.state.projectName);
      this.setState({ projectName: ''});
    }
  }

  render() {
  const projects = this.state.projects.map(project => <Project key={project.id} id={project.id} name={project.name} changeName={() => this.handleChange()}/>);
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
            onClick={this.handleClick}>
            Save
          </button>
        </div>
        <div className='project-display'>
          <p className='project-prompt'>Select a project to view palettes</p>
          {projects}
        </div>
      </main>
    )
  }
}

export default Projects