import React, { Component } from 'react';
import Projects from './Projects/projects';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      error: '',
    }
  }

  render() {
    return (
      <div className="App">
        <Projects />
      </div>
    );
  }
}

export default App;
