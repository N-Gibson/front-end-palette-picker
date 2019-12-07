import React, { Component } from 'react';
import Form from '../Form/Form'


export const Nav = () => {
  return(
    <section className="nav-page">
    <button>Show Palettes</button>
    <h1>Project Name</h1>
    <button>Generate</button>
    <Form />
    </section>
  )
}

export default Nav;