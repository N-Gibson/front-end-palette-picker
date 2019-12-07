import React, { Component } from 'react';
import Project from './Project/project';
import { getProjects } from './apiCalls';
import './App.css';
import Palette from './Components/Palette/palette'

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
    console.log(this.state.projects)
    return (
      <div className="App">
        {/* <Project /> */}
        {/* <Route exact path='/palette' render={() => 
          <Palette key={Date.now()} />}/> */}
          <Palette />
      </div>
    );
  }
}

export default App;
