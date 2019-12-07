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
      color1: '#818479',
      color2: '#B5CBB7',
      color3: '#D2E4C4',
      color4: '#E4E9B2',
      color5: '#E7E08B'
    }
  }

  generateColor = () => {
    let color1 = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
    this.setState({ color1: color1})
    let color2 = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
    this.setState({ color2: color2})
    let color3 = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
    this.setState({ color3: color3})
    let color4 = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
    this.setState({ color4: color4})
    let color5 = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
    this.setState({ color5: color5})

  }


  render() {
    return(
      <section className="palette-page">
         <h4 className="title">Palette Picker</h4>
      <Nav generateColor = {this.generateColor}/>
     
      <Colors 
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