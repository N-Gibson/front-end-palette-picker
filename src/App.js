import React, { Component } from 'react';
import Project from './Project/project';
import { getProjects } from './apiCalls';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      error: '',
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

  render() {
    console.log(this.state.projects, 'correct url!!!')
    return (
      <div className="App">
        <Project />
      </div>
    );
  }
}

export default App;
