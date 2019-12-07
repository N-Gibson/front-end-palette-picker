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


  render() {
    return(
      <section className="palette-page">
         <h4 className="title">Palette Picker</h4>
      <Nav />
     
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