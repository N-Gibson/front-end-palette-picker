import React, { Component } from 'react';
import '../Colors/Colors.scss';
import lockIcon from '../../images/locked-icon.png'

export const Colors = (props) => {
  const {color1, color2, color3, color4, color5} = props;

  return(
    <section className="colors-page">
      <div className="color div__color--1" style={{backgroundColor: color1}}>
        <img src={lockIcon}/></div>
      <div className="color div__color--2" style={{backgroundColor: color2}} >
      <img src={lockIcon}/>
      </div>
        <div className="color div__color--3" style={{backgroundColor: color3}}>
        <img src={lockIcon}/>
        </div>
        <div className="color div__color--4" style={{backgroundColor: color4}}>
        <img src={lockIcon}/>
        </div>
        <div className="color div__color5" style={{backgroundColor: color5}}>
        <img src={lockIcon}/>
        </div>
    </section>
  )
}

export default Colors