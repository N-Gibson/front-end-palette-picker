import React, { Component } from 'react';
import Projects from './Components/Projects/projects';
import { Route } from 'react-router-dom';
import './App.css';
import Palette from './Components/Palette/palette'
import AllPalettes from './Components/AllPalettes/AllPalettes';
import {deletePalette} from '../src/apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      error: '',
      paletteInfo: [],
    }
  }
  
  handleInfo = (palettes) => {
    this.setState({ paletteInfo: palettes })
  }

  removePalette = (id) => {
    deletePalette(id)
  }

  render() {
    return (
      <div className="App">
      <Route exact path='/' render={() => <Projects />}/>
      <Route exact path='/project/:id' render={({ match }) => {
        const { id } = match.params;
        return <Palette handleInfo={this.handleInfo} id={id}/>
      }} />
      <Route exact path='/palettes/:id' render={() => {
        return <AllPalettes removePalette={this.removePalette} palettes={this.state.paletteInfo}/>
      }}/>
      </div>
    );
  }
}

export default App;
