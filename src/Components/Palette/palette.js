import React, { Component } from 'react';
import Form from '../Form/Form';
// import Nav from '../Nav/Nav';
import Colors from '../Colors/Colors';
import '../Palette/Palette.scss';
import { Route } from 'react-router-dom';
import { postPalette, getPalettes } from '../../apiCalls';
import {Link} from 'react-router-dom';
import '../Nav/Nav.scss'

export class Palette extends Component {
  constructor() {
    super()
    this.state = {
      name: '', 
      palettes: [],
      currentProjectId: 0,
      color1: {hex: '#818479', isLocked: false},
      color2: {hex: '#B5CBB7', isLocked: false},
      color3: {hex: '#D2E4C4', isLocked: false},
      color4: {hex: '#E4E9B2', isLocked: false},
      color5: {hex: '#E7E08B', isLocked: false},
      error: '',
    }
  }

  async componentDidMount() {
    await this.getAllPalettes()
  }

  getAllPalettes = async () => {
    try {
      const palettes = await getPalettes();
      const thesePalettes = palettes.filter(palette => palette.project_id === parseInt(this.props.id));
      this.setState({ palettes: thesePalettes })
      const id = parseInt(this.props.id)
      this.setState({ currentProjectId: id })
    } catch (error) {
      this.setState({ error: error })
    }
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value })
  }

  generateRandomColor = () => {
    return '#'+(Math.random()*0xFFFFFF<<0).toString(16)
  }

  generateColor = () => {
    if(!this.state.color1.isLocked) {
      this.setState(prevState => ({
      color1: {                   
          ...prevState.color1,    
          hex: this.generateRandomColor()
      }
    }))
  }
    this.setState(prevState => ({
      color2: {                   
          ...prevState.color2,    
         hex: this.generateRandomColor()
      }
    }))
    this.setState(prevState => ({
      color3: {                   
          ...prevState.color3,    
          hex: this.generateRandomColor()
      }
   }))
    this.setState(prevState => ({
      color4: {                   
          ...prevState.color4,    
          hex: this.generateRandomColor()
      }
    }))
    this.setState(prevState => ({
      color5: {                   
          ...prevState.color5,    
          hex: this.generateRandomColor()
      }
    }))
  }

  lockColor = () => {
    if(!this.state.color1.isLocked) {
    this.setState(prevState => ({
      color1: {                   
          ...prevState.color1,    
          isLocked: true
      }
  }))
  } else {
    this.setState(prevState => ({
      color1: {                   
          ...prevState.color1,    
          isLocked: false
      }
  }))
  }
  }

  savePalette = () => {
    postPalette(this.state.color1.hex, 
      this.state.color2.hex, 
      this.state.color3.hex, 
      this.state.color4.hex, 
      this.state.color5.hex, 
      this.state.currentProjectId, 
      this.state.name)
    this.setState({ name: ''})
  }


  render() {
    const {handleInfo, currentProject} = this.props
    return(
        <section className="palette-page">
         <h4 className="title">Palette Picker</h4>
      <section className="nav-page">
      <Link to={`/palettes/${this.state.currentProjectId}`} > 
        <button onClick={() => handleInfo(this.state.palettes)} onMouseEnter={this.getAllPalettes} className="nav__button--show">Show Palettes</button>
      </Link>
      <div className="nav__div--gen">
        <h1 className="nav__name">{currentProject.toUpperCase()}</h1>
        <button onClick={this.generateColor} className="nav__button--generate">Generate</button>
      </div>
      <Form props={this.props} handleNameChange={this.handleNameChange} savePalette={this.savePalette}/>
     </section>
      <Colors 
        copyHex={this.copyHex}
        lockColor={this.lockColor}
        color1={this.state.color1}
        color2={this.state.color2}
        color3={this.state.color3}
        color4={this.state.color4}
        color5={this.state.color5}/>
      </section>
    )
  }
}

export default Palette