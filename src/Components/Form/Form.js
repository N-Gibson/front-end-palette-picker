import React, { Component } from 'react';
import '../Form/Form.scss';

export class Form extends Component {
  constructor() {
    super()
  }


  render() {
    return(
      <section className="form-page">
      <div className="form__div--save">
      <input className="form__input--name" placeholder="Name Palette"/>
    <button className="form__button--save">Save Palette</button>
    </div>
      </section>    
      )
  }
}

export default Form