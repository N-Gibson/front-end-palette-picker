import React, { Component } from 'react';
import Projects from './Projects/projects';
import { Route } from 'react-router-dom';
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
      <Route exact path='/projects' render={() => <Projects />}/>
      </div>
    );
  }
}

export default App;
