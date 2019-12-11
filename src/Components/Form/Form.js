import React, { Component } from 'react';
import '../Form/Form.scss';


export class Form extends Component {
  constructor(props) {
    super()
    this.props= props
  }

  render() {
   const {handleNameChange, savePalette} = this.props
    return(
      <section className="form-page">
        <div className="form__div--save">
          <input className="form__input--name" placeholder="Name Palette" onChange={handleNameChange}/>
          <button className="form__button--save" onClick={savePalette}>Save Palette</button>
        </div>
      </section>    
      )
  }
}

export default Form