import React, { Component } from 'react';
import Projects from './Components/Projects/projects';
import { Route } from 'react-router-dom';
import './App.css';
import Palette from './Components/Palette/palette'

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
      <Route exact path='/' render={() => <Projects />}/>
      <Route exact path='/palettes/:id' render={() => <Palette />} />

      </div>
    );
  }
}

export default App;
