import React, { Component } from 'react';
import Form from '../Form/Form';
import Nav from '../Nav/Nav';
import Colors from '../Colors/Colors';
import '../Palette/Palette.scss';
import { Route } from 'react-router-dom';

export class Palette extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      color1: {hex: '#818479', isLocked: false},
      color2: {hex: '#B5CBB7', isLocked: false},
      color3: {hex: '#D2E4C4', isLocked: false},
      color4: {hex: '#E4E9B2', isLocked: false},
      color5: {hex: '#E7E08B', isLocked: false}
    }
  }

  handleNameChange = (e) => {
    console.log('running')
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


  render() {
    return(
      <section className="palette-page">
         <h4 className="title">Palette Picker</h4>
      <Nav generateColor = {this.generateColor} name={this.state.name} handleNameChange={this.handleNameChange}/>
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