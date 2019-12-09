import React, { Component } from 'react';
import '../Form/Form.scss';
import {postPalette} from '../../apiCalls'

export class Form extends Component {
  constructor() {
    super()
  }


  render() {
    console.log('props', this.props)
   const {handleNameChange} = this.props
    return(
      <section className="form-page">
      <div className="form__div--save">
      <input className="form__input--name" placeholder="Name Palette" onChange={handleNameChange}/>
    <button className="form__button--save" >Save Palette</button>
    </div>
      </section>    
      )
  }
}

export default Form