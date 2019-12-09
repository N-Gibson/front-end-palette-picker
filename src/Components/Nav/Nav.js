import React, { Component } from 'react';
import Form from '../Form/Form';
import '../Nav/Nav.scss';



export const Nav = (props) => {
  const {name, handleNameChange, savePalette} = props
  return(
    <section className="nav-page">
    <button className="nav__button--show">Show Palettes</button>
    <div className="nav__div--gen">
    <h1 className="nav__name">Project Name</h1>
    <button onClick={props.generateColor} className="nav__button--generate">Generate</button>
    </div>
    <Form props={props} handleNameChange={handleNameChange} savePalette={savePalette}/>
    </section>
  )
}

export default Nav;