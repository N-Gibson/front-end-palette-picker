import React, { Component } from 'react';
import Projects from './Components/Projects/projects';
import { Route } from 'react-router-dom';
import './App.css';
import Palette from './Components/Palette/palette'
import AllPalettes from './Components/AllPalettes/AllPalettes';
import {getPalettes, deletePalette} from '../src/apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      error: '',
      paletteInfo: [],
      currentProject: ''
    }
  }
  
  handleInfo = (palettes) => {
    this.setState({ paletteInfo: palettes  })
  }

  handleProject = (project) => {
    this.setState({ currentProject: project})
  }

  removePalette = async (id, project_id) => {
    await deletePalette(id)
    const palettes = await getPalettes();
    const correctPalettes = palettes.filter(palette => palette.project_id === project_id);
    this.setState({ paletteInfo: correctPalettes });
  }

  render() {
    return (
      <div className="App">
      <Route exact path='/' render={() => <Projects handleProject={this.handleProject} />}/>
      <Route exact path='/project/:id' render={({ match }) => {
        const { id } = match.params;
        return <Palette currentProject={this.state.currentProject}   handleInfo={this.handleInfo} id={id}/>
      }} />
      <Route exact path='/palettes/:id' render={() => {
        return <AllPalettes currentProject={this.state.currentProject} removePalette={this.removePalette} palettes={this.state.paletteInfo}/>
      }}/>
      </div>
    );
  }
}

export default App;
