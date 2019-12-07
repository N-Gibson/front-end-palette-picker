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
      color1: '',
      color2: '',
      color3: '',
      color4: '',
      color5: ''
    }
  }


  render() {
    return(
      <section className="palette-page">
      <Nav />
     
      <Colors />
      </section>
    )
  }
}

export default Palette