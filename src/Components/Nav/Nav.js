import React, { Component } from 'react';
import Form from '../Form/Form';
import '../Nav/Nav.scss'


export const Nav = (props) => {
  return(
    <section className="nav-page">
    <button className="nav__button--show">Show Palettes</button>
    <div className="nav__div--gen">
    <h1>Project Name</h1>
    <button onClick={props.generateColor}>Generate</button>
    </div>
    <Form />
    </section>
  )
}

export default Nav;