import React, { Component } from 'react';

export class Form extends Component {
  constructor() {
    super()
  }


  render() {
    return(
      <section className="form-page">
      <input placeholder="Name Palette"/>
    <button>Save Palette</button>
      </section>    
      )
  }
}

export default Form